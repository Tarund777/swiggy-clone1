const back = document.querySelector(".backbutton")
back.addEventListener("click", gotohome)
function gotohome() {
    window.location.href = "/html/swiggy.html"
}
const currentlocation = document.querySelector(".currentlocation")
currentlocation.addEventListener("click", openmaps)
function openmaps() {
    window.open("https://www.google.co.in/maps")
}

const savedaddress = document.getElementById("address-save")
const cancelbtn1 = document.getElementById("cancelbtn1")

let address_value = document.getElementById("get-address").value
// localStorage.setItem("textvalue", address_value);
document.getElementById("address-save").innerText = localStorage.getItem("loadvalue")
document.getElementById("recentsearches").innerHTML=localStorage.getItem("displayhistory")
if(document.getElementById("recentsearches").innerText!=""){
   document.getElementById("clearhistory").style.visibility = 'visible'
   document.getElementById("recentsearches-heading").style.visibility='visible'
}



if (savedaddress.innerText != "") {
    cancelbtn1.style.visibility = 'visible'
}
function savebtn() {
    let address_value = document.getElementById("get-address").value
    // localStorage.setItem("textvalue", address_value);
    const save_btn = document.getElementById("save-button")
    if (address_value != '') {
        save_btn.style.visibility = 'visible'
    }
    else {
        save_btn.style.visibility = 'hidden'
    }

}

function addressvalue() {


    let address_value = document.getElementById("get-address").value
   localStorage.setItem("textvalue", address_value);
    const cancelbtn1 = document.getElementById("cancelbtn1")
    const save_btn = document.getElementById("save-button")
    if (savedaddress.textContent != "") {
        savedaddress.textContent = address_value;
        console.log(savedaddress.innerHTML)
        cancelbtn1.style.visibility = 'visible'
        save_btn.style.visibility = 'hidden'

    }
    else {
        const y = document.createElement("div")
        let div = document.querySelector("div .recent-address")
        console.log(div)
        const newcontent = document.createTextNode(document.getElementById("get-address").value)
        
        const cancelbtn11 = document.createElement("button")
        cancelbtn11.className = "cancelbtn1"
        cancelbtn11.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'
        cancelbtn11.addEventListener("click", deldata1)
        y.className = "recent_childAddress"

        y.addEventListener("click", savedAddressvalue)
        y.appendChild(newcontent)
        y.appendChild(cancelbtn11)
        div.appendChild(y)

        console.log(y.innerHTML)
       
        /////////////////////////////////////////////////////////////////
        function deldata1() {
            div.removeChild(y);
        }
        function savedAddressvalue() {
            localStorage.setItem("textvalue", y.innerHTML);
        }


    }

}

// document.getElementsByClassName("recent-address").innerHTML=localStorage.getItem("loadedAddress")

function recentsearch() {
    const recentsearch_heading = document.getElementById("recentsearches-heading")
    const clear_history = document.getElementById("clearhistory")
    const recent_searches = document.querySelector("div #recentsearches")
    const rec_search = document.createElement("div")
    const newcontent1 = document.createTextNode(document.getElementById("get-address").value)
    rec_search.className = 'recent_search'
    rec_search.appendChild(newcontent1)
    if (rec_search.innerText != "") {
        recent_searches.appendChild(rec_search)
        clear_history.style.visibility = 'visible'
        recentsearch_heading.style.visibility = 'visible'
        recentsearch_heading.style.color = 'rgb(130, 124, 124)'
        localStorage.setItem("recentsearch",recent_searches.innerHTML)
    }
    


}
function confirmdel() {
    const recentsearch_heading = document.getElementById("recentsearches-heading")
    const opaqueback = document.getElementById("opaqueback")
    const confirmdel = document.getElementById("clearhist-confirm")
    opaqueback.style.visibility = 'visible'
    confirmdel.style.visibility = 'visible'
    recentsearch_heading.style.color = 'whitesmoke'
}
function clearhistory() {
    const opaqueback = document.getElementById("opaqueback")
    const confirmdel = document.getElementById("clearhist-confirm")
    const recentsearch_heading = document.getElementById("recentsearches-heading")
    const clear_history = document.getElementById("clearhistory")
    const recent_searches = document.querySelector("div #recentsearches")
    recent_searches.innerHTML = "";
    clear_history.style.visibility = 'hidden';
    recentsearch_heading.style.visibility = 'hidden'
    confirmdel.style.visibility = 'hidden'
    opaqueback.style.visibility = 'hidden'
    localStorage.setItem("recentsearch","")
}

function deldata() {
    const container_address_save = document.querySelector("div .container-address-save")
    const recent_address = document.querySelector("div .recent-address")
    recent_address.removeChild(container_address_save)
    localStorage.setItem("textvalue","")

}

