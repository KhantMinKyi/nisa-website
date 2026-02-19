import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import React from 'react';
import { HiArrowLeft } from 'react-icons/hi';

interface UserData {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    is_admin: number;
}

export default function UserEdit({ user }: { user: UserData }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'put',
        name: user.name || '',
        username: user.username || '',
        email: user.email || '',
        phone: user.phone || '',
        password: '',
        password_confirmation: '',
        is_admin: Number(user.is_admin || 0),
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/users/' + user.id);
    };

    return (
        <AppLayout
            breadcrumbs={[
                { title: 'User Management', href: '/admin/users' },
                { title: 'Edit', href: '#' },
            ]}
        >
            <Head title="Edit User" />

            <div className="mx-auto w-5xl px-4 py-10">
                <Link
                    href="/admin/users"
                    className="mb-6 flex items-center text-sm text-gray-500 transition-colors hover:text-gray-800"
                >
                    <HiArrowLeft className="mr-1" /> Back to Users
                </Link>

                <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-brand-core dark:bg-neutral-800">
                    <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
                        Edit User
                    </h2>

                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-brand-core">
                                Name
                            </label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className="w-full rounded-lg border-gray-300 bg-gray-100 px-2 py-2 dark:border-brand-core dark:bg-neutral-900"
                            />
                            {errors.name && (
                                <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                            )}
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-brand-core">
                                Username
                            </label>
                            <input
                                type="text"
                                value={data.username}
                                onChange={(e) => setData('username', e.target.value)}
                                className="w-full rounded-lg border-gray-300 bg-gray-100 px-2 py-2 dark:border-brand-core dark:bg-neutral-900"
                            />
                            {errors.username && (
                                <p className="mt-1 text-xs text-red-500">{errors.username}</p>
                            )}
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-brand-core">
                                Email
                            </label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="w-full rounded-lg border-gray-300 bg-gray-100 px-2 py-2 dark:border-brand-core dark:bg-neutral-900"
                            />
                            {errors.email && (
                                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-brand-core">
                                Phone
                            </label>
                            <input
                                type="text"
                                value={data.phone}
                                onChange={(e) => setData('phone', e.target.value)}
                                className="w-full rounded-lg border-gray-300 bg-gray-100 px-2 py-2 dark:border-brand-core dark:bg-neutral-900"
                            />
                            {errors.phone && (
                                <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                            )}
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-brand-core">
                                    New Password (optional)
                                </label>
                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    className="w-full rounded-lg border-gray-300 bg-gray-100 px-2 py-2 dark:border-brand-core dark:bg-neutral-900"
                                />
                                {errors.password && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.password}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-brand-core">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData('password_confirmation', e.target.value)
                                    }
                                    className="w-full rounded-lg border-gray-300 bg-gray-100 px-2 py-2 dark:border-brand-core dark:bg-neutral-900"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-brand-core">
                                Role
                            </label>
                            <select
                                value={data.is_admin}
                                onChange={(e) => setData('is_admin', Number(e.target.value))}
                                className="w-full rounded-lg border-gray-300 bg-gray-100 px-2 py-2 dark:border-brand-core dark:bg-neutral-900"
                            >
                                <option value={0}>User</option>
                                <option value={1}>Admin</option>
                            </select>
                            {errors.is_admin && (
                                <p className="mt-1 text-xs text-red-500">{errors.is_admin}</p>
                            )}
                        </div>

                        <div className="flex justify-end gap-2 pt-4">
                            <Link
                                href="/admin/users"
                                className="rounded-lg bg-red-600 px-6 py-2.5 font-medium text-white transition-all hover:bg-red-700"
                            >
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white transition-all hover:bg-blue-700 disabled:opacity-50 dark:bg-brand-core dark:hover:bg-brand-dark"
                            >
                                {processing ? 'Updating...' : 'Update User'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}

