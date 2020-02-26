var today = $("#current");

setInterval(function () {
    today.text(moment().format("MMM Do YYYY - hh:mm:ss"));
}, 1000);

function getit() {

    for (var i = 9; i < 18; i++) {
        if (localStorage.getItem("text" + i)) {
            $("#text" + i).val(localStorage.getItem("text" + i));
        }
    }
}
$("button").on("click", function () {
    var textarea = $(this).siblings("textarea");
    var id = textarea.attr("id");
    var value = textarea.val();
    localStorage.setItem(id, value);
})
getit();