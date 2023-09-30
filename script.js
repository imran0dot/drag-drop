const listBag = document.querySelectorAll(".container");
const dragableItems = document.querySelectorAll(".draggable");

dragableItems.forEach((item) => {
    item.addEventListener("dragstart", (e) => {
        const draggingItem = e.target;
        setTimeout(() => draggingItem.classList.add("dragging"), 0);
    });

    item.addEventListener("dragend", (e) => {
        const draggingItem = e.target;
        draggingItem.classList.remove("dragging");
    });
});
  
listBag.forEach((bag) => {
    bag.addEventListener("dragover", (e) => {
        e.preventDefault();
        const draggingItem = document.querySelector(".dragging");
        const siblings = [...bag.querySelectorAll(".draggable:not(.dragging)")];
        console.log(siblings);

        let nextSibling = siblings.find((sibling) => {
            return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
        });

        bag.insertBefore(draggingItem, nextSibling);
    });
});