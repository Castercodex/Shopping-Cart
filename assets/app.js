const notify = document.querySelector("h1");
const list = document.querySelector(".list");
const toCart = document.getElementsByClassName("to-cart");

//Cart Numbering
for (item of toCart) {
  item.addEventListener("click", (e) => {
    const add = Number(notify.getAttribute("data-count") || 0);
    notify.setAttribute("data-count", add + 1);
    notify.classList.add("zero");

    /* copying of parent*/
    const parent = e.target.parentNode;
    const clone = parent.cloneNode(true);
    list.appendChild(clone);
    clone.lastElementChild.innerText = "Remove from Cart";
    clone.lastElementChild.onclick = () => {
      list.removeChild(clone);
      const substract = Number(notify.getAttribute("data-count" || 0));
      notify.setAttribute("data-count", substract - 1);
      if (notify.setAttribute("data-count")) {
        notify.classList.remove("zero")
      }
    };
    const removeFromCart = document.querySelector(".remove");
    removeFromCart.addEventListener("click", () => {
      list.removeChild(clone);
      notify.setAttribute("data-count", 0);
      notify.classList.remove("zero");
    });
    if (clone) {
      notify.onclick = () => {
        list.classList.toggle("show");
      };
    }
  });
  const fav = document.querySelector(".heart");
  fav.addEventListener("click", () => {
    fav.style.color = "red";
  });
}
