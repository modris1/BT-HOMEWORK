<template>
    <aside>
        <ul>
            <li>
                <NuxtLink>Contact us</NuxtLink>
            </li>
            <li>
                <NuxtLink>International offices and representatives</NuxtLink>
            </li>
            <li>
                <NuxtLink>Items left on board</NuxtLink>
            </li>
            <li>
                <NuxtLink>Submit a claim</NuxtLink>
            </li>
            <li>
                <NuxtLink>Compliment us</NuxtLink>
            </li>
            <li>
                <NuxtLink>Ask a question</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/RequestAssistance">Request assistance from us</NuxtLink>
            </li>
            <li>
                <NuxtLink>Other inquiries</NuxtLink>
            </li>
        </ul>
    </aside>
</template>

<style scoped>
aside {
    @apply flex flex-col rounded-md w-full max-w-[324px] bg-sidebar-bcg max-md:hidden;
}

aside li {
    @apply px-6 py-3 relative font-medium text-sm/4 text-brand-blue;
}

aside li:not(:last-child) {
    @apply border-b border-sidebar-divider;
}

aside .router-link-exact-active {
    @apply text-brand-green-hover;
}

aside li:has(.router-link-exact-active):before {
    @apply content-[""] absolute inset-y-0 left-0 w-[2px] bg-brand-green;
}
</style>