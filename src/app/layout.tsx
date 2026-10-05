import type { Metadata } from "next";
import "./globals.css";
import "./links.css";
import "./overrides.css";

export const metadata: Metadata = {
  title: "Paras Chavan | Software Engineer",
  description: "Portfolio of Paras Chavan, a Software Engineer focused on backend engineering, scalable APIs, cloud-native systems, and full-stack development.",
  openGraph: { title: "Paras Chavan | Software Engineer", description: "Backend-first engineer focused on reliable software systems.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
