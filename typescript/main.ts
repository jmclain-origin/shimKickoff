import onPageLoad from "./onPageLoad";
import { applyClassForResponsiveNavbar } from './utilis';

document.addEventListener("DOMContentLoaded", onPageLoad);

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
