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

document.addEventListener("DOMContentLoaded", function () 
{
    if (window.location.pathname.includes("links.html")) 
    { 
        document.querySelectorAll("a:not(nav a)").forEach(link => 
        {
            link.setAttribute("target", "_blank");
        });
    }
});

document.addEventListener("DOMContentLoaded", function () 
{
    document.querySelectorAll(".application-box a").forEach(link => 
    {
        link.setAttribute("target", "_blank");
    });
});

document.addEventListener("DOMContentLoaded", function () 
{
    document.querySelectorAll(".discord-link").forEach(link => 
    {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
    });
});
