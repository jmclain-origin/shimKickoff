/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 578:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCookies = exports.NEW_APP_DOMAIN = exports.LEGACY_APP_DOMAIN = exports.API_DOMAIN = void 0;
/**
 * @note change here will affect all the logical uses in related files */
exports.API_DOMAIN = "https://api-dev.adms-aaa.apps.asu.edu/api/ug";
exports.LEGACY_APP_DOMAIN = 'https://webapp4-dev.asu.edu/uga_admissionsapp/';
exports.NEW_APP_DOMAIN = 'https://www.joshmclain.com/';
function getCookies(name) {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        if (name === name.toLowerCase()) {
            return decodeURIComponent(cookie.substr(eqPos + 1));
        }
    }
    return null;
}
exports.getCookies = getCookies;


/***/ }),

/***/ 41:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(578);
const utils_1 = __webpack_require__(353);
/**
 * @function handleReturningApplicant
 * @param {string} source value passed from the results found in DB
 * @description updates UI and directs user to next step per requirements */
function handleReturningApplicant(source) {
    document.getElementById("is-registered-prompt").classList.remove("hidden");
    document.getElementById("email-submit-btn").classList.add("hidden");
    document.getElementById("email-prompt").classList.add("hidden");
    document.getElementById("email-input").className =
        document.getElementById("email-input")
            .className + "-confirmed";
    document.getElementById("email-input").disabled =
        true;
    document.getElementById("email-form").style.paddingBottom = "0";
    if (source) {
        const cookieValWhichApp = source === 'ugappv1' ? 'LEGACY' : 'NEW';
        (0, utils_1.setCookie)("shim-which-app", cookieValWhichApp, 2);
        document.getElementById('login-anchor').href = source === 'ugappv1' ? constants_1.LEGACY_APP_DOMAIN : constants_1.NEW_APP_DOMAIN;
    }
}
exports["default"] = handleReturningApplicant;


/***/ }),

/***/ 117:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const onPageLoad_1 = __importDefault(__webpack_require__(511));
/**
 * @event PageLoad mounts listeners and handles user input then redirects to next steps */
document.addEventListener("DOMContentLoaded", onPageLoad_1.default);
window.AsuHeader.initGlobalHeader({
    targetSelector: '#header-container',
    props: {
        navTree: [],
        expandOnHover: true,
        title: 'ASU Admissions',
        target: '_blank',
        baseUrl: 'https://admission.asu.edu',
        searchUrl: "https://search.asu.edu/search",
        site: "subdomain",
        loggedIn: false,
        logoutLink: "https://www.asu.edu/caslogout?returnto=/",
        loginLink: "https://www.asu.edu/caslogin?returnto=/",
    },
});
window.AsuFooter.initASUFooter({
    targetSelector: '#footer-container',
    props: {},
});


/***/ }),

/***/ 513:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(578);
const utils_1 = __webpack_require__(353);
/**
 * @function handleNewApplicant
 * @description updates UI, binds listeners and directs user to next step as per requirements */
function handleNewApplicant() {
    document.getElementById("email-submit-btn").disabled = true;
    document.getElementById("email-prompt").classList.add("hidden");
    document.getElementById("email-input").disabled = true;
    const radioForm = document.getElementById("radio-form");
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
exports["default"] = handleNewApplicant;
// Listener Callback (2.1)
function toggleContinueButton() {
    const inputElements = this.elements;
    document.getElementById("radio-submit-btn").disabled =
        !hasRadioCollectionSelectedValue(inputElements.programForm);
}
let SELECTED;
let APP_PATH;
let WHICH_APP;
// Listener Callback (2.2)
function handleProgramFormSubmission(event) {
    event.preventDefault();
    const ctlGroup = this.elements;
    hasRadioCollectionSelectedValue(ctlGroup.programForm);
    if (SELECTED === 'full') {
        // 10% chance of being directed to the new app
        (() => {
            if (Math.random() < 0.1) {
                APP_PATH = constants_1.NEW_APP_DOMAIN;
                WHICH_APP = "NEW";
            }
            else {
                APP_PATH = constants_1.LEGACY_APP_DOMAIN;
                WHICH_APP = "LEGACY";
            }
        })();
        APP_PATH = Math.random() <= 0.1 ? constants_1.NEW_APP_DOMAIN : constants_1.LEGACY_APP_DOMAIN;
    }
    else {
        WHICH_APP = "LEGACY";
        APP_PATH = constants_1.LEGACY_APP_DOMAIN;
    }
    (0, utils_1.setCookie)('shim-which-app', WHICH_APP, 1);
    document.getElementById('radio-anchor').href = APP_PATH;
}
function hasRadioCollectionSelectedValue(radioCollection) {
    for (let node of radioCollection) {
        const input = node;
        if (input.checked) {
            SELECTED = input.value;
            return true;
        }
    }
    return false;
}


/***/ }),

/***/ 511:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(578);
const newApp_1 = __importDefault(__webpack_require__(513));
const continueApp_1 = __importDefault(__webpack_require__(41));
const utils_1 = __webpack_require__(353);
const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
/**
 * @callback initListener binds additional listeners for email input */
function initListener() {
    const emailForm = document.getElementById("email-form");
    const emailInput = document.getElementById("email-input");
    const shimWhichApp = (0, utils_1.getCookie)("shim-which-app");
    // bypass if already initialized shim routing
    if (shimWhichApp) {
        if (shimWhichApp === "NEW") {
            window.location.href = constants_1.NEW_APP_DOMAIN;
        }
        if (shimWhichApp === "LEGACY") {
            window.location.href = constants_1.LEGACY_APP_DOMAIN;
        }
    }
    // (1.1) listener for valid email
    emailInput.addEventListener("input", toggleEmailSubmitButton);
    // (1.2) listener for email form submission
    emailForm.addEventListener("submit", handleEmailFormSubmission);
}
exports["default"] = initListener;
// (1.1) callback - handles email submit button availability - toggles disabled state - validates email
function toggleEmailSubmitButton() {
    document.getElementById("email-submit-btn").disabled =
        !EMAIL_REGEX.test(this.value);
}
// (1.2) callback - handles email submission - validates email
function handleEmailFormSubmission(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const email = formData.get("email");
    (() => __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            document.getElementById("email-submit-btn").disabled = true;
            const headers = new Headers({
                "Content-Type": "application/aaa.v1+json",
            });
            const response = yield fetch(`${constants_1.API_DOMAIN}/applications/sources`, {
                headers,
                method: "POST",
                body: JSON.stringify({ email }),
            });
            localStorage.setItem("email", email);
            if (response.ok) {
                const resData = yield response.json();
                console.log("response data", resData);
                const source = (_a = resData === null || resData === void 0 ? void 0 : resData.data) === null || _a === void 0 ? void 0 : _a.source;
                if (source === 'dnf') { // new applicant questioner UI
                    this.classList.remove("border-b-0");
                    (0, newApp_1.default)();
                }
                else if (source === 'ugappv1' || source === 'ugappv2') { // existing applicant login UI
                    (0, continueApp_1.default)(source);
                }
            }
        }
        catch (error) {
            console.log(error);
            alert(error);
            throw new Error(error);
        }
    }))();
}


/***/ }),

/***/ 353:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCookie = exports.setCookie = void 0;
function setCookie(name, value, days) {
    let expires = "";
    if (days > 0) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
exports.setCookie = setCookie;
function getCookie(name) {
    let cookieArr = document.cookie.split("; ");
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if (name == cookiePair[0]) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}
exports.getCookie = getCookie;
// You can then call the function like this:
// setCookie('username', 'John Doe', 10);  // Set a cookie that expires in 10 days


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(117);
/******/ 	
/******/ })()
;