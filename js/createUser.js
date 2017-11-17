$(document).ready(() => {

    SDK.User.loadNav();

    $("#signup-button").click(() => {

        const username = $("#inputUsername").val();
        const password = $("#inputPassword").val();

        SDK.User.createUser(username, password, (err, data) => {
            if (err && err.xhr.status === 401) {
                $(".form-group").addClass("has-error");
            }
            else if (err){
                console.log("Error")
            } else {
                window.location.href = "my-page.html";
            }
        });

    });

});