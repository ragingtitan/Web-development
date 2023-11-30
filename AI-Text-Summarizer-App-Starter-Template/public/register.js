document.addEventListener('DOMContentLoaded',()=>{
    const register = document.getElementById("register");
    register.addEventListener('click',()=>{
        let registerHTML =
            '<div class="body mtop mbot">' +
            '<div class="body-wrapper">' +
            '<div class="inner-body-wrapper">' +
            '<span class="register-text">Register</span>' +
            '<div class="input-group">' +
            '<span class="text">First name</span>' +
            '<br>' +
            '<input type="text" placeholder="First Name">' +
            '</div>' +
            '<div class="input-group">' +
            '<span class="text">Last name</span>' +
            '<br>' +
            '<input type="text" placeholder="Last Name">' +
            '</div>' +
            '<div class="input-group">' +
            '<span class="text">Email</span>' +
            '<br>' +
            '<input type="text" placeholder="Email">' +
            '</div>' +
            '<div class="input-group">' +
            '<span class="text">Password</span>' +
            '<br>' +
            '<input type="password" placeholder="Password">' +
            '</div>' +
            '<div class="input-group">' +
            '<span class="text">Date of birth</span>' +
            '<br>' +
            '<input type="text" id="dob" name="dob" autocomplete="off" required placeholder="DD/MM/YYYY">' +
            '</div>' +
            '<br>' +
            '<button class="signup-btn"><a href="#">Register</a></button>' +
            '<span class="text-2">Go back to login</span>' +
            '<button class="login-btn"><a href="LoginPage.html">Login</a></button>' +
            '</div>' +
            '</div>' +
            '</div>';

        document.getElementById('body').innerHTML = DOMPurify.sanitize(registerHTML);
    })
})