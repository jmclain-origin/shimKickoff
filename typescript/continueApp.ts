import { V1_APP_DOMAIN, V2_APP_DOMAIN } from "./constants";
/**
 * @function handleReturningApplicant
 * @param {string} source value passed from the results found in DB
 * @description updates UI and directs user to next step per requirements */
export default function handleReturningApplicant(source?: 'ugappv1'| 'ugappv2') {
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

    if (source) {
        (document.getElementById('login-anchor') as HTMLAnchorElement).href = source === 'ugappv1' ? V1_APP_DOMAIN : V2_APP_DOMAIN;
    }
}
