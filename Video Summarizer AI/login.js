document.addEventListener('DOMContentLoaded',()=>{
    const login=document.getElementById("login");
    login.addEventListener('click',()=>{
        let loginHTML =
            '<div class="body mtop mbot">' +
            '<div class="body-wrapper">' +
            '<div class="inner-body-wrapper">' +
            '<span class="login-text">Login</span>' +
            '<div class="input-group ptop pbot">' +
            '<span class="text">Username</span>' +
            '<br>' +
            '<input type="text" placeholder="Username or Email">' +
            '</div>' +
            '<div class="input-group">' +
            '<span class="text">Password</span>' +
            '<br>' +
            '<input type="password" placeholder="Password">' +
            '</div>' +
            '<button class="login-btn"><a href="#">Login</a></button>' +
            '<p class="text-2">Or Register up here</p>' +
            '<button class="signup-btn"><a href="Signup.html">Register</a></button>' +
            '</div>' +
            '</div>' +
            '</div>';

        document.getElementById('body').innerHTML = DOMPurify.sanitize(loginHTML);
    })
})