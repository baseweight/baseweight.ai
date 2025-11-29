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
  Settings
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
                Baseweight Products
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Innovative tools putting multimodal AI in the hands of developers and users.
              </p>
            </div>

            {/* Baseweight Snap */}
            <div className="mx-auto max-w-5xl mb-12">
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src="/snap_screenshot.webp"
                      alt="Baseweight Snap Screenshot"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/20 mb-4 w-fit">
                      <Smartphone className="mr-2 h-4 w-4" />
                      Mobile App
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Baseweight Snap</h3>
                    <p className="text-muted-foreground mb-6">
                      The first app on the Google Play Store to run Visual Language Models OnDevice with complete privacy and offline functionality.
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
                    <div className="flex gap-4">
                      <a
                        href="https://play.google.com/store/apps/details?id=ai.baseweight.baseweightsnap"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block flex-1"
                      >
                        <Button size="lg" className="w-full">
                          <Smartphone className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </a>
                      <a
                        href="/products/snap"
                        className="inline-block flex-1"
                      >
                        <Button size="lg" variant="outline" className="w-full">
                          Learn More
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      * Requires flagship Android device for optimal performance
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Baseweight Canvas */}
            <div className="mx-auto max-w-5xl">
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Box className="h-24 w-24 text-primary mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground">Screenshots coming soon</p>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/20 mb-4 w-fit">
                      <Box className="mr-2 h-4 w-4" />
                      Desktop Application
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Baseweight Canvas</h3>
                    <p className="text-muted-foreground mb-6">
                      A Desktop Multimodal Application that allows developers to talk with their images and audio.
                      Unlike ollama and other LLM runners, we put vision and audio first.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <Brain className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold">Vision & Audio First</p>
                          <p className="text-sm text-muted-foreground">Designed for multimodal interaction</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Box className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold">Cross-Platform</p>
                          <p className="text-sm text-muted-foreground">Runs on Windows, Linux, and Mac</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Settings className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold">Developer-Focused</p>
                          <p className="text-sm text-muted-foreground">Built for developers who work with media</p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="/products/canvas"
                      className="inline-block"
                    >
                      <Button size="lg" className="w-full sm:w-auto">
                        Learn More
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
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