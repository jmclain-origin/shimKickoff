/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 578:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.V2_APP_DOMAIN = exports.V1_APP_DOMAIN = exports.API_DOMAIN = void 0;
/**
 * @note change here will affect all the logical uses in related files */
exports.API_DOMAIN = "https://api-dev.adms-aaa.apps.asu.edu/api/ug";
exports.V1_APP_DOMAIN = 'https://www.ugappv1.com/';
exports.V2_APP_DOMAIN = 'https://www.ugappv2.com/';


/***/ }),

/***/ 41:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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
        // TODO: remove window alert once we have the updated constants urls
        // (document.getElementById('login-anchor') as HTMLAnchorElement).href = source === 'ugappv1' ? V1_APP_DOMAIN : V2_APP_DOMAIN;
        window.alert(`Need redirect URLs, logic already there, this user would had gone to ${source}`);
    }
}
exports["default"] = handleReturningApplicant;


/***/ }),

/***/ 117:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toggleMobileNav = void 0;
const onPageLoad_1 = __importStar(__webpack_require__(511));
/**
 * @event PageLoad mounts listeners and handles user input then redirects to next steps */
document.addEventListener("DOMContentLoaded", onPageLoad_1.default);
/**
 * @event viewport size change. Handles edge case, close mobile nav when swapping to desktop view */
window.addEventListener("resize", () => {
    const navElement = document.getElementById("nav-links");
    (0, onPageLoad_1.applyClassForResponsiveNavbar)(window.innerWidth);
    if (window.innerWidth >= 768 &&
        navElement &&
        navElement.classList.contains("is-open"))
        navElement.classList.remove("is-open");
});
/**
 * @function toggleMobileNav
 * @description applies/removes DOM element class names that trigger ui changes
 * @note this function is called on in the DOM
 */
function toggleMobileNav() {
    const navLinksParent = document.getElementById("nav-links");
    const mobileMenuImg = document.getElementById("mobile-menu-img");
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    if (navLinksParent) {
        if (navLinksParent.classList.contains("is-open")) {
            mobileMenuImg.src = "./public/image/hamburger%20menu%20icon.svg";
            navLinksParent.classList.remove("is-open");
            mobileMenuBtn.classList.remove("open");
        }
        else {
            mobileMenuImg.src = "./public/image/times-solid.svg";
            navLinksParent.classList.add("is-open");
            mobileMenuBtn.classList.add("open");
        }
    }
}
exports.toggleMobileNav = toggleMobileNav;


/***/ }),

/***/ 513:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(578);
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
// Listener Callback (2.2)
function handleProgramFormSubmission(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const ctlGroup = this.elements;
    hasRadioCollectionSelectedValue(ctlGroup.programForm);
    if (SELECTED === 'full') {
        // 10% chance of being directed to the new app
        APP_PATH = Math.random() <= 0.1 ? constants_1.V2_APP_DOMAIN : constants_1.V1_APP_DOMAIN;
    }
    else {
        APP_PATH = constants_1.V1_APP_DOMAIN;
    }
    // TODO: remove window alert
    // (document.getElementById('radio-anchor') as HTMLAnchorElement).href = APP_PATH;
    window.alert(`redirecting user to ${APP_PATH}`);
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
exports.applyClassForResponsiveNavbar = void 0;
const constants_1 = __webpack_require__(578);
const newApp_1 = __importDefault(__webpack_require__(513));
const continueApp_1 = __importDefault(__webpack_require__(41));
const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
/**
 * @callback initListener binds additional listeners for email input */
function initListener() {
    // TODO: remove window alert and timeout
    setTimeout(() => {
        window.alert(`valid emails\n\nlegacy app v1\nfoo@example.com\n\nnew app v2\ngdgdsag@test.asu.edu\n\nuse any for new user (dnf)`);
    }, 1000);
    const emailForm = document.getElementById("email-form");
    const emailInput = document.getElementById("email-input");
    // (1.1) listener for valid email
    emailInput.addEventListener("input", toggleEmailSubmitButton);
    // (1.2) listener for email form submission
    emailForm.addEventListener("submit", handleEmailFormSubmission);
    applyClassForResponsiveNavbar(window.innerWidth);
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
function applyClassForResponsiveNavbar(viewportWidth) {
    const navLinks = document.getElementById("nav-links");
    if (viewportWidth < 768) {
        navLinks.classList.remove("desktop");
        navLinks.classList.add("mobile");
    }
    else {
        navLinks.classList.remove("mobile");
        navLinks.classList.add("desktop");
    }
}
exports.applyClassForResponsiveNavbar = applyClassForResponsiveNavbar;


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