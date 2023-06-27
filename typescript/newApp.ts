import { LEGACY_APP_DOMAIN, NEW_APP_DOMAIN, SHIM_PERCENT} from './constants'
import {setCookie} from "./utils";
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
let WHICH_APP: string;
let NEXT_APP_URL: string;

// Listener Callback (2.2)
function handleProgramFormSubmission(
    this: HTMLFormElement,
    event: SubmitEvent
): void {
    event.preventDefault();

    const ctlGroup = this.elements as ProgramFormElements;
    const isReady: boolean = hasRadioCollectionSelectedValue(ctlGroup.programForm)

    if (isReady) {
        console.log("🚀 ~ file: newApp.ts:58 ~ NEXT_APP_URL:", NEXT_APP_URL)
        console.log("🚀 ~ file: newApp.ts:63 ~ WHICH_APP:", WHICH_APP)
        setTimeout(() => {
            setCookie('shim-which-app', WHICH_APP , 7);
            window.location.href = NEXT_APP_URL;
        }, 3000)
    }
}
// Listener Callback (2.1)
function hasRadioCollectionSelectedValue(
    radioCollection: RadioNodeList
): boolean {
    for (let node of radioCollection) {
        const input = node as HTMLInputElement;
        if (input.checked) {
            SELECTED = input.value;
            if (SELECTED === 'online') { 
            NEXT_APP_URL = getNextAppUrl('online');
            console.log("🚀 ~ file: newApp.ts:72 ~ getNextAppUrl('online'):", getNextAppUrl('online'))
            console.log("🚀 ~ file: newApp.ts:75 ~ hasRadioOn NEXT_APP_URL:", NEXT_APP_URL)
            WHICH_APP = 'NEW'
            return true;
        } else { 
            NEXT_APP_URL = getNextAppUrl('legacy');
            console.log("🚀 ~ file: newApp.ts:78 ~ getNextAppUrl('legacy');:", getNextAppUrl('legacy'))
            console.log("🚀 ~ file: newApp.ts:80 ~ hasRadioOn NEXT_APP_URL:", NEXT_APP_URL)
            WHICH_APP = 'LEGACY'
        }   
            return true;
        }
    }
    return false;
}
function getNextAppUrl(selection: 'online' | 'legacy'): string {
    let RESULT = '';
    if (selection === 'online') {
        const X =  Math.random();
        console.log("🚀 ~ file: newApp.ts:93 ~ getNextAppUrl ~ X:", X)
        const thresholdRate = (SHIM_PERCENT / 100); // expects 0.1
        if (X < thresholdRate) {
            RESULT = NEW_APP_DOMAIN + '?NEW&';
            console.log("🚀 ~ file: newApp.ts:95 ~ getNextAppUrl ~ RESULT:", RESULT)
            setCookie('shim-which-app', 'NEW', 1);
        } else {
            RESULT = LEGACY_APP_DOMAIN; + '?LEGACY&';
            console.log("🚀 ~ file: newApp.ts:100 ~ getNextAppUrl ~ RESULT:", RESULT)
            setCookie('shim-which-app', 'LEGACY', 1);
        }
    } else {
        RESULT = LEGACY_APP_DOMAIN;
        console.log("🚀 ~ file: newApp.ts:105 ~ getNextAppUrl ~ LEGACY_APP_DOMAIN:", LEGACY_APP_DOMAIN)
        setCookie('shim-which-app', 'LEGACY', 1);
    }
    return RESULT;
}
