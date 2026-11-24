import Link from 'next/link';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import {
  COMPANY_INTRO,
  LAST_UPDATED,
  NO_SHARING,
  NO_SENSITIVE_TEXT,
  PERKS_DISCLAIMER,
  SampleMessages,
  ContactBlock,
} from '../components/legal';

const h2 = 'text-2xl font-bold text-text-headline mt-8 mb-4';
const h3 = 'text-xl font-semibold text-text-headline mt-6 mb-3';
const p = 'text-text-body mb-6';
const p4 = 'text-text-body mb-4';
const ul = 'list-disc pl-6 text-text-body mb-6 space-y-2';
const a = 'text-primary hover:text-primary-hover underline';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav active="terms" />

      {/* Header */}
      <section className="bg-bg-light py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-text-headline mb-4">Terms of Service</h1>
          <p className="text-lg text-text-body">Last Updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-none">

          <h2 className={h2}>1. Acceptance of Terms</h2>
          <p className={p}>
            {COMPANY_INTRO} provides the Perks Plus Hub employee perks hub (&quot;Service&quot;). By accessing or using the Service, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, you may not use the Service. These Terms apply to all users of the Service, including employees and employers.
          </p>

          <h2 className={h2}>2. Description of Service</h2>
          <p className={p4}>
            Perks Plus Hub is one place where employees see, track and use the perks their employer offers. The Service includes:
          </p>
          <ul className={ul}>
            <li>A perks catalog of the employer&apos;s own perks, such as wellness stipends, learning and tuition benefits, commuter perks, extra PTO days, company events, team lunches and employer-arranged discounts</li>
            <li>Perk reminders for stipend resets, enrollment dates and upcoming events</li>
            <li>A team kudos wall for short peer thank-yous</li>
            <li>New-perk announcements when an employer adds something</li>
            <li>An employer dashboard showing which perks are used most, anonymous and in aggregate only</li>
          </ul>
          <p className={p}>{PERKS_DISCLAIMER}</p>

          <h2 className={h2}>3. Account Registration and Security</h2>

          <h3 className={h3}>3.1 Account Creation</h3>
          <p className={p}>
            To use the Service, you sign up with a Company ID provided by your employer and give accurate, complete and current information. You are responsible for keeping your account credentials confidential and for activity under your account.
          </p>

          <h3 className={h3}>3.2 Account Security</h3>
          <p className={p}>
            Tell us right away about any unauthorized use of your account or other security breach. We are not liable for loss or damage caused by your failure to follow these security obligations.
          </p>

          <h3 className={h3}>3.3 Account Eligibility</h3>
          <p className={p}>
            You must be at least 18 years old and have the legal capacity to enter into contracts. By using the Service, you confirm that you meet these requirements.
          </p>

          <h2 className={h2}>4. Acceptable Use Policy</h2>
          <p className={p4}>You agree not to use the Service to:</p>
          <ul className={ul}>
            <li>Violate any applicable laws, regulations or third-party rights</li>
            <li>Send spam or unsolicited messages, or engage in fraud</li>
            <li>Post kudos that are harassing, discriminatory or abusive</li>
            <li>Transmit malware, viruses or other harmful code</li>
            <li>Interfere with or disrupt the Service or its servers</li>
            <li>Attempt to gain unauthorized access to any part of the Service</li>
            <li>Impersonate any person or entity or misrepresent your affiliation</li>
            <li>Collect or harvest personal information without consent</li>
          </ul>

          <h2 className={h2}>5. Employer-Provided Perks</h2>

          <h3 className={h3}>5.1 Perks Are Set by Your Employer</h3>
          <p className={p}>
            Your employer decides which perks are offered, who is eligible, and the rules, dates and limits for each perk. Perks Plus Hub only displays that information and sends the reminders you choose.
          </p>

          <h3 className={h3}>5.2 No Products or Payments</h3>
          <p className={p}>
            Perks Plus Hub is not a store and does not handle payments for perks. Questions about whether you qualify for a perk should go to your employer or HR team.
          </p>

          <h3 className={h3}>5.3 Employer Responsibility</h3>
          <p className={p}>
            Employers are solely responsible for providing the perks they list, for the accuracy of perk details they enter, and for obtaining any consents they need from their employees.
          </p>

          <h2 className={h2}>6. Fees</h2>
          <p className={p}>
            Employees do not pay to use Perks Plus Hub. Any fees for the Service are agreed separately between Perks Plus Hub and the employer. Changes to those fees will be communicated to the employer with reasonable notice.
          </p>

          <h2 className={h2}>7. Intellectual Property Rights</h2>

          <h3 className={h3}>7.1 Our Rights</h3>
          <p className={p}>
            The Service and all content, features and functionality are owned by Media Delivery Solutions LLC and are protected by copyright, trademark and other intellectual property laws. You may not copy, modify, distribute or create derivative works based on the Service without our express written permission.
          </p>

          <h3 className={h3}>7.2 Your Content</h3>
          <p className={p}>
            You retain ownership of content you submit, such as kudos. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce and display it solely to provide the Service to your company program.
          </p>

          <h2 className={h2}>8. Service Availability and Support</h2>

          <h3 className={h3}>8.1 Availability</h3>
          <p className={p}>
            We work to keep the Service available, but we do not guarantee uninterrupted access. We may perform maintenance with advance notice when possible.
          </p>

          <h3 className={h3}>8.2 Support</h3>
          <p className={p}>
            We provide email and phone support during business hours at <a href="mailto:support@perksplushub.com" className={a}>support@perksplushub.com</a> and <a href="tel:+19083998307" className={a}>(908) 399-8307</a>.
          </p>

          <h2 className={h2}>9. Data and Privacy</h2>
          <p className={p}>
            Your use of the Service is also governed by our <Link href="/privacy" className={a}>Privacy Policy</Link>. Perk usage and kudos are visible only within your own company program, employers see perk usage only in aggregate, and your data is never sold.
          </p>

          <h2 className={h2}>10. Disclaimers and Limitations of Liability</h2>

          <h3 className={h3}>10.1 Service &quot;As Is&quot;</h3>
          <p className={p}>
            THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT.
          </p>

          <h3 className={h3}>10.2 Limitation of Liability</h3>
          <p className={p}>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, MEDIA DELIVERY SOLUTIONS LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, USE, GOODWILL OR OTHER INTANGIBLE LOSSES. WE ARE NOT RESPONSIBLE FOR THE PERKS YOUR EMPLOYER OFFERS OR FOR DECISIONS YOUR EMPLOYER MAKES ABOUT THEM.
          </p>

          <h3 className={h3}>10.3 Maximum Liability</h3>
          <p className={p}>
            Our total liability for all claims arising from or related to the Service shall not exceed the amount you paid us, if any, in the twelve (12) months preceding the claim.
          </p>

          <h2 className={h2}>11. Indemnification</h2>
          <p className={p4}>
            You agree to indemnify and hold harmless Media Delivery Solutions LLC and its officers, directors, employees and agents from claims, liabilities, damages, losses and expenses (including reasonable attorney fees) arising from:
          </p>
          <ul className={ul}>
            <li>Your use of the Service</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any rights of another party</li>
            <li>Your violation of applicable laws or regulations</li>
          </ul>

          <h2 className={h2}>12. Termination</h2>

          <h3 className={h3}>12.1 Termination by You</h3>
          <p className={p}>
            You may stop using the Service or ask us to close your account at any time by contacting us. Your right to use the Service ends when your account is closed.
          </p>

          <h3 className={h3}>12.2 Termination by Us</h3>
          <p className={p}>
            We may suspend or end your access to the Service if you violate these Terms, if your employer ends its program, or for conduct we believe is harmful to other users or the Service.
          </p>

          <h2 className={h2}>13. Dispute Resolution</h2>

          <h3 className={h3}>13.1 Informal Resolution</h3>
          <p className={p}>
            Before filing a claim, you agree to contact us and try to resolve the dispute informally by sending a written notice describing the dispute and your proposed resolution.
          </p>

          <h3 className={h3}>13.2 Arbitration</h3>
          <p className={p}>
            If we cannot resolve the dispute informally, any dispute arising from these Terms or the Service shall be resolved through binding arbitration under the rules of the American Arbitration Association.
          </p>

          <h3 className={h3}>13.3 Class Action Waiver</h3>
          <p className={p}>
            Any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated or representative action.
          </p>


          <h2 className={h2}>14. General Provisions</h2>

          <h3 className={h3}>14.1 Governing Law</h3>
          <p className={p}>
            These Terms are governed by the laws of the United States and the State of New Jersey, without regard to conflict of law provisions.
          </p>

          <h3 className={h3}>14.2 Entire Agreement</h3>
          <p className={p}>
            These Terms, together with our Privacy Policy, are the entire agreement between you and Media Delivery Solutions LLC regarding the Service and replace all prior agreements.
          </p>

          <h3 className={h3}>14.3 Severability</h3>
          <p className={p}>
            If any provision of these Terms is found to be unenforceable, the remaining provisions continue in full force and effect.
          </p>

          <h2 className={h2}>15. Changes to Terms</h2>
          <p className={p}>
            We may modify these Terms at any time. We will post the updated Terms on our website and update the &quot;Last Updated&quot; date. Continued use of the Service after changes take effect means you accept the modified Terms.
          </p>

          <h2 className={h2}>16. SMS Communications Policy</h2>

          <h3 className={h3}>16.1 Overview</h3>
          <p className={p}>
            Perks Plus Hub is committed to responsible and transparent SMS communications. This section describes how and when we use text messaging to communicate with our users.
          </p>

          <h3 className={h3}>16.2 What We Send</h3>
          <p className={p4}>If you opt in, we send two kinds of text messages:</p>
          <ul className={ul}>
            <li>
              <strong>Account Notifications:</strong> perk reminders (stipend resets, enrollment dates, upcoming events), team kudos notices and account updates.
            </li>
            <li>
              <strong>Promotional:</strong> new perk announcements and featured perks.
            </li>
          </ul>
          <p className={p}>{NO_SENSITIVE_TEXT}</p>

          <h3 className={h3}>16.3 Opt-In</h3>
          <p className={p}>
            SMS messages are optional. At sign up there are two separate, unchecked boxes, one for Account Notification messages and one for Promotional messages. Opting in is not required to use the Service, and consent is not a condition of purchasing any products or services.
          </p>

          <h3 className={h3}>16.4 Opt-Out and Re-Subscribe</h3>
          <p className={p}>
            Reply <strong>STOP</strong> to any message to opt out. To re-subscribe, opt in again on the <Link href="/signup" className={a}>Employee Sign Up</Link> page or contact us at <a href="mailto:support@perksplushub.com" className={a}>support@perksplushub.com</a>.
          </p>

          <h3 className={h3}>16.5 Help</h3>
          <p className={p}>
            Reply <strong>HELP</strong> to any message or contact us at <a href="mailto:support@perksplushub.com" className={a}>support@perksplushub.com</a> or <a href="tel:+19083998307" className={a}>(908) 399-8307</a>.
          </p>

          <h3 className={h3}>16.6 Message &amp; Data Rates</h3>
          <p className={p}>
            Message and data rates may apply depending on your mobile carrier and plan. Message frequency varies. Perks Plus Hub is not responsible for charges from your mobile carrier.
          </p>

          <h3 className={h3}>16.7 Data Privacy</h3>
          <p className={p}>
            <strong>{NO_SHARING}</strong> See our <Link href="/privacy" className={a}>Privacy Policy</Link>.
          </p>

          <SampleMessages as="h3" title="Sample Messages" number="16.8" />

          <h3 className={h3}>16.9 Carrier Disclaimer</h3>
          <p className={p}>
            Carriers are not liable for delayed or undelivered messages. Delivery of SMS messages is subject to your mobile carrier&apos;s network availability and coverage.
          </p>

          <h2 className={h2}>17. Contact Information</h2>
          <p className={p4}>If you have any questions about these Terms, please contact us:</p>
          <ContactBlock />

        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

