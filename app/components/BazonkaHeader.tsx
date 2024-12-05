import '../baseweight.css';

import basebear from 'baseweight';
import Link from 'next/link';

export default function BazonkaHeader() {
  return (
    <header className="flex justify-between items-center p-4">
      <nav>
        <ul className="flex space-x-8">
          <li><Link href="/contact" className="text-lg font-semibold hover:text-blue-600">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
