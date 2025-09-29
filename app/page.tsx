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
        <div className="py-24 sm:py-32" id="portfolio">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary">Our Work</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Baseweight Snap
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Our current portfolio showcases a Visual Language Model running OnDevice with complete privacy and offline functionality.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="flex justify-center">
                <Card className="p-8 hover:shadow-lg transition-shadow max-w-md">
                  <div className="flex flex-col items-center text-center">
                    <Brain className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Baseweight Snap</h3>
                    <p className="text-primary mt-1 mb-4">Visual Language Model OnDevice</p>
                    <p className="text-muted-foreground mb-4">
                      A demonstration of advanced multimodal AI running entirely on mobile devices with complete privacy and offline capability.
                    </p>
                    <Button variant="outline" size="sm">
                      <Smartphone className="mr-2 h-4 w-4" />
                      View Demo
                    </Button>
                  </div>
                </Card>
              </div>
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