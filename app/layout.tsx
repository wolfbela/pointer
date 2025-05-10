import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="bg-white">
            <body className="h-screen">
                {children}
                <Toaster />
            </body>
        </html>
    );
}
