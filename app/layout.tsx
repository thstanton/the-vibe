import type { Metadata } from 'next'
import { Nunito_Sans, Piazzolla } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const piazzolla = Piazzolla({
    subsets: ['latin'],
    variable: '--font-piazzolla',
})
const nunito = Nunito_Sans({
    subsets: ['latin'],
    variable: '--font-nunito',
})

export const metadata: Metadata = {
    title: 'The Vibe',
    description: 'Roaming brass band bringing the energy to your events',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" data-theme="dark">
            <head>
                <link
                    rel="icon"
                    href="/images/vibe-logo.svg?<generated>"
                    type="image/<generated>"
                    sizes="<generated>"
                />
            </head>
            <body
                className={`${piazzolla.variable} font-subtitle ${nunito.className} font-sans`}
            >
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
