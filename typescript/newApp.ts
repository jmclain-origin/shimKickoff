import { V1_APP_DOMAIN, V2_APP_DOMAIN } from './constants'
interface ProgramFormElements extends HTMLFormControlsCollection {
    programForm: RadioNodeList;
}

/**
 * @function handleNewApplicant
 * @description updates UI, binds listeners and directs user to next step as per requirements */
export default function handleNewApplicant() {
    (
        document.getElementById("email-submit-btn") as HTMLButtonElement
    ).disabled = true;
    (document.getElementById("email-prompt") as HTMLElement).classList.add(
        "hidden"
    );
    (document.getElementById("email-input") as HTMLInputElement).disabled = true;
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
    // (2.1) Listen for form activity - toggle next step
    radioForm.addEventListener("input", toggleContinueButton);
    // (2.2) listen for form submission
    radioForm.addEventListener("submit", handleProgramFormSubmission);
}
// Listener Callback (2.1)
function toggleContinueButton(this: HTMLFormElement) {
    const inputElements = this.elements as ProgramFormElements;
    (document.getElementById("radio-submit-btn") as HTMLButtonElement).disabled =
        !hasRadioCollectionSelectedValue(inputElements.programForm);
}
let SELECTED: string;
let APP_PATH: string;
// Listener Callback (2.2)
function handleProgramFormSubmission(
    this: HTMLFormElement,
    event: SubmitEvent
): void {
    event.preventDefault();
    const ctlGroup = this.elements as ProgramFormElements;

    hasRadioCollectionSelectedValue(ctlGroup.programForm)
    if (SELECTED === 'full') {
        // 10% chance of being directed to the new app
        APP_PATH = Math.random() <= 0.1 ? V2_APP_DOMAIN : V1_APP_DOMAIN;
    } else {
        APP_PATH = V1_APP_DOMAIN;
    }
    // TODO: remove window alert
    // (document.getElementById('radio-anchor') as HTMLAnchorElement).href = APP_PATH;
    window.alert(`redirecting user to ${APP_PATH}`);
}
function hasRadioCollectionSelectedValue(
    radioCollection: RadioNodeList
): boolean {
    for (let node of radioCollection) {
        const input = node as HTMLInputElement;
        if (input.checked) {
            SELECTED = input.value
            return true;
        }
    }
    return false;
}
