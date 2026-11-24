'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function ForgotPasswordForm({ redirectTo }: { redirectTo: string }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setSent(false)
    setLoading(true)

    try {
      const { error: resetError } = await createClient().auth.resetPasswordForEmail(email.trim(), {
        redirectTo,
      })

      if (resetError) {
        setError(resetError.status === 429
          ? 'Terlalu banyak permintaan. Coba lagi beberapa saat lagi.'
          : 'Tautan reset belum dapat dikirim. Periksa alamat email atau coba lagi nanti.')
        return
      }

      setSent(true)
    } catch {
      setError('Tautan reset belum dapat dikirim. Periksa koneksi Anda lalu coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background px-6 py-20">
      <div className="mx-auto max-w-md">
        <p className="text-[0.65rem] uppercase tracking-hairline text-primary/80">Sistem Kedirian</p>
        <h1 className="mt-5 font-serif text-5xl font-light">Reset kata sandi</h1>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          Masukkan email akun admin Anda. Jika alamat tersebut terdaftar, kami akan mengirimkan tautan untuk membuat kata sandi baru.
        </p>
        <form onSubmit={submit} className="mt-10 flex flex-col gap-5">
          <label htmlFor="recovery-email" className="block text-sm">
            Email
            <input
              id="recovery-email"
              required
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full border border-border bg-transparent px-4 py-3 outline-none focus:border-primary"
            />
          </label>
          {error && <p role="alert" className="text-sm text-red-400">{error}</p>}
          {sent && (
            <p role="status" className="text-sm leading-relaxed text-primary">
              Jika email tersebut terdaftar, tautan pemulihan akan segera dikirim. Periksa kotak masuk Anda.
            </p>
          )}
          <button
            disabled={loading}
            className="w-full bg-primary px-4 py-3 text-xs uppercase tracking-widest text-primary-foreground disabled:opacity-50"
          >
            {loading ? 'Mengirim…' : 'Kirim tautan reset'}
          </button>
        </form>
        <Link href="/admin/login" className="mt-6 inline-block text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">
          Kembali ke halaman masuk
        </Link>
      </div>
    </main>
  )
}
