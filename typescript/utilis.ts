
export function applyClassForResponsiveNavbar(viewportWidth: number): void {
    const navLinks = document.getElementById("nav-links") as HTMLDivElement;
    if (viewportWidth < 768) {
        navLinks.classList.remove("desktop");
        navLinks.classList.add("mobile");
    } else {
        navLinks.classList.remove("mobile");
        navLinks.classList.add("desktop");
    }
}
