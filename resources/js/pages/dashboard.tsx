import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Calendar, FileText, GalleryHorizontal, GraduationCap, Mail, MessageCircle, Building, AlertCircle } from 'lucide-react';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

type Counts = {
    teachers: number;
    galleries: number;
    facilities: number;
    posts: number;
    calendars: number;
    contacts: number;
    comments: number;
    comments_pending: number;
};

export default function Dashboard({ counts }: { counts: Counts }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4">
                <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 text-white shadow-lg dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
                    <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
                    <p className="mt-2 text-sm text-slate-200">
                        Quick overview of content and activity.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    <StatCard title="Teachers" value={counts.teachers} icon={<GraduationCap />} accent="from-emerald-500/20 to-emerald-700/10" />
                    <StatCard title="Gallery Photos" value={counts.galleries} icon={<GalleryHorizontal />} accent="from-indigo-500/20 to-indigo-700/10" />
                    <StatCard title="Facilities" value={counts.facilities} icon={<Building />} accent="from-amber-500/20 to-amber-700/10" />
                    <StatCard title="Posts" value={counts.posts} icon={<FileText />} accent="from-blue-500/20 to-blue-700/10" />
                    <StatCard title="Calendars" value={counts.calendars} icon={<Calendar />} accent="from-cyan-500/20 to-cyan-700/10" />
                    <StatCard title="Contacts" value={counts.contacts} icon={<Mail />} accent="from-fuchsia-500/20 to-fuchsia-700/10" />
                    <StatCard title="Comments" value={counts.comments} icon={<MessageCircle />} accent="from-rose-500/20 to-rose-700/10" />
                    <StatCard
                        title="Pending Comments"
                        value={counts.comments_pending}
                        icon={<AlertCircle />}
                        accent="from-orange-500/20 to-orange-700/10"
                        highlight={counts.comments_pending > 0}
                    />
                </div>

                <div className="grid gap-4 lg:grid-cols-3">
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-brand-core dark:bg-neutral-900">
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Content Health</h2>
                        <div className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-300">
                            <div className="flex items-center justify-between">
                                <span>Active Posts</span>
                                <span className="font-semibold text-gray-900 dark:text-white">{counts.posts}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Gallery Images</span>
                                <span className="font-semibold text-gray-900 dark:text-white">{counts.galleries}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Facilities</span>
                                <span className="font-semibold text-gray-900 dark:text-white">{counts.facilities}</span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-brand-core dark:bg-neutral-900">
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Engagement</h2>
                        <div className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-300">
                            <div className="flex items-center justify-between">
                                <span>Contact Messages</span>
                                <span className="font-semibold text-gray-900 dark:text-white">{counts.contacts}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>All Comments</span>
                                <span className="font-semibold text-gray-900 dark:text-white">{counts.comments}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Pending Approval</span>
                                <span className={`font-semibold ${counts.comments_pending > 0 ? 'text-orange-600' : 'text-gray-900 dark:text-white'}`}>
                                    {counts.comments_pending}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-brand-core dark:bg-neutral-900">
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Quick Actions</h2>
                        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                            <ActionLink href="/admin/events-and-news/create" label="New Post" />
                            <ActionLink href="/admin/galleries/create" label="Upload Photo" />
                            <ActionLink href="/admin/facilities/create" label="Add Facility" />
                            <ActionLink href="/admin/teachers/create" label="Add Teacher" />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

function StatCard({
    title,
    value,
    icon,
    accent,
    highlight = false,
}: {
    title: string;
    value: number;
    icon: React.ReactNode;
    accent: string;
    highlight?: boolean;
}) {
    return (
        <div
            className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-neutral-700 dark:bg-neutral-950 ${
                highlight ? 'ring-1 ring-orange-300' : ''
            }`}
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${accent} dark:opacity-40`} />
            <div className="relative z-10 flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{title}</p>
                    <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">{value}</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-gray-700 shadow dark:bg-neutral-900 dark:text-white">
                    {icon}
                </div>
            </div>
        </div>
    );
}

function ActionLink({ href, label }: { href: string; label: string }) {
    return (
        <a
            href={href}
            className="flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 font-semibold text-gray-700 transition hover:border-brand-core hover:text-brand-core dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-200"
        >
            {label}
        </a>
    );
}
