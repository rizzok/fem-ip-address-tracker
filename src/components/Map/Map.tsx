import 'leaflet/dist/leaflet.css'
import Leaflet from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { mapContainer } from './Map.css'
import { useEffect, useState } from 'react'
import iconLocation from '../../assets/images/icon-location.svg'

interface Coordinates {
  lat: number
  lng: number
}

const newIcon = new Leaflet.Icon({
  iconUrl: iconLocation,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [50, 60],
})

const LocationMarker = () => {
  const [position, setPosition] = useState<Coordinates | null>(null)

  const map = useMap()
  console.log(map)

  useEffect(() => {
    map.locate().on('locationfound', function (e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    })
  }, [map])

  if (position === null) return null

  return (
    <Marker position={position} icon={newIcon}>
      <Popup>
        You are here. <br />
      </Popup>
    </Marker>
  )
}

export const Map = () => {
  return (
    <MapContainer
      center={[50.5, 30.5]}
      zoom={13}
      className={mapContainer}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  )
}
