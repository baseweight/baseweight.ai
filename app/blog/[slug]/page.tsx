import Image from 'next/image';
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getPostBySlug, getBlogPosts } from "@/lib/mdx";
import { notFound } from 'next/navigation';
import { Calendar, User } from "lucide-react";
import { Metadata } from 'next';
import { remark } from 'remark';
import html from 'remark-html';
import { YouTube } from '@/components/YouTube';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function BlogPost({ params, searchParams }: Props) {
  const { slug } = await params;
  const search = await searchParams;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  // Split content into segments based on YouTube placeholders
  const segments = post.content.split(/(<youtube id="[^"]+" \/>)/g);
  
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
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
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="inline-flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </span>
                <span className="inline-flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {post.author}
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground mb-6">
                {post.title}
              </h1>
              <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                {segments.map((segment, index) => {
                  if (segment.startsWith('<youtube')) {
                    const id = segment.match(/id="([^"]+)"/)?.[1];
                    return id ? <YouTube key={index} id={id} /> : null;
                  }
                  
                  return (
                    <div
                      key={index}
                      className="[&>p]:my-6 [&>p]:text-base
                        [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:text-xl [&>h2]:font-bold
                        [&>h3]:mt-8 [&>h3]:mb-4 [&>h3]:text-lg [&>h3]:font-bold
                        [&>ul]:my-6 [&>ol]:my-6 [&>blockquote]:my-6
                        [&_a]:text-blue-600 [&_a]:hover:text-blue-800 dark:[&_a]:text-blue-400 dark:[&_a]:hover:text-blue-300"
                      dangerouslySetInnerHTML={{ 
                        __html: remark().use(html).processSync(segment).toString() 
                      }} 
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

  