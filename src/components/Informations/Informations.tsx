import {
  infoDiv,
  infoLabel,
  informationsCss,
  infoValue,
} from './Informations.css'
import { useEffect, useState } from 'react'
import { apikey } from '../../data/apikey'
/*

export const Informations = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apikey}`)
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setData(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (error) {
    return <div>Erreur: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Chargement...</div>
  } else {
    console.log(data)
    return (
      <section className={informationsCss}>
        <div>
          <p>Ip address</p>
          <p>{data.ip}</p>
        </div>
        <div>
          <p>Location</p>
          <p>
            {data.location.city} {data.location.postalCode},{' '}
            {data.location.country}
          </p>
        </div>
        <div>
          <p>Timezone</p>
          <p>{data.location.timezone}</p>
        </div>
        <div>
          <p>ISP</p>
          <p>{data.isp}</p>
        </div>
      </section>
    )
  }
}
*/

export const Informations = () => {
  return (
    <section className={informationsCss}>
      <div className={infoDiv}>
        <p className={infoLabel}>Ip address</p>
        <p className={infoValue}>192.212.174.034</p>
      </div>
      <div className={infoDiv}>
        <p className={infoLabel}>Location</p>
        <p className={infoValue}>Brooklyn, NY 10001</p>
      </div>
      <div className={infoDiv}>
        <p className={infoLabel}>Timezone</p>
        <p className={infoValue}>UTC -5:00</p>
      </div>
      <div className={infoDiv}>
        <p className={infoLabel}>ISP</p>
        <p className={infoValue}>SpaceX Starlink</p>
      </div>
    </section>
  )
}
