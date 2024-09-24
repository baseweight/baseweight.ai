import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 text-center">
      <p className="text-gray-500">&copy; 2024 BaseWeight Solutions Inc. All rights reserved. <Link href="/terms">Terms of Service & Privacy Policy</Link></p>
    </footer>
  );
}

