import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[rgb(232,233,243)] via-[rgb(206,206,206)] to-[rgb(177,229,242)] flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full border-2 border-[rgb(177,229,242)] bg-white/90 backdrop-blur-sm">
        <CardContent className="py-12 text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-[rgb(177,229,242)] mb-4">404</h1>
            <h2 className="text-3xl font-bold text-[rgb(39,38,53)] mb-2">Page Not Found</h2>
            <p className="text-lg text-[rgb(39,38,53)]/70">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[rgb(177,229,242)] text-[rgb(39,38,53)] hover:bg-[rgb(177,229,242)]/90"
            >
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[rgb(177,229,242)] hover:bg-[rgb(177,229,242)]/20"
            >
              <Link href="/projects">
                <Search className="w-5 h-5 mr-2" />
                View Projects
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[rgb(177,229,242)] hover:bg-[rgb(177,229,242)]/20"
            >
              <Link href="/contact">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Contact Me
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
