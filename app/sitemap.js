import { blogPosts } from '@/data/blogPosts';

const SITE_URL = 'https://kaganonur.vercel.app';

export default function sitemap() {
  const now = new Date();

  const posts = (blogPosts || []).map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.5,
  }));

  return [
    { url: SITE_URL, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...posts,
  ];
}
