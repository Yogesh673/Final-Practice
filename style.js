

let inp = document.querySelector("input");
console.dir(inp);

let editLi = null;

let but = document.querySelector("button");
but.addEventListener("click", () => {
    let data = inp.value;
    console.log(data);
    let li = document.createElement("li");
    li.innerText = data;



    under.appendChild(li);

    let delBut = document.createElement("button");
    delBut.innerText = "Delete Task";

    delBut.addEventListener("click", () => {
        li.remove();
    })

    let marBut = document.createElement("button");
    marBut.innerText = "Complete Task";


    marBut.addEventListener("click", () => {
        marBut.style.color = "white";
        marBut.style.backgroundColor = "green";
    })

    marBut.addEventListener("dblclick", () => {
        marBut.style.color = "black";
        marBut.style.backgroundColor = "#e5e5e5";
    })

    let editBut = document.createElement("button");
    editBut.innerText = "Edit Task";




editBut.addEventListener("click", () => {
    inp.value="";
    inp.focus();  
    
})



li.appendChild(delBut);
li.appendChild(marBut);
li.appendChild(editBut);

inp.value = "";

 


    });

   






let under = document.querySelector("ul")




