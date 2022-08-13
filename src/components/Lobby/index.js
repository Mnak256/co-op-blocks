import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import io from 'socket.io-client'
import styles from '../Homepage/Homepage.module.css'

const socket = io(process.env.REACT_APP_BASE_API_URL, {
  transports: ['websocket', 'polling']
})
console.log('socket io init')

const Lobby = ({ lobby }) => {
  useEffect(() => {
    console.log('socket effect run')
    socket.on('connect', () => {
      console.log('socket connect')
    })

    socket.on('disconnect', () => {
      console.log('socket disconnect')
    })

    return () => {
      socket.off('connect')
      socket.off('disconnect')
      console.log('socket disposed, Lobby unmounted')
    }
  }, [])

  const params = useParams()

  return (
    <main className={styles.main}>
      <h1>My Lobby ID: {params.id}</h1>
    </main>
  )
}

export default Lobby
