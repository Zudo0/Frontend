var overlay=document.querySelector(".overlay")
var popup=document.querySelector(".popup")
var addquote=document.getElementById("addquote")
var cancelquote =document.getElementById("cancellingthequote")

addquote.addEventListener("click",function(){
    overlay.style.display="block"
    popup.style.display="block"
})

cancelquote.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popup.style.display="none"
})

var container = document.querySelector(".container")
var subcontainer = document.querySelector(".subcontainer")
var topic = document.getElementById("topic")
var summary = document.getElementById("summaryoftopic")
var describe = document.getElementById("describethetopic")
var add = document.getElementById("addingthequote")

add.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","subcontainer")
    div.innerHTML=`<h2>${topic.value}</h2>
                   <h5>${summary.value}</h5>
                   <p>${describe.value}</p>
                   <button onclick="deletequote(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    popup.style.display="none"
})


function deletequote(event)
{
        event.target.parentElement.remove()
}






