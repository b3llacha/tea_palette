const studies={
beli:{name:'Beli',label:'01 · DISCOVERY & RANKING',intro:'Rethinking how we discover, rank, and remember a great meal.',focus:'Restaurant discovery and ranking',format:'Competitive analysis, annotated prototypes, and a proposal deck',description:'This study examines the discovery and ranking experience in Beli. The redesign proposal was delivered directly to Beli’s product team, packaging competitive analysis and annotated prototypes into a pitch for specific improvements.',questions:['How can discovery help people find restaurants that fit their taste?','How can ranking interactions be clearer and easier to navigate?'],status:'The original slide deck will be added here.'},
disney:{name:'Disney+',label:'02 · CONTENT DISCOVERY',intro:'Bringing a little more magic to the path from browsing to watching.',focus:'Information hierarchy and browsing workflows',format:'Website redesign prototype',description:'A consumer product teardown and website redesign exploring how the structure of a streaming experience can support clearer content discovery.',questions:['Does the information hierarchy help viewers decide what to watch?','How can a browsing workflow make the next step feel clear?'],status:'The full website redesign will be added here.'},
duolingo:{name:'Duolingo',label:'03 · ONBOARDING & LEARNING',intro:'Exploring the balance between motivation, clarity, and learning.',focus:'Onboarding, consistency, and learning workflows',format:'Design analysis and slide deck',description:'A design teardown examining the experience of getting started and navigating a learning product through simplicity, consistency, and usability.',questions:['How clearly does onboarding introduce the learning experience?','How do interaction patterns help people understand their progress?'],status:'The original slide deck will be added here.'},
trufru:{name:'TruFru',label:'04 · BRAND & SHOPPING',intro:'Translating a playful product into a clearer, more delicious digital experience.',focus:'Brand expression and information hierarchy',format:'Website redesign prototype',description:'A consumer product teardown and website redesign examining how product information and brand personality can work together in a digital experience.',questions:['How quickly can visitors understand the product and its appeal?','How can visual hierarchy make exploration more intuitive?'],status:'The full website redesign will be added here.'}
};

const order = ['beli', 'disney', 'duolingo', 'trufru'];
const hues = { beli: '#8b9e70', disney: '#3c587b', duolingo: '#95b461', trufru: '#ce9f94' };
const content = document.querySelector('#panel-content');
const toolbar = document.querySelector('.panel-toolbar');
const aboutButton = document.querySelector('#about-button');
const vessels = [...document.querySelectorAll('.vessel')];
let selected = null;
let lastVessel = null;

function render(markup, announcement) {
  content.innerHTML = markup;
  content.scrollTop = 0;
  content.classList.remove('enter');
  requestAnimationFrame(() => content.classList.add('enter'));
  document.querySelector('#announcement').textContent = announcement;
}

function updateSelection() {
  vessels.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.case === selected)));
  aboutButton.setAttribute('aria-pressed', 'false');
}

function showHome({ returnFocus = false } = {}) {
  selected = null;
  document.body.dataset.view = 'home';
  updateSelection();
  toolbar.hidden = true;
  render(`
    <div class="reference-teapot" role="img" aria-label="Botanical teapot illustration"></div>
    <p class="eyebrow">DESIGN TEARDOWNS, WITH TASTE</p>
    <h1>A collection,<br> carefully <em>steeped.</em></h1>
    <p class="panel-intro">Consumer product teardowns and redesign prototypes by Bella Cha. Familiar experiences, reconsidered through simplicity, consistency, and usability.</p>
    <div class="how-to"><span class="symbol" aria-hidden="true">↖</span><p><b>Pick something from the shelf.</b> Each vessel holds a case study. Choose one to explore a fresh perspective on an everyday product.</p></div>
    <div class="lenses" aria-label="Evaluation criteria"><span>SIMPLICITY</span><span>CONSISTENCY</span><span>USABILITY</span></div>
    <div class="reference-collage"><div class="cafe-sketch" role="img" aria-label="Hand-drawn sidewalk café"></div><div class="framed-sketch" role="img" aria-label="Gallery of hand-drawn picture frames"></div><span>a little curiosity,<br>a lot of intention.</span></div>
  `, 'Tea Palette introduction');
  if (returnFocus && lastVessel) lastVessel.focus();
}

function showStudy(key) {
  const study = studies[key];
  selected = key;
  document.body.dataset.view = 'study';
  lastVessel = vessels.find(button => button.dataset.case === key);
  updateSelection();
  toolbar.hidden = false;
  document.querySelector('.study-navigation').hidden = false;
  document.querySelector('#case-counter').textContent = `0${order.indexOf(key) + 1} / 04`;
  content.style.setProperty('--case-hue', hues[key]);
  render(`
    <p class="eyebrow case-eyebrow">${study.label}</p>
    <h2 class="case-title">${study.name}</h2>
    <p class="case-subtitle">${study.intro}</p>
    <p class="case-description">${study.description}</p>
    <dl class="case-facts">
      <div><dt>The focus</dt><dd>${study.focus}</dd></div>
      <div><dt>The deliverable</dt><dd>${study.format}</dd></div>
    </dl>
    <div class="asset-placeholder"><span aria-hidden="true">▧</span><div><b>${study.format.includes('deck') ? 'Slide deck' : 'Redesign prototype'} coming soon</b><p>${study.status}</p></div></div>
  `, `${study.name} case study selected. Details are shown beside the cabinet.`);
}

function showAbout() {
  selected = null;
  updateSelection();
  document.body.dataset.view = 'about';
  aboutButton.setAttribute('aria-pressed', 'true');
  toolbar.hidden = false;
  document.querySelector('.study-navigation').hidden = true;
  render(`
    <p class="eyebrow">BEHIND THE PALETTE</p>
    <h2 class="about-title">Hi, I’m Bella Cha.<br>A taste for the <em>thoughtful.</em></h2>
    <p class="panel-intro">I look closely at the consumer products we use every day, turning design teardowns into focused redesign proposals and full prototypes.</p>
    <p class="panel-intro">I break down onboarding, information hierarchy, and workflows using a score matrix across simplicity, consistency, and usability. My Beli proposal was delivered directly to their product team.</p>
    <div class="about-contacts" aria-label="Contact links coming soon"><span>LinkedIn<small>coming soon</small></span><span>Email<small>coming soon</small></span><span>Résumé<small>coming soon</small></span></div>
  `, 'About Bella Cha');
}

vessels.forEach(button => button.addEventListener('click', () => showStudy(button.dataset.case)));
document.querySelectorAll('[data-home]').forEach(button => button.addEventListener('click', () => showHome()));
aboutButton.addEventListener('click', showAbout);
document.querySelector('#back-button').addEventListener('click', () => showHome({ returnFocus: true }));
document.querySelector('#previous-button').addEventListener('click', () => showStudy(order[(order.indexOf(selected) + 3) % 4]));
document.querySelector('#next-button').addEventListener('click', () => showStudy(order[(order.indexOf(selected) + 1) % 4]));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && (selected || aboutButton.getAttribute('aria-pressed') === 'true')) showHome({ returnFocus: true });
});
showHome();
