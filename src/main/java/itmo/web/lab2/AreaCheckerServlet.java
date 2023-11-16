package itmo.web.lab2;

import com.google.gson.Gson;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@WebServlet("/areaChecker")
public class AreaCheckerServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        HttpSession session = request.getSession(true);
        try {
            float x = Float.parseFloat(request.getParameter("X"));
            float y = Float.parseFloat(request.getParameter("Y"));
            int r = Integer.parseInt(request.getParameter("R"));
            TestCase testCase = new TestCase(x, y, r);
            List<TestCase> listOfCases = (List<TestCase>) session.getAttribute("list_of_cases");
            if (listOfCases == null) {
                listOfCases = new ArrayList<>();
                session.setAttribute("list_of_cases", listOfCases);
            }
            listOfCases.add(0, testCase);
            if (request.getParameter("action").equals("withGraph")) {
                var gson = new Gson();
                Map<String, Object> json = new HashMap<>();
                json.put("x", x);
                json.put("y", y);
                json.put("r", r);
                json.put("result", testCase.isInArea());
                var msg = gson.toJson(json);
                response.setContentType("application/json");
                response.getWriter().write(msg);
            } else if (request.getParameter("action").equals("withForm")) {
                getServletContext().getRequestDispatcher("/result.jsp").forward(request, response);
            }
        } catch (Exception e) {
            response.sendRedirect(request.getContextPath() + "/controller");
        }
    }

}
