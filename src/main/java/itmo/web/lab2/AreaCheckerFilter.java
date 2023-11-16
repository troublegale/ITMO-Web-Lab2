package itmo.web.lab2;


import jakarta.servlet.*;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

@WebFilter("/areaChecker/*")
public class AreaCheckerFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
        HttpSession session = ((HttpServletRequest) request).getSession(true);
        var filter = session.getAttribute("filter");
        if (filter != null && (boolean) filter) {
            session.setAttribute("filter", false);
            chain.doFilter(request, response);
        }
        else request.getServletContext().getRequestDispatcher("/result.jsp").forward(request, response);
    }

}