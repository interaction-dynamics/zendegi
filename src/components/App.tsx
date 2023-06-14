import { createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import useTransition from '~/src/hooks/useTransition'

import WeddingGallery from './views/WeddingGallery'

const HistoryContext = createContext({ previousLocation: '' })

const App = () => {
  const [transitionStage, previousLocation, displayLocation, onAnimationEnd] =
    useTransition()

  const { i18n } = useTranslation()

  document.body.dir = i18n.dir()

  return (
    <HistoryContext.Provider value={{ previousLocation }}>
      <Routes location={displayLocation}>
        <Route path="/gallery" element={<WeddingGallery />} />
        {/* <Route path="/*" element={<NotFound404 />} /> */}
      </Routes>
    </HistoryContext.Provider>
  )
}

export default App
