import {LEGACY_APP_DOMAIN, NEW_APP_DOMAIN } from "./constants";
import { setCookie } from "./utils";

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
        const cookieValWhichApp: string = source === 'ugappv1'? 'LEGACY' : 'NEW';
        setCookie("shim-which-app", cookieValWhichApp, 2);
        (document.getElementById('login-anchor') as HTMLAnchorElement).href = source === 'ugappv1' ? LEGACY_APP_DOMAIN : NEW_APP_DOMAIN;
    }
}
