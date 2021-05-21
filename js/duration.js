!(function () {
    var now = new Date();
    var grt = new Date("2019-12-07 0:0:00");
    days = Math.ceil((now - grt) / 86400000);
    if (days % 10 == 1 && days % 100 != 11) s = "st";
    else if (days % 10 == 2 && days % 100 != 12) s = "nd";
    else if (days % 10 == 3 && days % 100 != 13) s = "rd";
    else s = "th";
    document.getElementById("timeDate").innerHTML = "The " + days + s + " Day";
})();