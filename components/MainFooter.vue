<template>
    <footer class="pt-4">
        <div class="px-5 pb-10 bg-sidebar-bcg
                    md:pt-10">
            <div class="flex flex-col m-auto max-w-[1120px]">
                <div class="flex flex-col justify-between md:flex-row">
                    <div class="flex flex-col text-xs/8 md:flex-row md:gap-x-12">
                        <Accordion name="Helpful links">
                            <li>
                                <NuxtLink>Book a flight</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink>Check-in online</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink>All about baggage</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink>Destinations</NuxtLink>
                            </li>
                        </Accordion>
                        <Accordion name="About airBaltic">
                            <li>
                                <NuxtLink>Careers</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink>About us</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink>airBaltic souvenier</NuxtLink>
                            </li>
                        </Accordion>
                        <Accordion name="AirBaltic partners">
                            <li>
                                <NuxtLink>Pilots Academy</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink>airBaltic Training</NuxtLink>
                            </li>
                            <li>
                                <a href="/" target="_BLANK">PINS</a>
                                <img src="/assets/icons/redirect-icon.svg" width="8" height="8" alt="Redirect icon" />
                            </li>
                        </Accordion>
                        <Accordion name="Customer support">
                            <li>
                                <NuxtLink>Contact us</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink>FAQs</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink>Request asssistance</NuxtLink>
                            </li>
                        </Accordion>
                    </div>
                    <div class="flex flex-col md:max-w-[288px]">
                        <div class="md:flex md:flex-col md:content-end md:flex-wrap">
                            <h2 class="py-1 md:p-0">Subscribe to newsletter</h2>
                            <div class="relative w-full md:max-w-[264px]">
                                <form @submit.prevent="subscribeToNewsletter">
                                    <FormField :error="newsletter.error">
                                        <div class="relative">
                                            <input v-model="newsletter.email" type="text" name="email" maxlength="1500"
                                                placeholder="Enter your email" autocomplete="on" />
                                            <button type="submit" aria-label="Submit subscribe to newsletter form">
                                                <svg width="9" height="15" viewBox="0 0 9 15" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 0L8.45718 7.45718L1.00577 14.9086" stroke="#BABABA" />
                                                </svg>
                                            </button>
                                        </div>
                                    </FormField>
                                </form>
                            </div>
                        </div>
                        <div class="footer-social">
                            <a href="https://www.facebook.com" target="_BLANK"><img src="/assets/icons/facebook.png"
                                    alt="Facebook icon" /></a>
                            <a href="https://www.twitter.com" target="_BLANK"><img src="/assets/icons/twitter.png"
                                    alt="Twitter icon" /></a>
                            <a href="https://www.instagram.com" target="_BLANK"><img src="/assets/icons/instagram.png"
                                    alt="Instagram icon" /></a>
                            <a href="https://www.youtube.com" target="_BLANK"><img src="/assets/icons/youtube.png"
                                    alt="Youtube icon" /></a>
                        </div>
                        <div class="external-site-link"><img src="/assets/icons/redirect-icon.svg" width="16"
                                height="16" alt="Redirect icon" />This indicates a link to an external site that may not
                            follow the same accessibility policies.</div>
                    </div>
                </div>
                <div
                    class="flex flex-col justify-between text-xs/10
                            md:mt-8 pt-3 md:border-t md:border-form-border md:flex-row-reverse md:items-center md:order-1">
                    <div class="copyright">© 2017 airBaltic</div>
                    <ul class="footer-legal-and-others">
                        <li>
                            <NuxtLink>Legal information</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink>Site index</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink>Technical requirements</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col justify-between">
                    <div class="logos">
                        <div class="md:border-x md:border-form-border md:px-10 md:order-2">
                            <a href="https://www.mastercard.com" target="_BLANK"><img src="/assets/png/mastercard.png"
                                    alt="Mastercard icon" /></a>
                            <a href="https://www.visa.com" target="_BLANK"><img src="/assets/png/VISA.png"
                                    alt="VISA icon" /></a>
                            <a href="https://www.paypal.com" target="_BLANK"><img src="/assets/png/paypal.png"
                                    alt="Paypal icon" /></a>
                        </div>
                        <div class="md:pl-10 md:order-3">
                            <a href="https://www.centreforaviation.com" target="_BLANK"><img src="/assets/png/capa.png"
                                    alt="CAPA icon" /></a>
                            <a href="https://www.oag.com" target="_BLANK"><img src="/assets/png/punctual.png"
                                    alt="OAG award icon" /></a>
                        </div>
                        <div class="md:pr-10 md:order-1">
                            <a href="https://www.geotrust.com" target="_BLANK"><img src="/assets/png/secured.png"
                                    alt="Geotrust secured icon" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { z } from "zod";

const newsletter = ref({
    email: "",
    error: ""
});

const subscribeToNewsletter = () => {
    const emailSchema = z.string().min(1, "Please enter your e-mail address.").email();
    const validationResult = emailSchema.safeParse(newsletter.value.email);
    if (!validationResult.success) {
        const formattedErrors = validationResult.error.format();
        newsletter.value.error = formattedErrors?._errors[0] || "";
        return;
    }
    newsletter.value.error = "";
}
</script>

<style scoped>
footer h2 {
    @apply font-medium text-sm/8 text-text-footer-title uppercase;
}

input+button {
    @apply flex items-center justify-center absolute inset-0 left-auto w-[40px];
}

input+button path {
    @apply stroke-text-footer-title;
}

.footer-social {
    @apply pt-6 flex items-center gap-x-3 md:justify-end md:order-1;
}

.footer-social>a {
    @apply rounded-full flex items-center justify-center w-[40px] h-[40px] bg-social-bcg;
}

.external-site-link {
    @apply py-6 flex items-start gap-4 font-normal text-xs text-text-light;
}

.copyright {
    @apply font-normal text-xs text-text-light;
}

.footer-legal-and-others {
    @apply flex flex-col md:flex-row md:gap-12;
}

.footer-legal-and-others>a {
    @apply font-normal text-xs text-text-footer-title;
}

.logos {
    @apply flex flex-col md:flex-row;
}

.logos>div {
    @apply border-t border-form-border py-4 flex items-center gap-x-4 md:py-0 md:border-y-0;
}

.logos img {
    @apply max-h-[50px];
}
</style>