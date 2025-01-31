<template>
    <nav aria-label="Breadcrumb navigation">
        <div class="border-sidebar-divider md:border-b">
            <div class="page-align flex justify-start items-center h-[40px]">
                <ul class="flex max-md:hidden">
                    <li class="font-normal text-sm text-text-light" v-for="(crumb, index) in breadcrumbs" :key="index">
                        <div v-if="index < breadcrumbs.length - 1" class="flex">
                            <NuxtLink class="border-y border-transparent border-b-brand-green" :to="crumb.path">
                                {{ crumb.name }}
                            </NuxtLink>
                            <img class="px-4" src="/assets/icons/beak-right.svg" />
                        </div>
                        <span v-else class="block border-y border-transparent align-middle">{{ crumb.name }}</span>
                    </li>
                </ul>
                <div v-if="breadcrumbs.length > 1" class="pl-5 flex gap-3 md:hidden">
                    <div class="flex justify-center items-center">
                        <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.99465 -1.90735e-06C6.24442 -1.90735e-06 6.4942 0.108274 6.66905 0.297758C7.04371 0.703796 7.04371 1.35346 6.66905 1.7595L2.29795 6.46954L6.719 11.2337C7.09367 11.6398 7.09367 12.2894 6.719 12.6955C6.34434 13.1015 5.74487 13.1015 5.3702 12.6955L0.274755 7.20042C0.0999107 7.01093 -9.53674e-07 6.74023 -9.53674e-07 6.46954C-9.53674e-07 6.19885 0.0999107 5.92816 0.274755 5.73868L5.32025 0.297758C5.49509 0.108274 5.74487 -1.90735e-06 5.99465 -1.90735e-06Z"
                                fill="#313892" />
                        </svg>
                    </div>
                    <NuxtLink class="font-medium text-xs text-brand-blue-ui"
                        :to="breadcrumbs[breadcrumbs.length - 2].path">
                        Back to {{ breadcrumbs[breadcrumbs.length - 2].name }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
const { breadcrumbs } = useBreadcrumb();
</script>