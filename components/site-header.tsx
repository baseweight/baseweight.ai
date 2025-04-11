"use client";

import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
            <span className="inline-block font-bold">Baseweight</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/#product" className="text-muted-foreground hover:text-foreground transition-colors">
              Product
            </Link>
            <Link href="/team" className="text-muted-foreground hover:text-foreground transition-colors">
              Team
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hover:bg-transparent">
            <Github className="h-5 w-5" />
          </Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
}