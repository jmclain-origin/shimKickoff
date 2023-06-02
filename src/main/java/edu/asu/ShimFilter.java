package edu.asu;

import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ShimFilter extends HttpServlet {

  final static String LEGACY_APP = "https://www.legacy.com";
  final static String NEW_APP = "https://www.new.com";
  final static String SHIM_UI = "https://www.legacy.com/shimui";

  public void doFilter(
      HttpServletRequest request,
      HttpServletResponse response,
      FilterChain next) throws IOException, ServletException {

    String campusFromQueryString = request.getParameter("campus");

    // Check query string params
    if (campusFromQueryString != null && !campusFromQueryString.equalsIgnoreCase("online")) {
      System.out.println("Sending to: " + LEGACY_APP);
      response.sendRedirect(LEGACY_APP);
      return;
    }

    // Checking Cookies
    for (Cookie lookToTheCookie : request.getCookies()) {
      if (lookToTheCookie.getName().equals("shim-which-app")) {
        String whichApp = lookToTheCookie.getValue();
        if (whichApp.equals("NEW")) {
          System.out.println("Sending to: " + NEW_APP);
          response.sendRedirect(NEW_APP);
          return;
        } else if (whichApp.equals("LEGACY")) {
          System.out.println("Sending to: " + LEGACY_APP);
          response.sendRedirect(LEGACY_APP);
          return;
        }
      }
    }

    // Final case - Send to UI
    System.out.println("Sending to: " + SHIM_UI);
    response.sendRedirect(SHIM_UI);

  }

}
