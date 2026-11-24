import Link from 'next/link';
import { Mail, Building, Phone, User, Briefcase } from 'lucide-react';
import SmsConsent from './SmsConsent';

export type SignupFormData = {
  companyId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  department: string;
  smsTransactional: boolean;
  smsPromotional: boolean;
  termsAccepted: boolean;
};

type Props = {
  formData: SignupFormData;
  phoneError: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
};

const labelClass = 'block text-sm font-medium text-text-headline mb-2';
const inputClass = 'block w-full pl-9 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent';

export default function SignupStep2({ formData, phoneError, onChange, onSubmit, onBack }: Props) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-text-headline mb-1">Your details</h2>
        <p className="text-text-body text-sm">Step 2 of 2 — Tell us about yourself and confirm your preferences</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>First Name *</label>
          <div className="relative">
            <User className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
            <input type="text" name="firstName" required value={formData.firstName} onChange={onChange}
              className={inputClass} placeholder="Jane" />
          </div>
        </div>
        <div>
          <label className={labelClass}>Last Name *</label>
          <input type="text" name="lastName" required value={formData.lastName} onChange={onChange}
            className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Smith" />
        </div>
      </div>

      <div>
        <label className={labelClass}>Work Email *</label>
        <div className="relative">
          <Mail className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
          <input type="email" name="email" required value={formData.email} onChange={onChange}
            className={inputClass} placeholder="jane@company.com" />
        </div>
      </div>

      <div>
        <label className={labelClass}>Mobile phone number (required only if you opt in to texts)</label>
        <div className="relative">
          <Phone className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
          <input type="tel" name="phone" value={formData.phone} onChange={onChange}
            className={`${inputClass} ${phoneError ? 'border-red-400 bg-red-50' : ''}`}
            placeholder="(555) 555-5555" />
        </div>
        {phoneError && <p role="alert" className="text-red-600 text-sm mt-2 font-medium">{phoneError}</p>}
      </div>

      <div>
        <label className={labelClass}>Job Title *</label>
        <div className="relative">
          <Briefcase className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
          <input type="text" name="jobTitle" required value={formData.jobTitle} onChange={onChange}
            className={inputClass} placeholder="e.g. Marketing Manager" />
        </div>
      </div>

      <div>
        <label className={labelClass}>Department *</label>
        <div className="relative">
          <Building className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
          <select name="department" required value={formData.department} onChange={onChange}
            className={`${inputClass} bg-white`}>
            <option value="">Select your department...</option>
            <option value="sales">Sales</option>
            <option value="marketing">Marketing</option>
            <option value="engineering">Engineering</option>
            <option value="operations">Operations</option>
            <option value="hr">Human Resources</option>
            <option value="finance">Finance</option>
            <option value="customer_success">Customer Success</option>
            <option value="product">Product</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <SmsConsent
        transactional={formData.smsTransactional}
        promotional={formData.smsPromotional}
        onChange={onChange}
      />

      <div className="bg-bg-light border border-gray-300 rounded-lg p-5">
        <div className="flex items-start">
          <input type="checkbox" id="termsAccepted" name="termsAccepted" required checked={formData.termsAccepted}
            onChange={onChange}
            className="mt-1 h-4 w-4 accent-primary focus:ring-primary border-gray-300 rounded flex-shrink-0" />
          <label htmlFor="termsAccepted" className="ml-3 text-sm leading-relaxed text-text-body">
            I agree to the{' '}
            <Link href="/terms" className="text-primary font-medium underline hover:text-primary-hover">Terms of Service</Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-primary font-medium underline hover:text-primary-hover">Privacy Policy</Link>. *
          </label>
        </div>
      </div>

      <div className="flex gap-3">
        <button type="button" onClick={onBack}
          className="flex-1 py-4 border-2 border-primary text-primary text-lg font-semibold rounded-lg hover:bg-accent-soft transition-colors">
          Back
        </button>
        <button type="submit"
          className="flex-1 py-4 bg-primary hover:bg-primary-hover text-white text-lg font-semibold rounded-lg shadow-lg transition-colors">
          Submit
        </button>
      </div>
    </form>
  );
}
