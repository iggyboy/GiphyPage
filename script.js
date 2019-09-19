let topics = ["Dogs", "Akira", "Cats", "Fish", "Hedgehog", "Bird", "Duck", "Xolotl", "Lizard", "Salamander", "Snake"]
let queryURL = "https://api.giphy.com/v1/gifs/trending?&api_key=M9G8Q6XSuTKTvtXPWXg3eq17FKbKuPwX";

$(document).on("click", ".gif-button", function () {
    $("#images-here").empty();
    console.log("clicked button " + this.value);
    $.ajax({
        url: this.value,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (var i = 0; i < response.data.length; i++) {
            let newDiv = $("<div>");
            newDiv.text("Rating: " + response.data[i].rating);
            newDiv.addClass("card")
            newDiv.attr("style", "width: 18rem;");
            let newImg = $("<img>");
            newImg.attr("src", response.data[i].images.fixed_height.url);
            newDiv.append(newImg);
            $("#images-here").prepend(newDiv);
        }
    });
});

function makeButtons() {
    for (var i = 0; i < topics.length; i++) {
        queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics[i] + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
        let newButton = $("<button>");
        newButton.attr("value", queryURL);
        newButton.attr("class", "gif-button");
        newButton.text(topics[i]);
        $("#buttondiv").append(newButton);
    }
}
makeButtons();

$("#submit").on("click", function(event){
    event.preventDefault();
    topics.push($("#search").val());
    $("#buttondiv").empty();
    makeButtons();
});