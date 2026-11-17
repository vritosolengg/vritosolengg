const footerYear = document.getElementById('footer-year');
if (footerYear) footerYear.textContent = new Date().getFullYear();


// Keep the year update optional so a missing year element cannot stop the product slider.
const yearNode = document.getElementById('year');
if (yearNode) yearNode.textContent = new Date().getFullYear();

// Product carousel: move by one visible card and support repeated clicks.
document.querySelectorAll('#products .product-controls button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const track = document.querySelector('#products .products-track');
    if (!track) return;
    const card = track.querySelector('.blank-product-card');
    if (!card) return;
    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap) || 24;
    const distance = card.getBoundingClientRect().width + gap;
    const direction = btn.classList.contains('products-next') ? 1 : -1;
    track.scrollBy({ left: direction * distance, behavior: 'smooth' });
  });
});

document.querySelectorAll('[data-product]').forEach(a=>a.addEventListener('click',()=>{const productField=document.getElementById('product');if(productField)productField.value=a.dataset.product}));
const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) enquiryForm.addEventListener('submit',function(e){
 e.preventDefault();
 const f=new FormData(this);
 const subject=encodeURIComponent('Website enquiry — '+(f.get('product')||'Transformer accessory'));
 const body=encodeURIComponent('Name: '+f.get('name')+'\nCompany: '+f.get('companyName')+'\nEmail: '+f.get('email')+'\nPhone: '+f.get('phone')+'\nProduct: '+f.get('product')+'\nRequirement: '+f.get('message'));
 window.location.href='mailto:info@vritosol.com?subject='+subject+'&body='+body;
});



(function(){
  const card = document.querySelector('.product-page-link[ href="#clear-view-page"], .product-page-link[href="#clear-view-page"]');
  const page = document.getElementById('clear-view-page');
  const back = document.getElementById('clear-view-back');
  if (!card || !page || !back) return;
  const header = document.querySelector('header');
  const topbar = document.querySelector('.topbar');
  const originalDisplay = new Map();
  function showProductPage(){
    document.querySelectorAll('body > *').forEach(el=>{
      if(el===header || el===topbar || el===page || el.tagName==='STYLE' || el.tagName==='SCRIPT') return;
      if(!originalDisplay.has(el)) originalDisplay.set(el, el.style.display);
      el.style.display='none';
    });
    page.hidden=false;
    window.scrollTo({top:0,behavior:'instant'});
    history.pushState({clearViewPage:true},'', '#clear-view-page');
  }
  function showMainPage(){
    page.hidden=true;
    originalDisplay.forEach((display,el)=>{el.style.display=display;});
    originalDisplay.clear();
    if(location.hash==='#clear-view-page') history.replaceState(null,'',location.pathname+location.search);
    window.scrollTo({top:0,behavior:'instant'});
  }
  card.addEventListener('click',function(e){e.preventDefault();showProductPage();});
  back.addEventListener('click',showMainPage);
  window.addEventListener('popstate',function(e){if(!e.state || !e.state.clearViewPage) showMainPage();});
})();
