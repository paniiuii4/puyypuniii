function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "123") {
        localStorage.setItem("login", "true");
        window.location.href = "dashboard.html";
    } else {
        alert("Username atau password salah!");
    }
}

function cekLogin() {
    if (localStorage.getItem("login") !== "true") {
        window.location.href = "index.html";
    }
}

function logout() {
    localStorage.removeItem("login");
    window.location.href = "index.html";
}
