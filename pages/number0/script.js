// add header
addHeader("../../index.html", "../about.html", "../numeri.html", "..");
// add favicon
addFavicon("../../images/favicon.png");

const numberArticles = document.querySelector(".number-articles");

// acquire articles from json file and populate the number's articles

fetch("_articles.json")
  .then((response) => response.json())
  .then((json) => {
    json.articles.forEach((element) => {
      let author = element.autore;
      let text = element.testo;
      let title = element.titolo;

      numberArticles.innerHTML += `<a href="${title}.html">
            <article class="article-card">
                <p class="article-title">${title}</p>
                <p class="article-card-text">${text
                  .substring(0, 200)
                  .replace("<p>", "")
                  .replace("</p>", "")}...</p>
            </article>
        </a>`;
    });
  });
