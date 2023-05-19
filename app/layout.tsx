import './globals.css'
import Navbar from './Components/Navbar'
import MyProfilePic from './Components/MyProfilePic'

export const metadata = {
  title: "Martins Blog",
  description: 'Created by Martin Ryan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}