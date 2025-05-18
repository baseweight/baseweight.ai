"use client";

import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Users } from "lucide-react";


export default function Team() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Baseweight Privacy Policy
              </p>              
            </div>
            <div>

            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}