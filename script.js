function ecards(event){
    document.getElementById("ecards").classList.remove("hidden")
    document.getElementById("scards").classList.add("hidden")
    document.getElementById("ccards").classList.add("hidden")
    document.getElementById("pcards").classList.add("hidden")
    document.getElementById("icards").classList.add("hidden")
    
    // document.querySelector(".sidenav-item").style.backgroundColor="white"
    // document.querySelector(".sidenav-item").style.color="black"

    document.getElementById("sk").style.backgroundColor="white"
    document.getElementById("sk").style.color="black"
    document.getElementById("ce").style.backgroundColor="white"
    document.getElementById("ce").style.color="black"
    document.getElementById("pr").style.backgroundColor="white"
    document.getElementById("pr").style.color="black"
    document.getElementById("in").style.backgroundColor="white"
    document.getElementById("in").style.color="black"

    console.log(event)
    
    // event.target.style.backgroundColor="#5c5c5c"
    event.target.style.color="blue"
    // event.target.style.fontWeight="bold"

}
function scards(event){

    document.getElementById("ecards").classList.add("hidden")
    document.getElementById("scards").classList.remove("hidden")
    document.getElementById("ccards").classList.add("hidden")
    document.getElementById("pcards").classList.add("hidden")
    document.getElementById("icards").classList.add("hidden")
    // document.querySelector(".sidenav-item").style.backgroundColor="white"
    // document.querySelector(".sidenav-item").style.color="black"
    document.getElementById("ed").style.backgroundColor="white"
    document.getElementById("ed").style.color="black"
    document.getElementById("ce").style.backgroundColor="white"
    document.getElementById("ce").style.color="black"
    document.getElementById("pr").style.backgroundColor="white"
    document.getElementById("pr").style.color="black"
    document.getElementById("in").style.backgroundColor="white"
    document.getElementById("in").style.color="black"

    console.log(event.target) 

    // event.target.style.backgroundColor="#57687c"

    event.target.style.color="blue"
    //event.target.style.fontWeight="bold"
    
}
function ccards(event){

   
    // document.querySelector(".sidenav-item").style.backgroundColor="white"
    // document.querySelector(".sidenav-item").style.color="black"
    document.getElementById("ed").style.backgroundColor="white"
    document.getElementById("ed").style.color="black"
    document.getElementById("sk").style.backgroundColor="white"
    document.getElementById("sk").style.color="black"
    document.getElementById("pr").style.backgroundColor="white"
    document.getElementById("pr").style.color="black"
    document.getElementById("in").style.backgroundColor="white"
    document.getElementById("in").style.color="black"

    document.getElementById("ecards").classList.add("hidden")
   document.getElementById("scards").classList.add("hidden")
   document.getElementById("ccards").classList.remove("hidden")
   document.getElementById("pcards").classList.add("hidden")
    document.getElementById("icards").classList.add("hidden")
    console.log(event.target) 

    // event.target.style.backgroundColor="#57687c"

    event.target.style.color="blue"
    //event.target.style.fontWeight="bold"
    
}




function pcards(event){

    
    // document.querySelector(".sidenav-item").style.backgroundColor="white"
    // document.querySelector(".sidenav-item").style.color="black"
    document.getElementById("ed").style.backgroundColor="white"
    document.getElementById("ed").style.color="black"
    document.getElementById("sk").style.backgroundColor="white"
    document.getElementById("sk").style.color="black"
    document.getElementById("ce").style.backgroundColor="white"
    document.getElementById("ce").style.color="black"
    document.getElementById("in").style.backgroundColor="white"
    document.getElementById("in").style.color="black"


    document.getElementById("ecards").classList.add("hidden")
   document.getElementById("scards").classList.add("hidden")
   document.getElementById("ccards").classList.add("hidden")
   document.getElementById("pcards").classList.remove("hidden")
   document.getElementById("icards").classList.add("hidden")
    console.log(event.target) 

    // event.target.style.backgroundColor="#57687c"

    event.target.style.color="blue"
    //event.target.style.fontWeight="bold"
    
}

function icards(event){

    
    // document.querySelector(".sidenav-item").style.backgroundColor="white"
    // document.querySelector(".sidenav-item").style.color="black"
    document.getElementById("ed").style.backgroundColor="white"
    document.getElementById("ed").style.color="black"
    document.getElementById("sk").style.backgroundColor="white"
    document.getElementById("sk").style.color="black"
    document.getElementById("ce").style.backgroundColor="white"
    document.getElementById("ce").style.color="black"
    document.getElementById("pr").style.backgroundColor="white"
    document.getElementById("pr").style.color="black"


    document.getElementById("ecards").classList.add("hidden")
   document.getElementById("scards").classList.add("hidden")
   document.getElementById("ccards").classList.add("hidden")
   document.getElementById("pcards").classList.add("hidden")
   document.getElementById("icards").classList.remove("hidden")
    console.log(event.target) 

    // event.target.style.backgroundColor="#57687c"

    event.target.style.color="blue"
    //event.target.style.fontWeight="bold"
    
}

