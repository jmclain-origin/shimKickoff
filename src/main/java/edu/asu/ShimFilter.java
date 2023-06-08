package edu.asu;

import java.io.IOException;
import java.util.Objects;
import javax.servlet.*;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ShimFilter implements Filter {

  final static String LEGACY_APP = "https://webapp4-dev.asu.edu/uga_admissionsapp/";
  final static String NEW_APP = "https://www.joshmclain.com";

  final static String CORP = "CORP";
  final static String SCAP = "SCAP";

  public void init(FilterConfig filterConfig) throws ServletException {
    // Do nothing
    System.out.println("ShimFilter initialized");
  }

  public void doFilter(
      ServletRequest req,
      ServletResponse res,
      FilterChain next) throws IOException, ServletException {
    HttpServletRequest request = (HttpServletRequest) req;
    HttpServletResponse response = (HttpServletResponse) res;

//    String campusFromQueryString = request.getParameter("campus");
    String partnerFromQueryString = request.getParameter("partner");

    // BYPASS Shim UI
    if (!Objects.isNull(partnerFromQueryString)) {
      // send to customer partner ui
      if (partnerFromQueryString.equalsIgnoreCase(SCAP)
              || partnerFromQueryString.equalsIgnoreCase(CORP)) {
        System.out.println("Sending to: Legacy domain with query" + "?partner=" + partnerFromQueryString);
        response.sendRedirect(LEGACY_APP);
        return;
      }
      System.out.println("No bypass");
    }

    // Checking Cookies -
    for (Cookie lookToTheCookie : request.getCookies()) {
      if (lookToTheCookie.getName().equals("shim-which-app")) {
        String whichApp = lookToTheCookie.getValue();
        if (whichApp.equals("NEW")) {
          System.out.println("Sending to: " + NEW_APP);
          response.sendRedirect(NEW_APP + "?partner=" + partnerFromQueryString);
          return;
        } else if (whichApp.equals("LEGACY")) {
          System.out.println("Sending to: " + LEGACY_APP);
          response.sendRedirect(LEGACY_APP + "?partner=" + partnerFromQueryString);
          return;
        } else {
          System.out.println("No cookies params, sending to SHIM UI");
        }
      }
    }
    // Final case - Send to UI
    System.out.println("Sending to: forwarding to shimui via servlet");
    next.doFilter(req, res);
  }

  public void destroy() {
    // Do nothing
  }
}
