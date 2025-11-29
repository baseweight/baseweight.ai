"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  Brain,
  CloudOff,
  Zap,
  Smartphone,
  Shield,
  Gauge,
  ChevronLeft,
  Download
} from "lucide-react";
import Link from "next/link";

export default function SnapPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-16 sm:py-24">
            <Link href="/#portfolio" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
            <div className="text-center">
              <div className="mb-8 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/20">
                <Smartphone className="mr-2 h-4 w-4" />
                First on Google Play Store
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
                Baseweight Snap
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
                The first app on the Google Play Store to run Visual Language Models OnDevice with complete privacy and offline functionality.
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=ai.baseweight.baseweightsnap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-primary">
                    <Smartphone className="mr-2 h-4 w-4" />
                    Download on Google Play
                  </Button>
                </a>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                * Requires flagship Android device for optimal performance
              </p>
            </div>
          </div>
        </div>

        {/* Screenshot Section */}
        <div className="py-12 bg-muted/50">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/snap_screenshot.webp"
                alt="Baseweight Snap Screenshot"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-primary">Key Features</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Advanced AI, Completely Private
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Experience the power of Visual Language Models running entirely on your Android device.
              </p>
            </div>
            <div className="mx-auto max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3">
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Brain className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Visual Language Model</h3>
                  <p className="text-muted-foreground">
                    Advanced AI that understands both images and text. Ask questions about your photos, get descriptions, and receive intelligent insights about visual content.
                  </p>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <CloudOff className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Complete Privacy</h3>
                  <p className="text-muted-foreground">
                    All AI processing happens entirely on your device. Your photos and conversations never leave your phone. No cloud, no servers, complete privacy.
                  </p>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Zap className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Offline Capable</h3>
                  <p className="text-muted-foreground">
                    Works without internet connection. Take your AI assistant anywhere, even when offline. No data usage, no connectivity required.
                  </p>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Gauge className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Optimized Performance</h3>
                  <p className="text-muted-foreground">
                    Highly optimized for mobile hardware. Experience fast inference on flagship Android devices with efficient resource usage.
                  </p>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Secure by Design</h3>
                  <p className="text-muted-foreground">
                    OnDevice processing ensures your data is secure. No external API calls, no data collection, no privacy concerns.
                  </p>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Smartphone className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Mobile-First AI</h3>
                  <p className="text-muted-foreground">
                    Designed specifically for mobile use cases. Intuitive interface optimized for smartphone interaction and mobile workflows.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Achievement Section */}
        <div className="py-24 sm:py-32 bg-muted/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-primary">Technical Achievement</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                First on Google Play Store
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Baseweight Snap represents a significant milestone in mobile AI, being the first application on Google Play Store to successfully run Visual Language Models entirely on-device.
              </p>
            </div>
            <div className="mx-auto max-w-4xl">
              <Card className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">What This Means</h3>
                    <p className="text-muted-foreground">
                      Visual Language Models are among the most complex AI models, requiring significant computational resources. Running these models on mobile devices was previously thought to be impractical. Baseweight Snap demonstrates that with proper optimization and engineering, advanced multimodal AI can run efficiently on consumer smartphones.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Technical Innovation</h3>
                    <p className="text-muted-foreground">
                      This achievement required extensive model optimization, custom inference pipelines, and deep knowledge of mobile hardware acceleration. The result is a seamless user experience that brings cutting-edge AI capabilities to mobile devices while maintaining privacy and offline functionality.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-primary">Requirements</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                What You Need
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <Card className="p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Smartphone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Android Device</p>
                      <p className="text-sm text-muted-foreground">Flagship or high-end Android smartphone</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Gauge className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Performance</p>
                      <p className="text-sm text-muted-foreground">Recommended: Latest generation processor with 8GB+ RAM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Download className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Storage</p>
                      <p className="text-sm text-muted-foreground">Sufficient storage space for AI models (varies by model size)</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24 sm:py-32 bg-muted/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Experience OnDevice AI
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Download Baseweight Snap and experience the future of private, offline AI on your Android device.
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=ai.baseweight.baseweightsnap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-primary">
                    <Smartphone className="mr-2 h-4 w-4" />
                    Download on Google Play
                  </Button>
                </a>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
