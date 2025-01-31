export function useBreadcrumb() {
    const route = useRoute();
    const breadcrumbMap = {
        "/": [{ name: "Home", path: "/" }],
        "/ContactUs": [
            { name: "Home", path: "/" },
            { name: "Contact us", path: "/ContactUs" }
        ],
        "/SubmitClaim": [
            { name: "Home", path: "/" },
            { name: "Contact us", path: "/ContactUs" },
            { name: "Submit a claim", path: "/SubmitClaim" }
        ],
        "/RequestAssistance": [
            { name: "Home", path: "/" },
            { name: "Contact us", path: "/ContactUs" },
            { name: "Submit a claim", path: "/SubmitClaim" },
            { name: "Damaged baggage", path: "/" }
        ]
    };

    const breadcrumbs = computed(() => {
        const path = route.path;
        const breadcrumbFn = breadcrumbMap[path];
        return typeof breadcrumbFn === "function" ? breadcrumbFn(route) : breadcrumbFn || [];
    });

    return { breadcrumbs };
}