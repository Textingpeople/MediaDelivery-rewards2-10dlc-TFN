import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <span className="text-2xl font-extrabold text-white tracking-tight">Perks Plus Hub</span>
            <p className="text-gray-300 mt-3">
              An employee perks hub where employees see, track and use the perks their employer offers.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link href="/signup" className="text-gray-300 hover:text-white">Employee Sign Up</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-gray-300 hover:text-white">Terms</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-white">Privacy</Link></li>
              <li><Link href="/sms-policy" className="text-gray-300 hover:text-white">SMS Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <p className="text-gray-300">
              <a href="mailto:support@perksplushub.com" className="hover:text-white">support@perksplushub.com</a>
            </p>
            <p className="text-gray-300 mt-1">perksplushub.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Media Delivery Solutions LLC, d/b/a Perks Plus Hub. All rights reserved.</p>
          <p>
            9 Johnston Dr, Bloomsbury, NJ 08804, United States &middot;{' '}
            <a href="tel:+19083998307" className="hover:text-white">(908) 399-8307</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
