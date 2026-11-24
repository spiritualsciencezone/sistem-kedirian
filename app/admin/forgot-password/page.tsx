import { headers } from 'next/headers'
import type { Metadata } from 'next'
import ForgotPasswordForm from './forgot-password-form'

export const metadata: Metadata = {
  title: 'Reset kata sandi — Sistem Kedirian',
  description: 'Minta tautan untuk mengatur ulang kata sandi admin Sistem Kedirian.',
}

export default async function ForgotPasswordPage() {
  const requestHeaders = await headers()
  const forwardedHost = requestHeaders.get('x-forwarded-host')
  const host = forwardedHost ?? requestHeaders.get('host') ?? 'localhost:3000'
  const protocol = requestHeaders.get('x-forwarded-proto') ?? 'http'
  const currentOrigin = `${protocol}://${host}`
  const productionCallback = 'https://sistem-kedirian.vercel.app/auth/callback'
  const callbackUrl = process.env.VERCEL_ENV === 'production'
    ? productionCallback
    : process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ?? `${currentOrigin}/auth/callback`
  const redirectTo = new URL(callbackUrl)
  redirectTo.searchParams.set('next', '/admin/reset-password')

  return <ForgotPasswordForm redirectTo={redirectTo.toString()} />
}
