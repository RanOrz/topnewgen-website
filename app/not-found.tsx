export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-2xl font-semibold text-foreground mb-2">Page Not Found</p>
        <p className="text-muted-foreground mb-8 max-w-md">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          Return Home
        </a>
      </div>
    </div>
  )
}
