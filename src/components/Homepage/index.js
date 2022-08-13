import { useNavigate } from 'react-router-dom'
import { pathNames } from '../../routes'
import styles from './Homepage.module.css'
import Lobbies from '../Lobby/Lobbies'

const Homepage = ({ lobby }) => {
  const navigate = useNavigate()

  const createLobbyOnClick = () => {
    fetch(`${process.env.REACT_APP_BASE_API_URL}api/lobby/add`, {
      method: 'POST'
    })
      .then((res) => res.json())
      .then(({ _id: id }) => {
        navigate(`${pathNames.lobby}/${id}`)
      })
  }

  return (
    <main className={styles.main}>
      <section>
        <button
          className={styles.createLobbyButton}
          onClick={createLobbyOnClick}
        >
          Create Lobby
        </button>
      </section>
      <section className={styles.joinLobbySection}>
        <input
          type='text'
          placeholder='Lobby ID'
          className={styles.lobbyIdInput}
        />
        <button>Join lobby</button>
      </section>
      <Lobbies lobby={lobby} />
    </main>
  )
}

export default Homepage
