import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import routes from './routes'
import Loading from './components/common/Loading'

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading fullscreen />}>{routes}</Suspense>
    </BrowserRouter>
  )
}

export default App
