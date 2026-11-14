const studies={
beli:{name:'Beli',centerCup:true,label:'Discovery & ranking',intro:'Rethinking how we discover, rank, and remember a great meal.',focus:'Restaurant discovery and ranking',format:'Competitive analysis, annotated prototypes, and a proposal deck',description:'This study examines the discovery and ranking experience in Beli. The redesign proposal packages competitive analysis and annotated prototypes into a pitch for specific improvements.',questions:['How can discovery help people find restaurants that fit their taste?','How can ranking interactions be clearer and easier to navigate?'],status:'',deck:'Taste First — Beli onboarding case study deck',slides:[
  'Title — Taste First: redesigning Beli’s onboarding around value before virality',
  'Project introduction — Reward the ranking, not just the recruiting',
  'Discover — Ranking comes first, the reward doesn’t',
  'Discover — How Beli’s model compares with Yelp, Google Maps, and TripAdvisor',
  'Define — What if the reward for ranking was a takeaway, not a wall?',
  'Define — Designing for a specific skeptic: persona and requirements',
  'Ideate — Two new screens, one banner rewritten',
  'Design — Strategy: me, my taste, my people',
  'Design — The ranking flow doesn’t need fixing',
  'Design — The missing screen: Beli gives something back before asking for more',
  'Design — Turn the ranking into value, then reframe what follows',
  'Design — Three ways to unlock the rest of Beli',
  'Test — How I would validate it: proposed usability test',
  'Test — Experiment plan and success criteria',
  'Reflection — From growth prompt to product payoff'
]},
disney:{name:'Disney+',label:'Content discovery',intro:'Bringing a little more magic to the path from browsing to watching.',focus:'Information hierarchy and browsing workflows',format:'Website redesign prototype',description:'A consumer product teardown and website redesign exploring how the structure of a streaming experience can support clearer content discovery.',questions:['Does the information hierarchy help viewers decide what to watch?','How can a browsing workflow make the next step feel clear?'],status:'',prototype:'https://www.figma.com/proto/T1g9Hy4NG8G2H6uLi8SseN/Tea-Palette_Disney-Plus?node-id=0-1',original:{src:'assets/disney-redesign/original-landing.webp',width:1000,height:6740,caption:'Disney+ landing page',alt:'Full-page screenshot of the Disney+ landing page: a hero banner, new releases from Disney+ and Hulu, a Top 10 row, a character quiz, plan cards, ESPN and HBO Max bundle promotions, feature tiles, an FAQ, and the footer.'}},
duolingo:{name:'Duolingo',centerCup:true,label:'Onboarding & learning',intro:'Exploring the balance between motivation, clarity, and learning.',focus:'Onboarding, consistency, and learning workflows',format:'Design analysis and slide deck',description:'A design teardown examining the experience of getting started and navigating a learning product through simplicity, consistency, and usability.',questions:['How clearly does onboarding introduce the learning experience?','How do interaction patterns help people understand their progress?'],status:'',deck:'Gamification UX research slide deck',slides:[
  'Title — How Gamification Drives Sustained User Engagement',
  'Context — Millions of people now learn a language on an app instead of in a classroom',
  'Approach — Research approach: literature review, competitive teardown, thematic synthesis',
  'Framework — Sustained engagement comes down to three gamification mechanics',
  'Finding 01 — Loss-averse rewards keep users coming back',
  'Finding 02 — Visible progress turns practice into momentum',
  'Finding 03 — Immediate feedback shapes behavior in the moment',
  'Finding 04 — Anywhere-access is a strength and a trade-off',
  'Finding 05 — Personalized content is rich but not always accurate',
  'Beyond gamification — Effectiveness isn’t uniform across every language domain',
  'So what — Design implications',
  'Conclusion — Rewards and progression drive engagement; feedback specificity is the growth edge',
  'Thank you',
  'Appendix — Sources'
]},
trufru:{name:'TruFru',label:'Brand & shopping',intro:'Translating a playful product into a clearer, more delicious digital experience.',focus:'Brand expression and information hierarchy',format:'Website redesign prototype',description:'A consumer product teardown and website redesign examining how product information and brand personality can work together in a digital experience.',questions:['How quickly can visitors understand the product and its appeal?','How can visual hierarchy make exploration more intuitive?'],status:'The redesign prototype has not been added yet.',original:{src:'assets/trufru-redesign/landing.webp',width:1200,height:5186,caption:'TruFru landing page',alt:'Full-page screenshot of the TruFru landing page: a “Better together” hero with a lifestyle photo, a frozen-fresh product explainer, top six best sellers for frozen and freeze-dried lines, customer reviews, a store locator, social videos, and the footer.'},notes:[['Product / vision','Premium frozen and freeze-dried snack experience; make it feel elevated and easy to shop.'],['Problem','Product discovery could feel more intentional: stronger calls to action (e.g. “shop best sellers”, “explore new flavors”) and more lifestyle visuals showing how the products fit into everyday snacking.'],['Who','Snack lovers! People looking for convenient snacks.'],['Goals','Make the product the main visual focus, improve product discovery and website navigation (keep it simple), and encourage people to buy.']]}
};

const order = Object.keys(studies);
const content = document.querySelector('#panel-content');
const panel = document.querySelector('#detail-panel');
const vessels = [...document.querySelectorAll('[data-case]')];
const aboutButton = document.querySelector('#about-button');
const contactLinks = [...document.querySelectorAll('[data-contact]')];
const announce = text => { document.querySelector('#announcement').textContent = text; };
let selected = null;
let returnTarget = null;
const escapeHTML = text => text.replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
function render(markup, message, focus = true) {
  content.innerHTML = markup;
  content.scrollTop = 0;
  // One focal moment: the selected vessel settles as its reading panel opens.
  content.getAnimations().forEach(animation => animation.cancel());
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    content.animate([{opacity:.7, transform:'translateY(10px)'},{opacity:1, transform:'translateY(0)'}],{duration:280,easing:'cubic-bezier(.16,1,.3,1)'});
  }
  announce(message);
  if (focus) content.querySelector('h2').focus({preventScroll:true});
}
const sidebarCup = document.querySelector('#sidebar-cup');
const studyVisual = document.querySelector('#study-visual');
function updateSelection() {
  // The open study's cup rests under the work index.
  const cup = selected && document.querySelector(`.vessel[data-case="${selected}"] img`);
  sidebarCup.hidden = !cup || Boolean(studies[selected]?.centerCup);
  if (cup) { sidebarCup.src = cup.getAttribute('src'); sidebarCup.dataset.study = selected; }
  vessels.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.case === selected)));
  aboutButton.setAttribute('aria-pressed', String(document.body.dataset.view === 'about'));
  contactLinks.forEach(link => { if(document.body.dataset.view === 'contact') link.setAttribute('aria-current','page'); else link.removeAttribute('aria-current'); });
}
function showHome({ returnFocus = false } = {}) {
  selected = null;
  document.body.dataset.view = 'home';
  delete document.body.dataset.study;
  panel.hidden = true;
  studyVisual.hidden = true;
  updateSelection();

  announce('Tea Palette case study collection');
  if (returnFocus) (returnTarget && !returnTarget.closest('[hidden]') ? returnTarget : document.querySelector('[data-case]')).focus();
}
function openPanel(view, origin) {
  if (origin) returnTarget = origin;
  if (view !== 'study') studyVisual.hidden = true;
  document.body.dataset.view = view;
  panel.hidden = false;
  document.querySelector('.study-navigation').hidden = view !== 'study';
  updateSelection();

}
function showStudy(key, origin, focus = true) {
  const study = studies[key];
  if (!study) return;
  selected = key;
  document.body.dataset.study = key;
  openPanel('study', origin);
  document.querySelector('#case-counter').textContent = `${order.indexOf(key)+1} / ${order.length}`;
  const deck = study.format.includes('deck');
  render(`<h2 class="case-title" tabindex="-1">${escapeHTML(study.name)}</h2>
    <p class="case-subtitle">${escapeHTML(study.intro)}</p>
    <p class="case-description">${escapeHTML(study.description)}</p>
    <dl class="case-facts"><div><dt>Focus</dt><dd>${escapeHTML(study.focus)}</dd></div><div><dt>Deliverable</dt><dd>${escapeHTML(study.format)}</dd></div></dl>
    ${study.notes ? `<aside class="sticky-note" aria-label="Redesign notes"><p class="sticky-note-title">My redesign notes</p><dl>${study.notes.map(([label,text])=>`<div><dt>${escapeHTML(label)}</dt><dd>${escapeHTML(text)}</dd></div>`).join('')}</dl></aside>` : ''}
    ${study.prototype ? `<div class="prototype-link"><b>Redesign prototype</b><p><a href="${escapeHTML(study.prototype)}" target="_blank" rel="noopener noreferrer">Open the Figma prototype <span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a></p></div>` :
     study.slides ? deckMarkup(study) : `<div class="asset-placeholder"><b>${deck ? 'Slides' : 'Prototype'} not added yet</b><p>${escapeHTML(study.status)}</p></div>`}`, `${study.name} study opened.`, focus);
  if (study.slides) setupDeck(key, study.slides);
  // A study's original screen sits on the left, where the tea table usually is.
  studyVisual.hidden = !study.original && !study.centerCup;
  studyVisual.dataset.kind = study.original ? 'screen' : 'cup';
  if (study.centerCup) {
    const cup = document.querySelector(`.vessel[data-case="${key}"] img`);
    studyVisual.innerHTML = `<img class="center-cup" src="${cup.getAttribute('src')}" alt="" aria-hidden="true">`;
  } else if (study.original) {
    const {src, width, height, caption, alt} = study.original;
    studyVisual.innerHTML = `<figcaption>${escapeHTML(caption)}</figcaption><div class="study-visual-scroll" tabindex="0" aria-label="${escapeHTML(caption)}, scrollable"><img src="${src}" width="${width}" height="${height}" alt="${escapeHTML(alt)}" decoding="async"></div>`;
  } else studyVisual.innerHTML = '';
}
const slideSrc = (key, index) => `assets/${key}-deck/slide-${String(index+1).padStart(2,'0')}.webp`;
function deckMarkup(study) {
  return `<section class="deck" aria-roledescription="carousel" aria-label="${escapeHTML(study.deck)}">
    <h3>${escapeHTML(study.deck)}</h3>
    <div class="deck-frame"><img class="deck-image" src="" alt="" width="1440" height="810" decoding="async"></div>
    <div class="deck-controls">
      <button type="button" data-step="-1" aria-label="Previous slide">← Previous</button>
      <span class="deck-counter" aria-live="polite"></span>
      <button type="button" data-step="1" aria-label="Next slide">Next →</button>
    </div>
  </section>`;
}
// Slide carousel: buttons, arrow keys while focus is inside, and swipe on touch screens.
function setupDeck(key, slides) {
  const deck = content.querySelector('.deck');
  const image = deck.querySelector('.deck-image');
  const counter = deck.querySelector('.deck-counter');
  const [prev, next] = deck.querySelectorAll('[data-step]');
  let index = 0;
  const go = target => {
    index = Math.max(0, Math.min(slides.length - 1, target));
    image.src = slideSrc(key, index);
    image.alt = `Slide ${index+1} of ${slides.length}: ${slides[index]}`;
    counter.textContent = `${index+1} / ${slides.length}`;
    prev.disabled = index === 0;
    next.disabled = index === slides.length - 1;
    for (const near of [index-1, index+1]) if (near >= 0 && near < slides.length) new Image().src = slideSrc(key, near);
  };
  deck.addEventListener('click', event => { const button = event.target.closest('[data-step]'); if (button) go(index + Number(button.dataset.step)); });
  deck.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); go(index - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); go(index + 1); }
  });
  let startX = null;
  image.addEventListener('touchstart', event => { startX = event.touches[0].clientX; }, {passive:true});
  image.addEventListener('touchend', event => {
    if (startX === null) return;
    const distance = event.changedTouches[0].clientX - startX;
    if (Math.abs(distance) > 40) go(index + (distance < 0 ? 1 : -1));
    startX = null;
  });
  go(0);
}
function showAbout(origin) {
  selected = null;
  delete document.body.dataset.study;
  openPanel('about', origin);
  render(`<h2 class="about-title" tabindex="-1">Hi, I’m Bella Cha.<br>A taste for the <em>thoughtful.</em></h2>
    <p class="panel-intro">I look closely at the consumer products we use every day, turning design teardowns into focused redesign proposals and full prototypes.</p>
    <p class="panel-intro">I break down onboarding, information hierarchy, and workflows using a score matrix across simplicity, consistency, and usability.</p>`, 'About Bella Cha opened.');
}
function showContact(origin) {
  selected = null;
  delete document.body.dataset.study;
  openPanel('contact', origin);
  render(`<h2 tabindex="-1">Connect with Bella.</h2><p class="panel-intro">Contact details will live here once they’re added.</p><dl class="contact-list"><div><dt>LinkedIn</dt><dd>Link not added yet</dd></div><div><dt>Email</dt><dd>Address not added yet</dd></div><div><dt>Résumé</dt><dd>File not added yet</dd></div></dl><p class="panel-intro">In the meantime, explore the four case study summaries.</p>`, 'Contact details opened.');
}
vessels.forEach(button => button.addEventListener('click', () => showStudy(button.dataset.case, button)));
document.querySelectorAll('[data-home]').forEach(button => button.addEventListener('click', () => showHome()));
aboutButton.addEventListener('click', () => showAbout(aboutButton));
contactLinks.forEach(link => link.addEventListener('click', event => { event.preventDefault(); showContact(link); }));
document.querySelector('#back-button').addEventListener('click', () => showHome({returnFocus:true}));
document.querySelector('#previous-button').addEventListener('click', () => showStudy(order[(order.indexOf(selected)+order.length-1)%order.length], null, false));
document.querySelector('#next-button').addEventListener('click', () => showStudy(order[(order.indexOf(selected)+1)%order.length], null, false));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && document.body.dataset.view !== 'home') showHome({returnFocus:true});
});
document.querySelector('#year').textContent = new Date().getFullYear();
// The index and objects share one selection cue, without moving the paper's layout.
vessels.forEach(button => {
  for(const type of ['pointerenter','focus']) button.addEventListener(type, () => document.body.dataset.preview = button.dataset.case);
  for(const type of ['pointerleave','blur']) button.addEventListener(type, () => delete document.body.dataset.preview);
});
showHome();
