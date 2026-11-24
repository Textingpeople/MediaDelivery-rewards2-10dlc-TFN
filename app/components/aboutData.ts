import { Shield, Target, Users, Gift, BellRing, Heart, Megaphone } from 'lucide-react';

export const values = [
  {
    icon: Target,
    title: 'One Place for Perks',
    desc: 'Every perk your employer offers, listed together and easy to find.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    desc: 'Perk usage and kudos stay inside your own company program. Employers see perk usage only in aggregate, and we never sell your data.',
  },
  {
    icon: Users,
    title: 'Simple to Join',
    desc: 'Employees join with a Company ID from their employer. No complicated setup.',
  },
];

export const capabilities = [
  { icon: Gift, title: 'Perks Catalog', desc: "Your employer's own perks, from wellness stipends to team lunches, in one list." },
  { icon: BellRing, title: 'Perk Reminders', desc: 'Alerts for stipend resets, enrollment windows and upcoming events.' },
  { icon: Heart, title: 'Team Kudos Wall', desc: 'Short peer thank-yous on a team wall. No leaderboards.' },
  { icon: Megaphone, title: 'New-Perk Announcements', desc: 'Hear about it when your employer adds something new.' },
];
