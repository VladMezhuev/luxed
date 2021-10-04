/* eslint-disable no-undef */

let googleMap

function initMap() {
  const mapContainer = document.getElementById('uber-map')
  const coordinates = { lat: 47.4752108, lng: 7.7419468 }
  const coordsForMarker = { lat: 47.4746108, lng: 7.7419468 }
  const correctZoom = 18
  const windowInfo = document.getElementById('uber-info')
  googleMap = new google.maps.Map(mapContainer, { center: coordinates, zoom: correctZoom })

  const marker = new google.maps.Marker({
    position: coordsForMarker,
    map: googleMap,
    icon: '../../../static/icons/location-map.png',
  });
  const infowindow = new google.maps.InfoWindow({
    content: windowInfo,
  });

  marker.addListener('click', () => {
    windowInfo.classList.add('is-active')
    infowindow.open({
      anchor: marker,
      map: googleMap,
      shouldFocus: true,
    })
  })
}

window.initMap = initMap
