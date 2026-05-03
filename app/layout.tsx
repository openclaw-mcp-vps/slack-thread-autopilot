import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Thread Autopilot – Auto-resolve Slack threads",
  description: "Monitors Slack threads and automatically marks them resolved when keywords like solved, fixed, done, or shipped appear."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="865ecd4a-e414-4c17-88a2-6735392b3fa5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
