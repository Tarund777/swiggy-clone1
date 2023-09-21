function gotohome() {
    window.location.href = "/html/Myaccount.html"
}

document.getElementById("namecontainer").innerHTML = localStorage.getItem("storedname")
document.getElementById("mobilecontainer").innerHTML = localStorage.getItem("storednumber")

document.getElementById("mailcontainer").innerHTML = localStorage.getItem("storedmail")



function update() {
    document.getElementById("hr1").style.border = '1px solid rgb(255, 115, 0)'
    document.getElementById("edit").style.visibility = 'hidden'
    document.getElementById("name").style.visibility = 'visible'
    const btncontainer = document.createElement("div")
    btncontainer.id = "btncontainer"
    const updatebtn = document.createElement("button")
    updatebtn.id = "update"
    updatebtn.innerHTML = "UPDATE"
    updatebtn.addEventListener("click", updatename)
    const cancelbtn = document.createElement("button")
    cancelbtn.id = "cancel"
    cancelbtn.innerHTML = "CANCEL"
    cancelbtn.addEventListener("click", removebtncontainer)
    document.getElementById("names").append(btncontainer)
    btncontainer.appendChild(updatebtn)
    btncontainer.appendChild(cancelbtn)
    function updatename() {
        document.getElementById("namecontainer").innerText = document.getElementById("name").value
        localStorage.setItem("displayname", document.getElementById("namecontainer").innerHTML)
        document.getElementById("names").removeChild(btncontainer)
        document.getElementById("name").style.visibility = 'hidden'
        document.getElementById("edit").style.visibility = 'visible'
        document.getElementById("hr1").style.border = '1px solid #959090'

    }

    function removebtncontainer() {
        document.getElementById("names").removeChild(btncontainer)
        document.getElementById("name").style.visibility = 'hidden'
        document.getElementById("edit").style.visibility = 'visible'
        document.getElementById("hr1").style.border = '1px solid #959090'
    }

}

function updatephone() {
    document.getElementById("hr2").style.border = '1px solid rgb(255, 115, 0)'
    document.getElementById("editmobile").style.visibility = 'hidden'
    document.getElementById("mobile").style.visibility = 'visible'
    const btncontainer = document.createElement("div")
    btncontainer.id = "btncontainer"
    const updatebtn = document.createElement("button")
    updatebtn.id = "update"
    updatebtn.innerHTML = "UPDATE"
    updatebtn.addEventListener("click", updatename)
    const cancelbtn = document.createElement("button")
    cancelbtn.id = "cancel"
    cancelbtn.innerHTML = "CANCEL"
    cancelbtn.addEventListener("click", removebtncontainer)
    document.getElementById("numbers").append(btncontainer)
    btncontainer.appendChild(updatebtn)
    btncontainer.appendChild(cancelbtn)
    function updatename() {

        j = 0;
        for (i = 0; i < document.getElementById("mobile").value.length; i++) {
            j = j + 1;
            if (document.getElementById("mobile").value[i] != "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" || "0") {
                localStorage.setItem("displaynumber", "Invalid Number")
            }
        }

        if (j != 10) {
            localStorage.setItem("displaynumber", "Invalid Number")
        }
        else {
            document.getElementById("mobilecontainer").innerText = document.getElementById("mobile").value
            localStorage.setItem("displaynumber", document.getElementById("mobilecontainer").innerHTML)
        }

        document.getElementById("numbers").removeChild(btncontainer)
        document.getElementById("mobile").style.visibility = 'hidden'
        document.getElementById("editmobile").style.visibility = 'visible'
        document.getElementById("hr2").style.border = '1px solid #959090'
    }

    function removebtncontainer() {
        document.getElementById("numbers").removeChild(btncontainer)
        document.getElementById("mobile").style.visibility = 'hidden'
        document.getElementById("editmobile").style.visibility = 'visible'
        document.getElementById("hr2").style.border = '1px solid #959090'
    }


}

function updatemail() {
    document.getElementById("hr3").style.border = '1px solid rgb(255, 115, 0)'
    document.getElementById("editmail").style.visibility = 'hidden'
    document.getElementById("mail").style.visibility = 'visible'
    const btncontainer = document.createElement("div")
    btncontainer.id = "btncontainer"
    const updatebtn = document.createElement("button")
    updatebtn.id = "update"
    updatebtn.innerHTML = "UPDATE"
    updatebtn.addEventListener("click", updatename)
    const cancelbtn = document.createElement("button")
    cancelbtn.id = "cancel"
    cancelbtn.innerHTML = "CANCEL"
    cancelbtn.addEventListener("click", removebtncontainer)
    document.getElementById("mails").append(btncontainer)
    btncontainer.appendChild(updatebtn)
    btncontainer.appendChild(cancelbtn)

    function updatename() {
        let j = 0;
        for (i = 0; i < document.getElementById("mail").value.length; i++) {
            if (document.getElementById("mail").value[i] == "@") {
                j = j + 1;
            }
            else { continue; }
        }
        if (j != 1) {
            document.getElementById("mailcontainer").textContent == "Invalid E-mail"
            localStorage.setItem("displaymail", "Invalid E-mail")
        }
        else {
            document.getElementById("mailcontainer").innerText = document.getElementById("mail").value
            localStorage.setItem("displaymail", document.getElementById("mailcontainer").innerHTML)
        }

        document.getElementById("mails").removeChild(btncontainer)
        document.getElementById("mail").style.visibility = 'hidden'
        document.getElementById("editmail").style.visibility = 'visible'
        document.getElementById("hr3").style.border = '1px solid #959090'
    }

    function removebtncontainer() {

        document.getElementById("mails").removeChild(btncontainer)
        document.getElementById("mail").style.visibility = 'hidden'
        document.getElementById("editmail").style.visibility = 'visible'
        document.getElementById("hr3").style.border = '1px solid #959090'
    }
}