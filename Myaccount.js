

document.getElementById("name").innerHTML = localStorage.getItem("displayname")
localStorage.setItem("storedname", document.getElementById("name").innerHTML)
document.getElementById("name").innerHTML = localStorage.getItem("displayname").toUpperCase()

document.getElementById("no").innerHTML = localStorage.getItem("displaynumber")
localStorage.setItem("storednumber", document.getElementById("no").innerHTML)

document.getElementById("mail").innerHTML = localStorage.getItem("displaymail")
localStorage.setItem("storedmail", document.getElementById("mail").innerHTML)


function gotohome() {
  window.location.href = "/html/swiggy.html"
}
function Edit_Acct() {
  window.location.href = "/html/editaccount.html"
}

function dropdown() {
  if (document.getElementById("dropdownbtn").value == "open") {
    document.getElementById("dropdownbtn").style.rotate = 'z 180deg'
    document.getElementById("hr2").style.border = 'dashed 1px #959090'
    document.getElementById("dropdownbtn").value = "close"
  }
  else {
    document.getElementById("dropdownbtn").style.rotate = 'z 360deg';
    document.getElementById("hr2").style.border = 'solid 1px #959090'
    document.getElementById("dropdownbtn").value = "open";
  }

  document.getElementById("options").classList.toggle("optionhold1")

}
function open1() {
  window.location.href = "/html/favrestaurants.html"
}
function open2() {
  window.location.href = "/html/hiddenrestaurants.html"
}
function open3() {
  window.location.href = "/html/settings.html"
}
function open4() {
  window.location.href = "/html/settings.html"
}
function dropdown2() {
  if (document.getElementById("dropdownbtn2").value == "open") {
    document.getElementById("dropdownbtn2").style.rotate = 'z 180deg'
    document.getElementById("hr4").style.border = 'dashed 1px #959090'
    document.getElementById("dropdownbtn2").value = "close"
  }
  else {
    document.getElementById("dropdownbtn2").style.rotate = 'z 360deg';
    document.getElementById("hr4").style.border = 'solid 1px #959090'
    document.getElementById("dropdownbtn2").value = "open";
  }

  document.getElementById("options2").classList.toggle("optionhold2")

}
function forget() {
  document.getElementById("name").innerHTML = "NAME";
  document.getElementById("no").innerHTML = "Mobile-No";
  document.getElementById("mail").innerHTML = "E-mail";
  localStorage.setItem("textvalue", "Address")
  localStorage.setItem("displayname", "NAME")
  localStorage.setItem("displaynumber", "Mobile-No")
  localStorage.setItem("displaymail", "E-mail")
  localStorage.setItem("recenthistory", "")
  localStorage.setItem("favres-info", "")
  localStorage.setItem("top-pick", "")
  localStorage.setItem("foodslot", "")
  localStorage.setItem("foodslot1", "")

}
