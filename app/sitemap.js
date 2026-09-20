import { blogPosts } from '@/data/blogPosts';

const SITE_URL = 'https://kaganonur.vercel.app';

// Türkiye Ekonomisi bölümü public/turkiye-ekonomisi/ altında statik HTML olarak duruyor,
// yani Next'in sayfa ağacında görünmüyor. Sitemap'e elle eklenmesi gerekiyor.
const EKONOMI_SAYFALARI = [
  '/turkiye-ekonomisi',
  '/turkiye-ekonomisi/bulgu-01',
  '/turkiye-ekonomisi/bulgu-02',
  '/turkiye-ekonomisi/bulgu-03',
  '/turkiye-ekonomisi/bulgu-04',
  '/turkiye-ekonomisi/gezgin',
];

export default function sitemap() {
  const now = new Date();

  const posts = (blogPosts || []).map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.5,
  }));

  const ekonomi = EKONOMI_SAYFALARI.map((yol, i) => ({
    url: `${SITE_URL}${yol}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: i === 0 ? 0.9 : 0.7,
  }));

  return [
    { url: SITE_URL, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...ekonomi,
    ...posts,
  ];
}
