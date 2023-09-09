import React, { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import { ARRAY_ROUTE } from './routes'
import './style/index.scss'

const App = () => {
  const returnArrayRoute = ARRAY_ROUTE.map((indexRoute) => {
    const RenderPage = indexRoute.isNotShowHeaderComponent ? Fragment : DefaultComponent
    return (
      <Route key={indexRoute.path} path={indexRoute.path} element={
        <RenderPage>
          {indexRoute.element}
        </RenderPage>}
      />
    )
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          {returnArrayRoute}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App