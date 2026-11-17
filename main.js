'use strict';
const archiveProjects = [
  {
    id:'stack-solve', title:'Stack & Solve', category:'Games', code:'EXHIBIT 001',
    image:'assets/stack-art.webp', tags:['Puzzle','Mobile','Google Play'],
    subtitle:'A puzzle game published on Google Play.',
    description:'Stack & Solve is the published puzzle game included in this portfolio. See the official Google Play listing for current screenshots, game description, availability, and publisher details.',
    contributions:['Featured as the published game in the supplied portfolio.','Official listing linked for game details and authentic screenshots.'],
    role:'Published mobile puzzle game',
    note:'The exhibit artwork is a stylized promotional illustration, not a verified gameplay screenshot. Refer to the app store for the actual game media.',
    links:[['View Stack & Solve on Google Play','https://play.google.com/store/apps/details?id=com.akstudios.StackSolvePuzzleGames']]
  },
  {
    id:'virtual-lab', title:'Virtual Science Lab', category:'AR / VR', code:'EXHIBIT 002',
    image:'assets/lab-36.jpg', tags:['Unity','AR / VR','Simulation'],
    subtitle:'Science brought to life through immersive interaction.',
    description:'An immersive educational laboratory simulation built with Unity. A real recorded project demo is available right here in the portfolio.',
    contributions:['Built interactive laboratory activities in Unity.','Developed AR/VR-based science interactions and learning workflows.','Worked on guided experimental simulations with equipment placement.'],
    role:'AR / VR development',
    note:'Real captured footage is embedded here. Visit the linked Drive archive for additional shared demo files.',
    video:null,
    links:[['Explore project demos on Google Drive','https://drive.google.com/drive/folders/1j7fGOsFaHWYwNSSBdVaI9EEwy1kGppBn?usp=sharing']]
  },
  {
    id:'vtuber', title:'AR VTuber / Live Avatar', category:'Systems', code:'EXHIBIT 003',
    image:'assets/vtuber-art.webp', tags:['Unity','MediaPipe','Live2D'],
    subtitle:'Real-time expression and animated avatar systems.',
    description:'A real-time avatar / VTuber project using Unity with MediaPipe-based face tracking and Live2D Cubism integration. Source demos are located in the supplied Drive portfolio.',
    contributions:['Connected real-time facial tracking with responsive animated avatars.','Integrated Live2D model animation into Unity interactions.','Worked with multiplayer and live interaction concepts.'],
    role:'Unity / real-time systems',
    note:'The artwork is illustrative. Original project footage should be accessed using the shared Google Drive link.',
    links:[['View original demos on Google Drive','https://drive.google.com/drive/folders/1j7fGOsFaHWYwNSSBdVaI9EEwy1kGppBn?usp=sharing']]
  }
];
const galleryInfo={
  games:{label:'01 / GAME',title:'The Game Gallery',subtitle:'PLAYABLE GAME.',description:'Stack & Solve, published on Google Play and linked to its official store listing.',back:'STACK & SOLVE',left:'assets/stack-art.webp',right:'assets/stack-art.webp',tint:'#71d9ee',filter:'Games'},
  demos:{label:'02 / VIDEO ARCHIVE',title:'The Project Vault',subtitle:'ORIGINAL WORK. REAL DEMOS.',description:'Authentic AR/VR and avatar demonstrations from Madeeha’s shared Google Drive portfolio.',back:'PROJECT DEMOS',left:'assets/lab-36.jpg',right:'assets/vtuber-art.webp',tint:'#87d7d2',filter:'Demos'}
};
const $=(q,root=document)=>root.querySelector(q),$$=(q,root=document)=>[...root.querySelectorAll(q)];
const cards=$('#projectGrid');let activeFilter='All';
function renderCards(){const list=archiveProjects.filter(x=>activeFilter==='All'||(activeFilter==='Demos'?x.category!=='Games':x.category===activeFilter));$('#projectCount').textContent=String(list.length).padStart(2,'0');cards.innerHTML=list.map(p=>`<article class="project-card" role="button" tabindex="0" data-open-project="${p.id}" aria-label="Open case study for ${p.title}"><div class="project-card-media"><img src="${p.image}" alt="${p.title} project artwork" loading="lazy"><span class="card-id">${p.code}</span><span class="card-category">${p.category}</span></div><div class="project-card-content"><h4>${p.title}</h4><p>${p.subtitle} ${p.description.slice(0,90)}…</p><div class="project-card-bottom"><div class="tech-list">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><span class="card-arrow" aria-hidden="true">↗</span></div></div></article>`).join('');}
function setFilter(value){activeFilter=value;$$('.filter-chip').forEach(b=>{const selected=b.dataset.filter===value;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});renderCards();}
$$('.filter-chip').forEach(b=>b.addEventListener('click',()=>setFilter(b.dataset.filter)));
function setGallery(id){const g=galleryInfo[id];if(!g)return;const view=$('#museumViewport');view.style.setProperty('--gallery-tint',g.tint);$('#galleryNumber').textContent=g.label;$('#galleryTitle').textContent=g.title;$('#galleryDescription').textContent=g.description;$('#museumBackTitle').textContent=g.back;$('#museumBackSub').textContent=g.subtitle;$('#museumLeftImage').src=g.left;$('#museumRightImage').src=g.right;$('#plinthLabel').textContent=g.label.replace(' / ',' — ');const link=$('#museumExplore');link.dataset.filter=g.filter;$$('.gallery-tab').forEach(b=>{const selected=b.dataset.gallery===id;b.classList.toggle('is-selected',selected);b.setAttribute('aria-pressed',String(selected));});}
$$('.gallery-tab').forEach(b=>b.addEventListener('click',()=>setGallery(b.dataset.gallery)));
$('#museumExplore').addEventListener('click',function(){setFilter(this.dataset.filter||'All');});
const modal=$('#projectModal'),content=$('#modalContent'),closeButton=$('#modalClose');let previousFocus=null;
function openProject(id){const p=archiveProjects.find(x=>x.id===id);if(!p)return;previousFocus=document.activeElement;const extra=p.video?`<div class="modal-section"><h4>Experience it in motion</h4><div class="modal-video"><video controls preload="none" playsinline poster="assets/lab-19.jpg"><source src="${p.video}" type="video/mp4">Your browser does not support HTML5 video.</video></div><div class="modal-caption">REAL PROJECT DEMO · VIRTUAL SCIENCE LAB</div></div>`:'';content.innerHTML=`<div class="modal-hero"><img src="${p.image}" alt="${p.title} exhibit image"><span>${p.code} / ${p.category.toUpperCase()}</span></div><h2 class="modal-title">${p.title}</h2><p class="modal-lead">${p.description}</p><div class="modal-facts">${p.tags.map(t=>`<span>${t}</span>`).join('')}<span>${p.role}</span></div>${extra}<section class="modal-section"><h4>What Madeeha worked on</h4><ul>${p.contributions.map(s=>`<li>${s}</li>`).join('')}</ul></section><section class="modal-section"><h4>Exhibit notes</h4><p>${p.note}</p></section><div class="modal-buttons">${p.links.map(([label,href])=>`<a href="${href}" ${href.startsWith('http')?'target="_blank" rel="noopener noreferrer"':''}>${label} ↗</a>`).join('')}<a href="mailto:madeehahaider5@gmail.com?subject=Project%20Inquiry">Contact Madeeha ↗</a></div>`;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';closeButton.focus();}
function closeModal(){const video=$('video',modal);if(video)video.pause();modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';if(previousFocus&&previousFocus.isConnected)previousFocus.focus();}
closeButton.addEventListener('click',closeModal);$$('[data-close-modal]').forEach(x=>x.addEventListener('click',closeModal));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeModal();if(e.key==='Tab'&&modal.classList.contains('open')){const controls=$$('a,button,video[controls]',modal).filter(x=>x.offsetParent!==null);if(!controls.length)return;const first=controls[0],last=controls[controls.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});document.addEventListener('click',e=>{const trigger=e.target.closest('[data-open-project]');if(trigger)openProject(trigger.dataset.openProject);});document.addEventListener('keydown',e=>{const trigger=e.target.closest('[data-open-project]');if(trigger&&(e.key==='Enter'||e.key===' ')){e.preventDefault();openProject(trigger.dataset.openProject);}});
const navToggle=$('#navToggle'),navLinks=$('#navLinks');navToggle.addEventListener('click',()=>{const next=!navLinks.classList.contains('open');navLinks.classList.toggle('open',next);navToggle.setAttribute('aria-expanded',String(next));navToggle.setAttribute('aria-label',next?'Close navigation':'Open navigation');});$$('.nav-links a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');navToggle.setAttribute('aria-expanded','false');}));
const mql=window.matchMedia('(prefers-reduced-motion: reduce)');let motionOff=mql.matches;function applyMotion(){document.body.classList.toggle('motion-off',motionOff);$('#reduceMotion').innerHTML=`MOTION: ${motionOff?'OFF':'ON'} <span>◌</span>`;$('#reduceMotion').setAttribute('aria-pressed',String(motionOff));}$('#reduceMotion').addEventListener('click',()=>{motionOff=!motionOff;applyMotion();});applyMotion();
if('IntersectionObserver'in window){const io=new IntersectionObserver(entries=>{entries.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in-view');io.unobserve(x.target);}})},{threshold:.1,rootMargin:'0px 0px -20px 0px'});$$('.reveal').forEach(x=>io.observe(x));}else{$$('.reveal').forEach(x=>x.classList.add('in-view'));}
let raf=false;function onScroll(){if(raf)return;raf=true;requestAnimationFrame(()=>{const max=document.documentElement.scrollHeight-window.innerHeight;$('#scrollProgress').style.width=(max?window.scrollY/max*100:0)+'%';raf=false;});}window.addEventListener('scroll',onScroll,{passive:true});onScroll();
const viewport=$('#museumViewport');if(window.matchMedia('(pointer:fine)').matches){viewport.addEventListener('pointermove',e=>{if(motionOff)return;const r=viewport.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;$('.holo-sculpture',viewport).style.transform=`translate(${x*10}px,${y*9}px)`;$('.back-title',viewport).style.transform=`translate(${x*-10}px,${y*-6}px)`;});viewport.addEventListener('pointerleave',()=>{$('.holo-sculpture',viewport).style.transform='';$('.back-title',viewport).style.transform='';});document.addEventListener('pointermove',e=>{if(!motionOff){const glow=$('#cursorGlow');glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';}},{passive:true});}
$('#year').textContent=new Date().getFullYear();renderCards();