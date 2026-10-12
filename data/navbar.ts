import type { NavLink } from '@/interface';

export const navLinks: NavLink[] = [
  { label: '案例', href: '/customers' },
  { label: '方案', href: '/pricing' },
  { label: '研究所', href: '/journal' },
  { label: '关于', href: '/about' },
];

export const menuLinks: NavLink[] = [{ label: '首页', href: '/' }, ...navLinks];

export const routeLabels: Record<string, string> = {
  '/': 'Dopi',
  '/customers': '案例',
  '/pricing': '方案',
  '/journal': '研究所',
  '/about': '关于',
};
