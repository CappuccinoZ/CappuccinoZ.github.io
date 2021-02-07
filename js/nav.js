$(function() {
    let nav = $('h2');
    var str = "";
    for (let i = 0; i < nav.length; i++) {
        str += `<li><a href="javascript:;" onclick="to(` + i + `)">` + nav[i].innerText + `</a></li>`;
    }
    $(".nav").html(`<ul class="nav-text">` + str + `</ul>`);
})

function to(i) {
    $("html,body").animate({
        scrollTop: $("h2").eq(i).offset().top
    }, 500);
}