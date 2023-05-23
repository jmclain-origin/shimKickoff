/**
 * @function handleReturningApplicant
 * @param {string} source
 * @description This function will update the ui and appliy the nesessary link in to login
 */
function handleReturningApplicant(source?: 'ugappv1'| 'ugappv2') {
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
        // (document.getElementById('login-anchor') as HTMLAnchorElement).href = source === 'ugappv1' ? V1_APP_DOMIAN : V2_APP_DOMIAN;
        window.alert(`Need redirect URLs, logic already there, this user would had gone to ${source}`)
    }
}

export default handleReturningApplicant;
