import { V1_APP_DOMIAN, V2_APP_DOMIAN } from './constants'

interface ProgramFormElements extends HTMLFormControlsCollection {
    programForm: RadioNodeList;
}

let SELECTED: string;
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
// Callback (2.1)
function toggleContinueButton(this: HTMLFormElement) {
    const inputElements = this.elements as ProgramFormElements;
    (document.getElementById("radio-submit-btn") as HTMLButtonElement).disabled =
        !hasRadioCollectionSelectedValue(inputElements.programForm);
}
// Callback (2.2)
let APP_PATH: string;
function handleProgramFormSubmission(
    this: HTMLFormElement,
    event: SubmitEvent
): void {
    event.preventDefault();
    const formData = new FormData(this);
    const crtlGroup = this.elements as ProgramFormElements;

    hasRadioCollectionSelectedValue(crtlGroup.programForm)
    if (SELECTED === 'full') {
        // 10% chance of being direcrted to the new app
        APP_PATH = Math.random() <= 0.1 ? V2_APP_DOMIAN : V1_APP_DOMIAN;
    } else {
        APP_PATH = V1_APP_DOMIAN;
    }
    // window.location.href = APP_PATH;
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


export default handleNewApplicant;
