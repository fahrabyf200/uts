<?php
session_start();

// Dummy username and password for validation (you can replace with a database check)
$valid_username = "admin";
$valid_password = "pass123";

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Server-side validation
    if (empty($username) || empty($password)) {
        echo "Both fields must be filled.";
    } elseif (strlen($password) < 5) {
        echo "Password is at least 5 characters.";
    } elseif (!preg_match('/\d/', $password)) {
        echo "Password must consist of letters and numbers.";
    } elseif ($username == $valid_username && $password == $valid_password) {
        // If valid, set session and redirect to home page
        $_SESSION['username'] = $username;
        header("Location: home.html");
        exit();
    } else {
        echo "Invalid username or password.";
    }
}
?>
