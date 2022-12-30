'use client'
import '../styles/globals.css'
import AppProvider from "../context/AppProvider"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AppProvider>
            <html>
                <head></head>
                <body>
                    {children}
                </body>
            </html>
        </AppProvider>
    )
}
