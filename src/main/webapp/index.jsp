<%--
  Created by IntelliJ IDEA.
  User: joshmclain
  Date: 4/25/23
  Time: 9:21 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="./public/css/style.css">
    <script src="public/js/main.js"></script>
    <title>Undergrad Admissions</title>
</head>
<body>
<nav id="nav-top" class="nav" aria-label="navigation links">
      <span class="nav__link">
        <a href="https://www.asu.edu/"> ASU Home </a>
      </span>
    <span class="nav__link">
        <a href="https://my.asu.edu/"> My ASU </a>
      </span>
    <span class="nav__link">
        <a href="https://www.asu.edu/academics/colleges-schools">
          Colleges and Schools
        </a>
      </span>
    <span class="nav__link">
        <a href="https://weblogin.asu.edu/cas/login">Sign In</a>
      </span>
    <span class="nav__link vert">
        <img
                src="./public/image/magnifyingGlassFA.svg"
                height="12"
                weight="12"
                alt="image of a magnifying glass"
        />
      </span>
</nav>

<!-- BANNER -->
<header class="banner" aria-label="banner">
    <img
            src="./public/image/ASU_Logo_Stacked_Web_1.png"
            class="banner__logo"
            alt="ASU Logo"
            width="93"
            height="72"
    />
    <h1 class="banner__heading">Admission</h1>
</header>

<!-- HERO CTA -->
<div class="hero__container">
    <img class="hero__image" src="./public/image/asu-sign@2x.png" alt="image of palm tree leafs and sign structure with ASU logo" />

    <div class="hero__content">
        <h2>Apply to ASU</h2>
        <h3>Your ASU undergraduate journey starts with this application</h3>
    </div>
</div>
<!-- END TOP - MID PAGe -->

<!--  SIDE PANEL  -->
<aside class="side-panel">
    <div class="card">
        <img class="card__icon" src="./public/image/clock.svg" alt="image of a credit code" />
        <h5 class="card__label">Time to apply</h5>
        <h5 class="carc_glob">
            Allow about <span class="highlight"> 30 minutes </span> to complete
            your application. You can save your application and come back later.
        </h5>
    </div>
    <div class="card">
        <img clss src="./public/image/credit%20card.svg" alt="image of a credit card" />
        <h5 class="card__label">Application fee</h5>
        <ul class="card__list">
            <li>
                <span> Arizona residents </span>
                <span>$50.00</span>
            </li>
            <li>
                <span> Residents </span>
                <span>$80.00</span>
            </li>
            <li>
                <span> ASU Online </span>
                <span>$70.00</span>
            </li>
            <li>
                <span> International </span>
                <span>$85.00</span>
            </li>
        </ul>
    </div>
    <div class="card">
        <img class="card__icon" src="./public/image/school.svg" alt="image of a school" />
        <h5 class="card__label">School info</h5>
        <h5 class="carc_glob">
            It will be handy to have your high school and previous college
            information available.
        </h5>
    </div>

    <div class="card">
        <img class="card__icon" src="./public/image/question.svg" alt="image of a question mark" />
        <h5 class="card__label">Help</h5>
        <ul class="card__list">
            <li>
                <span>Email:</span>
                <span>admissions@asy.edu</span>
            </li>
            <li>
                <span>Phone:</span>
                <span>480-965-7788</span>
            </li>
        </ul>
    </div>
</aside>

<main class="main">
    <h4 class="main__heading">We're beta testing a new application.</h4>
    <h4 class="main__sub-heading">
        Let us assist you in getting where you need to go!
    </h4>
    <hr class="divide" />
    <label for="email">What's your email address?</label>

    <form action="/api/email-validate" method="post">
        <input id="email" type="email" name="email" class="email-validate__input" />
        <button type="button" class="email-validate__button"><img src="./public/image/Icon%20-%20arrow-right-solid.svg" alt="image of a arrow pointing right" /></button>
        <!-- if -->
        <small
        >If you've applied before, please enter the email you've used on
            previous applications.</small
        >
        <!-- else -->
        <!-- <hr /> -->
    </form>

    <!-- <form action="/api/radio-program" method="post">
      <h4>Which type of program are you applying for?</h4>
      <div class="group-radio">
        <input type="radio" name="radio-program" class="radio-input" />
        <label for="radio-program">A fully online degree program</label>
      </div>
      <div class="group-radio">
        <input type="radio" name="radio-program" class="radio-input" />
        <label for="radio-program">An on campus, ASU Sync, ASU Local, non-degree or international student visa program</label>
      </div>
      <div class="group-radio">
        <input type="radio" name="radio-program" class="radio-input" />
        <label for="radio-program">I'm not sure</label>
      </div>
      <button type="button" class="radio-submit">continue</button>
    </form> -->
</main>
<footer class="footer">
    <nav class="additional-links" aria-label="additional links">
        <ul>
            <li>Map and Locations</li>
            <li>Jobs</li>
            <li>Directory</li>
            <li>Contact ASU</li>
            <li>My ASU</li>
        </ul>
    </nav>
    <nav class="legal-links" aria-label="legal links">
        <span>Copyright and Trademark</span>
        <span>Accessibility</span>
        <span>Privacy</span>
        <span>Terms of Use</span>
        <span>Emergency</span>
    </nav>
</footer>

</body>
</html>
