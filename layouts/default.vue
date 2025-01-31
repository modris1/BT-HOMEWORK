<template>
    <Title>Home</Title>
    <MainHeader />
    <Breadcrumb />
    <div class="m-auto max-w-[1120px] md:py-12 md:flex md:items-start md:gap-14">
        <SideMenu />
        <slot />
    </div>
    <MainFooter />
</template>

<style>
h1 {
    @apply font-light text-[2rem] leading-[38px] text-balance text-brand-blue md:text-[2.5rem] md:leading-[48px];
}
</style>