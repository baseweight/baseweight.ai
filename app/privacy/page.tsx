import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getMarkdownContent } from '../lib/markdown';

export default async function PrivacyPage() {
  const content = await getMarkdownContent('privacy.md');
  
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          <div 
            className="prose prose-lg max-w-none 
              [&>p]:mb-8 
              [&>h2]:mt-12 [&>h2]:mb-6 
              [&>h3]:mt-8 [&>h3]:mb-4
              [&>ul]:my-8 [&>ul>li]:mb-4
              [&>ol]:my-8 [&>ol>li]:mb-4
              [&>ul>li]:list-disc [&>ul>li]:ml-6
              [&>ol>li]:list-decimal [&>ol>li]:ml-6"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}