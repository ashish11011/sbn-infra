import Link from 'next/link'
import React from 'react'

const AdminNavBar = () => {

    return (
        <div className='w-full border-b-2 px-8 py-3 flex justify-between items-center gap-4 bg-transparent z-50'>
            <div className='relative h-10 w-auto min-w-44'>
                {/* <Image src='/logo.png' layout='fill' alt='logo' /> */}
                <p className=' text-3xl font-medium' >Admin</p>

            </div>
            <div className=" hidden md:flex items-center gap-1">
                {
                    navElements.map((element: any, index) => {
                        return (
                            <Link key={index} href={element[Object.keys(element)[0]]} className=' text-primary-gray font-medium hover:text-primary-blue px-4 py-2 rounded-md hover:bg-gray-100 '>{Object.keys(element)[0]}</Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AdminNavBar;

const navElements = [
    {
        "Home": "/admin/",
    },
    {
        "Careers": "/admin/careers",
    },
    // {
    //     "About": "/about",
    // },
    // {
    //     "Contact": "/contact",
    // },
    {
        "Projects": "/admin/projects",
    }
]