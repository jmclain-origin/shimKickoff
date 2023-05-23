/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 578:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.V2_APP_DOMIAN = exports.V1_APP_DOMIAN = exports.API_DOMAIN = exports.EMAIL_REGEX = void 0;
exports.EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
/**
 * @note vars will need to be updated depending on the environment
 */
exports.API_DOMAIN = "https://api-dev.adms-aaa.apps.asu.edu/api/ug";
exports.V1_APP_DOMIAN = 'https://www.ugappv1.com/';
exports.V2_APP_DOMIAN = 'https://www.ugappv2.com/';


/***/ }),

/***/ 41:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * @function handleReturningApplicant
 * @param {string} source
 * @description This function will update the ui and appliy the nesessary link in to login
 */
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
        // (document.getElementById('login-anchor') as HTMLAnchorElement).href = source === 'ugappv1' ? V1_APP_DOMIAN : V2_APP_DOMIAN;
        window.alert(`Need redirect URLs, logic already there, this user would had gone to ${source}`);
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
const utilis_1 = __webpack_require__(536);
document.addEventListener("DOMContentLoaded", onPageLoad_1.default);
window.addEventListener("resize", () => {
    const navElement = document.getElementById("nav-links");
    (0, utilis_1.applyClassForResponsiveNavbar)(window.innerWidth);
    if (window.innerWidth >= 768 &&
        navElement &&
        navElement.classList.contains("is-open"))
        navElement.classList.remove("is-open");
});
/**
 * @function toggleMobileNav
 * @description applies/removes DOM element class names that trigger ui changes
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


/***/ }),

/***/ 513:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
let SELECTED;
function handleNewApplicant() {
    document.getElementById("email-submit-btn").disabled = true;
    document.getElementById("email-prompt").classList.add("hidden");
    const radioForm = document.getElementById("radio-form");
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
function toggleContinueButton() {
    const inputElements = this.elements;
    document.getElementById("radio-submit-btn").disabled =
        !hasRadioCollectionSelectedValue(inputElements.programForm);
}
// Callback (2.2)
function handleProgramFormSubmission(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const ele = this.elements;
    hasRadioCollectionSelectedValue(ele.programForm);
    console.log();
}
function hasRadioCollectionSelectedValue(radioCollection) {
    for (let node of radioCollection) {
        const input = node;
        if (input.checked) {
            SELECTED = input.value;
            console.log(SELECTED);
            return true;
        }
    }
    return false;
}
exports["default"] = handleNewApplicant;


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
const utilis_1 = __webpack_require__(536);
const newApp_1 = __importDefault(__webpack_require__(513));
const continueApp_1 = __importDefault(__webpack_require__(41));
function initListenerChain() {
    const emailForm = document.getElementById("email-form");
    const emailInput = document.getElementById("email-input");
    // (1.1) listen for valid email
    emailInput.addEventListener("input", toggleEmailSubmitButton);
    // (1.2) listen for email submission
    emailForm.addEventListener("submit", handleEmailFormSubmission);
    (0, utilis_1.applyClassForResponsiveNavbar)(window.innerWidth);
}
// (1.1) callback - handles email submit button availability - toggles disabled state - validates email
function toggleEmailSubmitButton() {
    document.getElementById("email-submit-btn").disabled =
        !constants_1.EMAIL_REGEX.test(this.value);
}
// (1.2)
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
exports["default"] = initListenerChain;


/***/ }),

/***/ 536:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.confirmPrompt = exports.hasRadioCollectionSelectedValue = exports.applyClassForResponsiveNavbar = void 0;
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
// Callback (2.1)
function hasRadioCollectionSelectedValue(radioCollection) {
    for (let node of radioCollection) {
        const input = node;
        if (input.checked) {
            return true;
        }
    }
    return false;
}
exports.hasRadioCollectionSelectedValue = hasRadioCollectionSelectedValue;
function confirmPrompt(confirmationPrompt) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, _reject) => __awaiter(this, void 0, void 0, function* () {
            const [value] = yield Promise.all([window.confirm(confirmationPrompt)]);
            return resolve(value);
        }));
    });
}
exports.confirmPrompt = confirmPrompt;


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