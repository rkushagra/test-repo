document.addEventListener("DOMContentLoaded",
function(event) {
    document.querySelector("button")
    .addEventListener("click",function() {
        $ajaxUtils
        .sendGetRequest("/test-repo/data/name.txt",
        function(request) {
            var name = request.responseText;
            console.log(name);
            document.querySelector("#content")
            .innerHTML = "<h2>Hello " +name + "!";
        });
    })
});
