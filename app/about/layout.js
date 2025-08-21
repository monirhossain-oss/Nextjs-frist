import Link from 'next/link'
import React from 'react'

export default function Aboutlayout({children}) {
    return (
        <div>
            <nav>
                <ul className="flex gap-4">
                    <li><Link href="/about/product">product</Link></li>
                    <li><Link href="/about/customer">customer</Link></li>
                </ul>
            </nav>
            {children}
        </div>
    )
}
