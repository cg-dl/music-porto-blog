function responsive() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function active()
{
    var y = (document.title).toString();
    var pageName = (y.replace(/ .*/,'')).toLowerCase();
    var x = document.getElementById(pageName);
    x.className += " active";
}

active();