import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-sm">
      <Link href="/">
      <Image src="/BaseWeightMascot.svg" alt="BaseWeight Logo" width={50} height={25} />
      </Link>
      <nav>
        <ul className="flex space-x-8">
          <li><Link href="/about" className="text-lg font-semibold hover:text-blue-600">About</Link></li>
          <li><Link href="/blog" className="text-lg font-semibold hover:text-blue-600">Blog</Link></li>
          <li><Link href="/contact" className="text-lg font-semibold hover:text-blue-600">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}