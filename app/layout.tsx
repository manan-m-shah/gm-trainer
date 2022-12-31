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
                <head>
                    {/* title */}
                    <title>GM Trainer</title>
                </head>
                <body>
                    {children}
                </body>
            </html>
        </AppProvider>
    )
}
