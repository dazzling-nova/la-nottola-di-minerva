const currentNumber = 0;
// insert header at the top of every page where the script is called
function addHeader(indexPath, aboutPath, numbersPath, numberPath) {
  document.querySelector("body").innerHTML =
    `<header>
  <a href="${indexPath}" class="nav-link">
      <div class="header-text">
        <h1 class="heading-primary">La Nottola di Minerva</h1>
        <p class="header-subtitle">Il nuovo giornalino del Cremona-Zappa!</p>
      </div>
    </a>
  <nav class="main-nav">
    <a href="${indexPath}" class="nav-link">
      Home
    </a>
    <a href="${aboutPath}" class="nav-link">
      About Us
    </a>
    <a href="${numbersPath}" class="nav-link">
      Numeri
    </a>
  </nav>

   <a href="${numberPath}/number${currentNumber}/_numero.html" class="nav-link">
      <div class="number-tag">N.${currentNumber}</div>
    </a>
</header>
` + document.querySelector("body").innerHTML;
}

function addFavicon(iconPath) {
  document.querySelector(
    "head"
  ).innerHTML += `<link rel="icon" type="image/x-icon" href="${iconPath}"></link>"`;
}
