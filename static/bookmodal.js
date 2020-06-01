(function() {
  if (document.cookie.indexOf('bookSeen=true') > -1 || /book/.test(window.location.pathname)) {
    return;
  }
  document.cookie = `bookSeen=true; ${document.cookie}; path=/; max-age=${60*60*24*7}`;
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
      document.querySelector('.modal').remove()
    }
  });

  const el = document.createElement('div');
  el.classList.add('modal');
  el.innerHTML = `<div class="ad">
    <div class="close"><a class="noborder" href="javascript:document.querySelector('.modal').remove()">🗙</a></div>
    <h2>The <em>ally</em> book</h2>
    <p>That's right, for better or for worse, <em class="ally-font">ally</em> is now out in book form! It's now available for purchase in both paperback and PDF digital editions.</p>
    <a href="/book" target="_blank" class="noborder"><img src="/book/cover-front.png" /></a>
    <p><em class="ally-font">ally</em> is an ergodic, arborescent, semiautobiographical work about identity, mental health, spirituality, and the mutability of the past. A lot of the information contained within is real, some of it isn’t. Each page is structured as a conversation between myself and my ally, a mirror reflection of myself.</p>
    <p>Learn more about it <a class="pulse" href="/book" target="_blank">here</a>.</p>
    <p><small><a href="javascript:document.querySelector('.modal').remove()">Dismiss</a></small></p>
  </div>`;
  document.body.appendChild(el);
})();
