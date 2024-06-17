function showMoreInfo() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let button = document.getElementById("myBtn");

    button.addEventListener("click", () => {
        if (dots.style.display === "none") {
            dots.style.display = "block";
            button.innerHTML = "Read More";
            moreText.style.display = "none";
        }
        else {
            dots.style.display = "none";
            button.innerHTML = "Read Less";
            moreText.style.display = "block";
        }
    });
}

showMoreInfo();