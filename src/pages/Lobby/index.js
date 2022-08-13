import { useParams } from 'react-router-dom'
import LobbyComponent from '../../components/Lobby'
import useData from '../../hooks/useFetch'

const Lobby = () => {
  const params = useParams()
  const lobby = useData(`api/lobby/${params.id}`, null, {})
  console.log({ lobby })

  return <LobbyComponent />
}

export default Lobby
