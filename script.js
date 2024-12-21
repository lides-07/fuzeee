document.getElementById("surpriseButton").addEventListener("click", function () {
    const surprise = document.getElementById("surprise");
    surprise.classList.toggle("hidden");
    if (!surprise.classList.contains("hidden")) {
        alert("Fuzee, this is for you. I hope it brightens your day! ❤️");
    }
});
