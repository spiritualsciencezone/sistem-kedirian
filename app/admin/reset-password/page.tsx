import type { Metadata } from 'next'
import ResetPasswordForm from './reset-password-form'

export const metadata: Metadata = {
  title: 'Buat kata sandi baru — Sistem Kedirian',
  description: 'Buat kata sandi baru untuk akun admin Sistem Kedirian.',
}

export default function ResetPasswordPage() {
  return <ResetPasswordForm />
}
