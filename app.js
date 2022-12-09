const btn = document.getElementsById("btn");

btn.addEventListener("click", function(){
   const description = document.getElementsById("description")
   const name = decription.getElementsById("name")
   description.innerHTML = name.value + ", this"
});
   