"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  Brain,
  Shield,
  Smartphone,
  Eye,
  Lock,
  CloudOff,
  Zap,
  ChevronLeft,
  Github,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

export default function SideEyePage() {
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
                Android Application
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
                SideEye
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
                Smart photo management with privacy at its core. SideEye uses on-device AI to scan your gallery for sensitive content
                and helps you delete, keep, or securely vault flagged images — all without your photos ever leaving your device.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="https://github.com/baseweight/SideEye" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </Link>
                <Link href="/blog/sideeye">
                  <Button size="lg" variant="outline">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Read the Blog Post
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshot */}
        <div className="py-12 bg-muted/50">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/sideeye_screenshot.png"
                alt="SideEye - AI-powered photo privacy management showing Smart Scan results"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-primary">Features</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                AI-Powered Photo Privacy
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                On-device content moderation and encrypted storage, designed to keep your private photos private.
              </p>
            </div>
            <div className="mx-auto max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3">
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Eye className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Smart Scan</h3>
                  <p className="text-muted-foreground">
                    Scans your gallery using a Vision Language Model running on-device.
                    Classifies images into configurable categories like nudity, suggestive content, drugs, and embarrassing moments.
                  </p>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Lock className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Private Vault</h3>
                  <p className="text-muted-foreground">
                    AES-256-GCM encrypted storage for sensitive images. Protected by PIN with PBKDF2 hashing and optional biometric authentication.
                  </p>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Zap className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Swipe to Triage</h3>
                  <p className="text-muted-foreground">
                    Flagged images are presented in a swipeable card interface for quick decisions — delete, keep, or move to the encrypted vault.
                  </p>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Brain className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">NPU-Accelerated AI</h3>
                  <p className="text-muted-foreground">
                    Powered by OmniNeural-4B VLM running through Nexa SDK, optimized for Qualcomm Neural Processing Units for fast, battery-efficient inference.
                  </p>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <CloudOff className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Completely Offline</h3>
                  <p className="text-muted-foreground">
                    All AI inference and image processing happens on-device. Your photos never leave your phone — not even metadata.
                  </p>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Cloud Backup Detection</h3>
                  <p className="text-muted-foreground">
                    Detects Google Photos cloud sync and warns you, so you can disable backup before sensitive images are uploaded.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-primary">How It Works</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Scan, Triage, Secure
              </p>
            </div>
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-4">1</div>
                  <h3 className="text-lg font-semibold mb-2">Scan</h3>
                  <p className="text-sm text-muted-foreground">
                    Smart Scan analyzes your gallery photos using on-device AI. Choose which content categories to flag.
                  </p>
                </Card>
                <Card className="p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-4">2</div>
                  <h3 className="text-lg font-semibold mb-2">Triage</h3>
                  <p className="text-sm text-muted-foreground">
                    Swipe through flagged images. Delete what you don't want, keep what's fine, vault what's private.
                  </p>
                </Card>
                <Card className="p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-4">3</div>
                  <h3 className="text-lg font-semibold mb-2">Secure</h3>
                  <p className="text-sm text-muted-foreground">
                    Vaulted images are encrypted with AES-256 and removed from your gallery. Access them with PIN or biometrics.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24 sm:py-32 bg-muted/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Open Source
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                SideEye is open source. Check out the code, build it yourself, or contribute on GitHub.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="https://github.com/baseweight/SideEye" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </Link>
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
