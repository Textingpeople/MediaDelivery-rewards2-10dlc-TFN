import Link from 'next/link';
import { BarChart3 } from 'lucide-react';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import { values, capabilities } from '../components/aboutData';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav active="about" />

      {/* Hero Section */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-text-headline mb-6">
              About Perks Plus Hub
            </h1>
            <p className="text-xl text-text-body max-w-3xl mx-auto">
              Employers put real thought into the perks they offer. Perks Plus Hub makes sure employees can actually see, track and use them.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-text-headline mb-6">Our Story</h2>
            <p className="text-lg text-text-body mb-4">
              Companies offer perks for good reasons: to support wellness, encourage learning, ease the commute, give people time off and bring teams together. But those perks are often scattered across handbooks, emails and benefit portals.
            </p>
            <p className="text-lg text-text-body mb-4">
              Without one place to look, employees miss things. A stipend resets and nobody noticed. Enrollment opens and the window closes. A company event goes by without a calendar invite.
            </p>
            <p className="text-lg text-text-body">
              Perks Plus Hub was built to fix that. It gives employees a single hub to see their employer&apos;s perks, get reminders at the right moments and leave a quick thank-you for a teammate on the kudos wall.
            </p>
          </div>
          <div className="bg-bg-light rounded-2xl p-8 border border-[#E5E7EB]">
            <div className="space-y-6">
              {values.map((v) => (
                <div key={v.title} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-accent-soft rounded-full flex items-center justify-center">
                      <v.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-text-headline mb-2">{v.title}</h3>
                    <p className="text-text-body">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What the Hub Does */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-headline mb-4">What Perks Plus Hub Does</h2>
            <p className="text-xl text-text-body">
              Built around the perks your employer already provides
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((c) => (
              <div key={c.title} className="text-center">
                <div className="bg-accent-soft w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <c.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-headline mb-2">{c.title}</h3>
                <p className="text-text-body">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto flex items-start bg-white border border-[#E5E7EB] rounded-xl p-6">
            <BarChart3 className="w-8 h-8 text-primary mr-4 flex-shrink-0" />
            <p className="text-text-body">
              For employers, a simple dashboard shows which perks are used most. It is anonymous and aggregate only, so it never identifies an individual employee.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-text-headline mb-6">
            Ready to See Your Perks?
          </h2>
          <p className="text-xl text-text-body mb-8 max-w-2xl mx-auto">
            Ask your employer for your Company ID, then sign up to find the perks available to you.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 bg-primary text-white text-lg font-semibold rounded-lg hover:bg-primary-hover transition-colors shadow-lg"
          >
            Employee Sign Up
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
