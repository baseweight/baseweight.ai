"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  Brain,
  Box,
  Settings,
  Monitor,
  Mic,
  Image as ImageIcon,
  Download,
  ChevronLeft,
  AlertCircle
} from "lucide-react";
import Link from "next/link";

export default function CanvasPage() {
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
                <Box className="mr-2 h-4 w-4" />
                Desktop Application
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
                Baseweight Canvas
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
                A Desktop Multimodal Application that allows developers to talk with their images and audio.
                Unlike ollama and other LLM runners, we put vision and audio first.
              </p>

              {/* Pre-release Warning */}
              <div className="mt-8 mx-auto max-w-2xl">
                <Card className="p-4 border-amber-500/50 bg-amber-500/10">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-semibold text-amber-500 mb-1">Pre-release Software</p>
                      <p className="text-muted-foreground">
                        This is a pre-release version (v0.1.0-rc0). Expect bugs and incomplete features. Use at your own risk and please report any issues you encounter.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="https://github.com/baseweight/Canvas/releases/tag/v0.1.0-rc0" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary">
                    <Download className="mr-2 h-4 w-4" />
                    Download for Windows
                  </Button>
                </Link>
                <Link href="https://github.com/baseweight/Canvas/releases/tag/v0.1.0-rc0" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download for Mac
                  </Button>
                </Link>
                <Link href="https://github.com/baseweight/Canvas/releases/tag/v0.1.0-rc0" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download for Linux
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
                src="/canvas_screenshot.png"
                alt="Baseweight Canvas - Multimodal AI interface showing image analysis with a red kayak on a river"
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
                Vision and Audio First
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Built from the ground up for developers who work with visual and audio content.
              </p>
            </div>
            <div className="mx-auto max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3">
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <ImageIcon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Image Analysis</h3>
                  <p className="text-muted-foreground">
                    Talk directly with your images using advanced Visual Language Models. Get insights, descriptions, and answers about visual content.
                  </p>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Mic className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Audio Processing</h3>
                  <p className="text-muted-foreground">
                    Process and interact with audio content seamlessly. Transcription, analysis, and multimodal understanding of audio data.
                  </p>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Brain className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Multimodal AI</h3>
                  <p className="text-muted-foreground">
                    Combine text, images, and audio in natural conversations. Experience AI that understands context across multiple modalities.
                  </p>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Monitor className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Cross-Platform</h3>
                  <p className="text-muted-foreground">
                    Native applications for Windows, Linux, and Mac. Consistent experience across all major desktop platforms.
                  </p>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Settings className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Developer-Focused</h3>
                  <p className="text-muted-foreground">
                    Built by developers, for developers. Streamlined interface designed for productivity and workflow integration.
                  </p>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Box className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Local Processing</h3>
                  <p className="text-muted-foreground">
                    Run models locally on your machine. Your data stays private and secure on your own hardware.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Why Canvas Section */}
        <div className="py-24 sm:py-32 bg-muted/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-primary">Why Canvas?</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Different from Traditional LLM Runners
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                While tools like ollama focus primarily on text-based language models, Baseweight Canvas is designed from the ground up for multimodal AI.
              </p>
            </div>
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Traditional LLM Runners</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Primarily text-focused</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Vision and audio as afterthoughts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Command-line or basic interfaces</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Limited multimodal workflows</span>
                    </li>
                  </ul>
                </Card>
                <Card className="p-8 border-primary">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Baseweight Canvas</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">✓</span>
                      <span>Vision and audio first design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">✓</span>
                      <span>Native multimodal experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">✓</span>
                      <span>Intuitive visual interface</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">✓</span>
                      <span>Seamless cross-modal workflows</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Ready to get started?
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Download Baseweight Canvas for your platform and experience multimodal AI designed for developers.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="https://github.com/baseweight/Canvas/releases/tag/v0.1.0-rc0" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary">
                    <Download className="mr-2 h-4 w-4" />
                    Download Now
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
