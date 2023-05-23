import onPageLoad, { applyClassForResponsiveNavbar } from "./onPageLoad";

/**
 * @event PageLoad mounts listeners and handles user input then redirects to next steps */
document.addEventListener("DOMContentLoaded", onPageLoad);
/**
 * @event viewport size change. Handles edge case, close mobile nav when swapping to desktop view */
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
 * @function toggleMobileNav
 * @description applies/removes DOM element class names that trigger ui changes
 * @note this function is called on in the DOM
 */
export function toggleMobileNav(): void {
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
