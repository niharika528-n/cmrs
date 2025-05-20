import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import MaterialRecommendation from './pages/MaterialRecommendation'
import Comparison from './pages/Comparison'
import Reports from './pages/Reports'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="recommendations" element={<MaterialRecommendation />} />
        <Route path="comparison" element={<Comparison />} />
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  )
}
