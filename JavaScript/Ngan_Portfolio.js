var slide_index = 1;
function currentSlide(index) {
    slide_index = index;
    showSlide (slide_index);
}
function plusSlide(number) {
    slide_index += number;
    showSlide (slide_index);/*this only passes the copy*/
}
function showSlide(index) {
    let images = document.getElementsByClassName("Image_Container");
    console.log(images);
    let dots = document.getElementsByClassName("Circle");
    console.log(dots);
    for(i= 0; i < images.length; i++) {
        images[i].style.display = "none";
        dots[i].className = dots[i].className.replace (" active","");
    }
    if (index > images.length){
        index = 1;
    }
    else if (index < 1) {
        index = images.length;
    }
    slide_index = index;
    images[index - 1].style.display ="block";
    dots[index - 1].className += " active";
}

function Open_Form() {
    let form = document.getElementById("Form_Container");
    form.style.display = "block";
}
function Close_Form(){
    let form = document.getElementById("Form_Container");
    form.style.display = "none";
}