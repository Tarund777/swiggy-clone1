const home = document.querySelector(".homebutton")
home.addEventListener("click", openadressselect)
function openadressselect() {
   window.location.href = "/html/addressselect.html"
}

document.getElementById("saved-address-container").innerHTML = localStorage.getItem("textvalue");
const savedvalue = document.getElementById("saved-address-container").innerText
localStorage.setItem("loadvalue", savedvalue)
// console.log(localStorage.getItem("textvalue"))
document.getElementById("recent_searches").innerHTML = localStorage.getItem("recentsearch")
localStorage.setItem("displayhistory", document.getElementById("recent_searches").innerHTML)


function openMyAccount() {
   window.location.href = "/html/Myaccount.html"
}

function goto1() {
   window.location.href = "/html/searchwindow.html"
}
if (document.getElementById("resratings").innerHTML >= 0 && document.getElementsByClassName("resratings").innerHTML <= 4) {
   document.getElementById("resratingstar").style.color = "rgb(0, 182, 0);"
   console.log("hello")
}
else if (document.getElementById("resratings").innerHTML > 4 && document.getElementsByClassName("resratings").innerHTML <= 5) {
   document.getElementById("resratingstar").style.color = "green"

}
// document.getElementById("res1").value=localStorage.getItem("res1value")
document.getElementById("likeres").style.color = localStorage.getItem("heart-color0")
document.getElementById("likeres1").style.color = localStorage.getItem("heart-color1")
document.getElementById("likeres2").style.color = localStorage.getItem("heart-color2")
document.getElementById("likeres3").style.color = localStorage.getItem("heart-color3")
document.getElementById("likeres4").style.color = localStorage.getItem("heart-color4")
document.getElementById("likedres-holder").innerHTML = localStorage.getItem("favres-info")
document.getElementById("trusted-picks").innerHTML = localStorage.getItem("top-pick")
let a = 0;
function likedres() {
   if (a == 0) {
      document.getElementById("likeres").style.color = 'red'
      const likedres = document.createElement("div")

      likedres.className = "likedres-bar"
      likedres.id = "likedres-bar0"
      likedres.innerHTML = document.getElementById("res1").innerHTML
      document.getElementById("likedres-holder").appendChild(likedres)

      localStorage.setItem("favres-info", document.getElementById("likedres-holder").innerHTML)
      localStorage.setItem("heart-color0", document.getElementById("likeres").style.color)
      a = a + 1;
   }

}
function deldatat1() {
   document.getElementById("likedres-holder").removeChild(document.getElementById("likedres-bar0"))
   localStorage.setItem("favres-info", document.getElementById("likedres-holder").innerHTML)
   document.getElementById("likeres").style.color = ''
   localStorage.setItem("heart-color0", document.getElementById("likeres").style.color)
   a = 0;

}

let b = 0;
function likedres1() {
   if (b == 0) {
      document.getElementById("likeres1").style.color = 'red'
      const likedres = document.createElement("div")
      likedres.className = "likedres-bar"
      likedres.id = "likedres-bar1"
      likedres.innerHTML = document.getElementById("res2").innerHTML
      document.getElementById("likedres-holder").appendChild(likedres)

      localStorage.setItem("favres-info", document.getElementById("likedres-holder").innerHTML)
      localStorage.setItem("heart-color1", document.getElementById("likeres1").style.color)
      b = b + 1;
   }
}
function deldatat2() {
   document.getElementById("likedres-holder").removeChild(document.getElementById("likedres-bar1"))
   localStorage.setItem("favres-info", document.getElementById("likedres-holder").innerHTML)
   document.getElementById("likeres1").style.color = ''
   localStorage.setItem("heart-color1", document.getElementById("likeres1").style.color)
   b = 0;

}

let c = 0;
function likedres2() {
   if (c == 0) {
      document.getElementById("likeres2").style.color = 'red'
      const likedres = document.createElement("div")
      likedres.className = "likedres-bar"
      likedres.id = "likedres-bar2"
      likedres.innerHTML = document.getElementById("res3").innerHTML
      document.getElementById("likedres-holder").appendChild(likedres)

      localStorage.setItem("favres-info", document.getElementById("likedres-holder").innerHTML)
      localStorage.setItem("heart-color2", document.getElementById("likeres2").style.color)
      c = c + 1;
   }
}
function deldatat3() {
   document.getElementById("likedres-holder").removeChild(document.getElementById("likedres-bar2"))
   localStorage.setItem("favres-info", document.getElementById("likedres-holder").innerHTML)
   document.getElementById("likeres2").style.color = ''
   localStorage.setItem("heart-color2", document.getElementById("likeres2").style.color)
   c = 0;

}

let d = 0;
function likedres3() {
   if (d == 0) {
      document.getElementById("likeres3").style.color = 'red'
      const likedres = document.createElement("div")
      likedres.className = "likedres-bar"
      likedres.id = "likedres-bar3"
      likedres.innerHTML = document.getElementById("res4").innerHTML
      document.getElementById("likedres-holder").appendChild(likedres)

      localStorage.setItem("favres-info", document.getElementById("likedres-holder").innerHTML)
      localStorage.setItem("heart-color3", document.getElementById("likeres3").style.color)
      d = d + 1;
   }
}
function deldatat4() {
   document.getElementById("likedres-holder").removeChild(document.getElementById("likedres-bar3"))
   localStorage.setItem("favres-info", document.getElementById("likedres-holder").innerHTML)
   document.getElementById("likeres3").style.color = ''
   localStorage.setItem("heart-color3", document.getElementById("likeres3").style.color)
   d = 0;

}

let e = 0;

function likedres4() {
   if (e == 0) {
      document.getElementById("likeres4").style.color = 'red'
      const likedres = document.createElement("div")
      likedres.className = "likedres-bar"
      likedres.id = "likedres-bar4"
      likedres.innerHTML = document.getElementById("res5").innerHTML
      document.getElementById("likedres-holder").appendChild(likedres)

      localStorage.setItem("favres-info", document.getElementById("likedres-holder").innerHTML)
      localStorage.setItem("heart-color4", document.getElementById("likeres4").style.color)
      e = e + 1;
   }
}
function deldatat5() {
   document.getElementById("likedres-holder").removeChild(document.getElementById("likedres-bar4"))
   localStorage.setItem("favres-info", document.getElementById("likedres-holder").innerHTML)
   document.getElementById("likeres4").style.color = ''
   localStorage.setItem("heart-color4", document.getElementById("likeres4").style.color)
   e = 0;

}

function selected0() {
   localStorage.setItem("i", parseInt(1))
   window.location.href = "/html/foodselect.html"
   document.getElementById("res1foods").innerHTML = localStorage.getItem("foodslot1")
   localStorage.setItem("foodslot11", document.getElementById("res1foods").innerHTML)
   // localStorage.setItem("a",parseInt(1))
}
function selected1() {
   localStorage.setItem("i", parseInt(2))
   window.location.href = "/html/foodselect.html"
}
document.getElementById("res2foods").innerHTML = localStorage.getItem("foodslot2")
localStorage.setItem("foodslot12", document.getElementById("res2foods").innerHTML)
function selected2() {
   localStorage.setItem("i", parseInt(3))
   window.location.href = "/html/foodselect.html"
}

document.getElementById("res3foods").innerHTML = localStorage.getItem("foodslot3")
localStorage.setItem("foodslot13", document.getElementById("res3foods").innerHTML)
function selected3() {
   localStorage.setItem("i", parseInt(4))
   window.location.href = "/html/foodselect.html"
}

document.getElementById("res4foods").innerHTML = localStorage.getItem("foodslot4")
localStorage.setItem("foodslot14", document.getElementById("res4foods").innerHTML)
function selected4() {
   localStorage.setItem("i", parseInt(5))
   window.location.href = "/html/foodselect.html"
}

document.getElementById("res5foods").innerHTML = localStorage.getItem("foodslot5")
localStorage.setItem("foodslot15", document.getElementById("res5foods").innerHTML)
t = 0;
function sortlist() {
   if (document.getElementById("sort").value == "open") {
      const sortlist = document.createElement("button")
      const sortrate = document.createElement("button")
      sortrate.className = "sort-btn"
      sortrate.id = "sort-rate"
      sortrate.innerHTML = "Sort by ratings"
      sortrate.addEventListener("click", sortrate1)
      sortlist.className = "sort-btn"
      sortlist.id = "sort-btn"
      sortlist.addEventListener("click", sorttime)
      sortlist.innerHTML = "Sort by time"
      document.getElementById("sort").appendChild(sortlist)
      document.getElementById("sort").appendChild(sortrate)
      document.getElementById("sort").value = "close"
   }
   else {
      document.getElementById("sort").innerHTML = 'Sort <i class="fa fa-sort" aria-hidden="true"></i>'
      document.getElementById("sort").value = "open"
   }
}
function sorttime() {
   const list = document.getElementById("01")
   b = document.getElementsByTagName("li")
   for (i = 0; i < 4; i++) {
      for (j = 0; j < 4; j++) {
         if (b[i].getElementsByClassName("restime")[0].innerHTML > b[j].getElementsByClassName("restime")[0].innerHTML) {
            list.insertBefore(b[j], b[i])
         }
      }
   }
}
function sortrate1() {
   const list = document.getElementById("01")
   b = document.getElementsByTagName("li")
   for (i = 0; i < 5; i++) {
      for (j = 0; j < 5; j++) {
         if (b[i].getElementsByClassName("resratings")[0].innerText > b[j].getElementsByClassName("resratings")[0].innerText) {
            list.insertBefore(b[i], b[j])

         }
      }

   }
}



