console.log(window.innerWidth); //breedte
console.log(window.innerHeight); //hoogte
let imageNames = ["foto1.jpg","foto2.jpg","foto3.jpg","foto4.jpg","foto5.jpg","foto6.jpg","foto7.jpg","foto8.jpg","foto9.jpg","foto10.jpg"];
let tumbs = document.getElementById('tumbs');
let display = document.getElementById('display');
let left = document.getElementById('left');
let right = document.getElementById('right');
let huidigPlaatje = 0; // global var
selectImage(Math.floor(Math.random()*imageNames.length));

for(let i=0; i<imageNames.length; i++){
  let tumb = new Image();

  tumb.src = "images/small/" + imageNames[i];
  tumb.id = i;
  tumbs.appendChild(tumb);
  tumb.addEventListener("click",function(e){
      selectImage(e.target.id);
  });
}

function selectImage(id){
  display.src = "images/big/" + imageNames[id];
  huidigPlaatje = id;
  console.log(huidigPlaatje);

}

left.addEventListener("click",function(e){
if (huidigPlaatje > 0){
      huidigPlaatje--;
} else {
  huidigPlaatje = 9;
}
    selectImage(huidigPlaatje);

});

right.addEventListener("click", function(e){
  if (huidigPlaatje < 9){
        huidigPlaatje++;
  } else {
    huidigPlaatje = 0;
  }
    selectImage(huidigPlaatje)
});
