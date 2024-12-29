import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllPosts } from '@/components/posts';


export default async function Blog() {
  const posts = getAllPosts();

  return (
    <>
    <Header />
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="p-4 bg-gray-100 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-gray-600">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
    <Footer />
    </>
  );
}