import "../styles/globals.css"
import Script from "next/script"
import ScrollUp from "../components/General/ScrollUp/ScrollUp"
import Header from "../components/General/Header/Header"
import PageTransition from "../components/Layout/PageTransition"

export const metadata = {
  title: "Ram - Portfolio",
  description: "Ram's Portfolio",
  keywords: ["Ram", "Portfolio", "Junior", "Frontend", "Web", "Development"],
  icons: {
    icon: "/images/Ram-logos_transparent.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ScrollUp />
        <PageTransition>{children}</PageTransition>
        {/* {children} */}
      </body>
      <Script
        id="g-analytics-script-1"
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-QC967G8X09"
      />
      <Script
        id="g-analytics-script-2"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
					  
						gtag('config', 'G-QC967G8X09');`,
        }}
      />
    </html>
  )
}
