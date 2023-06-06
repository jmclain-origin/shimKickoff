<%--
  Created by IntelliJ IDEA.
  User: joshmclain
  Date: 6/5/23
  Time: 12:15 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<jsp:include page="partials/head.jsp" />
<body>
<header id="header-container"></header>

<jsp:include page="partials/hero.jsp" />

<div class="body-wrapper wrapper">
  <jsp:include page="partials/cardWrapper.jsp" />

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
                    src="../dist/shim/image/Icon%20-%20arrow-right-solid.svg"
                    alt="image of a arrow pointing right"
            />
          </button>
        </div>
        <small id="email-prompt" class="small-text"
        >If you've applied before, please enter the email you've used on
          previous applications.</small
        >
      </form>
    </div>
  </main>
</div>
<footer id="footer-container"></footer>
</body>
</html>
