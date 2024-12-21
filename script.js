document.getElementById("surpriseButton").addEventListener("click", function () {
    const content = document.getElementById("surpriseContent");
    content.classList.toggle("hidden");
    content.style.display = content.classList.contains("hidden") ? "none" : "block";

    if (!content.classList.contains("hidden")) {
        alert("Fuzee, I hope this page shows how much I love you! ❤️");
    }
});
