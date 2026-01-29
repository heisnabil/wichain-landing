'use client'

import React from 'react'
import Link from 'next/link'
import {Logo} from '@/components/logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'


const menuItems = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQs', href: '#faqs' },
]

export const HeroHeader = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        data-state={menuOpen && 'open'}
        className="
          glass
          cyber-grid
          border-b
          backdrop-blur-xl
        "
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              aria-label="Wichain home"
              className="flex items-center gap-2 glow-cyan"
            >
              <Logo />
            </Link>

            {/* Desktop menu */}
            <ul className="hidden lg:flex items-center gap-8 text-sm">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="
                      text-muted-foreground
                      hover:text-foreground
                      relative
                      after:absolute
                      after:left-0
                      after:-bottom-1
                      after:h-[1px]
                      after:w-0
                      after:bg-primary
                      after:transition-all
                      hover:after:w-full
                    "
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="outline" size="sm" className="glow-purple">
                <Link href="/login">Login</Link>
              </Button>
              <Button size="sm" className="glow-cyan">
                <Link href="/signup">Get Protected</Link>
              </Button>
               <ThemeToggle />
              
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="lg:hidden mt-4 rounded-2xl border glass p-6 space-y-6">
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-lg text-muted-foreground hover:text-foreground"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex gap-3 pt-4">
                <ThemeToggle />


                <Button variant="outline" className="flex-1">
                  <Link href="/login">Login</Link>
                </Button>

                <Button className="flex-1 glow-cyan">
                  <Link href="/signup">Sign Up</Link>
                </Button>
                <div className="flex items-center gap-2">

</div>

              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
