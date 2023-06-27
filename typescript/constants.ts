export const API_DOMAIN = (document.getElementById("api-url") as HTMLInputElement).value + 'api/ug/';
export const LEGACY_APP_DOMAIN = (document.getElementById('legacy-app-url') as HTMLInputElement).value + 'uga_admissionsapp/' ;
console.log("🚀 ~ file: constants.ts:9 ~ LEGACY_APP_DOMAIN:", LEGACY_APP_DOMAIN)
export const NEW_APP_DOMAIN = (document.getElementById('new-app-url') as HTMLInputElement).value + "";
console.log("🚀 ~ file: constants.ts:11 ~ NEW_APP_DOMAIN:", NEW_APP_DOMAIN)
export const SHIM_PERCENT = parseFloat((document.getElementById('shim-percent') as HTMLInputElement).value);
console.log("🚀 ~ file: constants.ts:13 ~ SHIM_PERCENT:", SHIM_PERCENT);

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
