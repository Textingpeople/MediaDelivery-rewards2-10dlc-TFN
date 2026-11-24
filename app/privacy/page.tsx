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
const h3 = 'text-xl font-semibold text-text-headline mt-6 mb-3';
const p = 'text-text-body mb-6';
const p4 = 'text-text-body mb-4';
const ul = 'list-disc pl-6 text-text-body mb-6 space-y-2';
const a = 'text-primary hover:text-primary-hover underline';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav active="privacy" />

      {/* Header */}
      <section className="bg-bg-light py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-text-headline mb-4">Privacy Policy</h1>
          <p className="text-lg text-text-body">Last Updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-none">

          <h2 className={h2}>1. Introduction</h2>
          <p className={p}>
            {COMPANY_INTRO} is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose and safeguard your information when you use our employee perks hub and our website at perksplushub.com.
          </p>

          <h2 className={h2}>2. Information We Collect</h2>

          <h3 className={h3}>2.1 Information You Provide</h3>
          <p className={p4}>When you sign up, we may collect:</p>
          <ul className={ul}>
            <li>Name and contact information (work email and, if you choose to give it, mobile phone number)</li>
            <li>Company ID, job title and department</li>
            <li>Your text message preferences and consent choices</li>
          </ul>

          <h3 className={h3}>2.2 Perk Usage and Kudos</h3>
          <p className={p4}>When you use Perks Plus Hub, we collect information that makes the hub work, including:</p>
          <ul className={ul}>
            <li>Which perks you view and use in your employer&apos;s catalog</li>
            <li>Reminder preferences for stipend resets, enrollment dates and events</li>
            <li>Kudos you send to or receive from teammates on your team wall</li>
          </ul>
          <p className={p}>
            Perk usage and kudos are visible only within your own company program. Your employer sees perk usage only in aggregate, never tied to you personally.
          </p>

          <h3 className={h3}>2.3 Information Collected Automatically</h3>
          <p className={p4}>When you use our website, we automatically collect:</p>
          <ul className={ul}>
            <li>Device information (browser type, operating system)</li>
            <li>IP address and general location data</li>
            <li>Usage data (pages visited, time spent)</li>
          </ul>

          <h3 className={h3}>2.4 Mobile Information</h3>
          <p className={p}>
            <strong>{NO_SHARING}</strong> We use your mobile number only to send the text messages you agreed to receive.
          </p>

          <h2 className={h2}>3. How We Use Your Information</h2>
          <p className={p4}>We use the information we collect to:</p>
          <ul className={ul}>
            <li>Provide and maintain Perks Plus Hub</li>
            <li>Show you the perks your employer provides and send the reminders you choose</li>
            <li>Show kudos on your team wall</li>
            <li>Give employers anonymous, aggregate reports on which perks are used most</li>
            <li>Manage your account and send account-related communications</li>
            <li>Detect and prevent fraud or abuse</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className={h2}>4. Information Sharing and Disclosure</h2>
          <p className={p}><strong>We never sell your data.</strong> We may share information only in these limited cases:</p>

          <h3 className={h3}>4.1 Your Employer</h3>
          <p className={p}>
            Your employer provides the perks and the Company ID. Employers see perk usage only in aggregate, and the dashboard is anonymous.
          </p>

          <h3 className={h3}>4.2 Service Providers</h3>
          <p className={p}>
            Vendors who perform services on our behalf, such as hosting, analytics and customer support. They are contractually obligated to protect your information.
          </p>

          <h3 className={h3}>4.3 Business Transfers</h3>
          <p className={p}>
            In connection with a merger, sale of company assets, financing or acquisition of all or part of our business.
          </p>

          <h3 className={h3}>4.4 Legal Requirements</h3>
          <p className={p}>
            When required by law, court order or government regulation, or when disclosure is necessary to protect rights or safety.
          </p>

          <h3 className={h3}>4.5 With Your Consent</h3>
          <p className={p}>
            We may share your information for any other purpose with your explicit consent.
          </p>

          <h2 className={h2}>5. Data Security</h2>
          <p className={p4}>
            We use appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure or destruction. These include:
          </p>
          <ul className={ul}>
            <li>Encryption of data in transit (HTTPS/TLS)</li>
            <li>Secure hosting infrastructure</li>
            <li>Access controls and authentication</li>
            <li>Regular security reviews and updates</li>
          </ul>

          <h2 className={h2}>6. How Long We Keep Information</h2>
          <p className={p}>
            We keep your information only as long as needed for the purposes in this Privacy Policy, unless a longer period is required or permitted by law. Account information is retained while your account is active and for a reasonable period afterward for legal and business purposes.
          </p>

          <h2 className={h2}>7. Your Rights and Choices</h2>
          <p className={p4}>Depending on where you live, you may have the following rights:</p>
          <ul className={ul}>
            <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Portability:</strong> Request a copy of your information in a portable format</li>
            <li><strong>Objection:</strong> Object to certain processing of your information</li>
            <li><strong>Opt-out:</strong> Opt out of text messages at any time by replying STOP</li>
          </ul>
          <p className={p}>
            To exercise these rights, contact us at <a href="mailto:support@perksplushub.com" className={a}>support@perksplushub.com</a>.
          </p>

          <h2 className={h2}>8. Cookies and Tracking Technologies</h2>
          <p className={p}>
            We use cookies and similar technologies to keep the site working. You can set your browser to refuse cookies or to tell you when one is being sent, but some parts of the service may not work if you do.
          </p>

          <h2 className={h2}>9. Third-Party Links</h2>
          <p className={p}>
            Our site may link to third-party websites. We are not responsible for their privacy practices, and we encourage you to review their policies.
          </p>

          <h2 className={h2}>10. Children&apos;s Privacy</h2>
          <p className={p}>
            Our service is not intended for individuals under 18. We do not knowingly collect personal information from children. If you believe we have, please contact us right away.
          </p>

          <h2 className={h2}>11. California Privacy Rights</h2>
          <p className={p}>
            If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect and the right to request deletion. We do not sell personal information.
          </p>

          <h2 className={h2}>12. Changes to This Privacy Policy</h2>
          <p className={p}>
            We may update this Privacy Policy from time to time by posting the new version on this page and updating the &quot;Last Updated&quot; date.
          </p>

          <h2 className={h2}>13. SMS Communications</h2>
          <p className={p4}>
            Perks Plus Hub sends text messages only to users who have opted in. There are two types, each with its own optional checkbox at sign up:
          </p>
          <ul className={ul}>
            <li>
              <strong>Account Notifications:</strong> perk reminders (stipend resets, enrollment dates, upcoming events), team kudos notices and account updates.
            </li>
            <li>
              <strong>Promotional:</strong> new perk announcements and featured perks.
            </li>
          </ul>
          <p className={p4}>{NO_SENSITIVE_TEXT}</p>
          <p className={p4}>
            <strong>{NO_SHARING}</strong>
          </p>
          <p className={p4}>
            Message and data rates may apply. Message frequency varies. To opt out at any time, reply <strong>STOP</strong> to any message. To re-subscribe, opt in again at sign up or contact us. For help, reply <strong>HELP</strong> or contact us at <a href="mailto:support@perksplushub.com" className={a}>support@perksplushub.com</a>.
          </p>

          <SampleMessages as="h3" title="Sample Messages" number="13.1" />

          <h2 className={h2}>14. Contact Us</h2>
          <p className={p4}>
            If you have questions about this Privacy Policy or our privacy practices, please contact us:
          </p>
          <ContactBlock />

        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

