function gotohome(){
    window.location.href="/html/swiggy.html"
}

function search1(){
    document.getElementById("cancel").style.visibility='visible'
    document.getElementById("searchbtn").style.visibility='visible'
}
function clear(){
    document.getElementById("search").value="";
    console.log("hi");
}
document.getElementById("historylist").innerHTML=localStorage.getItem("recenthistory")
function searchit(){
   
    const container=document.createElement("li")
    container.className="historycontainer"
    container.innerHTML=document.getElementById("search").value

    document.getElementById("historylist").insertBefore(container,document.getElementById("historylist").children[0])
 localStorage.setItem("recenthistory",document.getElementById("historylist").innerHTML)

}