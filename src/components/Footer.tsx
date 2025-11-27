import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mountain } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground scroll-mt-20">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-primary-foreground" />
              <span className="text-xl font-bold">NGO Connect</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80">
              Connecting Malawi’s NGOs for Impact and Sustainability.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Home</Link></li>
              <li><Link href="/#about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">About</Link></li>
              <li><Link href="/#packages" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Packages</Link></li>
              <li><Link href="/#contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <Link href="#" aria-label="Facebook page" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Twitter profile" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="LinkedIn profile" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} NGO Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
