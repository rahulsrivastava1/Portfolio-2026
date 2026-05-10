import "./globals.css";

export const metadata = {
  title: "Rahul Srivastava | Software Engineer & Full Stack Developer",
  description:
    "Portfolio of Rahul Srivastava — Software Engineer with 3+ years of experience specializing in React, Next.js, Node.js, Django, and building scalable full-stack web applications.",
  keywords: [
    "Rahul Srivastava",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Django",
    "Portfolio",
  ],
  authors: [{ name: "Rahul Srivastava" }],
  creator: "Rahul Srivastava",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Rahul Srivastava | Software Engineer",
    description: "Full Stack Software Engineer · React · Next.js · Node.js · Django",
    siteName: "Rahul Srivastava Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Srivastava | Software Engineer",
    description: "Full Stack Software Engineer · React · Next.js · Node.js · Django",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
