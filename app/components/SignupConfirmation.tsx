import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

type Props = {
  firstName: string;
  companyId: string;
  email: string;
};

export default function SignupConfirmation({ firstName, companyId, email }: Props) {
  return (
    <div className="text-center py-8">
      <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-12 h-12 text-white" />
      </div>
      <h2 className="text-3xl font-bold text-text-headline mb-3">Request Submitted!</h2>
      <p className="text-lg text-text-body mb-4 max-w-md mx-auto">
        Thanks, <strong>{firstName}</strong>! Your sign-up request has been received.
      </p>
      <div className="bg-bg-light border border-[#E5E7EB] rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
        <p className="text-text-body text-sm leading-relaxed">
          We&apos;ve let your employer (Company ID: <strong>{companyId}</strong>) know you&apos;ve requested access to Perks Plus Hub. Once approved, you&apos;ll receive an email at <strong>{email}</strong> with instructions to activate your account.
        </p>
        <p className="text-text-body text-sm leading-relaxed mt-3">
          Questions? Contact us at{' '}
          <a href="mailto:support@perksplushub.com" className="text-primary underline">support@perksplushub.com</a>{' '}
          or call <a href="tel:+19083998307" className="text-primary underline">(908) 399-8307</a>.
        </p>
      </div>
      <Link href="/"
        className="inline-block px-8 py-4 bg-primary text-white text-lg font-semibold rounded-lg hover:bg-primary-hover transition-colors shadow-md">
        Back to Home
      </Link>
    </div>
  );
}
