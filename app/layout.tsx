import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Everclean Home Services | A Cleaner Home, More Time for Life', description: 'Thoughtful home cleaning, made simple. Explore recurring, deep, and move-in/move-out cleaning with Everclean Home Services.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
