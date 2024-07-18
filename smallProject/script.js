document.addEventListener("DOMContentLoaded", function() {
    const lightbulb = document.getElementById("lightbulb");
    const btn = document.getElementById("btn");

    btn.addEventListener("Click", function() {
        if (lightbulb.src.includes("offLight.jpeg")) {
            lightbulb.src = "onBulb.jpeg";
        } else {
            lightbulb.src = "offLight.jpeg";
        }
    });
});
