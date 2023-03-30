import { A } from "solid-start";

import siteMetadata from '../data/siteMetadata'
import headerNavLinks from '../data/headerNavLinks'

export default function Header() {
    return (
        <header class="md:flex w-full items-center justify-between p-4" >
            <div class="uppercase font-thin text-2xl font-semibold">
                <A href="/" aria-label={siteMetadata.headerTitle}>
                    {siteMetadata.headerTitle}
                </A>
            </div>
            <div class="float-right">
                {headerNavLinks.map((link) => (
                    <A
                        href={link.href}
                        class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg"
                    >
                        {link.title}
                    </A>
                ))}
            </div>
        </header>
    )
}
