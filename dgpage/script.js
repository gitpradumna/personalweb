const btn = document.querySelector(".btn");
 const m1 = document.querySelector("#m1")
 const m2 = document.querySelector("#m2")
 btn.addEventListener("click",() => {
   btn.innerText = "";
   btn.classList.add("active");
   document.querySelector(".sec2").style.display = "flex";
   setTimeout(() => {
    document.querySelector(".sec1").classList.add("hide");
    swal({
     title: "Happy Birthday",
     text:"it's party time let's celebrate this moment 🎉🎉",
     icon: "success",
     button:"Celebrate 🎉"
    }).then(() => {
     m1.play()
    
    })   
   },6400)
 })