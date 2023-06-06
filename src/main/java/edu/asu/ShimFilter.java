package edu.asu;

import java.io.IOException;
import javax.servlet.*;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ShimFilter implements Filter, ShimFilterInter {

  final static String LEGACY_APP = "https://www.legacy.com";
  final static String NEW_APP = "https://www.new.com";
  final static String SHIM_UI = "https://www.legacy.com/shimui";

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // This can be used to provide configuration to your filter
    }
    @Override
    public void doFilter(
      ServletRequest req,
      ServletResponse res,
      FilterChain next) throws IOException, ServletException {

      HttpServletRequest request = (HttpServletRequest) req;
      HttpServletResponse response = (HttpServletResponse) res;

      String campusFromQueryString = request.getParameter("campus");

    // Check query string params
    if (campusFromQueryString != null && !campusFromQueryString.equalsIgnoreCase("online")) {
      System.out.println("Sending to: " + LEGACY_APP);
//      response.sendRedirect(LEGACY_APP);
      return;
    }

    // Checking Cookies
    for (Cookie lookToTheCookie : request.getCookies()) {
      if (lookToTheCookie.getName().equals("shim-which-app")) {
        String whichApp = lookToTheCookie.getValue();
        if (whichApp.equals("NEW")) {
          System.out.println("Sending to: " + NEW_APP);
//          response.sendRedirect(NEW_APP);
          return;
        } else if (whichApp.equals("LEGACY")) {
          System.out.println("Sending to: " + LEGACY_APP);
//          response.sendRedirect(LEGACY_APP);
          return;
        }
      }
    }

    // Final case - Send to UI
    System.out.println("Sending to: " + SHIM_UI);
//    response.sendRedirect(SHIM_UI);
    next.doFilter(request, response);
  }

  @Override
  public void destroy() {
    // TODO Auto-generated method stub
  }

}
