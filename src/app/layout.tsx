import { ThemeProvider } from '@/providers/ThemeProvider'
// import NextTopLoader from 'nextjs-toploader'
import './globals.css'
import SidebarComponent from '@/components/sidebar/SidebarComponent'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import ReactQueryProvider from '@/providers/ReactQueryProvider'

const defaultUrl = 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Next.js and Supabase Starter Kit',
  description: 'The fastest way to build apps with Next.js and Supabase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      style={{ colorScheme: 'dark' }}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground">
        {/* <NextTopLoader showSpinner={false} height={2} color="#2acf80" /> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <ReactQueryProvider> */}
            <SidebarComponent />
            <main className="flex min-h-screen flex-col items-center">
              {children}
            </main>
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          {/* </ReactQueryProvider> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
