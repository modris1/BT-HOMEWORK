<template>
    <form @submit.prevent="submitForm">
        <div class="section">
            <div class="info">
                <h2>Contact details</h2>
                <p>Something also goes here, so it doesn't look that lonely down here</p>
            </div>
            <div class="fields">
                <FormField label="Name, surname" :error="formContact.name.error">
                    <input v-model="formContact.name.input" type="text" @input="validateForm" />
                </FormField>
                <FormField label="E-mail" :error="formContact.email.error">
                    <input v-model="formContact.email.input" type="email" @input="validateForm" />
                </FormField>
                <div class="flex gap-2">
                    <FormField class="w-1/3" label="Country code" :error="formContact.country.error">
                        <select v-model="formContact.country.input" @change="validateForm">
                            <option v-for="code in countryCodes">{{ code }}</option>
                        </select>
                    </FormField>
                    <FormField class="w-2/3" label="Phone number" :error="formContact.phone.error">
                        <input v-model="formContact.phone.input" type="tel" @input="validateForm" />
                    </FormField>
                </div>
            </div>
        </div>
        <div class="section" v-for="(flight, index) in formFlight" :key="flight.id">
            <div class="info">
                <h2>Select flight</h2>
                <p>Suspendisse elementum turpis ut volutpat ultricies. Mauris eget nisl diam. In vel felis in metus
                    vulputate imperdiet vestibulum at dolor.</p>
            </div>
            <div class="fields">
                <div class="flex flex-col gap-4">
                    <FormField label="Flight number" :error="flight.number.error">
                        <input v-model="flight.number.input" type="text" @input="validateForm" />
                    </FormField>
                    <FormField label="Flight date" desc="For example:  30  8  1972" :error="flight.date.error">
                        <div class="flex gap-2">
                            <input class="w-3/6" v-model="flight.date.day.input" type="text" maxlength="2"
                                placeholder="DD" @input="validateForm" />
                            <input class="w-3/6" v-model="flight.date.month.input" type="text" maxlength="2"
                                placeholder="MM" @input="validateForm" />
                            <select class="w-4/6" v-model="flight.date.year.input" @change="validateForm">
                                <option disabled selected>YYYY</option>
                                <option v-for="year in years">{{ year }}</option>
                            </select>
                        </div>
                    </FormField>
                </div>
                <div class="pt-4 flex gap-4">
                    <button v-if="index === formFlight.length - 1" class="btn-primary-alt" type="button"
                        @click="addFlight" aria-label="Add one more flight">Add flight</button>
                    <button class="btn-primary-alt" :class="{ 'disabled': formHasOneFlight }" type="button"
                        @click="deleteFlight(index)" aria-label="Delete last flight">Delete flight</button>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="info">
                <p>By submitting this form you agree to airBaltic's <a class="underline">Privacy Policy</a></p>
            </div>
            <div class="fields">
                <div class="flex flex-col gap-2">
                    <button class="btn-primary md:w-[160px] md:h-[52px]" :class="{ 'disabled': !isFormValid }"
                        type="submit" aria-label="Submit assistance form">Confirm</button>
                    <p v-if="!isFormValid" class="error text-center md:text-left md:text-balance">Oops! There are some
                        errors in the data fields
                        above.
                        Please resolve them and then try again.</p>
                    <p v-if="submitSuccessful" class="text-green-500">Form submitted</p>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
import { z } from "zod";
import { useAssistanceStore } from "~/stores/AssistanceStore";

const assistanceStore = useAssistanceStore();

const countryCodes = ["+1", "+44", "+49", "+370", "+371", "+372"];
const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 1972 + 1 }, (_, index) => 1972 + index).reverse();

const submitAttempt = ref(false);
const submitSuccessful = ref(false);

const isFormValid = computed(() => {
    return !Object.values(formContact.value).some(field => field.error) &&
        !formFlight.value.some(flight => flight.number.error || flight.date.error);
});

const resetForm = () => {
    formContact.value = { name: { input: "", error: "" }, email: { input: "", error: "" }, country: { input: "+371", error: "" }, phone: { input: "", error: "" } };
    formFlight.value = [createFlight()];
    submitAttempt.value = false;
};

const formContact = ref({
    name: {
        input: "",
        error: ""
    },
    email: {
        input: "",
        error: ""
    },
    country: {
        input: "+371",
        error: ""
    },
    phone: {
        input: "",
        error: ""
    }
});

const createFlight = () => ({
    id: Date.now(),
    number: {
        input: "",
        error: ""
    },
    date: {
        day: { input: "" },
        month: { input: "" },
        year: { input: "YYYY" },
        error: ""
    }
});

const formFlight = ref([createFlight()]);

const ContactSchema = z.object({
    fullName: z.string().min(1, "Please enter your name and surname.").refine(value => value.trim().split(/\s+/).length >= 2, {
        message: "Please enter both name and surname.",
    }),
    email: z.string().min(1, "Please enter your e-mail address.").email("Invalid email format."),
    countryCode: z.string().regex(/^\+\d{1,4}$/, "Invalid country code."),
    phoneNumber: z.string().min(1, "Please enter your phone number.").regex(/^\d{8,15}$/, "Phone number must be 8-15 digits.")
});

const FlightSchema = z.object({
    flightNumber: z.string().min(1, "Please enter the flight number.").regex(/^[A-Za-z]{2}\d{4,5}$/, "Must be two letters followed by 4 or 5 digits."),
    flightDate: z.string().regex(/^(0?[1-9]|[12]\d|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/, "Invalid date. Refer to the example below for the correct format.").refine((dateStr) => {
        const [day, month, year] = dateStr.split("/").map(Number);
        const date = new Date(year, month - 1, day);
        return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
    }, "Invalid date.")
});

const formHasOneFlight = computed(() => {
    return formFlight.value.length <= 1;
});

const addFlight = () => {
    formFlight.value.push(createFlight());
}

const deleteFlight = (index: number) => {
    if (formHasOneFlight.value) return;
    formFlight.value.splice(index, 1);
}

const validateForm = () => {
    if (!submitAttempt.value) return { data: null };

    submitSuccessful.value = false;

    const formData = {
        contacts: {},
        flights: [] as Array<{
            flightNumber: string;
            flightDate: string;
        }>
    };

    const ContactData = {
        fullName: formContact.value.name.input.trim(),
        email: formContact.value.email.input.trim(),
        countryCode: formContact.value.country.input.trim(),
        phoneNumber: formContact.value.phone.input.trim()
    }
    const validationResult = ContactSchema.safeParse(ContactData);
    if (!validationResult.success) {
        const formattedErrors = validationResult.error.format();
        formContact.value.name.error = formattedErrors.fullName?._errors[0] || "";
        formContact.value.email.error = formattedErrors.email?._errors[0] || "";
        formContact.value.country.error = formattedErrors.countryCode?._errors[0] || "";
        formContact.value.phone.error = formattedErrors.phoneNumber?._errors[0] || "";
    } else {
        const validatedData = validationResult.data;
        formData.contacts = validatedData;
        formContact.value.name.error = "";
        formContact.value.email.error = "";
        formContact.value.country.error = "";
        formContact.value.phone.error = "";
    }

    const flightArr = formFlight.value;
    const uniqueFlightNumbers = new Set();
    flightArr.forEach((flight, index) => {
        const flightNumber = flight.number.input.trim();
        const flightDate = `${flight.date.day.input.trim()}/${flight.date.month.input.trim()}/${flight.date.year.input.trim()}`;

        const validationResult = FlightSchema.safeParse({ flightNumber, flightDate });
        if (!validationResult.success) {
            const formattedErrors = validationResult.error.format();
            flightArr[index].number.error = formattedErrors.flightNumber?._errors[0] || "";
            flightArr[index].date.error = formattedErrors.flightDate?._errors[0] || "";
        } else {
            const validatedData = validationResult.data;
            if (uniqueFlightNumbers.has(validatedData.flightNumber)) {
                flightArr[index].number.error = "This flight number is already used.";
            } else {
                uniqueFlightNumbers.add(validatedData.flightNumber);
                formData.flights.push(validatedData);
                flightArr[index].number.error = "";
                flightArr[index].date.error = "";
            }
        }
    });

    return { data: formData };
}

const submitForm = () => {
    submitAttempt.value = true;
    const formResult = validateForm();
    if (!isFormValid.value) return;
    assistanceStore.saveForm(formResult.data);
    submitSuccessful.value = true;
    resetForm();
}
</script>

<style>
h2 {
    @apply font-medium text-base/5 text-brand-blue;
}

p {
    @apply font-normal text-xs/5 text-text-desc;
}

p.error {
    @apply text-red-500;
}

form {
    @apply bg-sidebar-bcg;
}

form .section {
    @apply p-5 md:flex md:justify-between md:gap-14;
}

form .section:not(:last-child) {
    @apply border-b border-form-border;
}

form .info {
    @apply flex flex-col gap-2 md:w-[35%];
}

form .fields {
    @apply py-4 flex flex-col gap-4 md:py-0 md:pr-8 md:w-[52%];
}

.btn-primary-alt {
    @apply md:w-[120px] md:h-[44px];
}
</style>