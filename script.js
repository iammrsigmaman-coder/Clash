const hd=document.querySelector('header'),menu=document.getElementById('menu'),links=document.getElementById('links');
addEventListener('scroll',()=>hd.classList.toggle('stuck',scrollY>10),{passive:true});
menu.onclick=()=>{const o=links.classList.toggle('open');menu.setAttribute('aria-expanded',o)};
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const secs=['home','works','about','contact'].map(id=>document.getElementById(id));
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.querySelectorAll('a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}}),{rootMargin:'-45% 0px -50% 0px'});
secs.forEach(s=>s&&so.observe(s));

/* lightbox: click a thumbnail to view it bigger */
const lb=document.getElementById('lightbox'),lbImg=document.getElementById('lbImg'),lbClose=document.getElementById('lbClose');
function openLB(src,alt){lbImg.src=src;lbImg.alt=alt;lb.classList.add('open');lb.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeLB(){lb.classList.remove('open');lb.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelectorAll('.work').forEach(w=>{
 w.addEventListener('click',()=>{const img=w.querySelector('img');if(img)openLB(img.src,img.alt)});
 w.setAttribute('tabindex','0');
 w.addEventListener('keydown',e=>{if(e.key==='Enter'){const img=w.querySelector('img');if(img)openLB(img.src,img.alt)}});
});
lbClose.onclick=closeLB;
lb.addEventListener('click',e=>{if(e.target===lb)closeLB()});
addEventListener('keydown',e=>{if(e.key==='Escape')closeLB()});
