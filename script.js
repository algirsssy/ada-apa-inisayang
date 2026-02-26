// ====== EDIT MUDAH DI SINI ======
const NAMA = "Intan Herlyana Pratiwi";
// pesan utama (akhir baris kosong untuk jeda)
const PESAN = `Hai ${NAMA},
Hari ini spesial bukan cuma karena tanggalnya, tapi karena kamu ada. Terima kasih untuk semua tawa kecil, cerita random, dan perhatian yang kamu kasih. Aku mungkin nggak selalu sempurna, tapi perasaanku ke kamu selalu serius.
Aku bersyukur bisa kenal kamu. Dari obrolan engga penting yang tiba‑tiba jadi penting, sampai momen diam yang entah kenapa tetap terasa nyaman. Kamu ngajarin aku banyak hal tanpa kamu sadari tentang sabar, tentang ngerti orang lain, dan tentang menghargai hal kecil.
Kadang kamu nggak sadar seberapa berarti kamu buat aku. Cara kamu cerita, cara kamu ketawa, bahkan cara kamu kesel pun selalu punya tempat sendiri di pikiranku. Aku mungkin nggak selalu bilang, tapi kamu sering jadi alasan kenapa hariku terasa lebih ringan.
Maaf kalau aku masih banyak kurangnya, masih sering egois, atau kadang nggak peka. Tapi satu hal yang pasti, niatku ke kamu selalu baik. Aku engga janji bisa jadi yang paling sempurna, tapi aku janji akan selalu berusaha jadi yang paling TULUS.
Semoga di umur kamu yang sekarang, harimu lebih banyak tenangnya daripada capeknya. Semoga semua hal yang kamu perjuangin pelan‑pelan nemuin jalannya. Kalau dunia lagi berat, kamu nggak harus kuat sendirian — aku ada, setidaknya buat dengerin.
Aku nggak tahu masa depan bakal gimana, tapi aku harap di banyak cerita kamu nanti, aku masih ada di dalamnya. Entah sebagai tempat pulang, tempat cerita, atau sekadar orang yang nemenin kamu sampai kamu tertidur.
Terima kasih sudah lahir dan bertahan sampai sejauh ini. Kamu hebat, lebih dari yang kamu kira.

`; // dua baris kosong supaya ada spasi tambahan

// teks yang ingin dipisah, tidak perlu newline di depan lagi
const PESAN_TERPISAH = `Selamat ulang tahun Sayangku.
Tetap jadi kamu yang aku kenal ya versi kamu yang paling nyaman, paling jujur, dan paling kamu sendiri.
Dan kalau suatu hari kamu lupa betapa berharganya kamu… aku akan jadi orang yang pertama ngingetin.  I ALWAYS LOVE YOU SAYANGGGGG

— Dari aku Sayangmuu.' SCROLL KE BAWAH.......
`;

const MUSIC_URL = "Galeri/lagu.MP3"; // ganti dengan URL musik yang kamu inginkan

const hearts = document.getElementById('hearts');
for(let i=0;i<28;i++){
  const h=document.createElement('div');
  h.className='heart';
  h.style.left=Math.random()*100+'vw';
  h.style.animationDuration=6+Math.random()*8+'s';
  h.style.opacity=.4+Math.random()*.6;
  hearts.appendChild(h);
}

const openBtn=document.getElementById('openBtn');
const cover=document.getElementById('cover');
const letterSection=document.getElementById('letterSection');
const gallery=document.getElementById('gallery');
const giftSection=document.getElementById('giftSection');
const finalPage=document.getElementById('finalPage');
const bgm=document.getElementById('bgm');
const rocketSfx=document.getElementById('rocketSfx');

openBtn.addEventListener('click',()=>{
  document.getElementById('pwBox').style.display='block';
});

const PASSWORD = "27022006";
const pwSubmit=document.getElementById('pwSubmit');
const pwInput=document.getElementById('pwInput');
const pwError=document.getElementById('pwError');

pwSubmit.addEventListener('click',checkPassword);
pwInput.addEventListener('keypress',e=>{if(e.key==='Enter')checkPassword();});

function checkPassword(){
  if(pwInput.value===PASSWORD){
    pwError.style.display='none';
    cover.style.display='none';
    letterSection.style.display='block';
    // mulai musik
    bgm.play().catch(()=>{});
    // ketik pesan pertama, lalu tombol lanjutkan
    typeWriter(PESAN,document.getElementById('typed'),18,showContinueButton);
  } else {
    pwError.style.display='block';
    pwInput.value='';
  }
}

// buat tombol “lanjutkan” yang akan memicu bagian kedua
function showContinueButton(){
  const btn=document.createElement('button');
  btn.textContent='Lanjutkan';
  btn.id='continueBtn';
  // gaya manual supaya tombol cantik dan berada di kanan
  btn.style.display = 'block';            // supaya margin auto bekerja
  btn.style.margin = '1em 0 0 auto';      // letakkan ke kanan
  btn.style.padding = '0.5em 1.2em';
  btn.style.background = '#b1b1b1';        // warna cerah
  btn.style.color = '#fff';
  btn.style.border = 'none';
  btn.style.borderRadius = '25px';
  btn.style.cursor = 'pointer';
  btn.style.fontSize = '1rem';
  btn.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
  // efek hover
  btn.addEventListener('mouseover', () => btn.style.opacity = '0.8');
  btn.addEventListener('mouseout',  () => btn.style.opacity = '1');

  btn.addEventListener('click',()=>{
    btn.remove();
    typeWriter(PESAN_TERPISAH,document.getElementById('typed'),18,()=>{
      setTimeout(()=>{
        gallery.style.display='block';
        window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'});
        showGalleryButton();
      },600);
    });
  });
  letterSection.appendChild(btn);
}

function showGalleryButton(){
  const btn=document.createElement('button');
  btn.textContent='Lanjutkan ';
  btn.id='galleryBtn';
  btn.style.display = 'block';
  btn.style.margin = '2em auto 0';
  btn.style.padding = '0.5em 1.2em';
  btn.style.background = '#b1b1b1';
  btn.style.color = '#fff';
  btn.style.border = 'none';
  btn.style.borderRadius = '25px';
  btn.style.cursor = 'pointer';
  btn.style.fontSize = '1rem';
  btn.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
  btn.addEventListener('mouseover', () => btn.style.opacity = '0.8');
  btn.addEventListener('mouseout',  () => btn.style.opacity = '1');

  btn.addEventListener('click',()=>{
    btn.remove();
    gallery.style.display='none';
    giftSection.style.display='block';
    giftSection.style.visibility='visible';
    window.scrollTo({top:0,behavior:'smooth'});
  });
  gallery.appendChild(btn)
}

function typeWriter(text,el,speed,done){
  let i=0; el.textContent='';
  const timer=setInterval(()=>{
    el.textContent+=text.charAt(i);
    i++;
    if(i>=text.length){clearInterval(timer);done&&done();}
  },speed);
}

const gift=document.getElementById('gift');

gift.addEventListener('click',()=>{
  gift.classList.add('opening');
  // play rocket sound if available
  try{
    if(rocketSfx){ rocketSfx.currentTime = 0; rocketSfx.volume = 0.9; rocketSfx.play().catch(()=>{}); }
  }catch(e){}
  // confetti and animation
  confettiBurst();
  
  setTimeout(()=>{
    giftSection.style.display='none';
    finalPage.style.display='block';
    finalPage.style.visibility='visible';
    finalPage.style.animation='pageWipe .8s ease forwards';
    window.scrollTo({top:0,behavior:'smooth'});
  }, 1400);
});



const canvas=document.getElementById('confetti');
const ctx=canvas.getContext('2d');
let W,H,confetti=[];
function resize(){W=canvas.width=innerWidth;H=canvas.height=innerHeight}
addEventListener('resize',resize);resize();

function confettiBurst(){
  confetti=[];
  for(let i=0;i<220;i++){
    confetti.push({x:W/2,y:H/3,vx:(Math.random()-0.5)*8,vy:Math.random()*-10-4,g:0.18,sz:4+Math.random()*6,rot:Math.random()*Math.PI});
  }
  requestAnimationFrame(tick);
}

function tick(){
  ctx.clearRect(0,0,W,H);
  confetti.forEach(p=>{
    p.vy+=p.g; p.x+=p.vx; p.y+=p.vy; p.rot+=0.1;
    ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot);
    ctx.fillStyle=`hsl(${Math.random()*360},90%,65%)`;
    ctx.fillRect(-p.sz/2,-p.sz/2,p.sz,p.sz);
    ctx.restore();
  });
  confetti=confetti.filter(p=>p.y<H+20);
  if(confetti.length) requestAnimationFrame(tick);
}

// jadikan foto saat diklik akan berubah ke foto selanjutnya dan terus berulang
(function enableGalleryCycle(){
  const imgs = Array.from(gallery.querySelectorAll('img'));
  if(!imgs.length) return;
  // kumpulkan daftar sumber dari gambar yang ada
  const srcList = imgs.map(img => img.getAttribute('src') || img.src);
  imgs.forEach((img, i) => {
    img.style.cursor = 'pointer';
    // set index awal sesuai posisi sumber saat ini (fallback ke i)
    const initialIndex = Math.max(0, srcList.indexOf(img.getAttribute('src'))) || i;
    img.dataset.currentIndex = initialIndex;
    img.addEventListener('click', () => {
      let next = (parseInt(img.dataset.currentIndex, 10) + 1) % srcList.length;
      img.dataset.currentIndex = next;
      img.setAttribute('src', srcList[next]);
    });
  });
}());

// slideshow otomatis yang mempertahankan ukuran/layout gambar asli
function startSlideshow(gallerySection, INTERVAL = 3000){
  const grid = gallerySection.querySelector('.grid');
  const imgs = Array.from(grid.querySelectorAll('img'));
  if(!imgs.length) return;
  const srcList = imgs.map(img => img.getAttribute('src') || img.src);
  const first = imgs[0];

  // styling grid container untuk slideshow terpusat
  grid.style.display = 'flex';
  grid.style.flexDirection = 'column';
  grid.style.justifyContent = 'center';
  grid.style.alignItems = 'center';
  grid.style.width = '100%';
  grid.style.padding = '2rem 0';
  grid.style.gap = '0';

  // buat elemen slide dengan ukuran terpusat
  const slide = document.createElement('img');
  slide.id = 'slideshowImg';
  slide.src = srcList[0];
  slide.alt = first.alt || 'slideshow';
  slide.style.display = 'block';
  slide.style.width = '100%';
  slide.style.maxWidth = '500px';
  slide.style.height = 'auto';
  slide.style.objectFit = 'cover';
  slide.style.borderRadius = '12px';
  slide.style.boxShadow = '0 8px 24px rgba(0,0,0,0.25)';
  slide.style.transition = 'opacity 0.35s ease';
  slide.style.opacity = '1';
  slide.style.margin = '0 auto';

  // kosongkan grid dan pasang slide tunggal
  grid.innerHTML = '';
  grid.appendChild(slide);

  let idx = 0, timer = null;
  function fadeTo(src){
    slide.style.opacity = '0';
    setTimeout(()=>{
      slide.src = src;
      slide.style.opacity = '1';
    }, 200);
  }
  function next(){
    idx = (idx + 1) % srcList.length;
    fadeTo(srcList[idx]);
  }
  function start(){ if(timer) clearInterval(timer); timer = setInterval(next, INTERVAL); }
  function stop(){ if(timer) { clearInterval(timer); timer = null; } }

  start();
  // pause saat hover/touch, lanjutkan saat keluar
  slide.addEventListener('mouseenter', stop);
  slide.addEventListener('mouseleave', start);
  slide.addEventListener('touchstart', stop);
  slide.addEventListener('touchend', start);
}

// di tempat dimana tipe kedua selesai, panggil startSlideshow(gallery)
// contoh: di callback setelah PESAN_TERPISAH selesai — ganti baris yang
// menampilkan gallery dengan memanggil startSlideshow:
//
// sebelumnya:
// setTimeout(()=>{gallery.style.display='block';window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'});},600);
//
// ganti dengan:
setTimeout(()=>{
  gallery.style.display='block';
  startSlideshow(gallery, 3000);
  window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'});
},600);
// ...existing code...
