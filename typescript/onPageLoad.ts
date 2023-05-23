import {API_DOMAIN, EMAIL_REGEX} from "./constants";
import { applyClassForResponsiveNavbar } from './utilis';
import handleNewApplicant from './newApp';
import handleReturningApplicant from "./continueApp";

function initListenerChain(): void {
    const emailForm = document.getElementById("email-form") as HTMLFormElement;
    const emailInput = document.getElementById("email-input") as HTMLInputElement;
    // (1.1) listen for valid email
    emailInput.addEventListener("input", toggleEmailSubmitButton);
    // (1.2) listen for email submission
    emailForm.addEventListener("submit", handleEmailFormSubmission);
    applyClassForResponsiveNavbar(window.innerWidth);
}

// (1.1) callback - handles email submit button availability - toggles disabled state - validates email
function toggleEmailSubmitButton(this: HTMLInputElement): void {
    (document.getElementById("email-submit-btn") as HTMLButtonElement).disabled =
        !EMAIL_REGEX.test(this.value);
}
// (1.2)
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

export default initListenerChain;
