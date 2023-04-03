import { IBlogPost } from "~/types";

import NotionService from "~/lib/notion";

import dayjs from 'dayjs';
import relTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relTime)

import { Component, createResource, For, Show } from "solid-js";
import { A, useRouteData } from "solid-start";

import Tag from "~/components/tag";

export function routeData() {
    const [posts] = createResource(async () => {
        const notionService = new NotionService();
        return await notionService.getPublishedBlogPosts() as IBlogPost[];
    });
    return { posts };
}

export default function Blog() {
    const { posts } = useRouteData<typeof routeData>();
    return (
        <main class="text-center mx-auto text-gray-700 p-4">
            <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Ponderances</h1>
            <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-1 lg:max-w-none">
                <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                    <For each={posts()}>
                        {(post) =>
                            <li class="py-12">
                                <article>
                                    <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                        <dl>
                                            <dt class="sr-only">Published on</dt>
                                            <dd class="text-base font-medium leading-6 text-gray-700 dark:text-gray-600">
                                                <time dateTime={post.date}>{dayjs(post.date).format("MMMM DD YYYY")}</time>
                                            </dd>
                                            <dt class="sr-only">Updated</dt>
                                            <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                                Updated <time dateTime={post.update}>{dayjs().to(dayjs(post.update))}</time>
                                            </dd>
                                        </dl>
                                        <div class="space-y-5 xl:col-span-3">
                                            <div class="space-y-6">
                                                <div>
                                                    <h2 class="text-2xl font-bold leading-8 tracking-tight">
                                                        <A
                                                            href={`/blog/${post.slug}`}
                                                            class="text-slate-950 dark:text-gray-100"
                                                        >
                                                            {post.title}
                                                        </A>
                                                    </h2>
                                                    <div>
                                                        {post.tags?.map((tag) => (
                                                            <Tag id={tag.id} name={tag.name} color={tag.color} />
                                                        ))}
                                                    </div>
                                                </div>
                                                <div class="prose max-w-none text-gray-500 dark:text-gray-400">
                                                    {post.description}
                                                </div>
                                            </div>
                                            <div class="text-base font-medium leading-6">
                                                <A
                                                    href={`/blog/${post.slug}`}
                                                    class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                                    aria-label={`Read "${post.title}"`}
                                                >
                                                    Read more &rarr;
                                                </A>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        }
                    </For>
                </ul>
            </div>
        </main>
    );
}
