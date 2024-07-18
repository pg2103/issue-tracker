'use client'
import classnames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiFillBug } from 'react-icons/ai'

const NavBar = () => {
    const currentPath=usePathname()
    const links=[
        {href:'/',label:'DashBoard'},
        {href:'/issues/list',label:'Issues'},
    ]
  return (
    <nav  className='flex space-x-6 border-b mb-5 px-5 h-14 items-center '>
        <Link href='/'>{<AiFillBug/>}</Link>
        <ul className='flex space-x-6'>
            {links.map((link)=>(
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
                ))
            }
        </ul>
    </nav>
  )
}

export default NavBar