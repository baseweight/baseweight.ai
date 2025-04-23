import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BookOpen, Calendar, User } from "lucide-react";
import { getBlogPosts } from "@/lib/mdx";

export default async function Blog() {
  const blogPosts = await getBlogPosts();

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary">Blog</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Latest Insights and Updates
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Explore our latest thoughts on edge AI, continuous deployment, and industry trends.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid grid-cols-1 gap-8">
                {blogPosts.map((post) => (
                  <Card key={post.slug} className="p-8 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col">
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
                      <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-4">
                        <a href={`/blog/${post.slug}`} className="text-sm text-primary hover:underline">
                          Read more
                        </a>
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}