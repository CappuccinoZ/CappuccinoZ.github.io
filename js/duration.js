!(function () {
    var now = new Date();
    var grt = new Date("2019/12/07 00:00:00");
    days = Math.ceil((now - grt) / 86400000);
    s = days % 10 == 1 && days % 100 != 11 ? "st"
        : days % 10 == 2 && days % 100 != 12 ? "nd"
            : days % 10 == 3 && days % 100 != 13 ? "rd"
                : "th";
    document.getElementById("timeDate").innerHTML = "The " + days + s + " Day";
})();