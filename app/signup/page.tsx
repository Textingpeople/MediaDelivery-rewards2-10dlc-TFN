'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import SignupStep1 from '../components/SignupStep1';
import SignupStep2, { SignupFormData } from '../components/SignupStep2';
import SignupConfirmation from '../components/SignupConfirmation';

type Step = 1 | 2 | 3;

const PHONE_ERROR = 'Enter a valid mobile number to receive texts.';
const VALID_IDS = ['1234'];

export default function SignupPage() {
  const [step, setStep] = useState<Step>(1);
  const [companyIdError, setCompanyIdError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [formData, setFormData] = useState<SignupFormData>({
    // Step 1 — Company ID
    companyId: '',
    // Step 2 — Personal Info + Contact + Consent
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    department: '',
    smsTransactional: false,
    smsPromotional: false,
    termsAccepted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormData({ ...formData, [e.target.name]: value });
    if (target.name === 'phone' || target.name === 'smsTransactional' || target.name === 'smsPromotional') {
      setPhoneError('');
    }
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3) as Step);
  const prevStep = () => setStep((s) => Math.max(s - 1, 1) as Step);

  const handleCompanyIdSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!VALID_IDS.includes(formData.companyId.trim())) {
      setCompanyIdError('Company ID not found. Please check with your employer or HR team.');
      return;
    }
    setCompanyIdError('');
    nextStep();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const wantsTexts = formData.smsTransactional || formData.smsPromotional;
    const digits = formData.phone.replace(/\D/g, '');
    if (wantsTexts && digits.length !== 10) {
      setPhoneError(PHONE_ERROR);
      return;
    }
    setPhoneError('');
    nextStep();
  };

  const steps = [
    { num: 1, label: 'Company ID' },
    { num: 2, label: 'Your Details' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* Hero */}
      <section className="bg-bg-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-text-headline mb-3">Employee Sign Up</h1>
          <p className="text-xl text-text-body max-w-2xl mx-auto">
            Join your team on Perks Plus Hub to see, track and use the perks your employer offers.
          </p>
        </div>
      </section>

      {/* Progress Stepper */}
      {step < 3 && (
        <div className="max-w-2xl mx-auto px-4 pt-10">
          <div className="flex items-center justify-between">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${
                    step > s.num
                      ? 'bg-secondary border-secondary text-white'
                      : step === s.num
                      ? 'bg-primary border-primary text-white'
                      : 'bg-white border-gray-300 text-gray-500'
                  }`}>
                    {step > s.num ? <CheckCircle className="w-5 h-5" /> : s.num}
                  </div>
                  <span className={`mt-2 text-xs font-medium ${step === s.num ? 'text-text-headline' : 'text-gray-500'}`}>{s.label}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 mb-5 ${step > s.num ? 'bg-secondary' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Form Area */}
      <section className="max-w-2xl mx-auto px-4 py-10 pb-20">
        <div className="bg-white rounded-2xl shadow-xl border border-[#E5E7EB] p-8 md:p-12">
          {step === 1 && (
            <SignupStep1
              companyId={formData.companyId}
              error={companyIdError}
              onChange={(e) => {
                handleChange(e);
                setCompanyIdError('');
              }}
              onSubmit={handleCompanyIdSubmit}
            />
          )}

          {step === 2 && (
            <SignupStep2
              formData={formData}
              phoneError={phoneError}
              onChange={handleChange}
              onSubmit={handleSubmit}
              onBack={prevStep}
            />
          )}

          {step === 3 && (
            <SignupConfirmation
              firstName={formData.firstName}
              companyId={formData.companyId}
              email={formData.email}
            />
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
