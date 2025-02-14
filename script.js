function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.querySelector(".back-button");
    const body = document.body;

    // Immediately apply fade-in class to prevent blinking
    body.style.opacity = "0";
    requestAnimationFrame(() => {
        body.classList.add("fade-in");
        body.style.opacity = "1";
    });

    if (backButton) {
        backButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent instant navigation

            const backPage = backButton.getAttribute("data-back"); // Get correct return page

            if (!body.classList.contains("fade-out")) {
                body.classList.add("fade-out"); // Apply fade-out effect

                setTimeout(() => {
                    if (backPage) {
                        window.location.href = backPage; // Navigate after transition
                    }
                }, 400); // Matches CSS transition time
            }
        });
    }
});
