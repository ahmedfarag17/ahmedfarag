var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

window.addEventListener('scroll', function (e){
  var scrolled = window.pageYOffset;
  console.log(scrolled + " : " + h);

  if(scrolled>10){
    document.getElementById("down").style.animation = "fadeOut 0.5s forwards";
    // document.getElementById("city").style.top = -(scrolled*0.1)+3800+'px';

  }else{
    document.getElementById("down").style.animation = "fadeIn 0.5s forwards";
  }

  var width = document.getElementById("oval2").style.width;
  console.log("width = "+w);
  if(scrolled>2500 && w > 500){
    // document.getElementById("oval1").style.marginTop = -(scrolled*0.2)+510+'px';
    document.getElementById("oval1").style.marginLeft = -(scrolled*0.1)+'px';
    // document.getElementById("oval2").style.marginTop = -(scrolled*0.2)+510+'px';
    document.getElementById("oval2").style.marginRight = -(scrolled*0.1)+'px';
  }


  var x = document.getElementsByTagName("a");
  var li = document.getElementsByTagName("li");

  console.log(x)

  if(scrolled > 10) {
    document.getElementById("logo").style.animation = "smaller 1s forwards";
    li[0].style.animation = "shorter 1s forwards";
    li[1].style.animation = "shorter 1s forwards";
    li[2].style.animation = "shorter 1s forwards";
    li[3].style.animation = "shorter 1s forwards";
  }else if(scrolled <= 10){
    document.getElementById("logo").style.animation = "bigger 1s forwards";
    li[0].style.animation = "longer 1s forwards";
    li[1].style.animation = "longer 1s forwards";
    li[2].style.animation = "longer 1s forwards";
    li[3].style.animation = "longer 1s forwards";
  }

  if(scrolled <= (h)){
    x[0].style.color = "black";
    x[1].style.color = "black";
    x[2].style.color = "black";
    x[3].style.color = "black";
    x[4].style.color = "black";
    document.getElementById("menu").style.boxShadow = "";
    document.getElementById("logo").src = "logoGrey.png";
    // document.getElementById("menu").style.backgroundImage = "linear-gradient( #a83754, white)";

  }else if(scrolled > (h) && scrolled <= (h+(h*.7))){

    x[0].style.color = "white";
    x[1].style.color = "white";
    x[2].style.color = "white";
    x[3].style.color = "white";
    x[4].style.color = "white";
    document.getElementById("menu").style.boxShadow = "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)";
    document.getElementById("logo").src = "https://firebasestorage.googleapis.com/v0/b/ahmedfaragsite.appspot.com/o/Logo.png?alt=media&token=5f238a47-848a-4fb3-8d8b-06193afed79c";

    // document.getElementById("menu").style.backgroundImage = "linear-gradient( #a83754, white)";

  }else if(scrolled > (h+(h*.7)) && scrolled <= (h*2+(h*.7))){
    x[0].style.color = "#c5ece0";
    x[1].style.color = "#c5ece0";
    x[2].style.color = "#c5ece0";
    x[3].style.color = "#c5ece0";
    x[4].style.color = "#c5ece0";

    // document.getElementById("menu").style.backgroundImage = "linear-gradient( #a83754, white)";

  }else if(scrolled > (h*2+(h*.7)) && scrolled <= (h*2+((h*.7)*2))){
    x[0].style.color = "#729c95";
    x[1].style.color = "#729c95";
    x[2].style.color = "#729c95";
    x[3].style.color = "#729c95";
    x[4].style.color = "#729c95";

    // document.getElementById("menu").style.backgroundImage = "linear-gradient( #a83754, white)";

  }else if(scrolled > (h*2+((h*.7)*2)) && scrolled <= (h*3+((h*.7)*2))){
    x[0].style.color = "white";
    x[1].style.color = "white";
    x[2].style.color = "white";
    x[3].style.color = "white";
    x[4].style.color = "white";

    // document.getElementById("menu").style.backgroundImage = "linear-gradient( #a83754, white)";

  }else if(scrolled > (h*3+((h*.7)*2))){
    x[0].style.color = "#171a5b";
    x[1].style.color = "#171a5b";
    x[2].style.color = "#171a5b";
    x[3].style.color = "#171a5b";
    x[4].style.color = "#171a5b";

    // document.getElementById("menu").style.backgroundImage = "linear-gradient( #a83754, white)";

  }

  const pic = document.getElementById('firstImg');
  const pic2 = document.getElementById('secondImg');
  // pic.style.top = -(scrolled*0.1)+'px';
  // pic2.style.top = -(scrolled*0.1)-100+'px';
})
