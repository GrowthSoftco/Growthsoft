export type ProjectTitle = string;
export type ProjectLanguage = string;
export type ProjectFavicon = string;

export const ProjectVersion = 'v0.0.1-alpha';

export const DashboardLinks = [
    { icon: 'Sidebar/home', label: 'Home', href: '/dashboard'},
    { icon: 'Sidebar/users', label: 'Users', href: '/dashboard/users'},
    { icon: 'Sidebar/logs', label: 'Logs', href: '/dashboard/logs'},
    { icon: 'Sidebar/billing', label: 'Billing', href: '/dashboard/billing'},
    { icon: 'Sidebar/settings', label: 'Settings', href: '/dashboard/settings'},
    { icon: 'Sidebar/feedback', label: 'Give Feedback', href: '/dashboard/feedback'},
]