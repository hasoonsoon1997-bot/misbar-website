import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { blogData } from '@/lib/blogData';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogData[params.slug];
  if (!post) return { title: 'غير موجود' };
  
  return {
    title: `${post.title} | مدونة مسبار`,
    description: post.description,
    alternates: { canonical: `https://misbar.de/blog/${params.slug}` },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogData[params.slug];
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#05121F] text-white pt-24 pb-16" dir="rtl">
      <div className="container-x mx-auto max-w-3xl px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 mb-8">
          <ArrowLeft className="w-4 h-4" /> العودة للرئيسية
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-400 mb-8">{post.date}</p>
        
        <div 
          className="prose prose-invert prose-yellow max-w-none text-gray-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <h3 className="text-2xl font-bold mb-4">هل تحتاج قطعة غيار أصلية؟</h3>
          <Link href="/#rfq" className="inline-flex items-center justify-center rounded-xl bg-yellow-500 px-8 py-3 text-lg font-bold text-black hover:bg-yellow-400 transition-all">
            اطلب عرض سعر
          </Link>
        </div>
      </div>
    </main>
  );
}
