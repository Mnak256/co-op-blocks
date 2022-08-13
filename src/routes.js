import React, { lazy } from 'react'
import { Routes, Route } from 'react-router'

const Homepage = lazy(() => import('./pages/Homepage'))
const Lobby = lazy(() => import('./pages/Lobby'))
const NotFound = lazy(() => import('./components/common/NotFound'))

export const pathNames = {
  root: '/',
  lobby: '/lobby'
}

const routes = (
  <Routes>
    <Route path={pathNames.root} exact element={<Homepage />} />
    <Route path={pathNames.lobby} exact element={<NotFound />} />
    <Route path={`${pathNames.lobby}/:id`} exact element={<Lobby />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
)

export default routes
