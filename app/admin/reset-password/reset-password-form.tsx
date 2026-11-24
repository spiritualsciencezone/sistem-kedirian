'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function ResetPasswordForm() {
  const router = useRouter()
  const [recoveryReady, setRecoveryReady] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmation, setConfirmation] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const supabase = createClient()
    const isRecoveryCallback = new URLSearchParams(window.location.search).get('recovery') === '1'

    if (isRecoveryCallback) setRecoveryReady(true)

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') setRecoveryReady(true)
    })

    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (!success) return

    const timeout = window.setTimeout(() => {
      router.replace('/admin/login?password-reset=success')
    }, 1800)

    return () => window.clearTimeout(timeout)
  }, [router, success])

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    if (password.length < 8) {
      setError('Kata sandi harus memiliki minimal 8 karakter.')
      return
    }

    if (password !== confirmation) {
      setError('Konfirmasi kata sandi tidak cocok.')
      return
    }

    setLoading(true)
    const supabase = createClient()
    const { error: updateError } = await supabase.auth.updateUser({ password })

    if (updateError) {
      setError('Kata sandi tidak dapat diperbarui. Tautan mungkin sudah kedaluwarsa atau kata sandi belum memenuhi kebijakan keamanan.')
      setLoading(false)
      return
    }

    await supabase.auth.signOut({ scope: 'local' })
    setSuccess(true)
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-background px-6 py-20">
      <div className="mx-auto max-w-md">
        <p className="text-[0.65rem] uppercase tracking-hairline text-primary/80">Sistem Kedirian</p>
        <h1 className="mt-5 font-serif text-5xl font-light">Buat kata sandi baru</h1>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          Pilih kata sandi baru untuk akun admin Anda.
        </p>

        {success ? (
          <p role="status" className="mt-10 text-sm leading-relaxed text-primary">
            Kata sandi berhasil diperbarui. Anda akan diarahkan ke halaman masuk.
          </p>
        ) : recoveryReady ? (
          <form onSubmit={submit} className="mt-10 flex flex-col gap-5">
            <label htmlFor="new-password" className="block text-sm">
              Kata sandi baru
              <input
                id="new-password"
                required
                minLength={8}
                autoComplete="new-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full border border-border bg-transparent px-4 py-3 outline-none focus:border-primary"
              />
            </label>
            <label htmlFor="confirm-password" className="block text-sm">
              Konfirmasi kata sandi
              <input
                id="confirm-password"
                required
                minLength={8}
                autoComplete="new-password"
                type="password"
                value={confirmation}
                onChange={(event) => setConfirmation(event.target.value)}
                className="mt-2 w-full border border-border bg-transparent px-4 py-3 outline-none focus:border-primary"
              />
            </label>
            {error && <p role="alert" className="text-sm text-red-400">{error}</p>}
            <button
              disabled={loading}
              className="w-full bg-primary px-4 py-3 text-xs uppercase tracking-widest text-primary-foreground disabled:opacity-50"
            >
              {loading ? 'Menyimpan…' : 'Simpan kata sandi baru'}
            </button>
          </form>
        ) : (
          <div className="mt-10 flex flex-col gap-4">
            <p role="status" className="text-sm leading-relaxed text-muted-foreground">
              Tautan pemulihan tidak valid atau sudah kedaluwarsa. Minta tautan reset yang baru untuk melanjutkan.
            </p>
            <Link href="/admin/forgot-password" className="text-sm text-primary underline underline-offset-4">
              Minta tautan reset baru
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
