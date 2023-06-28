import { createContext, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import useTransition from '~/src/hooks/useTransition'

import EventGallery from '~/src/components/views/EventGallery'
import GlobalPortal from '~/src/components/views/GlobalPortal'
import EventList from '~/src/components/views/EventList'
import EventView from '~/src/components/views/EventView'

const HistoryContext = createContext({ previousLocation: '' })

const Redirect = ({ url }: { url: string }) => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(url, { replace: true })
  }, [])

  return <></>
}

const App = () => {
  const [transitionStage, previousLocation, displayLocation, onAnimationEnd] =
    useTransition()

  const { i18n } = useTranslation()

  document.body.dir = i18n.dir()

  return (
    <HistoryContext.Provider value={{ previousLocation }}>
      <Routes location={displayLocation}>
        <Route path="event">
          <Route path="gallery" element={<EventGallery />} />
        </Route>
        <Route path="event">
          <Route path="gallery" element={<EventGallery />} />
          <Route path="list" element={<EventList />} />
          <Route path=":token" element={<EventView />} />
          <Route path="" element={<Redirect url="/event/list" />} />
        </Route>
        <Route path="/" element={<GlobalPortal />} />
        {/* <Route path="/*" element={<NotFound404 />} /> */}
      </Routes>
    </HistoryContext.Provider>
  )
}

export default App
