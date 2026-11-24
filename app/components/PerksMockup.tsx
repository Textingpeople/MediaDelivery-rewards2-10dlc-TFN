import { Gift, BellRing, Heart, Wallet } from 'lucide-react';

export default function PerksMockup() {
  return (
    <div className="bg-bg-light border border-[#E5E7EB] rounded-2xl p-8 sm:p-10">
      <p className="text-sm font-semibold text-text-body uppercase tracking-wide mb-4">Perks This Month</p>
      <div className="space-y-4">
        <div className="flex items-center justify-between bg-white border border-[#E5E7EB] rounded-xl p-4">
          <div className="flex items-center">
            <Wallet className="w-8 h-8 text-primary mr-3" />
            <div>
              <p className="font-semibold text-text-headline">Wellness Stipend</p>
              <p className="text-text-body text-sm">Resets Jan 1</p>
            </div>
          </div>
          <span className="bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">Wellness</span>
        </div>
        <div className="flex items-center justify-between bg-white border border-[#E5E7EB] rounded-xl p-4">
          <div className="flex items-center">
            <BellRing className="w-8 h-8 text-accent mr-3" />
            <div>
              <p className="font-semibold text-text-headline">Commuter Benefits</p>
              <p className="text-text-body text-sm">Enrollment opens soon</p>
            </div>
          </div>
          <span className="bg-accent-soft text-text-headline text-xs font-bold px-3 py-1 rounded-full border border-accent">Reminder</span>
        </div>
        <div className="flex items-center justify-between bg-white border border-[#E5E7EB] rounded-xl p-4">
          <div className="flex items-center">
            <Gift className="w-8 h-8 text-accent mr-3" />
            <div>
              <p className="font-semibold text-text-headline">Learning Stipend</p>
              <p className="text-text-body text-sm">Added by your employer</p>
            </div>
          </div>
          <span className="bg-accent-soft text-text-headline text-xs font-bold px-3 py-1 rounded-full border border-accent">New perk</span>
        </div>
        <div className="flex items-center justify-between bg-white border border-[#E5E7EB] rounded-xl p-4">
          <div className="flex items-center">
            <Heart className="w-8 h-8 text-secondary mr-3" />
            <div>
              <p className="font-semibold text-text-headline">Team Kudos Wall</p>
              <p className="text-text-body text-sm">A teammate left a thank-you</p>
            </div>
          </div>
          <span className="bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">Kudos</span>
        </div>
      </div>
    </div>
  );
}
