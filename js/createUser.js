$(document).ready(() => {

    SDK.User.loadNav();

    $("#signup-button").click((event) => {

        event.preventDefault();

        const username = $("#inputSignupUsername").val();
        const password = $("#inputSignupPassword").val();
        const inputVerifyPassword = $("#inputVerifyPassword").val();

        if(password !== inputVerifyPassword) {
            alert("Passwords matcher ikke!");

        } else {

            SDK.User.createUser(username, password, (err, data) => {
                if (err) {
                    $(".form-group").addClass("has-error");
                }
                else if (err){
                    console.log("Error")

                } else {
                    window.location.href = "login.html";
                }
            });

        }

    });

});