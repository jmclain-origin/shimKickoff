package edu.asu;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ShimServlet extends HttpServlet {
  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
    String path = request.getPathInfo();
    if ("/new".equals(path)) {
        response.sendRedirect("views/newApplication.jsp");
    } else if ("/continue".equals(path)) {
        response.sendRedirect("views/continueApplication.jsp");
    } else {
        response.sendRedirect("views/shimWelcome.jsp");
    }
  }
}
