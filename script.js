$(document).ready(function() {
    console.log("jQuery is ready!");

    $("#btn-update-headline").click(function() {
        $("#headline").html("<strong>Junior Java & Web Developer</strong>");
        $("#intro").css("color", "#0d6efd");
    });

    $("#btn-dark-theme").click(function() {
        $("body").removeClass("bg-light text-dark").addClass("bg-dark text-white");
        $(".bg-white").removeClass("bg-white").addClass("bg-secondary text-white");
    });

    $("#btn-light-theme").click(function() {
        $("body").removeClass("bg-dark text-white").addClass("bg-light text-dark");
        $(".bg-secondary").removeClass("bg-secondary text-white").addClass("bg-white");
    });



    $("#btn-hide").click(function() {
        $("#status-msg").hide();
    });

    $("#btn-show").click(function() {
        $("#status-msg").show();
    });

    $("#btn-toggle").click(function() {
        $("#status-msg").toggle();
    });


  
    $("#btn-fade-out").click(function() {
        $("#gallery img").fadeOut("slow");
    });

    $("#btn-fade-in").click(function() {
        $("#gallery img").fadeIn("slow");
    });

    $("#btn-fade-toggle").click(function() {
        $("#gallery img").fadeToggle(500);
    });


    
    $(".clickable-header").click(function() {
        $(this).next(".panel").slideToggle("fast");
    });


    
    $("#btn-append-skill").click(function() {
        let skillText = $("#skill-input").val().trim();
        if (skillText !== "") {
            $("#skills-list").append('<li class="list-group-item">' + skillText + '</li>');
            $("#skill-input").val("");
        } else {
            alert("Enter a skill first!");
        }
    });

    $("#btn-prepend-skill").click(function() {
        let skillText = $("#skill-input").val().trim();
        if (skillText !== "") {
            $("#skills-list").prepend('<li class="list-group-item">' + skillText + '</li>');
            $("#skill-input").val("");
        } else {
            alert("Enter a skill first!");
        }
    });

    $("#btn-remove-skill").click(function() {
        $("#skills-list li:last-child").remove();
    });


   
    $("#btn-change-link").click(function() {
        $("#social-link")
            .attr("href", "https://github.com/darhanserikbaj3-debug")
            .text("GitHub Profile");
    });


   
    $("#form-name").on("input", function() {
        let nameValue = $(this).val();
        $("#live-name").text(nameValue !== "" ? nameValue : "-");
    });

    $("#form-email").on("input", function() {
        let emailValue = $(this).val();
        $("#live-email").text(emailValue !== "" ? emailValue : "-");
    });


    let isAnimated = false;

    $("#btn-animate-skills").click(function() {
        if (!isAnimated) {
            $("#bar-java").animate({ width: "90%" }, 1000);
            $("#bar-js").animate({ width: "75%" }, 1000);
            $("#bar-git").animate({ width: "85%" }, 1000);
            isAnimated = true;
        } else {
            $(".skill-bar").animate({ width: "0%" }, 1000);
            isAnimated = false;
        }
    });

});