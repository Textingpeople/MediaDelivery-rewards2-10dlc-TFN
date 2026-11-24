import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import ContactForm from '../components/ContactForm';
import { NO_SHARING } from '../components/legal';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav active="contact" />

      {/* Hero Section */}
      <section className="bg-bg-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-text-headline mb-4">Contact Us</h1>
          <p className="text-xl text-text-body max-w-2xl mx-auto">
            Have a question about Perks Plus Hub? We&apos;d love to hear from you. Reach out and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-text-headline mb-8">Get in Touch</h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-5">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-headline mb-1">Phone</h3>
                  <a href="tel:+19083998307" className="text-primary hover:text-primary-hover text-lg">
                    (908) 399-8307
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-5">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-headline mb-1">Email</h3>
                  <a href="mailto:support@perksplushub.com" className="text-primary hover:text-primary-hover text-lg">
                    support@perksplushub.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-5">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-headline mb-1">Address</h3>
                  <p className="text-text-body text-lg leading-relaxed">
                    Media Delivery Solutions LLC<br />
                    9 Johnston Dr<br />
                    Bloomsbury, NJ 08804<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-5">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-headline mb-1">Business Hours</h3>
                  <p className="text-text-body text-lg">
                    Monday – Friday: 9am – 6pm EST<br />
                    Saturday – Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-text-body mt-10">{NO_SHARING}</p>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#E5E7EB]">
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
