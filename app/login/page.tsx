// app/login/page.jsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn, useSession } from '@/lib/auth-client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Github,
  AlertCircle,
  Check,
  BarChart3,
  Code,
  TrendingUp,
  Zap,
  Terminal,
  ArrowRight,
} from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session, isPending } = useSession();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (session && !isPending) {
      router.push(callbackUrl);
    }
  }, [session, isPending, router, callbackUrl]);

  const handleGitHubSignIn = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await signIn.social({
        provider: 'github',
        callbackURL: callbackUrl,
      });
    } catch (err) {
      console.error('Sign in error:', err);
      setError('Failed to sign in. Connection timeout.');
      setIsLoading(false);
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505]">
        <div className="h-8 w-8 animate-spin rounded-none border-2 border-emerald-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-emerald-50 flex overflow-hidden font-mono selection:bg-emerald-500 selection:text-black">
      {/* THE ENGINEERING GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative w-full flex flex-col md:flex-row">
        {/* LEFT SIDE: BRANDING & BENEFITS */}
        <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-between border-r border-emerald-900/20 bg-[#080808]">
          <div className="z-10">
            <div className="flex items-center gap-2 mb-12">
              <Terminal className="text-emerald-500 w-5 h-5" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-emerald-500/50 font-bold">
                DevPulse.v1
              </span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.8] mb-8">
              YOUR STATS,
              <br />
              <span className="text-emerald-500 uppercase">BEAUTIFULLY</span>
              <br />
              TRACKED.
            </h1>

            <p className="max-w-md text-xs uppercase leading-relaxed text-emerald-900/60 tracking-tight mb-12">
              Connect your GitHub account and unlock real-time insights into
              your coding journey. See what matters, track your growth.
            </p>

            {/* BENEFITS GRID - Preserved from your content */}
            <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
              <div className="group border border-emerald-900/20 bg-emerald-950/5 p-4 transition-colors hover:bg-emerald-900/10">
                <BarChart3 className="h-5 w-5 text-emerald-500 mb-3" />
                <h3 className="text-[11px] font-bold uppercase tracking-wider mb-1">
                  Live Dashboard
                </h3>
                <p className="text-[10px] text-zinc-500 uppercase">
                  Real-time stats and charts
                </p>
              </div>

              <div className="group border border-emerald-900/20 bg-emerald-950/5 p-4 transition-colors hover:bg-emerald-900/10">
                <Code className="h-5 w-5 text-emerald-500 mb-3" />
                <h3 className="text-[11px] font-bold uppercase tracking-wider mb-1">
                  Code Analysis
                </h3>
                <p className="text-[10px] text-zinc-500 uppercase">
                  Understand your patterns
                </p>
              </div>

              <div className="group border border-emerald-900/20 bg-emerald-950/5 p-4 transition-colors hover:bg-emerald-900/10">
                <TrendingUp className="h-5 w-5 text-emerald-500 mb-3" />
                <h3 className="text-[11px] font-bold uppercase tracking-wider mb-1">
                  Growth Tracking
                </h3>
                <p className="text-[10px] text-zinc-500 uppercase">
                  Measure your progress
                </p>
              </div>

              <div className="group border border-emerald-900/20 bg-emerald-950/5 p-4 transition-colors hover:bg-emerald-900/10">
                <Zap className="h-5 w-5 text-emerald-500 mb-3" />
                <h3 className="text-[11px] font-bold uppercase tracking-wider mb-1">
                  Export Data
                </h3>
                <p className="text-[10px] text-zinc-500 uppercase">
                  CSV & JSON exports
                </p>
              </div>
            </div>
          </div>

          {/* TRUST BADGES - Preserved from your content */}
          <div className="flex flex-wrap gap-6 pt-12 z-10 border-t border-emerald-900/10 mt-12">
            {['Free forever', 'No credit card', '30 sec setup'].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-emerald-500/50"
              >
                <Check className="h-3 w-3" />
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: THE LOGIN INTERFACE */}
        <div className="flex-1 flex items-center justify-center p-8 relative">
          <Card className="w-full max-w-sm border-none bg-transparent shadow-none text-emerald-50">
            <CardContent className="p-0">
              <div className="mb-12">
                <div className="inline-block px-2 py-1 border border-emerald-500/30 mb-6">
                  <span className="text-[10px] uppercase text-emerald-500">
                    Authentication Required
                  </span>
                </div>
                <h2 className="text-4xl font-black tracking-tight mb-2 uppercase">
                  Get Started
                </h2>
                <p className="text-[11px] uppercase text-zinc-500 tracking-tighter">
                  Connect with GitHub to initialize your session.
                </p>
              </div>

              {error && (
                <Alert className="mb-6 rounded-none border-emerald-900/50 bg-emerald-900/10 text-emerald-50 text-[10px] uppercase">
                  <AlertCircle className="h-4 w-4 text-emerald-500" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button
                onClick={handleGitHubSignIn}
                disabled={isLoading}
                className="w-full h-16 bg-emerald-500 hover:bg-emerald-400 text-black font-black rounded-none flex items-center justify-between px-8 group transition-all mb-10 shadow-[8px_8px_0px_0px_rgba(16,185,129,0.2)]"
              >
                <span className="text-xs uppercase tracking-[0.2em]">
                  {isLoading ? 'Connecting...' : 'Sign in with GitHub'}
                </span>
                {isLoading ? (
                  <div className="h-4 w-4 animate-spin rounded-none border-2 border-black border-t-transparent" />
                ) : (
                  <Github className="h-5 w-5" />
                )}
              </Button>

              {/* ACCESS DETAILS - Preserved from your content */}
              <div className="space-y-4 pt-10 border-t border-emerald-900/10">
                <span className="block text-[10px] font-bold uppercase text-emerald-500/50 mb-4 tracking-widest">
                  Permissions Scoped:
                </span>
                <div className="grid gap-3">
                  {[
                    'Public repositories only',
                    'Your profile information',
                    'Contribution activity',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-[10px] uppercase text-zinc-500 tracking-tight"
                    >
                      <div className="h-1 w-1 bg-emerald-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-12 text-center text-[9px] text-zinc-700 uppercase leading-relaxed tracking-widest">
                By signing in, you agree to sync your GitHub activity data.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
