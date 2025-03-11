document.addEventListener("DOMContentLoaded", function () {
    function register() {
        let email = document.getElementById("reg-email").value;
        let password = document.getElementById("reg-password").value;

        window.auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                alert("✅ Registration Successful!");
                window.location.href = "dashboard.html";
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    function login() {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        window.auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                alert("✅ Login Successful!");
                window.location.href = "dashboard.html";
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    function logout() {
        window.auth.signOut().then(() => {
            alert("✅ Logged Out!");
            window.location.href = "login.html";
        }).catch((error) => {
            alert(error.message);
        });
    }

    window.register = register;
    window.login = login;
    window.logout = logout;
});
