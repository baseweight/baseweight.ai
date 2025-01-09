import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPostBySlug } from '@/components/posts';
import { remark } from 'remark';
import html from 'remark-html';

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug);
    const processedContent = await remark().use(html).process(post.content);
    const contentHtml = processedContent.toString();
  
    return (
    <>
    <Header />
      <div className="max-w-4xl mx-auto p-8">
        {post.coverImage && (
          <div className="relative w-full h-[400px] mb-8">
            <Image
              src={post.coverImage}
              alt={`Cover image for ${post.title}`}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        )}
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-8">{post.date}</p>
        <p className="text-gray-600 mb-8">{post.author}</p>
        <article className="markdown-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
      <Footer />
    </>
    );
}

  