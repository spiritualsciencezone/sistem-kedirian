'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  async function submit(event: FormEvent) { event.preventDefault(); setLoading(true); setError(''); const { error } = await createClient().auth.signInWithPassword({ email, password }); if (error) { setError('Email atau kata sandi tidak valid.'); setLoading(false); return }; router.push('/admin') }
  return <main className="min-h-screen bg-background px-6 py-20"><div className="mx-auto max-w-md"><p className="text-[0.65rem] uppercase tracking-hairline text-primary/80">Sistem Kedirian</p><h1 className="mt-5 font-serif text-5xl font-light">Admin masuk</h1><p className="mt-5 text-sm leading-relaxed text-muted-foreground">Kelola artikel dan studi kasus yang diterbitkan.</p><form onSubmit={submit} className="mt-10 space-y-5"><label className="block text-sm">Email<input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full border border-border bg-transparent px-4 py-3 outline-none focus:border-primary" /></label><label className="block text-sm">Kata sandi<input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-2 w-full border border-border bg-transparent px-4 py-3 outline-none focus:border-primary" /></label>{error && <p role="alert" className="text-sm text-red-400">{error}</p>}<button disabled={loading} className="w-full bg-primary px-4 py-3 text-xs uppercase tracking-widest text-primary-foreground disabled:opacity-50">{loading ? 'Memeriksa…' : 'Masuk'}</button></form></div></main>
}
