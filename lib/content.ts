import { createClient } from '@/lib/supabase/server'

export type ContentItem = {
  id: string
  type: 'article' | 'case_study'
  slug: string
  title: string
  excerpt: string
  category: string
  content: string[]
  metadata: { number?: string; points?: string[] }
  status: 'draft' | 'published'
  published_at: string | null
  created_at: string
  updated_at: string
}

function normalize(row: Record<string, unknown>): ContentItem {
  return { ...row, content: Array.isArray(row.content) ? row.content as string[] : [], metadata: (row.metadata ?? {}) as ContentItem['metadata'] } as ContentItem
}

export async function getPublishedContent(type: ContentItem['type']) {
  const supabase = await createClient()
  const { data } = await supabase.from('content_items').select('id,type,slug,title,excerpt,category,content,metadata,status,published_at,created_at,updated_at').eq('type', type).eq('status', 'published').order('published_at', { ascending: false })
  return (data ?? []).map(normalize)
}

export async function getPublishedBySlug(type: ContentItem['type'], slug: string) {
  const supabase = await createClient()
  const { data } = await supabase.from('content_items').select('id,type,slug,title,excerpt,category,content,metadata,status,published_at,created_at,updated_at').eq('type', type).eq('slug', slug).eq('status', 'published').maybeSingle()
  return data ? normalize(data) : undefined
}

export async function getAdminContent(type?: ContentItem['type']) {
  const supabase = await createClient()
  let query = supabase.from('content_items').select('id,type,slug,title,excerpt,category,content,metadata,status,published_at,created_at,updated_at').order('updated_at', { ascending: false })
  if (type) query = query.eq('type', type)
  const { data } = await query
  return (data ?? []).map(normalize)
}

export async function getAdminContentById(id: string) {
  const supabase = await createClient()
  const { data } = await supabase.from('content_items').select('*').eq('id', id).maybeSingle()
  return data ? normalize(data) : undefined
}

export async function requireAdmin() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null
  const { data: admin } = await supabase.from('admin_profiles').select('user_id').eq('user_id', user.id).maybeSingle()
  return admin ? user : null
}

export function formatDate(value: string | null) {
  if (!value) return 'Draft'
  return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(value))
}
