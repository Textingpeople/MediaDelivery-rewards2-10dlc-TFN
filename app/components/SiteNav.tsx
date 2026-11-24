import Link from 'next/link';

type NavKey = 'home' | 'about' | 'privacy' | 'terms' | 'contact';

const links: { key: NavKey; href: string; label: string }[] = [
  { key: 'home', href: '/', label: 'Home' },
  { key: 'about', href: '/about', label: 'About' },
  { key: 'privacy', href: '/privacy', label: 'Privacy' },
  { key: 'terms', href: '/terms', label: 'Terms' },
  { key: 'contact', href: '/contact', label: 'Contact' },
];

export default function SiteNav({ active }: { active?: NavKey }) {
  return (
    <nav className="bg-white shadow-sm border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-extrabold text-text-headline tracking-tight">Perks Plus Hub</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((l) => (
                <Link
                  key={l.key}
                  href={l.href}
                  className={`${
                    active === l.key ? 'text-primary font-semibold' : 'text-text-body hover:text-primary'
                  } px-3 py-2 rounded-md text-sm font-medium`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/signup"
                className="bg-primary text-white hover:bg-primary-hover px-4 py-2 rounded-md text-sm font-semibold"
              >
                Employee Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
