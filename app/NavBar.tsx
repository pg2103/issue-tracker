'use client'
import classnames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiFillBug } from 'react-icons/ai'
import {useSession} from 'next-auth/react'
import { Box } from '@radix-ui/themes'
import { stat } from 'fs'

const NavBar = () => {
    const currentPath=usePathname()
    const{status,data:session}=useSession();
    const links=[
        {href:'/',label:'DashBoard'},
        {href:'/issues/list',label:'Issues'},
    ]
  return (
    <nav  className='flex space-x-6 border-b mb-5 px-5 h-14 items-center '>
        <Link href='/'>{<AiFillBug/>}</Link>
        <ul className='flex space-x-6'>
            {links.map((link)=>(
                <li key={link.href}>
                    <Link 
                    key={link.href} 
                    className={classnames({
                        'text-gray-900':currentPath===link.href,
                        'text-gray-500':currentPath!==link.href,
                        'hover:text-gray-800 transition-colors':true
                    })}  
                    href={link.href}>
                        {link.label}
                </Link>
                </li>
               
                ))
            }
        </ul>
        <Box>
            {status==='authenticated' && (
                <Link href='/api/auth/signout'>Log Out</Link>
            )
            }{
                status==='unauthenticated' && (
                    <Link href='/api/auth/signin'>Login</Link>
                )
            }
        </Box>
    </nav>
  )
}

export default NavBar