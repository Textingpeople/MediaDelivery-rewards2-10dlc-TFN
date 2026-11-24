import Link from 'next/link';
import { Gift } from 'lucide-react';
import SiteNav from './components/SiteNav';
import SiteFooter from './components/SiteFooter';
import PerksMockup from './components/PerksMockup';
import { PERKS_DISCLAIMER } from './components/legal';
import { features, steps, audiences, benefits } from './components/homeData';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav active="home" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="inline-flex items-center bg-accent-soft text-primary px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Gift className="w-4 h-4 mr-2" />
            Your Employee Perks Hub
          </div>
          <h1 className="text-5xl font-extrabold text-text-headline sm:text-6xl md:text-7xl leading-tight">
            All Your Employee Perks
            <span className="block text-primary">in One Place</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-text-body">
            Perks Plus Hub is where you see, track and use the perks your employer offers, from wellness stipends and learning benefits to commuter perks, company events and team lunches.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-4 bg-primary text-white text-lg font-semibold rounded-lg hover:bg-primary-hover transition-colors shadow-md"
            >
              Employee Sign Up
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white text-primary text-lg font-semibold rounded-lg hover:bg-bg-light transition-colors border-2 border-primary"
            >
              Learn More
            </Link>
          </div>
          <p className="mt-8 max-w-2xl mx-auto text-sm text-text-body">{PERKS_DISCLAIMER}</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-bg-light py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-headline">Everything You Need to Use Your Perks</h2>
            <p className="mt-4 text-xl text-text-body">
              One hub for the perks your employer already offers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-[#E5E7EB]">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-accent-soft rounded-full flex items-center justify-center">
                    <f.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-text-headline text-center mb-3">{f.title}</h3>
                <p className="text-text-body text-center">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-headline">How Perks Plus Hub Works</h2>
            <p className="mt-4 text-xl text-text-body">
              From your employer&apos;s perks list to your phone in four steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              {steps.map((s, i) => (
                <div key={s.title} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-white text-lg mr-6">{i + 1}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-headline mb-3">{s.title}</h3>
                    <p className="text-lg text-text-body leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <PerksMockup />
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="bg-bg-light py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-headline">Made for Every Employee</h2>
            <p className="mt-4 text-xl text-text-body">
              Whether you just started or have been here for years, your perks are easy to find
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((a) => (
              <div key={a.title} className="bg-white border-2 border-[#E5E7EB] rounded-xl p-8 hover:border-primary transition-colors">
                <h3 className="text-xl font-bold text-text-headline mb-4">{a.title}</h3>
                <p className="text-text-body mb-6">{a.desc}</p>
                <ul className="space-y-2 text-text-body">
                  {a.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-headline">Why Employees Love Perks Plus Hub</h2>
            <p className="mt-4 text-xl text-text-body">The perks you have, finally easy to see</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item) => (
              <div key={item.title} className="text-center">
                <div className="bg-accent-soft w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-headline mb-2">{item.title}</h3>
                <p className="text-text-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-accent-soft border border-[#E5E7EB] rounded-2xl overflow-hidden">
          <div className="px-6 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="text-4xl font-bold text-text-headline mb-6">
              Ready to See Your Perks?
            </h2>
            <p className="text-xl text-text-body mb-8 max-w-2xl mx-auto">
              Ask your employer for your Company ID, then sign up to see the perks available to you.
            </p>
            <Link
              href="/signup"
              className="inline-block px-8 py-4 bg-primary text-white text-lg font-semibold rounded-lg hover:bg-primary-hover transition-colors shadow-lg"
            >
              Employee Sign Up
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

