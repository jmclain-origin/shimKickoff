package edu.asu;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import java.io.IOException;

public interface ShimFilterInter {
    void doFilter(ServletRequest request, ServletResponse response, FilterChain next) throws IOException, ServletException;
}
