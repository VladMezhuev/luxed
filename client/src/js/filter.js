/* eslint-disable no-unused-expressions */

import Isotope from '../../node_modules/isotope-layout/js/isotope';

const elem = document.getElementById('projekte-grid')
const iso = new Isotope(elem, {
  itemSelector: '#filter-item',
  layoutMode: 'fitRows',
});

const fiterItem = document.querySelectorAll('.filter-bar__filter-link')

fiterItem.forEach(el => {
  el.addEventListener('click', e => {
    const { filter } = e.currentTarget.dataset;
    iso.arrange({ filter: `${filter}` })

    fiterItem.forEach(item => {
      item !== e.target ? item.classList.remove('is-active') : item.classList.add('is-active')
    })
  })
})
