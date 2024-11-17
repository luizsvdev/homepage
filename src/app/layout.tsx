import type {Metadata} from 'next';
import localFont from 'next/font/local';
import './globals.css';
import React from 'react';
import {NextFontWithVariable} from 'next/dist/compiled/@next/font';

const geistSans: NextFontWithVariable = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono: NextFontWithVariable = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Luiz Silva - Portfolio',
  description: 'Created with love by Luiz Silva',
  
};

type RootLayout = { children: React.ReactNode };

export default function RootLayout({children}: Readonly<RootLayout>): React.JSX.Element {
  return (
      <html lang="pt">
      <body
          className={`
          h-dvh
          flex
          flex-col
          justify-self-center
          self-center
          items-center
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          `}>
      {children}
      </body>
      </html>
  );
}
