/* ══════════════════════════════════════
   script.js — MyHub Search & Filter
   No need to edit this file
══════════════════════════════════════ */

let activeCat = 'all';

/* Called by category pill clicks */
function filterCat(cat, el) {
  activeCat = cat;
  document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  applyFilters();
}

/* Called on search input */
function filterAll() {
  applyFilters();
}

function applyFilters() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  const sections = document.querySelectorAll('.section');
  let anyVisible = false;

  sections.forEach(sec => {
    const catMatch = activeCat === 'all' || sec.dataset.cat === activeCat;

    if (!catMatch) {
      sec.classList.remove('visible');
      return;
    }

    if (!q) {
      sec.classList.add('visible');
      anyVisible = true;
      return;
    }

    let sectionHasMatch = false;
    sec.querySelectorAll('.site-card').forEach(card => {
      const match = card.innerText.toLowerCase().includes(q);
      card.style.display = match ? '' : 'none';
      if (match) sectionHasMatch = true;
    });

    if (sectionHasMatch) {
      sec.classList.add('visible');
      anyVisible = true;
    } else {
      sec.classList.remove('visible');
    }
  });

  noRes = document.getElementById('noResults');
  if (!anyVisible && q) {
    noRes.style.display = 'block';
    document.getElementById('noTerm').textContent = q;
  } else {
    noRes.style.display = 'none';
  }
}

/* Reset card visibility when search is cleared */
document.getElementById('searchInput').addEventListener('input', function () {
  if (!this.value) {
    document.querySelectorAll('.site-card').forEach(c => c.style.display = '');
  }
});
<h1>Roxan</h1>

<!-- paste the badge here ↓ -->
<a href="https://instagram.com/_rox.an_ronin_" ...></a>