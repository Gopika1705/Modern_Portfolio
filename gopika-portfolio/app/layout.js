import "./globals.css";

export const metadata = {
  title: "Gopika J — Portfolio",
  description: "Computer Science Engineering Student | Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden font-body antialiased">
        {children}
      </body>
    </html>
  );
}
