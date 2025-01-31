<template>
    <header class="border-b border-form-border sticky top-0 bg-brand-white z-10 md:border-sidebar-divider">
        <div class="page-align flex flex-row-reverse justify-between h-[56px] md:flex-row md:h-[110px]">
            <div class="px-4 flex bg-brand-green md:px-8">
                <img class="md:w-[120px]" src="/assets/icons/airbaltic.svg" width="62" alt="airBaltic logo" />
            </div>
            <button class="flex items-center justify-center w-[60px] md:hidden" @click="menuExpanded = !menuExpanded"
                aria-label="Main navigation menu">
                <img src="/assets/icons/hamburger.svg" alt="Menu icon" />
            </button>
            <div class="main-menu flex flex-col items-end max-md:hidden" :class="{ 'expanded': menuExpanded }">
                <div class="section flex items-center h-[50%]">
                    <ul class="flex gap-6 text-xs text-header-text">
                        <li>
                            <button class="flex items-center gap-2" aria-label="Change language">
                                <img src="/assets/icons/world.svg" width="20" height="20" alt="World icon" />
                                <span>Latvia - latvian</span>
                            </button>
                        </li>
                        <li class="flex items-center gap-2">
                            <button class="flex items-center gap-2" aria-label="Login to site">
                                <img src="/assets/icons/avatar.svg" width="20" height="20" alt="Profile icon" />
                                <span>Login</span>
                            </button>
                        </li>
                        <li class="flex items-center gap-2">
                            <button class="flex items-center gap-2" aria-label="Search in site">
                                <img src="/assets/icons/search.svg" width="20" height="20" alt="Search icon" />
                                <span>Search</span>
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="section menu-links flex items-center h-[50%]">
                    <ul class="flex gap-x-8 text-lg text-header-text">
                        <li><a href="/">Plan and book</a></li>
                        <li><a href="/">Prepare for your trip</a></li>
                        <li><a href="/">Information</a></li>
                        <li><a href="/">PINS</a></li>
                        <li><a href="/">Special offers</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
const menuExpanded = ref(false);
</script>

<style scoped>
@media (max-width: 767px) {
    .main-menu.expanded {
        @apply pt-[56px] flex flex-col-reverse justify-end items-start absolute top-0 inset-x-0 h-screen bg-brand-white z-[-1];
    }

    .main-menu.expanded .section {
        @apply p-5 w-full h-auto;
    }

    .main-menu.expanded .section>ul {
        @apply flex-col;
    }

    .main-menu.expanded .menu-links {
        @apply border-t border-form-border;
    }

    .main-menu.expanded .menu-links li {
        @apply leading-[2.5rem];
    }
}
</style>