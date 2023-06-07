<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>UnderGraduateAdmissions</title>
    <script defer src="dist/shim/bundle.js"></script>
    <link
            rel="stylesheet"
            href="/uga_admissionsapp/public/unity/bootstrap-asu.min.css?"
    />
    <link rel="stylesheet" href="dist/shim/style.css" />
</head>
<body>
<header id="header-container"></header>

<div class="hero wrapper">
    <div class="hero-content">
        <h2 class="hero-heading">
            <span class="hero-text-bg">Apply to ASU</span>
        </h2>
        <h3 class="hero-lead">
          <span class="hero-text-bg"
          >Your ASU undergraduate journey starts with this application</span
          >
        </h3>
    </div>
</div>

<div class="body-wrapper wrapper">
    <div class="card-wrapper">
        <h5 class="detail-label">
            <span class="text-bg-dark">More about the application</span>
        </h5>
        <div class="info-card">
            <img
                    class="card-icon"
                    src="./dist/shim/image/clock.svg"
                    alt="image of a credit code"
            />
            <h5 class="card-title">Time to apply</h5>
            <h5 class="card-text">
                Allow about <span class="highlight">30 minutes</span> to complete
                your application. You can save your application and come back later.
            </h5>
        </div>
        <div class="info-card">
            <img
                    class="card-icon"
                    src="./dist/shim/image/credit%20card.svg"
                    alt="image of a credit card"
            />
            <h5 class="card-title">Application fee</h5>
            <ul>
                <li>
                    <span class="card-text-bold">Arizona residents:</span>
                    <span class="card-text">$50.00</span>
                </li>
                <li>
                    <span class="card-text-bold">Residents:</span>
                    <span class="card-text">$80.00</span>
                </li>
                <li>
                    <span class="card-text-bold">ASU Online:</span>
                    <span class="card-text">$70.00</span>
                </li>
                <li>
                    <span class="card-text-bold">International:</span>
                    <span class="card-text">$85.00</span>
                </li>
            </ul>
        </div>
        <div class="info-card">
            <img
                    class="card-icon"
                    src="./dist/shim/image/school.svg"
                    alt="image of a school"
            />
            <h5 class="card-title">School info</h5>
            <h5 class="card-text">
                It will be handy to have your high school and previous college
                information available.
            </h5>
        </div>

        <div class="info-card">
            <img
                    class="card-icon"
                    src="./dist/shim/image/question.svg"
                    alt="image of a question mark"
            />
            <h5 class="card-title">Help</h5>
            <ul>
                <li>
                    <span class="card-text-bold">Email:</span>
                    <span class="card-text-red cursor-pointer"
                    ><a href="mailto://admissions@asu.edu"
                    >admissions@asu.edu</a
                    ></span
                    >
                </li>
                <li>
                    <span class="card-text-bold">Phone:</span>
                    <span class="card-text-red cursor-pointer"
                    ><a href="tel:+14809657788">480-965-7788</a></span
                    >
                </li>
            </ul>
        </div>
    </div>

    <main class="main-wrapper">
        <h4 class="main-heading">
            <span class="bg-gold">We're beta testing a new application.</span>
        </h4>
        <h4 class="main-sub">
            Let us assist you in getting where you need to go!
        </h4>
        <div>
            <form
                    id="email-form"
                    class="form-wrapper-email border-b-0"
                    action=""
                    method="post"
            >
                <label class="email-label" for="email-input"
                >What's your email address?</label
                >
                <div class="group-input">
                    <input
                            id="email-input"
                            type="email"
                            name="email"
                            class="email-input"
                            placeholder="Enter email address"
                    />
                    <button
                            type="submit"
                            class="group-btn"
                            id="email-submit-btn"
                            disabled
                    >
                        <img
                                src="./dist/shim/image/Icon%20-%20arrow-right-solid.svg"
                                alt="image of a arrow pointing right"
                        />
                    </button>
                </div>
                <small id="email-prompt" class="small-text"
                >If you've applied before, please enter the email you've used on
                    previous applications.</small
                >
            </form>

            <div id="is-registered-prompt" class="hidden">
                <div class="login-prompt">
                    <img
                            src="./dist/shim/image/Icon%20-%20check-circle-solid.svg"
                            alt="image of a check"
                            width="28px"
                            height="28px"
                    />
                    <span class="login-prompt-text"
                    >You have one or more existing applications associated with this
                email. Log in to view or continue your application.</span
                    >
                </div>
                <button type="button" id="login-btn" class="login-btn">
                    <a id="login-anchor" href="#"> Login </a>
                </button>
                <a class="alt-login-link" href="#"
                >I want to use a different email</a
                >
            </div>

            <form id="radio-form" action="#" method="post" class="mt-9 hidden">
                <h4 class="radio-question">
                    Which type of program are you applying for?
                </h4>

                <div class="radio-grid">
                    <input
                            id="radio-program3"
                            type="radio"
                            name="programForm"
                            class="radio-input"
                            value="full"
                    />
                    <label for="radio-program3" class="radio-label"
                    >A fully online degree program</label
                    >
                    <input
                            id="radio-program2"
                            type="radio"
                            name="programForm"
                            class="radio-input"
                            value="hybrid"
                    />
                    <label for="radio-program2" class="radio-label"
                    >An on campus, ASU Sync, ASU Local, non-degree or international
                        student visa program</label
                    >
                    <input
                            id="radio-program1"
                            type="radio"
                            name="programForm"
                            class="radio-input"
                            value="unsure"
                    />
                    <label for="radio-program1" class="radio-label"
                    >I'm not sure</label
                    >
                </div>
                <button
                        id="radio-submit-btn"
                        type="submit"
                        class="radio-submit"
                        disabled
                >
                    <a id="radio-anchor" href="#">Continue</a>
                </button>
            </form>
        </div>
    </main>
</div>
<footer id="footer-container"></footer>
</body>
<script
        src="https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js"
        integrity="sha512-qlzIeUtTg7eBpmEaS12NZgxz52YYZVF5myj89mjJEesBd/oE9UPsYOX2QAXzvOAZYEvQohKdcY8zKE02ifXDmA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
></script>
<script
        src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js"
        integrity="sha512-9jGNr5Piwe8nzLLYTk8QrEMPfjGU0px80GYzKZUxi7lmCfrBjtyCc1V5kkS5vxVwwIB7Qpzc7UxLiQxfAN30dw=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
></script>
<script src="/uga_admissionsapp/public/unity/header/vendor.umd.js?"></script>
<script src="/uga_admissionsapp/public/unity/header/asuHeader.umd.js?"></script>
<script src="/uga_admissionsapp/public/unity/footer/vendor.umd.js?"></script>
<script src="/uga_admissionsapp/public/unity/footer/asuFooter.umd.js?"></script>
</html>
