import { ChevronRight, Hash } from 'lucide-react';

type Props = {
  companyId: string;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export default function SignupStep1({ companyId, error, onChange, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-text-headline mb-1">Enter your Company ID</h2>
        <p className="text-text-body text-sm">Step 1 of 2 — Your employer provides this ID to get you started</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-text-headline mb-2">Company ID *</label>
        <div className="relative">
          <Hash className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            name="companyId"
            required
            value={companyId}
            onChange={onChange}
            className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-lg ${
              error ? 'border-red-400 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="e.g. 1234"
          />
        </div>
        {error && <p className="text-red-600 text-sm mt-2 font-medium">{error}</p>}
        <p className="text-xs text-text-body mt-2">
          Your Company ID was provided by your employer or HR team. Contact your manager if you don&apos;t have one.
        </p>
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-primary hover:bg-primary-hover text-white text-lg font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 transition-colors"
      >
        Continue <ChevronRight className="w-5 h-5" />
      </button>
    </form>
  );
}
