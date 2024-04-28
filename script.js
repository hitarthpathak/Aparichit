let input = document.getElementById("input");
let btn = document.getElementById("submit");

btn.addEventListener("click", () => {
    input.value = null;
    input.value = "Your Request Is Submitted!";
})