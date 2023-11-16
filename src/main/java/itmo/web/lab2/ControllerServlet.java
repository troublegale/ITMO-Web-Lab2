package itmo.web.lab2;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet("/controller")
public class ControllerServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            if (request.getParameter("X") != null) {
                float x = Float.parseFloat(request.getParameter("X"));
                float y = Float.parseFloat(request.getParameter("Y"));
                int r = Integer.parseInt(request.getParameter("R"));
                String action = request.getParameter("action");
                response.sendRedirect("./areaChecker?" + "X=" + x + "&Y=" + y + "&R=" + r + "&action=" + action);
            } else {
                getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
            }

        } catch (Exception e) {
            getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
        }
    }

}
