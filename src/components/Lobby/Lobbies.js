import styles from '../Homepage/Homepage.module.css'

const Lobbies = ({ lobby = [] }) => {
  return (
    <section className={styles.onlineLobbiesSection}>
      <h4>Online lobbies</h4>
      <div className={styles.lobbiesContainer}>
        {lobby.map(({ users, _id }, index) => (
          <div className={styles.lobby} key={_id}>
            <label>No. of users: {users}</label>
            <button className={styles.joinOnlineLobbyButton}>Join</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Lobbies
