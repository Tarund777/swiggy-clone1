function gotohome(){
    window.location.href="/html/Myaccount.html"
}
//  document.getElementById("favrest-name").innerHTML=localStorage.getItem("favres-info")

const favrest=document.createElement("div")
favrest.className="restname-display"
favrest.id="restname-display"
favrest.innerHTML=localStorage.getItem("favres-info")
document.getElementById("favrest-name").appendChild(favrest)

