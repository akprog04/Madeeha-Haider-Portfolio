'use strict';

const projects = [
  {
    id: 'stack-solve',
    title: 'Stack & Solve: Puzzle Games',
    category: 'Games',
    poster: 'assets/stack-solve-google-play.webp',
    href: 'projects/stack-solve/',
    store: 'https://play.google.com/store/apps/details?id=com.akstudios.StackSolvePuzzleGames&hl=en',
    description: '13 puzzle game modes in one Android collection.',
    tags: ['Android', 'Puzzle']
  },
  {
    id: 'science-lab',
    title: 'Virtual Science Lab',
    category: 'AR / VR',
    poster: 'assets/media/science-lab.jpg',
    video: 'assets/media/science-lab.mp4',
    driveId: '1Wr1_1XzGM-plMbVUgqHfIKwohWrj4g_N',
    drive: 'https://drive.google.com/file/d/1Wr1_1XzGM-plMbVUgqHfIKwohWrj4g_N/view',
    description: 'Interactive laboratory demonstration.',
    tags: ['Interactive', 'Real-time']
  },
  {
    id: 'vtuber',
    title: 'VTuber / Live Avatar',
    category: 'AR / VR',
    poster: 'assets/media/vtuber.jpg',
    driveId: '18m9gtueXiLBxDXEMpQJ4kZqvINB8P9MC',
    drive: 'https://drive.google.com/file/d/18m9gtueXiLBxDXEMpQJ4kZqvINB8P9MC/view',
    description: 'Real-time avatar demonstration.',
    tags: ['Interactive', 'Real-time']
  },
  {
    id: 'chocolate-chip',
    title: 'Chocolate Chip Game',
    category: 'Products',
    poster: 'assets/media/chocolate-chip.jpg',
    driveId: '1tK8GL-wIIuHPWAVaqWAbOpz4QwQvYJoZ',
    drive: 'https://drive.google.com/file/d/1tK8GL-wIIuHPWAVaqWAbOpz4QwQvYJoZ/view',
    description: 'HTML5 marketing minigame demonstration.',
    tags: ['HTML5', 'Playable ad']
  },
  {
    id: 'cocomo-pop',
    title: 'Cocomo Pop',
    category: 'Products',
    poster: 'assets/media/cocomo-pop.jpg',
    driveId: '1Sm4YTP9OkSsZZbI7Tk5zBFMy-6gDWbWW',
    drive: 'https://drive.google.com/file/d/1Sm4YTP9OkSsZZbI7Tk5zBFMy-6gDWbWW/view',
    description: 'HTML5 marketing minigame demonstration.',
    tags: ['HTML5', 'Playable ad']
  },
  {
    id: 'lifebuoy',
    title: 'Lifebuoy Tic Tac Toe',
    category: 'Products',
    poster: 'assets/media/lifebuoy.jpg',
    driveId: '1bku_g_GVA8L9FBHFVXau7ADHnwHMfnCk',
    drive: 'https://drive.google.com/file/d/1bku_g_GVA8L9FBHFVXau7ADHnwHMfnCk/view',
    description: 'HTML5 marketing minigame demonstration.',
    tags: ['HTML5', 'Playable ad']
  },
  {
    id: 'pepsi-memory',
    title: 'PEPSI Memory Game',
    category: 'Products',
    poster: 'assets/media/pepsi-memory.jpg',
    driveId: '1WeL2hwnSGYn46KC0DkDUKLY5jZ-sKzqg',
    drive: 'https://drive.google.com/file/d/1WeL2hwnSGYn46KC0DkDUKLY5jZ-sKzqg/view',
    description: 'HTML5 marketing minigame demonstration.',
    tags: ['HTML5', 'Playable ad']
  },
  {
    id: 'rio-factory',
    title: 'RIO Chocolate Factory',
    category: 'Products',
    poster: 'assets/media/rio-factory.jpg',
    driveId: '1t9ITm-5VOaBHIj3oSguE9IKO_QcjSbVr',
    drive: 'https://drive.google.com/file/d/1t9ITm-5VOaBHIj3oSguE9IKO_QcjSbVr/view',
    description: 'HTML5 marketing minigame demonstration.',
    tags: ['HTML5', 'Playable ad']
  },
  {
    id: 'rio-lunchbox',
    title: 'RIO Lunchbox',
    category: 'Products',
    poster: 'assets/media/rio-lunchbox.jpg',
    driveId: '1BSXh52z604Z3knjl1AB3naukOg72UWWx',
    drive: 'https://drive.google.com/file/d/1BSXh52z604Z3knjl1AB3naukOg72UWWx/view',
    description: 'HTML5 marketing minigame demonstration.',
    tags: ['HTML5', 'Playable ad']
  },
  {
    id: 'sprite-bubbles',
    title: 'Sprite Bubble Popper',
    category: 'Products',
    poster: 'assets/media/sprite-bubbles.jpg',
    driveId: '1MHNQBX4r3pUcNsSg69LV0tTKDp-xKivF',
    drive: 'https://drive.google.com/file/d/1MHNQBX4r3pUcNsSg69LV0tTKDp-xKivF/view',
    description: 'HTML5 marketing minigame demonstration.',
    tags: ['HTML5', 'Playable ad']
  },
  {
    id: 'mendability',
    title: 'Mendability Prototype',
    category: 'Games',
    poster: 'assets/media/mendability.jpg',
    driveId: '1RMu8TL5AaRVJpWesWd_WHUZCBFeZC-AD',
    drive: 'https://drive.google.com/file/d/1RMu8TL5AaRVJpWesWd_WHUZCBFeZC-AD/view',
    description: 'A recorded walkthrough of the Unity prototype.',
    tags: ['Unity', 'Gameplay']
  },
  {
    id: 'bowling',
    title: 'Shuffleboard: Bowling Mode',
    category: 'Games',
    poster: 'assets/media/bowling.jpg',
    driveId: '1V4PzpaPyZheI_95r9IqBt5l-feqbiyQx',
    drive: 'https://drive.google.com/file/d/1V4PzpaPyZheI_95r9IqBt5l-feqbiyQx/view',
    description: 'Bowling mode gameplay from the Shuffleboard project.',
    tags: ['Unity', 'Gameplay']
  },
  {
    id: 'curling',
    title: 'Shuffleboard: Curling Mode',
    category: 'Games',
    poster: 'assets/media/curling.jpg',
    driveId: '1yQqUiXc2dGUxsodNJkpkuyJYGZF9OPQz',
    drive: 'https://drive.google.com/file/d/1yQqUiXc2dGUxsodNJkpkuyJYGZF9OPQz/view',
    description: 'Curling mode gameplay from the Shuffleboard project.',
    tags: ['Unity', 'Gameplay']
  },
  {
    id: 'shuffleboard',
    title: 'Shuffleboard Game',
    category: 'Games',
    poster: 'assets/media/shuffleboard.jpg',
    driveId: '1Qv4Sn1MqUItapZeI-SY1DEKNIHHNbkkA',
    drive: 'https://drive.google.com/file/d/1Qv4Sn1MqUItapZeI-SY1DEKNIHHNbkkA/view',
    description: 'Shuffleboard mode gameplay demonstration.',
    tags: ['Unity', 'Gameplay']
  },
  {
    id: 'face-tracker',
    title: 'Face Tracker App',
    category: 'Games',
    poster: 'assets/media/face-tracker.jpg',
    driveId: '1cW5AYkgCpy8HFOR1UBJPi6cRMAt2bAE-',
    drive: 'https://drive.google.com/file/d/1cW5AYkgCpy8HFOR1UBJPi6cRMAt2bAE-/view',
    description: 'Face-tracking application demonstration.',
    tags: ['Unity', 'Face tracking']
  }
];

const grid = document.querySelector('#projectGrid');
const featured = document.querySelector('#featuredCollection');
const escapeHtml = s => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
const isVideoProject = p => Boolean(p.video || p.driveId);

const cover = p => `<span class="media-backdrop" aria-hidden="true" style="background-image:url('${p.poster}')"></span><img src="${p.poster}" alt="${escapeHtml(p.title)} ${isVideoProject(p) ? 'video still' : 'official screenshot'}" loading="lazy">${isVideoProject(p) ? '<span class="video-play"><i class="play-icon" aria-hidden="true"></i> Watch demo</span>' : '<span class="video-play">Available on Google Play</span>'}`;

const featureIds = ['stack-solve', 'science-lab'];
if (featured) {
  featured.innerHTML = featureIds.map(id => {
    const p = projects.find(item => item.id === id);
    if (!p) return '';
    return `<article class="feature-tile">${isVideoProject(p) ? `<button type="button" class="feature-visual video-trigger" data-video="${p.id}" aria-label="Watch ${escapeHtml(p.title)}">${cover(p)}</button>` : `<a class="feature-visual" href="${p.href}">${cover(p)}</a>`}<div class="feature-info"><h3>${p.title}</h3><p>${p.description}</p></div></article>`;
  }).join('');
}

function render(filter = 'All') {
  const list = projects.filter(p => filter === 'All' || p.category === filter);
  const countEl = document.querySelector('#projectCount');
  if (countEl) countEl.textContent = `${list.length} / ${projects.length} projects`;
  if (grid) {
    grid.innerHTML = list.map(p => `<article class="project-card">${isVideoProject(p) ? `<button type="button" class="project-card-media video-trigger" data-video="${p.id}" aria-label="Watch ${escapeHtml(p.title)}">${cover(p)}</button>` : `<a class="project-card-media" href="${p.href}">${cover(p)}</a>`}<div class="project-card-content"><div class="project-role">${isVideoProject(p) ? 'VIDEO DEMONSTRATION' : 'RELEASED GAME / ANDROID'}</div><h4>${p.title}</h4><p>${p.description}</p><div class="tech-list">${p.tags.map(t => `<span>${t}</span>`).join('')}</div><div class="card-actions">${isVideoProject(p) ? `<button type="button" data-video="${p.id}">Watch video</button><a href="${p.drive}" target="_blank" rel="noopener noreferrer">Drive original</a>` : `<a href="${p.href}">View game</a><a href="${p.store}" target="_blank" rel="noopener noreferrer">Google Play</a>`}</div></div></article>`).join('');
  }
}

document.querySelectorAll('.filter-chip').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.filter-chip').forEach(x => {
    x.classList.toggle('active', x === btn);
    x.setAttribute('aria-pressed', String(x === btn));
  });
  render(btn.dataset.filter);
}));
render();

const dialog = document.querySelector('#videoDialog');
const video = document.querySelector('#portfolioPlayer');
const driveFrame = document.querySelector('#drivePlayer');
let previousFocus = null;

function closeVideo() {
  if (video) {
    video.pause();
    video.removeAttribute('src');
    video.removeAttribute('poster');
    video.load();
    video.hidden = true;
    video.style.display = 'none';
  }
  if (driveFrame) {
    driveFrame.removeAttribute('src');
    driveFrame.hidden = true;
    driveFrame.style.display = 'none';
  }
  if (dialog && dialog.open) dialog.close();
  document.body.style.overflow = '';
  if (previousFocus && previousFocus.isConnected) previousFocus.focus();
}

document.addEventListener('click', e => {
  const trigger = e.target.closest('[data-video]');
  if (!trigger || !dialog) return;
  const p = projects.find(item => item.id === trigger.dataset.video);
  if (!p || !isVideoProject(p)) return;
  previousFocus = trigger;

  const titleEl = document.querySelector('#videoTitle');
  const origEl = document.querySelector('#videoOriginal');
  if (titleEl) titleEl.textContent = p.title;
  if (origEl) origEl.href = p.drive;

  if (p.video && video) {
    if (driveFrame) {
      driveFrame.removeAttribute('src');
      driveFrame.hidden = true;
      driveFrame.style.display = 'none';
    }
    video.hidden = false;
    video.style.display = 'block';
    video.poster = p.poster;
    video.src = p.video;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    video.play().catch(() => {});
  } else if (p.driveId && driveFrame) {
    if (video) {
      video.pause();
      video.removeAttribute('src');
      video.removeAttribute('poster');
      video.load();
      video.hidden = true;
      video.style.display = 'none';
    }
    driveFrame.hidden = false;
    driveFrame.style.display = 'block';
    driveFrame.src = `https://drive.google.com/file/d/${p.driveId}/preview`;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  }
});

const videoClose = document.querySelector('#videoClose');
if (videoClose) videoClose.addEventListener('click', closeVideo);
if (dialog) {
  dialog.addEventListener('cancel', e => {
    e.preventDefault();
    closeVideo();
  });
  dialog.addEventListener('click', e => {
    if (e.target === dialog) closeVideo();
  });
}

const toggle = document.querySelector('#navToggle');
const nav = document.querySelector('#navLinks');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

let raf = false;
const scrollBar = document.querySelector('#scrollProgress');
if (scrollBar) {
  const onScroll = () => {
    if (raf) return;
    raf = true;
    requestAnimationFrame(() => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollBar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
      raf = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

const glow = document.querySelector('#cursorGlow');
if (glow && window.matchMedia('(pointer:fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.addEventListener('pointermove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }, { passive: true });
}

document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
const yr = document.querySelector('#year');
if (yr) yr.textContent = new Date().getFullYear();

document.querySelectorAll('a[href$="#projectGrid"]').forEach(a => a.addEventListener('click', e => {
  if (!grid) return;
  e.preventDefault();
  grid.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    block: 'start'
  });
}));
