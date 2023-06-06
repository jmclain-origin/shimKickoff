import onPageLoad from "./onPageLoad";

/**
 * @event PageLoad mounts listeners and handles user input then redirects to next steps */
document.addEventListener("DOMContentLoaded", onPageLoad);

window.AsuHeader.initGlobalHeader({
    targetSelector: '#header-container',
    props: {
        navTree: [],
        expandOnHover: true,
        title: 'ASU Admissions',
        target: '_blank',
        baseUrl: 'https://admission.asu.edu', // base URL used for href on logo
        searchUrl: "https://search.asu.edu/search",
        site: "subdomain",
        loggedIn: false,
        logoutLink: "https://www.asu.edu/caslogout?returnto=/",
        loginLink: "https://www.asu.edu/caslogin?returnto=/",
    },
});

window.AsuFooter.initASUFooter({
    targetSelector: '#footer-container',
    props: {},
});
