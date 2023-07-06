export const metadata = {
  title: 'Events - Zendegi',
  description: 'Share events with your loved ones.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-white">{children}</div>
}
