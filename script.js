const cursor = document.querySelector('.cursor-berry');
if (cursor && matchMedia('(pointer:fine)').matches) {
  let x = 0, y = 0, tx = 0, ty = 0;
  window.addEventListener('mousemove', e => { tx=e.clientX; ty=e.clientY; });
  const move = () => { x += (tx-x)*.28; y += (ty-y)*.28; cursor.style.left=x+'px'; cursor.style.top=y+'px'; requestAnimationFrame(move); };
  move();
  document.querySelectorAll('a,button,summary').forEach(el=>{
    el.addEventListener('mouseenter',()=>cursor.classList.add('is-hover'));
    el.addEventListener('mouseleave',()=>cursor.classList.remove('is-hover'));
  });
}
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});
},{threshold:.12});
document.querySelectorAll('.section-head,.service-card,.project,.step,.about-top,.reviews-grid img').forEach(el=>{
  el.classList.add('reveal'); observer.observe(el);
});
