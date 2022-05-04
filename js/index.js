$(".submit").click(function() {
    $(".submit").addClass("clicked");
    setTimeout(function() {
        $(".submit").removeClass("clicked");
    }, 100);
    check();
});

var email = "";
var space = false;
var includi = false;
var ordered = false;

function check() {
    email = $(".email").val();
    verSpace();
    verInclude();
    orderedSign();
    $(".label").css("display", "block");
    if (email == "" || space == true || includi == false || ordered == false) {
        $(".label").css("color", "hsl(354, 100%, 66%)");
        $(".email").addClass("wrong");
        $(".label").text("Please provide a valid email address");
        setTimeout(function() {
            reset();
        }, 2000);
    } else {
        $(".label").css("color", "#2dcc70");
        $(".email").addClass("right");
        $(".label").text("Tank you Sir!");
        setTimeout(function() {
            window.location.reload();
        }, 1500);
    };
};

function verSpace() {
    if (email.includes(" ") == true) {
        space = true;
    };
};

function verInclude() {
    if (email.includes("@") && email.includes(".")) {
        includi = true;
    };
};

function orderedSign() {
    if (email.indexOf("@") < email.indexOf(".")) {
        ordered = true;
    };
};


function reset() {
    space = false;
    include = false;
    ordered = false;

    $(".email").removeClass("wrong right");
    $(".label").css("display", "none");
}