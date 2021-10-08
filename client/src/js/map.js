/* eslint-disable no-undef */
/* eslint-disable no-new */

const infowindow = document.getElementsByClassName('info-window')

const maps = [
  {
    el: 'fachpartner-map',
    center: [47.4752108, 7.7419468],
    markers: [
      [{ lat: 47.4746108, lng: 7.7419468 }, infowindow[0]],
      [{ lat: 47.4750108, lng: 7.7430468 }, infowindow[1]],
      [{ lat: 47.4753108, lng: 7.7425468 }, infowindow[2]],
    ],
  },
  {
    el: 'agenten-map',
    center: [47.4752108, 7.7419468],
    markers: [
      [{ lat: 47.4746108, lng: 7.7419468 }, infowindow[0]],
      [{ lat: 47.4750108, lng: 7.7430468 }, infowindow[1]],
      [{ lat: 47.4753108, lng: 7.7425468 }, infowindow[2]],
    ],
  },
  {
    el: 'uber-map',
    center: [47.4752108, 7.7419468],
    markers: [
      [{ lat: 47.4746108, lng: 7.7419468 }, infowindow[0]],
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
    markers.forEach(([position, info]) => {
      const marker = new google.maps.Marker({
        position,
        map,
        optimized: false,
      });
      const infoWindow = new google.maps.InfoWindow({
        content: info,
      });
      marker.addListener('click', () => {
        info.classList.remove('is-active');
        info.classList.add('is-active');
        infoWindow.close();
        infoWindow.open(marker.getMap(), marker);
      });
    });
  }
}

maps.forEach(initMap)

window.initMap = initMap
