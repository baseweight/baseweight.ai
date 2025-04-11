"use client";

import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Users } from "lucide-react";

const teamMembers = [
  {
    name: "Joe Bowser",
    role: "Founder",
    image: "new_joe.jpg",
    bio: "Previously a Senior Software Engineer at Adobe, Joe founded Baseweight to make edge AI deployment accessible and efficient.",
  }  
];

export default function Team() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary">Our Team</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Meet the Experts Behind Baseweight
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                We're a team of engineers and researchers passionate about making edge AI deployment accessible and efficient.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                {teamMembers.map((member) => (
                  <Card key={member.name} className="p-8 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="rounded-full w-32 h-32 object-cover mb-6"
                      />
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-primary mt-1 mb-4">{member.role}</p>
                      <p className="text-muted-foreground">{member.bio}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}