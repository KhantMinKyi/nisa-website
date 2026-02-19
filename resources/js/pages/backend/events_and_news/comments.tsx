import AppLayout from '@/layouts/app-layout';
import { Menu, Transition } from '@headlessui/react';
import { Head, Link, router } from '@inertiajs/react';
import { Fragment } from 'react';
import { HiCheck, HiDotsVertical, HiTrash, HiX } from 'react-icons/hi';

interface Post {
    id: number;
    title: string;
}

interface Comment {
    id: number;
    name: string;
    email: string;
    description: string;
    status: number;
    created_at: string;
    post?: Post;
}

interface Props {
    comments: {
        data: Comment[];
        links: any[];
    };
}

const breadcrumbs = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'Post Comments', href: '/admin/post-comments' },
];

export default function Comments({ comments }: Props) {
    const handleStatus = (id: number, status: number) => {
        router.patch('/admin/post-comments/' + id, { status });
    };

    const handleDelete = (id: number) => {
        if (confirm('Are you sure? This cannot be undone.')) {
            router.delete('/admin/post-comments/' + id);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Post Comments" />

            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                            Post Comments
                        </h2>
                        <Link
                            href="/admin/events-and-news"
                            className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-3 text-xs font-semibold tracking-widest text-white uppercase transition hover:bg-blue-700 active:bg-blue-900 dark:bg-brand-core"
                        >
                            Back to Posts
                        </Link>
                    </div>

                    <div className="overflow-visible border border-gray-200 bg-white shadow-sm sm:rounded-lg dark:border-brand-core dark:bg-neutral-900">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-brand-core">
                            <thead className="bg-gray-50 dark:bg-brand-core">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-white">
                                        Post
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-white">
                                        Name / Email
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-white">
                                        Comment
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-white">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-white">
                                        Created
                                    </th>
                                    <th className="relative px-6 py-3">
                                        <span className="sr-only">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white dark:divide-brand-dark dark:bg-neutral-900">
                                {comments.data.map((item, index) => (
                                    <tr
                                        key={item.id}
                                        className="transition hover:bg-gray-50 dark:hover:bg-neutral-950"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                {item.post?.title || '-'}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                {item.name}
                                            </div>
                                            <div className="text-xs text-gray-500">{item.email}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-700 dark:text-gray-200 line-clamp-3">
                                                {item.description}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`rounded-full px-2 py-1 text-xs font-semibold ${
                                                    item.status === 1
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-yellow-100 text-yellow-700'
                                                }`}
                                            >
                                                {item.status === 1 ? 'Approved' : 'Pending'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                                            {new Date(item.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
                                            <Menu
                                                as="div"
                                                className="relative inline-block text-left"
                                            >
                                                <Menu.Button className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-white dark:hover:bg-brand-core">
                                                    <HiDotsVertical className="text-xl" />
                                                </Menu.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items
                                                        className={`ring-opacity-5 absolute right-0 z-50 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg focus:outline-none dark:bg-neutral-900 ${
                                                            index >=
                                                            comments.data
                                                                .length -
                                                                2
                                                                ? 'bottom-full mb-2 origin-bottom-right'
                                                                : 'mt-2 origin-top-right'
                                                        }`}
                                                    >
                                                        <div className="px-1 py-1">
                                                            {item.status === 1 ? (
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <button
                                                                            onClick={() => handleStatus(item.id, 0)}
                                                                            className={`${active ? 'bg-yellow-500 text-white dark:text-white' : 'text-gray-900 dark:text-white'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                        >
                                                                            <HiX className="mr-2" /> Unapprove
                                                                        </button>
                                                                    )}
                                                                </Menu.Item>
                                                            ) : (
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <button
                                                                            onClick={() => handleStatus(item.id, 1)}
                                                                            className={`${active ? 'bg-green-500 text-white dark:text-white' : 'text-gray-900 dark:text-white'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                        >
                                                                            <HiCheck className="mr-2" /> Approve
                                                                        </button>
                                                                    )}
                                                                </Menu.Item>
                                                            )}
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <button
                                                                        onClick={() => handleDelete(item.id)}
                                                                        className={`${active ? 'bg-red-500 text-white dark:text-white' : 'text-gray-900 dark:text-white'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                    >
                                                                        <HiTrash className="mr-2" /> Delete
                                                                    </button>
                                                                )}
                                                            </Menu.Item>
                                                        </div>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </td>
                                    </tr>
                                ))}
                                {comments.data.length < 1 && (
                                    <tr className="transition hover:bg-gray-50 dark:hover:bg-neutral-950">
                                        <td className="py-6 text-center" colSpan={6}>
                                            No comments...
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 flex justify-end gap-2">
                        {comments.links.map(
                            (link: any, i: number) =>
                                link.url && (
                                    <Link
                                        key={i}
                                        href={link.url}
                                        className={`rounded border px-3 py-1 text-sm ${link.active ? 'bg-blue-600 text-white dark:bg-brand-core' : 'bg-white text-gray-700'}`}
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    />
                                ),
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
