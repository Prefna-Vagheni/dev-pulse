// app/login/page.tsx - Dark Cyberpunk Login Design
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
  ArrowRight,
  Code2,
  TrendingUp,
  Activity,
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
      setError('Failed to sign in. Please try again.');
      setIsLoading(false);
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
      <div className="fixed left-1/4 top-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="fixed right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features */}
          <div className="space-y-8 lg:pr-12">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600" />
              <span className="text-2xl font-semibold tracking-tight">
                DevPulse
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
                Track your developer
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  journey
                </span>
              </h1>
              <p className="text-lg text-gray-400">
                Connect your GitHub and unlock insights into your coding
                patterns, productivity trends, and growth metrics.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20">
                  <TrendingUp className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Real-time Analytics</h3>
                  <p className="text-sm text-gray-400">
                    Live dashboard tracking commits, PRs, and coding time
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-600/20">
                  <Code2 className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Pattern Recognition</h3>
                  <p className="text-sm text-gray-400">
                    Discover when you code best and optimize your workflow
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/20 to-red-600/20">
                  <Activity className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Growth Insights</h3>
                  <p className="text-sm text-gray-400">
                    Track your progress and celebrate your achievements
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="mb-1 text-3xl font-bold text-cyan-400">
                  200+
                </div>
                <div className="text-sm text-gray-500">Active Developers</div>
              </div>
              <div>
                <div className="mb-1 text-3xl font-bold text-blue-400">
                  50K+
                </div>
                <div className="text-sm text-gray-500">Commits Tracked</div>
              </div>
              <div>
                <div className="mb-1 text-3xl font-bold text-purple-400">
                  24/7
                </div>
                <div className="text-sm text-gray-500">Live Updates</div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Card */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md border-white/10 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h2 className="mb-2 text-2xl font-bold">Welcome back</h2>
                  <p className="text-gray-400">
                    Sign in to access your dashboard
                  </p>
                </div>

                {error && (
                  <Alert
                    variant="destructive"
                    className="mb-6 border-red-500/50 bg-red-500/10"
                  >
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <Button
                  onClick={handleGitHubSignIn}
                  className="group h-12 w-full gap-2 bg-white text-black hover:bg-gray-100"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      <Github className="h-5 w-5" />
                      Continue with GitHub
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>

                <div className="mt-6 space-y-4 rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    Secure OAuth authentication
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    Read-only access to public repos
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    Your data stays private
                  </div>
                </div>

                <p className="mt-6 text-center text-xs text-gray-500">
                  By signing in, you agree to sync your GitHub activity data
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
