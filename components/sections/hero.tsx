import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function HeroSection() {
  return (
    <>
      <HeroHeader />

      <main className="relative overflow-x-hidden bg-background cyber-grid">
        {/* Global cyber scan */}
        <div className="scan-line absolute inset-0 pointer-events-none" />

        {/* HERO */}
        <section className="relative">
          {/* Neon radial glow */}
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-primary/20 blur-[160px]" />
          <div className="pointer-events-none absolute top-40 right-[-200px] h-[500px] w-[500px] rounded-full bg-secondary/20 blur-[140px]" />

          <div className="pb-24 pt-24 md:pb-32 lg:pb-56">
            <div className="relative mx-auto max-w-6xl px-6">
              <div className="grid items-center gap-16 lg:grid-cols-2">
                {/* LEFT CONTENT */}
                <div className="relative text-center lg:text-left">
                <h1 className="text-5xl font-medium leading-tight md:text-6xl xl:text-7xl">
                  <span className="text-cyber inline-block">
                      Detect Fake WiFi
                      </span>
  <br />
  <span className="text-cyber inline-block">
    Before It Attacks
  </span>
</h1>

                  <p className="mt-8 max-w-xl text-lg text-muted-foreground">
                    Wichain uses AI to identify spoofed and malicious Wi-Fi
                    networks in real time. Stay protected on public Wi-Fi 
                    cafés, airports, colleges, and offices.
                  </p>

                  <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                    <Button
                      asChild
                      size="lg"
                      className="px-7 glow-cyan"
                    >
                      <Link href="/signup">Get Protected Free</Link>
                    </Button>

                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="px-7 glow-purple"
                    >
                      <Link href="#features">How Wichain Works</Link>
                    </Button>
                  </div>
                </div>

                {/* RIGHT VISUAL — CYBER CORE */}
                <div className="relative hidden lg:block">
                  <div className="relative mx-auto h-[420px] w-[420px] rounded-full border border-border glass glow-cyan">
                    {/* inner rings */}
                    <div className="absolute inset-6 rounded-full border border-primary/40 animate-pulse" />
                    <div className="absolute inset-16 rounded-full border border-secondary/40" />
                    <div className="absolute inset-28 rounded-full bg-primary/20 blur-xl" />

                    {/* core */}
                    <div className="absolute inset-40 rounded-full bg-primary glow-cyan" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      
      </main>
    </>
  )
}
