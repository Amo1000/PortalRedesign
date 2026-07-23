document.getElementById('profile-options').insertAdjacentHTML("beforeend",'<li><a class="account-menu__link sbx-button--has-icon" href="/groups#my-favourite-groups"><sbx-icon name="folder" size="m" color="currentColor" style="--e2fdb188: currentColor; --v5f81b6b5: 1rem;"></sbx-icon><span>Favourite Groups</span></a></li>')
document.getElementById('profile-options').insertAdjacentHTML("beforeend",'<li><a class="account-menu__link sbx-button--has-icon" href="/cms/myLinks"><sbx-icon name="link" size="m" color="currentColor" style="--e2fdb188: currentColor; --v5f81b6b5: 1rem;"></sbx-icon><span>My Links</span></a></li>')
document.getElementById('profile-options').insertAdjacentHTML("beforeend",'<li><a class="account-menu__link sbx-button--has-icon" href="/news/saved"><sbx-icon name="news" size="m" color="currentColor" style="--e2fdb188: currentColor; --v5f81b6b5: 1rem;"></sbx-icon><span>Saved news</span></a></li>')
document.getElementById('profile-options').insertAdjacentHTML("beforeend",'<li><a class="account-menu__link sbx-button--has-icon" href="/resources/""><sbx-icon name="files" size="m" color="currentColor" style="--e2fdb188: currentColor; --v5f81b6b5: 1rem;"></sbx-icon><span>Resources</span></a></li>')
document.getElementById('profile-options').insertAdjacentHTML("beforeend",'<li><a class="account-menu__link sbx-button--has-icon" href="https://github.com/Amo1000/PortalRedesign""><sbx-icon name="modify" size="m" color="currentColor" style="--e2fdb188: currentColor; --v5f81b6b5: 1rem;"></sbx-icon><span>Portal Redesign</span></a></li>')

document.getElementById('footer').insertAdjacentHTML("afterbegin",'<a onclick="document.documentElement.scrollTop = 0;" id="myBtn" title="Go to top">Back to top</a>')

const active = document.querySelectorAll(".breadcrumb li");

for (var i = 0; i < active.length; i++ ) {
    active[i].insertAdjacentHTML("afterbegin",'<span>/</span>')
}

const active1 = document.querySelectorAll(".breadcrumb li:nth-child(1)");

for (var i = 0; i < active.length; i++ ) {
    active1[i].insertAdjacentHTML("afterbegin",'<a href="https://skcportal.stkevins.vic.edu.au/"><strong> ~ </strong></a>')
}

document.querySelector("link[rel*='icon']").href = 'https://github.com/Amo1000/PortalRedesign/blob/main/img/defaultlogo.png?raw=true'