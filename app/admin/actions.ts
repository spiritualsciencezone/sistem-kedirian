'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { requireAdmin } from '@/lib/content'

export async function saveContent(formData: FormData) {
  const user = await requireAdmin(); if (!user) redirect('/admin/login')
  const type = String(formData.get('type')) as 'article' | 'case_study'; const id = String(formData.get('id') || '')
  const title = String(formData.get('title') || '').trim(); const slug = String(formData.get('slug') || '').trim(); const excerpt = String(formData.get('excerpt') || '').trim(); const category = String(formData.get('category') || '').trim(); const content = String(formData.get('content') || '').split('\n\n').map((p) => p.trim()).filter(Boolean); const status = String(formData.get('status') || 'draft') as 'draft' | 'published'; const metadata = { number: String(formData.get('number') || ''), points: String(formData.get('points') || '').split('\n').map((p) => p.trim()).filter(Boolean) }
  if (!title || !slug || !excerpt || !category || !content.length) throw new Error('Lengkapi semua field wajib.')
  const supabase = await createClient(); const payload = { type, title, slug, excerpt, category, content, metadata, status, published_at: status === 'published' ? new Date().toISOString() : null, updated_by: user.id, ...(id ? {} : { created_by: user.id }) }
  const result = id ? await supabase.from('content_items').update(payload).eq('id', id) : await supabase.from('content_items').insert(payload)
  if (result.error) throw new Error(result.error.code === '23505' ? 'Slug sudah digunakan.' : 'Gagal menyimpan konten.')
  revalidatePath('/artikel'); revalidatePath('/studi-kasus'); revalidatePath(`/artikel/${slug}`); revalidatePath(`/studi-kasus/${slug}`); redirect(`/admin/${type === 'article' ? 'artikel' : 'studi-kasus'}`)
}

export async function deleteContent(formData: FormData) { const user = await requireAdmin(); if (!user) redirect('/admin/login'); const id = String(formData.get('id')); const supabase = await createClient(); await supabase.from('content_items').delete().eq('id', id); revalidatePath('/artikel'); revalidatePath('/studi-kasus'); redirect('/admin') }

export async function signOut() { const supabase = await createClient(); await supabase.auth.signOut(); redirect('/admin/login') }
