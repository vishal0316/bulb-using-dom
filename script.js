var a = document.querySelector(".bulb")
var btn = document.querySelector("button")

var off = 0

  btn.addEventListener("click", function(){
    if(off == 0) {
        a.style.backgroundColor = " #FBB034 "
        console.log("on")
        off = 1 

    }else {
        a.style.backgroundColor =" #F0E68C"
        console.log('off')
        off=0
    }
 
  })