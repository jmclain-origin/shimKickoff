<%--
  Created by IntelliJ IDEA.
  User: joshmclain
  Date: 6/6/23
  Time: 3:50 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Shim Gateway</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
        body {
            margin: 0;
            padding: 0;
        }

    </style>
</head>
<body>
    <div class="container">
        <h1>Shim Gateway</h1>
        <div>
            <h2> (Request path) </h2>
            <h3>shim ui entry</h3>
            <p><a href="shim">/shim</a></p>
            <h3>online campus?</h3>
            <p><a href="shim?campus=ONLINE&partner=CORP">/shim?campus=online&partner=CORP</a></p>
            <p><a href="shim?campus=ONLINE&partner=SCAP">/shim?campus=online&partner=SCAP</a></p>
        </div>
    </div>
</body>
</html>
