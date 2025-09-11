import { Toaster } from "sonner";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ConvexClientProvider } from '@/components/providers/convex-providers'
import { ModalProvider } from "@/components/providers/modal-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NoteVibe',
  description: 'The connected workspace for BAM.',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light",
        url: "/file.svg",
        href: "/file.svg"
      },
      {
        media: "(prefers-color-scheme: dark",
        url: "/file2.svg",
        href: "/file2.svg"
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute='class'
              defaultTheme='system'
              enableSystem
              disableTransitionOnChange
              storageKey='nexion-theme'
              >
                <Toaster position="bottom-center" />
                <ModalProvider />
                {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  )
}
