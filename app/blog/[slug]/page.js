import { blogPosts } from '@/data/blogPosts';
import Link from 'next/link';
import ClientBlogPost from '@/components/ClientBlogPost';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return { title: 'Yazı bulunamadı' };

  return {
    title: `${post.title} — ${post.country}`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: `${post.title} — ${post.country}`,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="section container" style={{ textAlign: 'center' }}>
        <h2>Yazı bulunamadı. / Post not found.</h2>
        <Link href="/blog" className="btn btn-primary" style={{ marginTop: '2rem' }}>Blog</Link>
      </div>
    );
  }

  return <ClientBlogPost post={post} />;
}
