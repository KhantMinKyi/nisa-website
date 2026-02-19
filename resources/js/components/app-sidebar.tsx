import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { type NavItem, type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import {
    Activity,
    Building,
    Calendar,
    GalleryHorizontal,
    GraduationCap,
    MessageCircle,
    LayoutGrid,
    Mail,
    Users,
} from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Teachers',
        href: '/admin/teachers',
        icon: GraduationCap,
    },
    {
        title: 'Gallery',
        href: '/admin/galleries',
        icon: GalleryHorizontal,
    },
    {
        title: 'Facilities',
        href: '/admin/facilities',
        icon: Building,
    },
    {
        title: 'Event & News',
        href: '/admin/events-and-news',
        icon: Activity,
    },
    {
        title: 'Post Comments',
        href: '/admin/post-comments',
        icon: MessageCircle,
    },
    {
        title: 'Contacts',
        href: '/admin/contacts',
        icon: Mail,
    },
    {
        title: 'Calendar',
        href: '/admin/calendars',
        icon: Calendar,
    },
    {
        title: 'User Management',
        href: '/admin/users',
        icon: Users,
    },
];

const footerNavItems: NavItem[] = [
    // {
    //     title: 'Repository',
    //     href: 'https://github.com/laravel/react-starter-kit',
    //     icon: Folder,
    // },
    // {
    //     title: 'Documentation',
    //     href: 'https://laravel.com/docs/starter-kits#react',
    //     icon: BookOpen,
    // },
];

export function AppSidebar() {
    const { auth } = usePage<SharedData>().props;
    const isAdmin = Number(auth?.user?.is_admin ?? 0) === 1;
    const items = isAdmin
        ? mainNavItems
        : mainNavItems.filter((item) => item.href !== '/admin/users');

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={items} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
