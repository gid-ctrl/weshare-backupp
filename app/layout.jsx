import './globals.css'
import Nav from './auth/Nav'
import queryWrapper from './auth/querywrapper'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='mx-4 md:mx-48 xl:mx96 bg-gray-200'>
        <queryWrapper>
            <Nav />
            {children}
        </queryWrapper>
      </body>
    </html>
  )
}