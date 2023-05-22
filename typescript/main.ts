


import { initListenerChain, applyClassForResponsiveNavbar } from './listenerCallbacks';

document.addEventListener("DOMContentLoaded", initListenerChain);

window.addEventListener("resize", () => {
    const navElement = document.getElementById("nav-links");
    applyClassForResponsiveNavbar(window.innerWidth);
    if (
        window.innerWidth >= 768 &&
        navElement &&
        navElement.classList.contains("is-open")
    )
        navElement.classList.remove("is-open");
});


/**
 * @function handleLoginRedirect
 * @description redirects to the appropriate login page
 * @note used in HTML / JSP
 */
async function handleLoginRedirect() {
    const confirm = await confirmPrompt(
        `Do you want to go to login page?\n${localStorage.getItem("email")}`
    );
    if (confirm) {
        localStorage.clear();
        window.location.href = "/";
    }
}

/** @description helper/filler */
async function confirmPrompt(confirmationPrompt: string) {
    return new Promise<boolean>(async (resolve, _reject) => {
        const [value] = await Promise.all([window.confirm(confirmationPrompt)]);
        return resolve(value);
    });
}

/**
 * @function toggleMobileNav
 * @description applies or removes element class names triggering ui changes
 */
function toggleMobileNav(): void {
    const navLinksParent = document.getElementById("nav-links");
    const mobileMenuImg = document.getElementById(
        "mobile-menu-img"
    ) as HTMLImageElement;
    const mobileMenuBtn = document.getElementById(
        "mobile-menu-btn"
    ) as HTMLButtonElement;

    if (navLinksParent) {
        if (navLinksParent.classList.contains("is-open")) {
            mobileMenuImg.src = "./public/image/hamburger%20menu%20icon.svg";
            navLinksParent.classList.remove("is-open");
            mobileMenuBtn.classList.remove("open");
        } else {
            mobileMenuImg.src = "./public/image/times-solid.svg";
            navLinksParent.classList.add("is-open");
            mobileMenuBtn.classList.add("open");
        }
    }
}
