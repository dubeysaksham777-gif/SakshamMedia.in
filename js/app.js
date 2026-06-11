// Load News from LocalStorage

const newsContainer = document.getElementById("newsContainer");

if (newsContainer) {

    const newsList =
        JSON.parse(localStorage.getItem("news")) || [];

    newsList.forEach(news => {

        const card = document.createElement("div");

        card.classList.add("news-card");

        card.innerHTML = `
            <h2>${news.title}</h2>

            <p><strong>${news.category}</strong></p>

            <p>
                ${news.content.substring(0, 100)}...
            </p>

            <button>Read More</button>
        `;

        card.querySelector("button")
            .addEventListener("click", () => {

                localStorage.setItem(
                    "selectedNews",
                    JSON.stringify(news)
                );

                window.location.href =
                    "article.html";
            });

        newsContainer.appendChild(card);

    });
}


// Search Functionality

const searchInput =
    document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value =
            this.value.toLowerCase();

        const cards =
            document.querySelectorAll(".news-card");

        cards.forEach(card => {

            const text =
                card.innerText.toLowerCase();

            card.style.display =
                text.includes(value)
                    ? "block"
                    : "none";

        });

    });

}


// Dark Mode

const themeBtn =
    document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem(
                "theme",
                "dark"
            );

            themeBtn.innerHTML =
                "☀️ Light Mode";

        } else {

            localStorage.setItem(
                "theme",
                "light"
            );

            themeBtn.innerHTML =
                "Dark Mode";

        }

    });

}


// Remember Theme

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    if (themeBtn) {
        themeBtn.innerHTML =
            "☀️ Light Mode";
    }

}