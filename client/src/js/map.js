/* eslint-disable no-undef */
/* eslint-disable no-new */

const maps = [
  {
    el: 'fachpartner-map',
    center: [47.4752108, 7.7419468],
    markers: [
      [47.4746108, 7.7419468],
      [47.4750108, 7.7430468],
      [47.4753108, 7.7425468],
    ],
  },
  {
    el: 'agenten-map',
    center: [47.4752108, 7.7419468],
    markers: [
      [47.4746108, 7.7419468],
      [47.4750108, 7.7430468],
      [47.4753108, 7.7425468],
    ],
  },
  {
    el: 'uber-map',
    center: [47.4752108, 7.7419468],
    markers: [
      [47.4746108, 7.7419468],
    ],
  },
]

function initMap({ el, center, markers }) {
  const elem = document.getElementById(el);

  if (elem) {
    const map = new google.maps.Map(elem, {
      center: new google.maps.LatLng(...center),
      zoom: 18,
    });
    markers.forEach(([lat, lng]) => {
      new google.maps.Marker({
        position: { lat, lng },
        map,
        icon: '../../../static/icons/location-map.png',
      });
    });
  }
}

maps.forEach(initMap)

window.initMap = initMap
