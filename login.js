$(document).ready(function () {
    $("#ls").hide();
    $("#login").click(function () {

        var username = $("#username").val();
        var password = $("#Password").val();
        console.log("username = ", username);
        console.log("Password = ", password);

        if (username == "bunny" || password == "22122002") {
            $('#sc').trigger('click');
            console.log("login");
        }
        // else if(username == "sunil@team.com" || password == "sunil8780") {
        //     $('#sc').trigger('click');
        //     console.log("login");
        // }
        // else if(username == "hasti@team.com" || password == "hasti4585") {
        //     $('#sc').trigger('click');
        //     console.log("login");
        // }
        // else if(username == "drastee@team.com" || password == "drastee8725") {
        //     $('#sc').trigger('click');
        //     console.log("login");
        // }
        // else if(username == "Bunny" || password == "22122002") {
        //     $('#sc').trigger('click');
        //     console.log("login");
        // }
        // else if(username == "Bunny" || password == "22122002") {
        //     $('#sc').trigger('click');
        //     console.log("login");
        // }
        // else if(username == "Bunny" || password == "22122002") {
        //     $('#sc').trigger('click');
        //     console.log("login");
        // }
        else {
            $("#errorbox").text("wrong username or password");
        }



    });


});