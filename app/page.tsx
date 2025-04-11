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
  Box
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
                Empowering AI Everywhere
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
                Deploy and update AI models continuously to edge devices with Baseweight. 
                Seamless versioning, instant rollouts, and complete privacy - all without cloud dependencies.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="lg" className="bg-primary">
                  Start Deploying
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  <Github className="mr-2 h-4 w-4" />
                  View Documentation
                </Button>
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
                Deploy AI Models Like Modern Software
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
                  <h3 className="text-xl font-semibold mb-2">Model Registry</h3>
                  <p className="text-muted-foreground">
                    Centralized repository for all your AI models with versioning and metadata management.
                  </p>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Security</h3>
                  <p className="text-muted-foreground">
                    Enterprise-grade security with encryption, access controls, and audit logging.
                  </p>
                </Card>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Rocket className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Deployment</h3>
                  <p className="text-muted-foreground">
                    Automated deployment pipelines with rollback and canary deployment support.
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