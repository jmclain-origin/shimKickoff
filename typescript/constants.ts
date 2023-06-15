/**
 * @note change here will affect all the logical uses in related files */
export const API_DOMAIN = "https://api-dev.adms-aaa.apps.asu.edu/api/ug";
export const LEGACY_APP_DOMAIN = 'https://webapp4-dev.asu.edu/uga_admissionsapp/';
export const NEW_APP_DOMAIN = 'https://www.joshmclain.com/';

export function getCookies(name: String) {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1? cookie.substr(0, eqPos) : cookie;
        if (name === name.toLowerCase()) {
            return decodeURIComponent(cookie.substr(eqPos + 1));
        }
    }
    return null;
}
