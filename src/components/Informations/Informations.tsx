import { informationsCss } from './Informations.css'

export const Informations = () => {
  return (
    <section className={informationsCss}>
      <div>
        <p>Ip address</p>
        <p>192.212.174.101</p>
      </div>
      <div>
        <p>Location</p>
        <p>Brooklyn, NY 10001</p>
      </div>
      <div>
        <p>Timezone</p>
        <p>UTC -05:00</p>
      </div>
      <div>
        <p>ISP</p>
        <p>SpaceX Starlink</p>
      </div>
    </section>
  )
}
