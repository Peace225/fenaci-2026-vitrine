import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Archives from './pages/Archives'
import Concours from './pages/Concours'
import B2B from './pages/B2B'
import Contact from './pages/Contact'
import VillageAncestral from './pages/VillageAncestral'
import VillageModerne from './pages/VillageModerne'
import FAQ from './pages/FAQ'
import MentionsLegales from './pages/MentionsLegales'
import Confidentialite from './pages/Confidentialite'
import CGU from './pages/CGU'

/**
 * NotFound — Page 404
 */
function NotFound() {
  return (
    <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 24px' }}>
      <div>
        <div style={{ fontSize: '6rem', fontWeight: 900, color: '#E8420A', lineHeight: 1, marginBottom: '16px' }}>404</div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '12px' }}>Page introuvable</h1>
        <p style={{ color: '#6b7280', marginBottom: '28px' }}>Cette page n'existe pas ou a été déplacée.</p>
        <a href="/" style={{ backgroundColor: '#E8420A', color: 'white', padding: '12px 28px', borderRadius: '999px', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
          Retour à l'accueil
        </a>
      </div>
    </main>
  )
}

/**
 * Layout — Enveloppe commune (Navbar + contenu + Footer)
 */
function Layout({ children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    </div>
  )
}

/**
 * App — Configuration du routage React — FENACI 2026
 * Festival National de l'Attiéké de Côte d'Ivoire
 */
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/"                   element={<Home />} />
          <Route path="/village-ancestral"  element={<VillageAncestral />} />
          <Route path="/village-moderne"    element={<VillageModerne />} />
          <Route path="/concours"           element={<Concours />} />
          <Route path="/b2b"                element={<B2B />} />
          <Route path="/archives"           element={<Archives />} />
          <Route path="/contact"            element={<Contact />} />
          <Route path="/faq"                element={<FAQ />} />
          <Route path="/mentions-legales"   element={<MentionsLegales />} />
          <Route path="/confidentialite"    element={<Confidentialite />} />
          <Route path="/cgu"                element={<CGU />} />
          <Route path="*"                   element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
