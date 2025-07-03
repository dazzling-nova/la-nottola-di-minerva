const currentNumber = 2;
// insert header at the top of every page where the script is called
document.querySelector("body").innerHTML =
  `<header>
  <a href="http://127.0.0.1:5500/pages/home.html" class="nav-link">
      <div class="header-text">
        <h1 class="heading-primary">La Nottola di Minerva</h1>
        <p class="header-subtitle">Il nuovo giornalino del Cremona-Zappa!</p>
      </div>
    </a>
  <nav class="main-nav">
    <a href="http://127.0.0.1:5500/pages/home.html" class="nav-link">
      Home
    </a>
    <a href="http://127.0.0.1:5500/pages/about.html" class="nav-link">
      About Us
    </a>
    <a href="http://127.0.0.1:5500/pages/numeri.html" class="nav-link">
      Numeri
    </a>
  </nav>

   <a href="http://127.0.0.1:5500/pages/number${currentNumber}/_numero.html" class="nav-link">
      <div class="number-tag">N.${currentNumber}</div>
    </a>
</header>
` + document.querySelector("body").innerHTML;

document.querySelector(
  "head"
).innerHTML += `<link rel="icon" type="image/x-icon" href="http://127.0.0.1:5500/images/favicon.png"></link>"`;
