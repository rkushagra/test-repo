document.addEventListener("DOMContentLoaded",
function(event) {
    document.querySelector("button")
    .addEventListener("click",function() {
        $ajaxUtils
        .sendGetRequest("/data/name.txt",
        function(request) {
            var name = request.responeText;
            console.log(name);
            document.querySelector("#content")
            .innerHTML = "<h2>Hello " +name + "!";
        });
    })
});