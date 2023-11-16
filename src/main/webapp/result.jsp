<%@ page import="java.util.List" %>
<%@ page import="itmo.web.lab2.TestCase" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lab 2</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>

<body>

<header>
    <div class="header">
        <div class="header-text">Kozhukhin I. A.</div>
        <div class="header-text">P3218</div>
        <div class="header-text">22232</div>
    </div>
</header>

<div class="result_width">
    <div class="scroll">
        <table class="frontTables">
            <thead>
            <tr>
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>Result</th>

            </tr>
            </thead>
            <% List<TestCase> list = (List<TestCase>) request.getSession().getAttribute("listOfCases");
                if (list != null) {
            %>
            <tbody id="result">
            <% for (TestCase point : list) { %>
            <tr>
                <td>
                    <%= point.getX() %>
                </td>
                <td>
                    <%= point.getY() %>
                </td>
                <td>
                    <%= point.getR() %>
                </td>
                <td>
                    <%= point.isInArea() %>
                </td>
            </tr>
            <%  }%>
            </tbody>
            <%}%>
        </table>
    </div>
</div>
<%--<div class="result_width center" >--%>
<%--    <a href="${pageContext.request.contextPath}/index.jsp" class="back_href">Back to the graph</a>--%>
<%--</div>--%>
</body>
<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
</html>
