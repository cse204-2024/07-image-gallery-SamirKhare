let images = [
    "Images/benjamin-lehman-xnTcEJm5IZw-unsplash.jpg",
    "Images/clement-proust-x8pdFo5tgVE-unsplash.jpg",
    "Images/denis-tuksar-pugdAUdJOyQ-unsplash.jpg",
    "Images/krisna-yuda-otS0X-RqoQs-unsplash.jpg",
    "Images/makomakt-J5LZCaYhhtM-unsplash.jpg",
    "Images/mos-knKTQrptRB4-unsplash.jpg",
    "Images/noam-cohen-DhTIf0QdP1w-unsplash.jpg",
    "Images/peter-thomas--P5CzqQ77hY-unsplash.jpg",
    "Images/peter-thomas-Ye_5G755Ls0-unsplash.jpg",
    "Images/tom-podmore-tnAtAIG_9Mo-unsplash.jpg",
    "Images/wenya-luo-4cPpG35HORU-unsplash.jpg",
    "Images/yves-cedric-schulze-84vI7X58HMs-unsplash.jpg"
]
for (let i=0; i < images.length; i++){
document.getElementsByClassName("picture")[i].addEventListener("click", enlarge);
}
function enlarge() {
    console.log("Click works");
    document.getElementsByClassName(enlargehidden) = enlargephoto;
}
document.getElementById("close").addEventListener("click", closeButton);
function closeButton() {

}
document.getElementById("next").addEventListener("click", nextButton);
function nextButton() {

}
document.getElementById("previous").addEventListener("click", previousButton);
function previousButton() {

}
