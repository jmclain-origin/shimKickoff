import {API_DOMAIN} from "./constants";
import handleNewApplicant from './newApp';
import handleReturningApplicant from "./continueApp";
const EMAIL_REGEX: RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
/**
 * @callback initListener binds additional listeners for email input */
export default function initListener(): void {
    const emailForm = document.getElementById("email-form") as HTMLFormElement;
    const emailInput = document.getElementById("email-input") as HTMLInputElement;
    // (1.1) listener for valid email
    emailInput.addEventListener("input", toggleEmailSubmitButton);
    // (1.2) listener for email form submission
    emailForm.addEventListener("submit", handleEmailFormSubmission);
    applyClassForResponsiveNavbar(window.innerWidth);
}

// (1.1) callback - handles email submit button availability - toggles disabled state - validates email
function toggleEmailSubmitButton(this: HTMLInputElement): void {
    (document.getElementById("email-submit-btn") as HTMLButtonElement).disabled =
        !EMAIL_REGEX.test(this.value);
}
// (1.2) callback - handles email submission - validates email
function handleEmailFormSubmission(this: HTMLFormElement, event: SubmitEvent) {
    event.preventDefault();
    const formData = new FormData(this);
    const email = formData.get("email") as string;
    (async () => {
        try {
            (document.getElementById("email-submit-btn") as HTMLButtonElement).disabled = true;
            const headers = new Headers({
                "Content-Type": "application/aaa.v1+json",
            });
            const response = await fetch(`${API_DOMAIN}/applications/sources`, {
                headers,
                method: "POST",
                body: JSON.stringify({ email }),
            });
            localStorage.setItem("email", email);

            if (response.ok) {
                const resData = await response.json();
                const source: 'dnf' | 'ugappv1' | 'ugappv2' = resData?.data?.source;
                if (source === 'dnf') { // new applicant questioner UI
                    this.classList.remove("border-b-0");
                    handleNewApplicant();
                } else if (source === 'ugappv1' || source === 'ugappv2') { // existing applicant login UI
                    handleReturningApplicant(source);
                }
            }
        } catch (error: unknown | any) {
            console.log(error);
            alert(error);
            throw new Error(error);
        }
    })();
}
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


