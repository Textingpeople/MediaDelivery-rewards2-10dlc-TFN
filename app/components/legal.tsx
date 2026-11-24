export const LAST_UPDATED = 'November 24, 2026';

export const COMPANY_INTRO =
  'Media Delivery Solutions LLC, a Wyoming limited liability company, d/b/a Perks Plus Hub ("we," "our," or "us")';

export const NO_SHARING =
  'No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.';

export const PERKS_DISCLAIMER =
  'Perks Plus Hub shows the perks your employer provides. We do not sell products, issue gift cards or pay cash, and perks are set by your employer.';

export const NO_SENSITIVE_TEXT = 'Texts never include account numbers, pay details or SSNs.';

export const ACCOUNT_SAMPLES = [
  "Perks Plus Hub: You're signed up for perk alerts from your employer's perks program. Msg frequency varies. Msg & data rates may apply. Reply HELP for help, STOP to opt out.",
  'Perks Plus Hub: Reminder: your wellness stipend resets Jan 1. See how to use it at perksplushub.com. Reply STOP to opt out.',
  "Perks Plus Hub: A teammate added a thank-you to your team's kudos wall. See it at perksplushub.com. Reply STOP to opt out.",
];

export const PROMO_SAMPLES = [
  'Perks Plus Hub: New perk from your employer: a learning stipend for online courses. Details at perksplushub.com. Reply STOP to opt out.',
  "Perks Plus Hub: This month's featured perk: commuter benefits. Learn more at perksplushub.com. Reply STOP to opt out.",
];

type HeadingLevel = 'h2' | 'h3';

export function SampleMessages({ as: Heading = 'h2', title = 'Sample Messages', number }: { as?: HeadingLevel; title?: string; number?: string }) {
  const headingClass =
    Heading === 'h2'
      ? 'text-2xl font-bold text-text-headline mt-8 mb-4'
      : 'text-xl font-semibold text-text-headline mt-6 mb-3';
  return (
    <>
      <Heading className={headingClass}>{number ? `${number} ${title}` : title}</Heading>
      <p className="text-text-body mb-4">Examples of the text messages you may receive if you opt in:</p>
      <h4 className="text-lg font-semibold text-text-headline mb-2">Account Notifications</h4>
      <ol className="list-decimal pl-6 text-text-body mb-6 space-y-2">
        {ACCOUNT_SAMPLES.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ol>
      <h4 className="text-lg font-semibold text-text-headline mb-2">Promotional</h4>
      <ol start={4} className="list-decimal pl-6 text-text-body mb-6 space-y-2">
        {PROMO_SAMPLES.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ol>
    </>
  );
}

export function ContactBlock() {
  return (
    <div className="bg-bg-light border border-[#E5E7EB] rounded-lg p-6 mb-8">
      <p className="text-text-body mb-2"><strong>Media Delivery Solutions LLC</strong>, d/b/a Perks Plus Hub</p>
      <p className="text-text-body mb-2"><strong>Address:</strong> 9 Johnston Dr, Bloomsbury, NJ 08804, United States</p>
      <p className="text-text-body mb-2"><strong>Phone:</strong> <a href="tel:+19083998307" className="text-primary hover:text-primary-hover underline">(908) 399-8307</a></p>
      <p className="text-text-body mb-2"><strong>Email:</strong> <a href="mailto:support@perksplushub.com" className="text-primary hover:text-primary-hover underline">support@perksplushub.com</a></p>
      <p className="text-text-body"><strong>Website:</strong> <a href="https://perksplushub.com" className="text-primary hover:text-primary-hover underline">perksplushub.com</a></p>
    </div>
  );
}
