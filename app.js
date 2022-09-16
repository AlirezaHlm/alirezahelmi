const sliderImages = [
    "./vila0.jpg",
    "./vila.jpg",
    "./vila2.jpg",
  ];
  const sliderDom = document.getElementById("slider");
  
  let currentImage = 0;
  
  function renderImages() {
    sliderImages.forEach((image) => {
      sliderDom.innerHTML += "<img src='" + image + "' />";
    });
  }
  
  function clearImages() {
    const images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
      images[i].style.opacity = 0;
    }
  }
  
  function showImage(image) {
    clearImages();
    document.getElementsByTagName("img")[image].style.opacity = 1;
  }
  
  function init() {
    renderImages();
    showImage(currentImage);
  }
  
  init();

  function blackCircle(){
    const C = document.querySelector(".circle");
    for (let i = 0; i < 3; i++) {
      C.children[i].style.color = "black";
  }
}
  function circle(circles){
    blackCircle();
    document.getElementById(circles).style.color="orange";
}
function renderCircle(){
    blackCircle();
    circle(currentImage);
}

renderCircle();


  // console.log(-5%4)
  var buttL=document.querySelector("#prevButton");
  var buttR=document.querySelector("#nextButton");
  buttL.onclick=function(){
    currentImage--;
    if (currentImage>2){
      currentImage=currentImage%3;
    }
    else if(currentImage<0){
      currentImage=(currentImage%3)+3;
    }
    showImage(currentImage);
    circle(currentImage);
  }
  buttR.onclick=function(){
    currentImage++;
    if (currentImage>2){
      currentImage=currentImage%3;
    }
    else if(currentImage<0){
      currentImage=(currentImage%3)+3;
    }
    showImage(currentImage);
    circle(currentImage);
  }
  window.setInterval(function(){
    currentImage++;
    if (currentImage>2){
      currentImage=currentImage%3;
    }
    else if(currentImage<0){
      currentImage=(currentImage%3)+3;
    }
    showImage(currentImage);
    circle(currentImage);},3500);