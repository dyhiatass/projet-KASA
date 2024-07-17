import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
// J'ai copié les fichiers App.jsx et App.scss de tous les autres projets que l'on à fait et importé dans le dossier Pages
// et renommé en fonction de ce que c'etait afin de pouvoir les utiliser dans ce projet ci
import Counter from './Pages/Counter/Counter'
import Pokemon from './Pages/Pokemon/Pokemon'
import Formulaire from './Pages/Formulaire/Formulaire'
import Logement from './Pages/Logement/Logement'
import Error404 from './Pages/Error404/Error404'

// J'importe aussi mon Header et mon Footer depuis les components (Component pour les morceau de code qu'on réutilise)
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'

function App() {
  return (
    // Je déclare mon BrowserRouter pour avoir un contexte de Router dans ma fonction App
    <BrowserRouter>
      {/* J'importe mon Header afin qu'il s'affiche sur toutes les pages */}
      <Header />
      {/* J'ouvre ma balise Routes afin de pouvoir définir à l'interieur toutes les routes que je souhaite créer */}
      <Routes>
        {/* J'ouvre une balise auto fermante <Route /> dans laquel je défini le chemin (l'URL) que je souhaite assigner ainsi que la page que je veux associer */}
        {/* Par exemple, ici je veux que l'url "/" (donc la page d'accueil, la racine de mon domaine) appel la page Home */}
        <Route path='/' element={<Home />} />
        {/* Ici, mon url /counter appelera ma page Counter */}
        <Route path='/counter' element={<Counter />} />
        <Route path='/pokemon' element={<Pokemon />} />
        <Route path='/formulaire' element={<Formulaire />} />
        <Route path='/logement/:logementId' element={<Logement />} />
        {/* http://localhost:3000/logement/asd51687dsa */}

        {/* Si la route n'a pas été définie, alors il prendra la route * qui correspond a toutes les autres routes */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App