import Link from 'next/link';

type Props = {
  transactional: boolean;
  promotional: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const checkboxClass = 'mt-1 h-4 w-4 accent-primary focus:ring-primary border-gray-300 rounded flex-shrink-0';
const linkClass = 'text-primary font-medium underline hover:text-primary-hover';

function PolicyLinks() {
  return (
    <>
      {' '}
      See our <Link href="/terms" className={linkClass}>Terms of Service</Link> and{' '}
      <Link href="/privacy" className={linkClass}>Privacy Policy</Link>.
    </>
  );
}

export default function SmsConsent({ transactional, promotional, onChange }: Props) {
  return (
    <div className="space-y-4">
      <div className="bg-bg-light border border-gray-300 rounded-lg p-5">
        <h3 className="text-sm font-semibold text-text-headline mb-2">What Perks Plus Hub will text you</h3>
        <ul className="list-disc pl-5 text-sm text-text-body space-y-1">
          <li>Perk reminders (stipend resets, enrollment dates, events)</li>
          <li>Team kudos notices</li>
          <li>Account notifications</li>
          <li>Promotional, if selected: new perk announcements and featured perks</li>
        </ul>
      </div>

      <div className="bg-bg-light border border-gray-300 rounded-lg p-5">
        <div className="flex items-start">
          <input type="checkbox" id="smsTransactional" name="smsTransactional" checked={transactional}
            onChange={onChange} className={checkboxClass} />
          <label htmlFor="smsTransactional" className="ml-3 text-sm leading-relaxed text-text-body">
            By checking this box, I agree to receive Transactional Account Notification SMS messages from Perks Plus Hub at the phone number provided. I understand I may opt out at any time by replying STOP. Reply HELP for help. Message and data rates may apply. Message frequency varies. Opting in is optional and not required to submit this form. Consent is not required as a condition of purchasing any products or services.
            <PolicyLinks />
          </label>
        </div>
      </div>

      <div className="bg-bg-light border border-gray-300 rounded-lg p-5">
        <div className="flex items-start">
          <input type="checkbox" id="smsPromotional" name="smsPromotional" checked={promotional}
            onChange={onChange} className={checkboxClass} />
          <label htmlFor="smsPromotional" className="ml-3 text-sm leading-relaxed text-text-body">
            By checking this box, I agree to receive Promotional Marketing SMS messages from Perks Plus Hub at the phone number provided, including new perk announcements and featured perks. I understand I may opt out at any time by replying STOP. Reply HELP for help. Message and data rates may apply. Message frequency varies. Opting in is optional and not required to submit this form. Consent is not required as a condition of purchasing any products or services.
            <PolicyLinks />
          </label>
        </div>
      </div>
    </div>
  );
}
