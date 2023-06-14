package edu.asu;

import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class ShimFilterTest {

//  @BeforeEach
//  public void init() {
//    MockitoAnnotations.openMocks(this);
//  }

  @Test
  public void WhenDoFilter_HasCampusTempe_ReturnsLegacyAppRedirect()
      throws ServletException, IOException {

    ShimFilter filter = new ShimFilter();

    HttpServletResponse mockResp = Mockito.mock(HttpServletResponse.class);
    HttpServletRequest mockReq = Mockito.mock(HttpServletRequest.class);
    FilterChain mockFilterChain = Mockito.mock(FilterChain.class);
    FilterConfig mockFilterConfig = Mockito.mock(FilterConfig.class);

    Mockito.when(mockReq.getParameter("campus")).thenReturn("tempe");

    filter.init(mockFilterConfig);
    filter.doFilter(mockReq, mockResp, mockFilterChain);
    filter.destroy();

    Mockito.verify(mockResp, Mockito.times(1)).sendRedirect("https://www.legacy.com");
  }

  @Test
  public void WhenDoFilter_HasCookieNew_ReturnsNewAppRedirect()
      throws ServletException, IOException {

    ShimFilter filter = new ShimFilter();

    HttpServletResponse mockResp = Mockito.mock(HttpServletResponse.class);
    HttpServletRequest mockReq = Mockito.mock(HttpServletRequest.class);
    FilterChain mockFilterChain = Mockito.mock(FilterChain.class);
    FilterConfig mockFilterConfig = Mockito.mock(FilterConfig.class);

    Cookie[] cookies = new Cookie[1];
    Cookie mahCookie = new Cookie("shim-which-app", "NEW");
    mahCookie.setMaxAge(60 * 60);
    cookies[0] = mahCookie;

    Mockito.when(mockReq.getCookies()).thenReturn(cookies);

    filter.init(mockFilterConfig);
    filter.doFilter(mockReq, mockResp, mockFilterChain);
    filter.destroy();

    Mockito.verify(mockResp, Mockito.times(1)).sendRedirect("https://www.new-app-domain.com?null");
  }

  @Test
  public void WhenDoFilter_HasCookieLegacy_ReturnsLegacyAppRedirect()
      throws ServletException, IOException {

    ShimFilter filter = new ShimFilter();

    HttpServletResponse mockResp = Mockito.mock(HttpServletResponse.class);
    HttpServletRequest mockReq = Mockito.mock(HttpServletRequest.class);
    FilterChain mockFilterChain = Mockito.mock(FilterChain.class);
    ServletConfig mockFilterConfig = Mockito.mock(ServletConfig.class);

    Cookie[] cookies = new Cookie[1];
    Cookie mahCookie = new Cookie("shim-which-app", "LEGACY");
    mahCookie.setMaxAge(60 * 60);
    cookies[0] = mahCookie;

    Mockito.when(mockReq.getCookies()).thenReturn(cookies);

//    filter.init(mockFilterConfig);
    filter.doFilter(mockReq, mockResp, mockFilterChain);
    filter.destroy();

    Mockito.verify(mockResp, Mockito.times(1)).sendRedirect("https://webapp4-dev.asu.edu/uga_admissionsapp/");
  }


}
