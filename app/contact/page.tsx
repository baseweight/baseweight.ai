import React from 'react';
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";

const Contact: React.FC = () => {

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary">Contact</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Start Your Mobile AI Project
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Ready to integrate AI into your mobile app? Let's discuss your OnDevice Inference needs and how we can help bring your vision to life.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20">
              <Card className="p-12 text-center">
                <div className="flex flex-col items-center space-y-6">
                  <div className="rounded-full bg-primary/10 p-6">
                    <Mail className="h-12 w-12 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-foreground">
                      Let's Talk
                    </h3>
                    <p className="text-muted-foreground">
                      Reach out to discuss your mobile AI project
                    </p>
                  </div>
                  <a
                    href="mailto:info@baseweight.ai"
                    className="text-3xl font-bold text-primary hover:text-primary/80 transition-colors"
                  >
                    info@baseweight.ai
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Contact;
