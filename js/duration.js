!(function () {
    var now = new Date();
    var grt = new Date("2019-12-07");
    days = Math.floor((now - grt) / 1000 / 3600 / 24);
    if (days % 10 == 1 && days % 100 != 11) s = "st";
    else if (days % 10 == 2 && days % 100 != 12) s = "nd";
    else if (days % 10 == 3) s = "rd";
    else s = "th";
    document.getElementById("timeDate").innerHTML = "The&nbsp" + days + s + "&nbspDay";
})();