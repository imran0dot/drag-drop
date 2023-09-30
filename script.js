const dragableItems = document.querySelectorAll(".draggable");

dragableItems.forEach((item) => {
    item.addEventListener("dragstart", (e) => {
        setTimeout(() => item.classList.add("draging"), 1)
        
    })


// remove class name from drag item 
    item.addEventListener("dragend", () =>  item.classList.remove("draging"))
})