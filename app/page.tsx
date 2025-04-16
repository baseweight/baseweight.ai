"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { 
  Cpu, 
  Shield, 
  Rocket,
  ChevronRight, 
  Github,
  RefreshCw,
  Gauge,
  CloudOff,
  Box,
  Sparkles
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
                <Sparkles className="mr-2 h-4 w-4" />
                Coming Soon
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
                Continuous AI Deployment,
                <span className="text-primary block mt-2">Right on Your Device</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
                Deploy and update AI models continuously to edge devices with Baseweight. 
                Seamless versioning, instant rollouts, and complete privacy - all without cloud dependencies.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-y-4">
                <form 
                  className="launchlist-form flex flex-col sm:flex-row gap-3 w-full max-w-md" 
                  action="https://getlaunchlist.com/s/fu3a42" 
                  method="POST"
                >
                  <input 
                    name="email" 
                    type="email" 
                    placeholder="Your email"
                    className="px-4 py-2 rounded-lg border border-input bg-background"
                    required
                  />
                  <Button type="submit" size="lg" className="bg-primary">
                    Get Early Access
                  </Button>
                </form>
                <p className="text-sm text-muted-foreground">
                  Join the waitlist for early access
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-24 sm:py-32 bg-muted/50" id="features">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary">Continuous Deployment</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Deploy Local AI Models Like Modern Software
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Bring DevOps practices to AI deployment with our comprehensive platform for continuous model delivery and updates.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3">
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <RefreshCw className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Continuous Updates</h3>
                  <p className="text-muted-foreground">
                    Deploy model updates seamlessly across your device fleet with version control and rollback capabilities.
                  </p>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <CloudOff className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Edge-Native</h3>
                  <p className="text-muted-foreground">
                    Run and update models directly on edge devices without cloud dependencies or data transfers.
                  </p>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Gauge className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Performance Monitoring</h3>
                  <p className="text-muted-foreground">
                    Track model performance and deployment metrics across your entire device network.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Product Section */}
        <div className="py-24 sm:py-32" id="product">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Built for Production
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Enterprise-ready features that scale with your needs
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Box className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">SDK</h3>
                  <p className="text-muted-foreground">
                    Cross-platform SDKs for iOS, Android, Desktop and Web.
                  </p>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Model Protection</h3>
                  <p className="text-muted-foreground">
                    Model encryption and secure inference, securing the investment in your AI models.
                  </p>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Rocket className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Distribution</h3>
                  <p className="text-muted-foreground">
                    Automated deployment pipelines from Jupyter Notebooks and Hugging Face to Edge Devices.
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