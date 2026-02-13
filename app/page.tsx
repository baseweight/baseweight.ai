"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { 
  Smartphone,
  Shield,
  Rocket,
  ChevronRight,
  Github,
  Zap,
  Gauge,
  CloudOff,
  Box,
  Users,
  Brain,
  Settings,
  Eye,
  Lock
} from "lucide-react";
import Script from "next/script";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Script 
        src="https://getlaunchlist.com/js/widget-diy.js" 
        strategy="lazyOnload"
      />
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <div className="mb-8 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/20">
                <Brain className="mr-2 h-4 w-4" />
                OnDevice Inference Experts
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
                Mobile AI Services &
                <span className="text-primary block mt-2">OnDevice Consulting</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
                Expert OnDevice AI services and consulting for mobile applications. 
                We help you integrate Visual Language Models and other AI capabilities directly into your iOS and Android apps.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary">
                    <Users className="mr-2 h-4 w-4" />
                    Get Consulting Quote
                  </Button>
                  <Button size="lg" variant="outline">
                    <Smartphone className="mr-2 h-4 w-4" />
                    View Our Work
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Expert OnDevice AI implementation services
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-24 sm:py-32 bg-muted/50" id="features">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary">Our Services</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                OnDevice AI Implementation
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                We specialize in integrating Visual Language Models and other AI capabilities directly into mobile applications with complete privacy and offline functionality.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3">
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Smartphone className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Mobile Implementation</h3>
                  <p className="text-muted-foreground">
                    Custom AI integration for iOS and Android apps using Core ML, TensorFlow Lite, and ONNX Runtime.
                  </p>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Zap className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Model Optimization</h3>
                  <p className="text-muted-foreground">
                    Optimize your models for mobile performance with quantization, pruning, and platform-specific optimizations.
                  </p>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Settings className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
                  <p className="text-muted-foreground">
                    Tailored AI solutions for computer vision, NLP, and multimodal applications on mobile devices.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="py-24 sm:py-32 bg-muted/50" id="portfolio">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-primary">Our Work</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Products
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Innovative multimodal AI applications showcasing our expertise in OnDevice inference and developer tools.
              </p>
            </div>
            <div className="mx-auto max-w-7xl space-y-12">
              {/* Baseweight Snap */}
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-96 flex items-center justify-center bg-muted/30">
                    <img
                      src="/snap_screenshot.webp"
                      alt="Baseweight Snap Screenshot"
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/20 mb-4 w-fit">
                      <Smartphone className="mr-2 h-4 w-4" />
                      Mobile Application
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Baseweight Snap</h3>
                    <p className="text-muted-foreground mb-6">
                      The first app on the Google Play Store to run Visual Language Models OnDevice.
                      Baseweight Snap showcases advanced multimodal AI with complete privacy and offline capability.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <Brain className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold">Visual Language Model</p>
                          <p className="text-sm text-muted-foreground">Advanced AI understanding images and text</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CloudOff className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold">Complete Privacy</p>
                          <p className="text-sm text-muted-foreground">All processing happens OnDevice</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold">Offline Capable</p>
                          <p className="text-sm text-muted-foreground">Works without internet connection</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="https://apps.apple.com/us/app/baseweight-snap/id6758553453"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button size="lg" className="w-full sm:w-auto">
                          <Smartphone className="mr-2 h-4 w-4" />
                          Download on App Store
                        </Button>
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=ai.baseweight.baseweightsnap"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button size="lg" variant="outline" className="w-full sm:w-auto">
                          <Smartphone className="mr-2 h-4 w-4" />
                          Download on Google Play
                        </Button>
                      </a>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      * Requires flagship device for optimal performance
                    </p>
                  </div>
                </div>
              </Card>

              {/* Baseweight Canvas */}
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src="/canvas_screenshot.png"
                      alt="Baseweight Canvas Screenshot"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/20 mb-4 w-fit">
                      <Box className="mr-2 h-4 w-4" />
                      Desktop Application
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Baseweight Canvas</h3>
                    <p className="text-muted-foreground mb-6">
                      A desktop multimodal application designed for developers to interact with images and audio using Visual Language Models.
                      Vision and audio first, unlike traditional LLM runners.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <Brain className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold">Multimodal AI</p>
                          <p className="text-sm text-muted-foreground">Image and audio processing capabilities</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CloudOff className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold">Local Processing</p>
                          <p className="text-sm text-muted-foreground">Run models on your machine</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Settings className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold">Cross-Platform</p>
                          <p className="text-sm text-muted-foreground">Available for Windows, Mac, and Linux</p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="/products/canvas"
                      className="inline-block"
                    >
                      <Button size="lg" className="w-full sm:w-auto">
                        <ChevronRight className="mr-2 h-4 w-4" />
                        Learn More
                      </Button>
                    </a>
                    <p className="text-xs text-muted-foreground mt-4">
                      * Pre-release version available now
                    </p>
                  </div>
                </div>
              </Card>

              {/* SideEye */}
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto flex items-center justify-center bg-muted/30">
                    <div className="flex flex-col items-center gap-4 p-8">
                      <Eye className="h-24 w-24 text-primary" />
                      <p className="text-2xl font-bold text-primary">SideEye</p>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/20 mb-4 w-fit">
                      <Smartphone className="mr-2 h-4 w-4" />
                      Android Application
                    </div>
                    <h3 className="text-2xl font-bold mb-4">SideEye</h3>
                    <p className="text-muted-foreground mb-6">
                      Smart photo management with privacy at its core. Uses on-device AI to scan your gallery for sensitive content
                      and helps you delete, keep, or securely vault flagged images.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <Brain className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold">NPU-Accelerated AI</p>
                          <p className="text-sm text-muted-foreground">OmniNeural-4B VLM via Nexa SDK on Qualcomm NPU</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Lock className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold">Encrypted Vault</p>
                          <p className="text-sm text-muted-foreground">AES-256-GCM storage with PIN and biometric auth</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CloudOff className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold">Completely Offline</p>
                          <p className="text-sm text-muted-foreground">All processing on-device, photos never leave your phone</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="/products/sideeye"
                        className="inline-block"
                      >
                        <Button size="lg" className="w-full sm:w-auto">
                          <ChevronRight className="mr-2 h-4 w-4" />
                          Learn More
                        </Button>
                      </a>
                      <a
                        href="https://github.com/baseweight/SideEye"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button size="lg" variant="outline" className="w-full sm:w-auto">
                          <Github className="mr-2 h-4 w-4" />
                          View on GitHub
                        </Button>
                      </a>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      * Requires Qualcomm device with NPU for Smart Scan
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div className="py-24 sm:py-32" id="services">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Our Expertise
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Deep experience in mobile AI technologies and frameworks
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Brain className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">AI Frameworks</h3>
                  <p className="text-muted-foreground">
                    Core ML, TensorFlow Lite, ONNX Runtime, Executorch, and custom C++ implementations.
                  </p>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Privacy & Security</h3>
                  <p className="text-muted-foreground">
                    On-device processing ensures user privacy while maintaining model security and IP protection.
                  </p>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Gauge className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Performance</h3>
                  <p className="text-muted-foreground">
                    Optimized inference pipelines for real-time performance on mobile hardware constraints.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}