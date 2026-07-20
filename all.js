document.getElementById('profile-options').insertAdjacentHTML("beforeend",'<a class="icon-folder" href="/groups#my-favourite-groups">Favourite groups</a></li>')
document.getElementById('profile-options').insertAdjacentHTML("beforeend",'<a class="icon-link" href="/cms/myLinks">My links</a></li>')
document.getElementById('profile-options').insertAdjacentHTML("beforeend",'<a class="icon-star" href="/news/saved">Saved news</a></li>')
document.getElementById('profile-options').insertAdjacentHTML("beforeend",'<a href="/resources/" class="icon-files">Resources</a></li>')
document.getElementById('footer').insertAdjacentHTML("afterbegin",'<a onclick="document.documentElement.scrollTop = 0;" id="myBtn" title="Go to top">Back to top</a>')

const active = document.querySelectorAll(".breadcrumb li");

for (var i = 0; i < active.length; i++ ) {
    active[i].insertAdjacentHTML("afterbegin",'<span>/</span>')
}

const active1 = document.querySelectorAll(".breadcrumb li:nth-child(1)");

for (var i = 0; i < active.length; i++ ) {
    active1[i].insertAdjacentHTML("afterbegin",'<a href="https://skcportal.stkevins.vic.edu.au/"><strong> ~ </strong></a>')
}

function changeFavicon(newHref) {
    const favicon = document.getElementById('apple-touch-icon') || document.querySelector('link[rel="icon"]');
    favicon.href = newHref;
}

changeFavicon('https://skcportal.stkevins.vic.edu.au/images/logo.php?logo=skin_logo_square&size=hidpi');