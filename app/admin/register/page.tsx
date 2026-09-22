'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function AdminRegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmation, setConfirmation] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    if (password.length < 6) {
      setError('Kata sandi minimal 6 karakter.')
      return
    }
    if (password !== confirmation) {
      setError('Konfirmasi kata sandi tidak cocok.')
      return
    }

    setLoading(true)
    const supabase = createClient()
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || window.location.origin
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${siteUrl}/auth/callback?next=/admin/login`,
      },
    })

    if (signUpError) {
      setError(signUpError.message.toLowerCase().includes('already') ? 'Email tersebut sudah terdaftar.' : 'Pendaftaran gagal. Periksa kembali data Anda.')
      setLoading(false)
      return
    }

    if (!data.user || !data.session) {
      setError('Pendaftaran berhasil. Silakan konfirmasi email Anda, lalu masuk kembali untuk menyelesaikan akses admin.')
      setLoading(false)
      return
    }

    const { error: profileError } = await supabase.from('admin_profiles').insert({ user_id: data.user.id })
    if (profileError && profileError.code !== '23505') {
      setError('Akun dibuat, tetapi akses admin belum berhasil disiapkan.')
      setLoading(false)
      return
    }

    router.push('/admin')
  }

  return (
    <main className="min-h-screen bg-background px-6 py-20">
      <div className="mx-auto max-w-md">
        <p className="text-[0.65rem] uppercase tracking-hairline text-primary/80">Sistem Kedirian</p>
        <h1 className="mt-5 font-serif text-5xl font-light">Daftar admin</h1>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">Buat akun untuk mengelola artikel dan studi kasus yang diterbitkan.</p>
        <form onSubmit={submit} className="mt-10 space-y-5">
          <label className="block text-sm">Email<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full border border-border bg-transparent px-4 py-3 outline-none focus:border-primary" /></label>
          <label className="block text-sm">Kata sandi<input required minLength={6} type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full border border-border bg-transparent px-4 py-3 outline-none focus:border-primary" /></label>
          <label className="block text-sm">Konfirmasi kata sandi<input required minLength={6} type="password" value={confirmation} onChange={(event) => setConfirmation(event.target.value)} className="mt-2 w-full border border-border bg-transparent px-4 py-3 outline-none focus:border-primary" /></label>
          {error && <p role="alert" className="text-sm text-red-400">{error}</p>}
          <button disabled={loading} className="w-full bg-primary px-4 py-3 text-xs uppercase tracking-widest text-primary-foreground disabled:opacity-50">{loading ? 'Mendaftarkan…' : 'Daftar admin'}</button>
        </form>
        <p className="mt-6 text-sm text-muted-foreground">Sudah memiliki akun? <Link href="/admin/login" className="text-foreground underline underline-offset-4">Masuk</Link></p>
      </div>
    </main>
  )
}
