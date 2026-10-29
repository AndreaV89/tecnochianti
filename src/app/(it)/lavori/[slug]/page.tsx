import type { Metadata } from 'next'
import ProjectView, { getProjectMetadata, getProjectStaticParams } from '@/views/Project/ProjectView'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getProjectStaticParams()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  return getProjectMetadata('it', slug)
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  return <ProjectView locale="it" slug={slug} />
}
