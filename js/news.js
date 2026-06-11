document.getElementById("newsForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let title =
    document.getElementById("title").value;

    let category =
    document.getElementById("category").value;

    let content =
    document.getElementById("content").value;

    let news = {
        title,
        category,
        content
    };
    let date =
new Date().toLocaleString();

let news = {
    title,
    category,
    content,
    image,
    date
};

    let allNews =
    JSON.parse(localStorage.getItem("news"))
    || [];

    allNews.push(news);

    localStorage.setItem(
        "news",
        JSON.stringify(allNews)
    );

    alert("News Published Successfully!");

    document.getElementById("newsForm").reset();

});