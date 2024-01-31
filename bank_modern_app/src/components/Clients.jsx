import { clients } from "../constants"
import styles from "../style"


const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      <h2 className={`${styles.heading2} text-center`}>Trusted by companies like</h2>
      {clients.map((client) => (
        <div key={client.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}>
          <img src={client.logo} alt="client" className="sm:w-[129px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
)

export default Clients