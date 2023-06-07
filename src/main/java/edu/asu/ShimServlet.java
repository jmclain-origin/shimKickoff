package edu.asu;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ShimServlet extends HttpServlet {
   public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
       String path = request.getPathInfo();
       System.out.println("Path info: " + path);
       System.out.println("Request URI: " + request.getRequestURI());
       System.out.println("Context Path: " + request.getContextPath());
       request.getRequestDispatcher("shimUi.jsp").forward(request, response);
   }

}
