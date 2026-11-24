import Link from 'next/link';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import {
  COMPANY_INTRO,
  LAST_UPDATED,
  NO_SHARING,
  NO_SENSITIVE_TEXT,
  SampleMessages,
  ContactBlock,
} from '../components/legal';

const h2 = 'text-2xl font-bold text-text-headline mt-8 mb-4';
const p = 'text-text-body mb-6';
const a = 'text-primary hover:text-primary-hover underline';

export default function SmsPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* Header */}
      <section className="bg-bg-light py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-text-headline mb-4">SMS Policy</h1>
          <p className="text-lg text-text-body">Last Updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-none">
          <p className={p}>
            {COMPANY_INTRO} is committed to responsible and transparent SMS communications. This page describes how and when we use SMS (text messaging) to communicate with our users.
          </p>

          <h2 className={h2}>What We Send</h2>
          <p className="text-text-body mb-4">
            If you opt in, Perks Plus Hub sends two kinds of text messages:
          </p>
          <ul className="list-disc pl-6 text-text-body mb-6 space-y-2">
            <li>
              <strong>Account Notifications:</strong> perk reminders (stipend resets, enrollment dates, upcoming events), team kudos notices and account updates.
            </li>
            <li>
              <strong>Promotional:</strong> new perk announcements and featured perks.
            </li>
          </ul>
          <p className={p}>{NO_SENSITIVE_TEXT}</p>

          <h2 className={h2}>Opt-In</h2>
          <p className={p}>
            SMS messages are optional. During employee sign up there are two separate, unchecked boxes: one for Account Notification messages and one for Promotional messages. You can choose either, both or neither. Opting in is not required to use Perks Plus Hub, and consent is not a condition of purchasing any products or services. A mobile phone number is required only if you opt in to texts.
          </p>

          <h2 className={h2}>Opt-Out</h2>
          <p className={p}>
            You may opt out at any time by replying <strong>STOP</strong> to any message you receive from us. After opting out, you will no longer receive SMS messages from Perks Plus Hub. To re-subscribe, opt in again on the{' '}
            <Link href="/signup" className={a}>Employee Sign Up</Link> page or contact us at{' '}
            <a href="mailto:support@perksplushub.com" className={a}>support@perksplushub.com</a>.
          </p>

          <h2 className={h2}>Help</h2>
          <p className="text-text-body mb-4">
            For help with SMS messages, reply <strong>HELP</strong> to any message or contact us at:
          </p>
          <div className="bg-bg-light border border-[#E5E7EB] rounded-lg p-6 mb-6">
            <p className="text-text-body mb-2"><strong>Email:</strong> <a href="mailto:support@perksplushub.com" className={a}>support@perksplushub.com</a></p>
            <p className="text-text-body"><strong>Phone:</strong> <a href="tel:+19083998307" className={a}>(908) 399-8307</a></p>
          </div>

          <h2 className={h2}>Message &amp; Data Rates</h2>
          <p className={p}>
            Message and data rates may apply depending on your mobile carrier and plan. Message frequency varies. Perks Plus Hub is not responsible for any charges incurred from your mobile carrier.
          </p>

          <h2 className={h2}>Data Privacy</h2>
          <p className={p}>
            <strong>{NO_SHARING}</strong> Your phone number and SMS consent are used solely to deliver the text messages described in this policy and our{' '}
            <Link href="/privacy" className={a}>Privacy Policy</Link>.
          </p>

          <SampleMessages as="h2" />

          <h2 className={h2}>Carrier Disclaimer</h2>
          <p className={p}>
            Carriers are not liable for delayed or undelivered messages. Delivery of SMS messages is subject to your mobile carrier&apos;s network availability and coverage.
          </p>

          <h2 className={h2}>Contact Information</h2>
          <ContactBlock />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
