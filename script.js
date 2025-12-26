// Small interactive bits: nav toggle, copy email, dynamic year
document.addEventListener('DOMContentLoaded', ()=>{
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  const copyEmail = document.getElementById('copyEmail');
  const yearEl = document.getElementById('year');

  navToggle && navToggle.addEventListener('click', ()=>{
    mainNav.classList.toggle('show');
  });

  copyEmail && copyEmail.addEventListener('click', async ()=>{
    const email = 'hello@yourdomain.com';
    try{
      await navigator.clipboard.writeText(email);
      copyEmail.textContent = 'Copied!';
      setTimeout(()=> copyEmail.textContent = email, 1500);
    }catch(e){
      location.href = 'mailto:'+email;
    }
  });

  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const target = document.querySelector(a.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
    });
  });
});
