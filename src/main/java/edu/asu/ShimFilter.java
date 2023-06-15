package edu.asu;

import java.io.IOException;
import java.util.Objects;
import javax.servlet.*;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ShimFilter implements Filter {

  final static String LEGACY_APP = "https://webapp4-dev.asu.edu/uga_admissionsapp/";
  final static String NEW_APP = "https://www.new-app-domain.com";

  final static String CORP = "CORP";
  final static String SCAP = "SCAP";
  final static String ONLINE = "ONLINE";

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

    String campusFromQueryString = request.getParameter("campus");
    String partnerFromQueryString = request.getParameter("partner");
    String requestQueryString = request.getQueryString();

    // BYPASS Shim UI
    if (!Objects.isNull(campusFromQueryString) && campusFromQueryString.equalsIgnoreCase(ONLINE)) {
      System.out.println("query string: " + requestQueryString);
      // check partner from query string
      if (!Objects.isNull(partnerFromQueryString)) {
        if (partnerFromQueryString.equalsIgnoreCase(SCAP)
                || partnerFromQueryString.equalsIgnoreCase(CORP)) {
          System.out.println("Sending to: Legacy domain with query " + "?" + requestQueryString);
          response.sendRedirect(LEGACY_APP + "?" + requestQueryString);
          return;
        }
      }
      System.out.println("Sending to: Legacy domain with query " + requestQueryString);
      response.sendRedirect(LEGACY_APP + "?" + requestQueryString);
      return;
    }



    // Checking Cookies -
    for (Cookie lookToTheCookie : request.getCookies()) {
      if (lookToTheCookie.getName().equals("shim-which-app")) {
        String whichApp = lookToTheCookie.getValue();
        if (whichApp.equals("NEW")) {
          System.out.println("Sending to: " + NEW_APP);
          response.sendRedirect(NEW_APP + "?" + requestQueryString);
          return;
        } else if (whichApp.equals("LEGACY")) {
          System.out.println("Sending to: " + LEGACY_APP);
          response.sendRedirect(LEGACY_APP + "?" + requestQueryString);
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
