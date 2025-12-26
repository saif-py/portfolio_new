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
    const email = 'mohdsaifsiddiqui10@gmail.com';
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

  // Animate skill bars when visible
  const skillFills = document.querySelectorAll('.skill-fill');
  if(skillFills.length){
    const obs = new IntersectionObserver((entries, o)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          const el = entry.target; const val = el.getAttribute('data-fill') || 0;
          el.style.width = val + '%';
          o.unobserve(el);
        }
      });
    },{threshold:0.25});
    skillFills.forEach(s=>obs.observe(s));
  }

  // Portrait image fallback: if image fails to load, show initials fallback
  const profileImg = document.getElementById('profileImg');
  if(profileImg){
    const wrap = profileImg.closest('.profile-wrap');
    profileImg.addEventListener('error', ()=>{ if(wrap) wrap.classList.add('failed'); });
    profileImg.addEventListener('load', ()=>{ if(wrap) wrap.classList.remove('failed'); });
    // If file missing (browser may not trigger error immediately), check naturalWidth
    setTimeout(()=>{ if(profileImg.naturalWidth === 0 && profileImg.complete){ if(profileImg.closest('.profile-wrap')) profileImg.closest('.profile-wrap').classList.add('failed'); } }, 300);
  }
});
