// app/page.jsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  BarChart3,
  Code,
  GitCommit,
  Github,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { getSession } from '@/lib/auth-utils';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  const session = await getSession();
  if (session) {
    redirect('/dashboard');
  }

  return (
    <div className="min-h-screen bg-[#050a08] text-emerald-50 selection:bg-[#d4af37] selection:text-black">
      {/* Nav - Strict & Professional */}
      <nav className="sticky top-0 z-50 border-b border-emerald-900/40 bg-[#050a08]/95 backdrop-blur-none">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 bg-emerald-500" />
            <span className="text-lg font-bold tracking-widest uppercase text-emerald-500">
              DevPulse
            </span>
          </div>
          <Link href="/login">
            <Button className="rounded-none border border-emerald-500 bg-transparent text-emerald-400 hover:bg-emerald-500 hover:text-black transition-none px-6">
              SIGN IN
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero - Typography Centric */}
      <section className="relative border-b border-emerald-900/40 px-6 py-24 md:py-32 overflow-hidden">
        {/* Background Image - Right Side Editorial Style */}
        <div className="absolute top-0 right-0 bottom-0 w-full md:w-1/2 z-0 hidden md:block">
          {/* Masking gradients to blend the image into the deep emerald background */}
          <div className="absolute inset-0 z-10 bg-linear-to-r from-[#050a08] via-[#050a08]/40 to-transparent" />
          <div className="absolute inset-0 z-10 bg-linear-to-b from-[#050a08] via-transparent to-[#050a08]" />

          {/* Recommendation: Use an architectural photo (concrete, steel, or blueprints).
      Grayscale + Low Opacity + Mix Blend avoids the "AI glow" look.
    */}
          <img
            src="./images/github.webp"
            alt="Engineering context"
            className="h-full w-full object-cover grayscale opacity-15 contrast-125 brightness-50 mix-blend-luminosity"
          />
        </div>

        <div className="container relative mx-auto max-w-6xl z-10">
          <div className="max-w-3xl">
            {/* Badge - Engineering Focus */}
            <div className="mb-6 inline-flex items-center gap-2 border border-emerald-500/30 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4af37]">
              Engineering excellence in every commit
            </div>

            {/* Heading - Serif Contrast */}
            <h1 className="mb-8 text-6xl font-serif font-light leading-[1.1] tracking-tight md:text-7xl">
              Stop guessing. <br />
              <span className="italic text-emerald-500">Start tracking.</span>
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-relaxed text-emerald-100/60">
              Real insights into your coding habits. See your GitHub stats come
              alive with charts, trends, and growth metrics that actually help
              you improve.
            </p>

            {/* CTA - Solid Blocks */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/login">
                <Button
                  size="lg"
                  className="rounded-none h-14 gap-4 bg-emerald-600 px-10 text-xs font-bold uppercase tracking-widest text-black hover:bg-[#d4af37] transition-colors"
                >
                  Start Integration
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <p className="mt-8 text-[10px] uppercase tracking-widest text-emerald-900">
              Secure Auth · GitHub Sync · Zero Latency
            </p>
          </div>

          {/* Dashboard Preview - Flat Engineering UI */}
          <div className="mt-24">
            <div className="relative mx-auto max-w-5xl border border-emerald-900/60 bg-[#0a110f]">
              {/* Mock dashboard window controls */}
              <div className="border-b border-emerald-900/60 bg-emerald-950/20 px-6 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-900" />
                    <div className="h-2 w-2 rounded-full bg-orange-700/50" />
                    <div className="h-2 w-2 rounded-full bg-red-900/50" />
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-emerald-800">
                    System_Monitor.exe
                  </div>
                </div>
              </div>

              <div className="grid gap-1 p-1 md:grid-cols-3 bg-emerald-900/20">
                {[
                  {
                    label: 'Total Commits',
                    value: '1,247',
                    trend: '+12%',
                    color: 'text-emerald-400',
                  },
                  {
                    label: 'Active Hours',
                    value: '84.5h',
                    trend: 'Optimal',
                    color: 'text-[#d4af37]',
                  },
                  {
                    label: 'PR Efficiency',
                    value: '94%',
                    trend: '+24%',
                    color: 'text-emerald-400',
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#050a08] p-8 border border-emerald-900/20"
                  >
                    <div className="mb-4 text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                      {stat.label}
                    </div>
                    <div className="mb-2 text-4xl font-serif italic tracking-tighter">
                      {stat.value}
                    </div>
                    <div
                      className={`text-[10px] font-bold uppercase tracking-tighter ${stat.color}`}
                    >
                      {stat.trend} STAT_STABLE
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Structured Grid */}
      <section className="px-6 py-24 border-b border-emerald-900/40">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-20">
            <h2 className="mb-4 text-4xl font-serif italic uppercase tracking-tighter">
              Built for modern developers
            </h2>
            <p className="text-emerald-100/40 text-sm uppercase tracking-widest">
              Features that help you understand your work, not just track it
            </p>
          </div>

          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-emerald-900/30">
            {[
              {
                icon: <Github className="h-5 w-5" />,
                title: 'GitHub Core',
                desc: 'Connect once, sync forever. All your repos, commits, and PRs automatically tracked',
              },
              {
                icon: <BarChart3 className="h-5 w-5" />,
                title: 'Live Dashboards',
                desc: 'Watch your stats update in real-time. Beautiful charts that make sense.',
              },
              {
                icon: <TrendingUp className="h-5 w-5" />,
                title: 'Growth Tracking',
                desc: 'See your progress over time. Understand what makes you productive',
              },
              {
                icon: <GitCommit className="h-5 w-5" />,
                title: 'Activity Feed',
                desc: 'Every commit, PR, and issue in one timeline. Never lose track.',
              },
              {
                icon: <Code className="h-5 w-5" />,
                title: 'Code Analysis',
                desc: 'Which languages you use most. When you code best. All the patterns.',
              },
              {
                icon: <Zap className="h-5 w-5" />,
                title: 'Export Everything',
                desc: 'Your data, your way. Export to CSV or JSON anytime.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group border-r border-b border-emerald-900/30 p-10 hover:bg-emerald-950/20 transition-colors"
              >
                <div className="mb-8 inline-flex h-10 w-10 items-center justify-center border border-emerald-500/30 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                  {feature.icon}
                </div>
                <h3 className="mb-4 text-lg font-bold uppercase tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-emerald-100/40">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - High Contrast Block */}
      <section className="px-6 py-32">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-emerald-600 p-1">
            <div className="bg-[#050a08] px-12 py-20 text-center">
              <h2 className="mb-6 text-4xl font-serif italic md:text-6xl">
                Ready to sync?
              </h2>
              <p className="mb-10 text-emerald-100/40 uppercase tracking-[0.2em] text-xs">
                Join hundreds of developers who already know their stats
              </p>
              <Link href="/login">
                <Button
                  size="lg"
                  className="rounded-none h-14 bg-emerald-600 px-12 text-xs font-bold uppercase tracking-widest text-black hover:bg-white"
                >
                  Get started now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimalist Identity */}
      <footer className="border-t border-emerald-900/40 bg-[#050a08] py-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-4 w-4 bg-emerald-500" />
            <span className="font-bold tracking-[0.3em] uppercase text-xs">
              DevPulse
            </span>
          </div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-emerald-900">
            Made for developers, by Prefna &copy;
          </div>
        </div>
      </footer>
    </div>
  );
}
