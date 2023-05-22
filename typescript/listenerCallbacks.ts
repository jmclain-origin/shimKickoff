import {API_DOMAIN, EMAIL_REGEX} from "./constants";

interface ProgramFormElements extends HTMLFormControlsCollection {
    programForm: RadioNodeList;
}

export function initListenerChain(): void {
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
                    handleReturningApplicant();
                }
            }
        } catch (error: unknown | any) {
            console.log(error);
            alert(error);
            throw new Error(error);
        }
    })();
}

/// returning user application
function handleReturningApplicant() {
    (
        document.getElementById("is-registered-prompt") as HTMLDivElement
    ).classList.remove("hidden");
    (
        document.getElementById("email-submit-btn") as HTMLButtonElement
    ).classList.add("hidden");
    (document.getElementById("email-prompt") as HTMLElement).classList.add(
        "hidden"
    );
    (document.getElementById("email-input") as HTMLInputElement).className =
        (document.getElementById("email-input") as HTMLInputElement)
            .className + "-confirmed";
    (document.getElementById("email-input") as HTMLInputElement).disabled =
        true;
    (
        document.getElementById("email-form") as HTMLFormElement
    ).style.paddingBottom = "0";
}

/// new user application
function handleNewApplicant() {
    (
        document.getElementById("email-submit-btn") as HTMLButtonElement
    ).disabled = true;
    (document.getElementById("email-prompt") as HTMLElement).classList.add(
        "hidden"
    );
    const radioForm = document.getElementById(
        "radio-form"
    ) as HTMLFormElement;
    radioForm.style.opacity = "0";
    radioForm.classList.remove("hidden");
    radioForm.animate([{ opacity: "0" }, { opacity: "1" }], {
        duration: 600,
        fill: "forwards",
        iterations: 1,
    });
    // (2.1)
    radioForm.addEventListener("input", toggleContinueButton);
    // (2.2)
    radioForm.addEventListener("submit", handleProgramFormSubmission);
}



/// HELPER FUNCTIONS
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
// Callback (2.1)
function toggleContinueButton(this: HTMLFormElement) {
    const inputElements = this.elements as ProgramFormElements;
    (document.getElementById("radio-submit-btn") as HTMLButtonElement).disabled =
        !hasRadioCollectionSelectedValue(inputElements.programForm);
}
// Callback (2.2)
function handleProgramFormSubmission(
    this: HTMLFormElement,
    event: SubmitEvent
): void {
    event.preventDefault();
    const formData = new FormData(this);
    (async () => {
        const proceed = await confirmPrompt(
            `proceed with data submitted? \n formData.entries \n ${JSON.stringify(
                formData.entries()
            )}`
        );
        if (proceed) {
            // redirect to the next step ?
            window.location.reload();
        }
    })();
}

function hasRadioCollectionSelectedValue(
    radioCollection: RadioNodeList
): boolean {
    for (let node of radioCollection) {
        const input = node as HTMLInputElement;
        if (input.checked) {
            return true;
        }
    }
    return false;
}

async function confirmPrompt(confirmationPrompt: string) {
    return new Promise<boolean>(async (resolve, _reject) => {
        const [value] = await Promise.all([window.confirm(confirmationPrompt)]);
        return resolve(value);
    });
}
