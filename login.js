function changeFavicon(newHref) {
    const favicon = document.getElementById('apple-touch-icon') || document.querySelector('link[rel="icon"]');
    favicon.href = newHref;
}

changeFavicon('https://skcportal.stkevins.vic.edu.au/images/logo.php?logo=skin_logo_square&size=hidpi');