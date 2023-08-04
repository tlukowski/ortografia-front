import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ortografia - Aplikacja dla dzieci",
  description: "Ortografia - Aplikacja dla dzieci to interaktywna i edukacyjna aplikacja, stworzona z myślą o wspieraniu dzieci w nauce poprawnego pisania. Jest to nowoczesne narzędzie, które skupia się na rozwijaniu umiejętności ortograficznych w ciekawy i zabawny sposób.Głównym celem aplikacji jest nauka ortografii w sposób dostępny i zrozumiały dla najmłodszych użytkowników. Wykorzystuje ona atrakcyjne grafiki, kolorowe animacje i interaktywne elementy, które przyciągają uwagę dzieci i motywują do nauki. Intuicyjny interfejs zapewnia łatwość obsługi, umożliwiając maluchom samodzielną naukę, jednocześnie zachęcając do regularnych ćwiczeń",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={` ${inter.className}`}>
        <main className="max-w-sm flex bg-[#6E88F7] min-h-screen mx-auto flex-col px-6 text-center relative ">
          {children}
        </main>
      </body>
    </html>
  );
}
