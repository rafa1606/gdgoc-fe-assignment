import { Route, Routes } from 'react-router'
import { EmptyState } from './components/ui/EmptyState'
import { Layout } from './components/layout/Layout'
import { Contact } from './pages/Contact'
import { Overview } from './pages/Overview'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={<EmptyState title="Home" description="This page is coming soon." />}
        />
        <Route
          path="/about"
          element={<EmptyState title="About" description="This page is coming soon." />}
        />
        <Route path="/overview" element={<Overview />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <EmptyState
              title="Page not found"
              description="The page you are looking for does not exist."
            />
          }
        />
      </Route>
    </Routes>
  )
}

export default App