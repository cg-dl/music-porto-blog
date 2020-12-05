function responsive(y) {
    var x = document.getElementById("navbar");
    y.classList.toggle("change");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function active(id)
{
    id.className += " active";
}