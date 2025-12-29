'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AlertTriangle, Home, RefreshCw } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-linear-to-br from-[rgb(232,233,243)] via-[rgb(206,206,206)] to-[rgb(177,229,242)] flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full border-2 border-red-300 bg-white/90 backdrop-blur-sm">
        <CardContent className="py-12 text-center">
          <div className="mb-8">
            <AlertTriangle className="w-20 h-20 mx-auto mb-4 text-red-500" />
            <h1 className="text-4xl font-bold text-[rgb(39,38,53)] mb-2">Something Went Wrong</h1>
            <p className="text-lg text-[rgb(39,38,53)]/70 mb-4">
              Don't worry, it's not you - it's us. An error occurred while loading this page.
            </p>
            {error.message && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-red-800 font-mono break-all">{error.message}</p>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={reset}
              size="lg"
              className="bg-[rgb(177,229,242)] text-[rgb(39,38,53)] hover:bg-[rgb(177,229,242)]/90"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Try Again
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[rgb(177,229,242)] hover:bg-[rgb(177,229,242)]/20"
            >
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
