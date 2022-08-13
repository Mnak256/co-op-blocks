import HomepageComponent from '../../components/Homepage'
import useData from '../../hooks/useFetch'

const Homepage = () => {
  const lobby = useData('api/lobby', null, [])
  console.log({ lobby })

  return <HomepageComponent lobby={lobby} />
}

export default Homepage
