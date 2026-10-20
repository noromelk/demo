<!DOCTYPE html>
<html lang="hy">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Zara Nail - Մուտք</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="login-container">
    <h2>Zara Nail System</h2>
    <form id="loginForm">
      <input type="email" id="loginEmail" placeholder="Էլ․ հասցե" required>
      <input type="password" id="loginPassword" placeholder="Գաղտնաբառ" required>
      <button type="submit">Մուտք</button>
    </form>
    <p id="errorMsg" class="error"></p>
  </div>

  <script type="module" src="js/auth.js"></script>
</body>
</html>