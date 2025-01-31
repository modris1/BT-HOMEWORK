import { defineStore } from "pinia";

export const useAssistanceStore = defineStore("assistanceStore", {
    state: () => ({
        formData: null
    }),
    actions: {
        saveForm(data) {
            this.formData = data;
        }
    }
});