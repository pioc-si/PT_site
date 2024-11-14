var count = 0;
document.getElementById("this_button").onclick = function() {
    count++;
    if (count % 2 == 0) {
        document.getElementById("demo").innerHTML = "";
    } else {
        var img = document.createElement("img");
        img.src = "https://www.womansworld.com/wp-content/uploads/2019/01/cats-in-hats-1.jpg";
        document.getElementById("demo").appendChild(img);
    }
}