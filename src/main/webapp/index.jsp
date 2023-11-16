<%@ page import="itmo.web.lab2.TestCase" %>
<%@ page import="java.util.List" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
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

<div style="display: flex">

    <div>
        <div class="graph-container">
            <canvas id="graph"></canvas>
        </div>
        <span class="dynamic-coordinate" id="dynamic-x">X: 0.00</span>
        <span class="dynamic-coordinate" id="dynamic-y">Y: 0.00</span>
    </div>

    <div>
        <form method="get" class="variables">

            <div>
                <label>
                    <span>X variable:</span>
                    <input class="x-text-input" type="text" id="x-input" name="x-input"
                           placeholder="A decimal number in (-5; 5)" autocomplete="off">
                    <span id="input-message" style="display: none" class="error-message"></span>
                </label>
            </div>

            <br>

            <div>
                <label>
                    <span>Y variable:</span>
                    <select>
                        <option value="-4">-4</option>
                        <option value="-3">-3</option>
                        <option value="-2">-2</option>
                        <option value="-1">-1</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </label>
            </div>

            <br>

            <div>
                <span>R variable:</span>
                <label>
                    1
                    <input type="checkbox" class="r_checkbox" name="rbox" value="1">
                </label>
                <label>
                    2
                    <input type="checkbox" class="r_checkbox" name="rbox" value="2">
                </label>
                <label>
                    3
                    <input type="checkbox" class="r_checkbox" name="rbox" value="3">
                </label>
                <label>
                    4
                    <input type="checkbox" class="r_checkbox" name="rbox" value="4">
                </label>
                <label>
                    5
                    <input type="checkbox" class="r_checkbox" name="rbox" value="5">
                </label>
                <span id="r-message" style="display: none"
                      class="error-message">⬅ Please, choose exactly one option.</span>
            </div>

            <br>

            <div>
                <button id="calc-button" class="calc-button" type="button">Calculate</button>
            </div>

        </form>
    </div>

</div>

</body>

<script src="js/validate_form.js"></script>
<script src="js/send_form.js"></script>
<script src="js/graph.js"></script>
<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>

</html>