var arr = 0;
var imgSlider = document.getElementById('imageSlider');

function funcNext(){
    arr++;
    console.log(arr);
}

function funcPrev(){
    arr--;
    console.log(arr);
}

switch (arr){
    case 0: imgSlider.src = "img/wallpaper1.jpg";
    break;
    case 1: imgSlider.src = "img/wallpaper2.jpg";
    break;
    case 2: imgSlider.src = "img/wallpaper3.jpg";
    break;
    case 3: imgSlider.src = "img/wallpaper4.jpg";
    break;
    case 4: imgSlider.src = "img/wallpaper5.jpg";
    break;
}