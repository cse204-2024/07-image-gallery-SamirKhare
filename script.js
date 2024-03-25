let images = [
    "Images/benjamin-lehman-xnTcEJm5IZw-unsplash.jpg",
    "Images/clement-proust-x8pdFo5tgVE-unsplash.jpg",
    "Images/denis-tuksar-pugdAUdJOyQ-unsplash.jpg",
    "Images/krisna-yuda-otS0X-RqoQs-unsplash.jpg",
    "Images/makomakt-J5LZCaYhhtM-unsplash.jpg",
    "Images/mos-knKTQrptRB4-unsplash.jpg",
    "Images/kevin-grieve-x9O9AkQq5lU-unsplash.jpg",
    "Images/peter-thomas--P5CzqQ77hY-unsplash.jpg",
    "Images/peter-thomas-Ye_5G755Ls0-unsplash.jpg",
    "Images/rex-BdXil4lPj3Q-unsplash.jpg",
    "Images/wenya-luo-4cPpG35HORU-unsplash.jpg",
    "Images/yves-cedric-schulze-84vI7X58HMs-unsplash.jpg"
]
for (let i=0; i < images.length; i++){
document.getElementsByClassName("picture")[i].addEventListener("click", enlarge);
}
function enlarge(event) {
    console.log("Click works");
    let photo = event.target.id;
    console.log(photo);
    document.getElementById("enlargehidden").setAttribute("class", "enlargephoto");
    document.getElementById("enlargehidden").setAttribute("id", "enlargephoto");
    document.getElementById("gallerywrapper").setAttribute("class", "gallerywrapperhidden");
    document.getElementById("gallerywrapper").setAttribute("id", "gallerywrapperhidden");
    document.getElementById("enlargedimage").setAttribute("src", document.getElementById(photo).getAttribute("src"));
}
document.getElementById("close").addEventListener("click", closeButton);
function closeButton() {
    document.getElementById("enlargephoto").setAttribute("class", "enlargehidden");
    document.getElementById("enlargephoto").setAttribute("id", "enlargehidden");
    document.getElementById("gallerywrapperhidden").setAttribute("class", "gallerywrapper");
    document.getElementById("gallerywrapperhidden").setAttribute("id", "gallerywrapper");
}
document.getElementById("next").addEventListener("click", nextButton);
    function nextButton() {
        let currentItem = document.getElementById("enlargedimage").getAttribute("src");
        console.log(currentItem);
        let nextIndex = images.indexOf(currentItem);
        console.log(nextIndex);
        if (nextIndex < images.length-1){
            console.log(nextIndex);
            document.getElementById("enlargedimage").setAttribute("src", images[nextIndex+1]);
        }
        else{
            document.getElementById("enlargedimage").setAttribute("src", images[0])
        }
}
document.getElementById("previous").addEventListener("click", previousButton);
function previousButton() {
    let currentItem = document.getElementById("enlargedimage").getAttribute("src");
        console.log(currentItem);
        let nextIndex = images.indexOf(currentItem);
        console.log(nextIndex);
        if (nextIndex > 0){
            document.getElementById("enlargedimage").setAttribute("src", images[nextIndex-1]);
    }
    else{
        document.getElementById("enlargedimage").setAttribute("src", images[images.length-1])
    }
}


