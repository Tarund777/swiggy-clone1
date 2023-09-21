function gotohome() {
    window.location.href = "/html/swiggy.html"
}
let i = (localStorage.getItem("i"));
if (i == "1") {
    document.getElementById("foods").innerHTML = localStorage.getItem("foodslot11")
}
else if (i == "2") {
    document.getElementById("foods").innerHTML = localStorage.getItem("foodslot12")
}
else if (i == "3") {
    document.getElementById("foods").innerHTML = localStorage.getItem("foodslot13")
}
else if (i == "4") {
    document.getElementById("foods").innerHTML = localStorage.getItem("foodslot14")
}
else if (i == "5") {
    document.getElementById("foods").innerHTML = localStorage.getItem("foodslot15")
}

function addfood() {
    document.getElementById("foods").style.visibility = 'hidden'
    document.getElementById("addfoodcont").style.visibility = 'visible'
    document.getElementById("price").value = ""
    document.getElementById("foodname").value = ""
}
function delfoods(){
    document.getElementById("foods").innerHTML=""
    if (i == "1") {
        localStorage.setItem("foodslot1", "")
    }
    else if (i == "2") {
        localStorage.setItem("foodslot2", "")
    }
    else if (i == "3") {
        localStorage.setItem("foodslot3","")
    }
    else if (i == "4") {
        localStorage.setItem("foodslot4", "")
    }
    else if (i == "5") {
        localStorage.setItem("foodslot5", "")
    }
    localStorage.setItem("t",0)
}
let t=parseInt(localStorage.getItem("t"));

function givefoodname() {
    const food = document.createElement("div")
    const foodname = document.createElement("div")
    const foodprice = document.createElement("div")
    t=t+1
 
    foodprice.className = "foodpriceslot"
    foodprice.id = "foodpriceslot"
    foodname.className = "foodnameslot"
    foodname.id = "foodnameslot"
    food.className = "foodslot"
     food.id = t
    foodprice.innerHTML = document.getElementById("price").value
    foodname.innerHTML = document.getElementById("foodname").value
    food.appendChild(foodname)
    food.appendChild(foodprice)
   
    
    document.getElementById("foods").appendChild(food)
    document.getElementById("foods").style.visibility = 'visible'
    document.getElementById("addfoodcont").style.visibility = 'hidden'
    document.getElementById("addfood").style.visibility = 'visible'
    if (i == "1") {
        localStorage.setItem("foodslot1", document.getElementById("foods").innerHTML)
    }
    else if (i == "2") {
        localStorage.setItem("foodslot2", document.getElementById("foods").innerHTML)
    }
    else if (i == "3") {
        localStorage.setItem("foodslot3", document.getElementById("foods").innerHTML)
    }
    else if (i == "4") {
        localStorage.setItem("foodslot4", document.getElementById("foods").innerHTML)
    }
    else if (i == "5") {
        localStorage.setItem("foodslot5", document.getElementById("foods").innerHTML)
    }

 localStorage.setItem("t",parseInt(t))
   
}
var foodselect=document.querySelectorAll(".foodslot")
var foodpriceselect=document.querySelectorAll(".foodpriceslot")
let foodselectarray=Array.prototype.slice.call(foodselect);

let foodpriceselectarray=Array.prototype.slice.call(foodpriceselect)

foodselectarray.forEach(function(select){
    
    select.addEventListener("click", function(){
    //   foodselectarray[1]. getElementById("foodpriceslot").innerHTML="hi"
        console.log(select)
       
        document.getElementById("payment").style.visibility='visible'
        const selectedname=document.createElement("div")
        selectedname.className="selectedname"
        selectedname.id="selectedname"
        selectedname.innerHTML=select.innerHTML
      
    //   console.log( document.getElementById("selectedfoodcont").getElementsByClassName("foodpriceslot").innerHTML)
        document.getElementById("payment").appendChild(selectedname)
       
    })
})

