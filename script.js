function scrollToTop() 
{
    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () 
{
    const backButton = document.querySelector(".back-button");

    const body = document.body;

    body.style.opacity = "0";

    requestAnimationFrame(() => 
    {
        body.classList.add("fade-in");

        body.style.opacity = "1";
    });

    if (backButton) 
    {
        backButton.addEventListener("click", function (event) 
        {
            event.preventDefault();

            const backPage = backButton.getAttribute("data-back");

            if (!body.classList.contains("fade-out"))
            {
                body.classList.add("fade-out");

                setTimeout(() => 
                {
                    if (backPage) 
                    {
                        window.location.href = backPage;
                    }
                }, 400);
            }
        });
    }
});
