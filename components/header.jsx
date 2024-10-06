import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/images/beanieowl_logo_100x100.png';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    // { linkText: 'Home', href: '/' },
   //  { linkText: 'Revalidation', href: '/revalidation' },
    // { linkText: 'Image CDN', href: '/image-cdn' },
 //   { linkText: 'Edge Function', href: '/edge' },
   //  { linkText: 'Blobs', href: '/blobs' },
   // { linkText: 'Classics', href: '/classics' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <Link href="/">
                <Image src={netlifyLogo} alt="Netlify logo" />
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-block px-1.5 py-1 transition hover:opacity-80 sm:px-3 sm:py-2"
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
