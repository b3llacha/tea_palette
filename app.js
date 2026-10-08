const studies={
beli:{name:'Beli',label:'Discovery & ranking',intro:'Rethinking how we discover, rank, and remember a great meal.',focus:'Restaurant discovery and ranking',format:'Competitive analysis, annotated prototypes, and a proposal deck',description:'This study examines the discovery and ranking experience in Beli. The redesign proposal was delivered directly to Beli’s product team, packaging competitive analysis and annotated prototypes into a pitch for specific improvements.',questions:['How can discovery help people find restaurants that fit their taste?','How can ranking interactions be clearer and easier to navigate?'],status:'The slide deck has not been added yet.'},
disney:{name:'Disney+',label:'Content discovery',intro:'Bringing a little more magic to the path from browsing to watching.',focus:'Information hierarchy and browsing workflows',format:'Website redesign prototype',description:'A consumer product teardown and website redesign exploring how the structure of a streaming experience can support clearer content discovery.',questions:['Does the information hierarchy help viewers decide what to watch?','How can a browsing workflow make the next step feel clear?'],status:'The redesign prototype has not been added yet.'},
duolingo:{name:'Duolingo',label:'Onboarding & learning',intro:'Exploring the balance between motivation, clarity, and learning.',focus:'Onboarding, consistency, and learning workflows',format:'Design analysis and slide deck',description:'A design teardown examining the experience of getting started and navigating a learning product through simplicity, consistency, and usability.',questions:['How clearly does onboarding introduce the learning experience?','How do interaction patterns help people understand their progress?'],status:'The slide deck has not been added yet.'},
trufru:{name:'TruFru',label:'Brand & shopping',intro:'Translating a playful product into a clearer, more delicious digital experience.',focus:'Brand expression and information hierarchy',format:'Website redesign prototype',description:'A consumer product teardown and website redesign examining how product information and brand personality can work together in a digital experience.',questions:['How quickly can visitors understand the product and its appeal?','How can visual hierarchy make exploration more intuitive?'],status:'The redesign prototype has not been added yet.'}
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
function updateSelection() {
  vessels.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.case === selected)));
  aboutButton.setAttribute('aria-pressed', String(document.body.dataset.view === 'about'));
  contactLinks.forEach(link => { if(document.body.dataset.view === 'contact') link.setAttribute('aria-current','page'); else link.removeAttribute('aria-current'); });
}
function showHome({ returnFocus = false } = {}) {
  selected = null;
  document.body.dataset.view = 'home';
  delete document.body.dataset.study;
  panel.hidden = true;
  updateSelection();

  announce('Tea Palette case study collection');
  if (returnFocus) (returnTarget && !returnTarget.closest('[hidden]') ? returnTarget : document.querySelector('[data-case]')).focus();
}
function openPanel(view, origin) {
  if (origin) returnTarget = origin;
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
    <div class="asset-placeholder"><b>${deck ? 'Slides' : 'Prototype'} not added yet</b><p>${escapeHTML(study.status)}</p></div>`, `${study.name} study opened.`, focus);
}
function showAbout(origin) {
  selected = null;
  delete document.body.dataset.study;
  openPanel('about', origin);
  render(`<h2 class="about-title" tabindex="-1">Hi, I’m Bella Cha.<br>A taste for the <em>thoughtful.</em></h2>
    <p class="panel-intro">I look closely at the consumer products we use every day, turning design teardowns into focused redesign proposals and full prototypes.</p>
    <p class="panel-intro">I break down onboarding, information hierarchy, and workflows using a score matrix across simplicity, consistency, and usability. My Beli proposal was delivered directly to their product team.</p>
    <h3>The visual palette</h3><div class="reference-gallery">${[['cabinet','Watercolor tea cabinet'],['tea','Tea drawings'],['cafe','Sidewalk café sketch'],['book','Illustrated London book cover'],['frames','Hand-drawn gallery frames'],['landscape','Illustrated landscape']].map(([name,alt])=>`<img src="assets/optimized/${name}-reference.webp" alt="${alt}" width="360" height="240" loading="lazy" decoding="async">`).join('')}</div>`, 'About Bella Cha opened.');
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
