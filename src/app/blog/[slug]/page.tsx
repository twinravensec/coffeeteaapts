import React from 'react';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '../../../data/blog';
import { BlogPostTemplate } from '../../../components/blog/BlogPostTemplate';

interface BlogSlugPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams(): { slug: string }[] {
  const slugs = BLOG_POSTS.map((post) => ({ slug: post.slug }));
  if (!slugs.some((item) => item.slug === 'template')) {
    slugs.push({ slug: 'template' });
  }
  return slugs;
}

export async function generateMetadata({ params }: BlogSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Publication Not Found — Muninn Blog | Coffee, Tea & APTs'
    };
  }

  return {
    title: `${post.title} — Muninn Blog | Coffee, Tea & APTs`,
    description: post.summary,
    ...(post.status !== 'published'
      ? { robots: { index: false, follow: false } }
      : {})
  };
}

export default async function BlogSlugPage({ params }: BlogSlugPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug) || null;
  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.status === 'published' && p.slug !== slug
  ).slice(0, 2);

  return <BlogPostTemplate post={post} relatedPosts={relatedPosts} />;
}
