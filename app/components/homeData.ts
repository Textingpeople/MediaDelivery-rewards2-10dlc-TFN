import { Gift, BellRing, Users, BarChart3, Megaphone, CheckCircle, Heart, CalendarDays, Wallet } from 'lucide-react';

export const features = [
  {
    icon: Gift,
    title: 'Perks Catalog',
    desc: "Browse your employer's own perks in one place: wellness stipends, learning and tuition benefits, commuter perks, extra PTO days, company events, team lunches and employer-arranged discounts.",
  },
  {
    icon: BellRing,
    title: 'Perk Reminders',
    desc: 'Get a heads-up when a stipend resets, when perk enrollment opens or when a company event is coming up.',
  },
  {
    icon: Heart,
    title: 'Team Kudos Wall',
    desc: 'Short peer thank-yous shown on your team wall. Simple and friendly, with no leaderboards.',
  },
  {
    icon: Megaphone,
    title: 'New-Perk Announcements',
    desc: 'When your employer adds something new to the catalog, you hear about it right away.',
  },
  {
    icon: BarChart3,
    title: 'Employer Dashboard',
    desc: 'Employers see which perks are used most. Usage is anonymous and shown in aggregate only.',
  },
  {
    icon: Users,
    title: 'Join With Your Company ID',
    desc: 'Your employer gives you a Company ID. Enter it, add your details and you are ready to explore.',
  },
];

export const steps = [
  { title: 'Your employer adds perks', desc: 'Your company puts its own perks into Perks Plus Hub, from stipends and tuition benefits to events and team lunches.' },
  { title: 'You browse the catalog', desc: 'See everything available to you in one place, organized by category, so nothing gets overlooked.' },
  { title: 'Get reminders', desc: 'Opt in to reminders for stipend resets, enrollment dates and upcoming events.' },
  { title: 'Use your perks', desc: 'Follow the steps your employer provides to use each perk, and leave a teammate a thank-you on the kudos wall.' },
];

export const audiences = [
  {
    title: 'New Hires',
    desc: 'See what your employer offers from your first week, so you can start using your perks early.',
    items: ['Full perks catalog', 'Enrollment date reminders', 'Easy sign-up with a Company ID'],
  },
  {
    title: 'Everyday Team Members',
    desc: 'Keep track of the perks you already have and when they reset, renew or open for enrollment.',
    items: ['Stipend reset reminders', 'Upcoming event alerts', 'Team kudos wall'],
  },
  {
    title: 'Remote & Hybrid Teams',
    desc: 'Stay connected to company perks and events no matter where you work.',
    items: ['One place for every perk', 'Optional text reminders', 'New-perk announcements'],
  },
];

export const benefits = [
  { icon: CheckCircle, title: 'One Place to Look', desc: 'Every perk your employer offers is listed together, so you do not have to dig through emails and handbooks.' },
  { icon: CalendarDays, title: 'Timely Reminders', desc: 'Know when a stipend resets, enrollment opens or an event is coming up.' },
  { icon: Heart, title: 'Team Connection', desc: 'Short thank-yous from teammates appear on your team kudos wall.' },
  { icon: Wallet, title: 'Perks You Actually Use', desc: 'Stay aware of the benefits your employer already offers you.' },
];
