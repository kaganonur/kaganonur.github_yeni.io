/** @type {import('next').NextConfig} */
const nextConfig = {
  // Türkiye Ekonomisi sayfaları public/turkiye-ekonomisi/ altında statik HTML.
  // Bu rewrite'lar .html uzantısı olmadan temiz adreslerle açılmalarını sağlıyor.
  // Dizi biçiminde dönen rewrites "afterFiles" aşamasında çalışır: gerçek bir dosya
  // varsa (ör. /turkiye-ekonomisi/bulgu-01.html) doğrudan o sunulur, yoksa buraya düşer.
  async rewrites() {
    return [
      { source: '/turkiye-ekonomisi', destination: '/turkiye-ekonomisi/index.html' },
      { source: '/turkiye-ekonomisi/', destination: '/turkiye-ekonomisi/index.html' },
      { source: '/turkiye-ekonomisi/:sayfa', destination: '/turkiye-ekonomisi/:sayfa.html' },
    ];
  },
};

export default nextConfig;
