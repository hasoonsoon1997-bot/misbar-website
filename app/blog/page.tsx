import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { blogData } from '@/lib/blogData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'مدونة مسبار | دليلك لقطع غيار السيارات الألمانية',
  description: 'مقالات وأدلة شاملة حول صيانة وقطع غيار سيارات مرسيدس، BMW، أودي، وبورش. نصائح الخبراء من ألمانيا.',
  alternates: { canonical: 'https://misbar.de/blog' },
};

export default function BlogIndex() {
  const posts = Object.entries(blogData).map(([slug, post]: [string, any]) => ({ slug, ...post }));

  return (
    <main className="min-h-screen bg-[#05121F] text-white pt-24 pb-16" dir="rtl">
      <div className="container-x mx-auto max-w-4xl px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 mb-8">
          <ArrowLeft className="w-4 h-4" /> العودة للرئيسية
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">مدونة مسبار</h1>
        <p className="text-xl text-gray-400 mb-12">أدلة ونصائح من خبراء قطع غيار السيارات الألمانية.</p>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-yellow-500/50 transition-colors">
              <h2 className="text-2xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">{post.title}</h2>
              <p className="text-gray-400 mb-4 line-clamp-3">{post.description}</p>
              <div className="flex items-center gap-2 text-yellow-500 font-medium">
                اقرأ المقال <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
