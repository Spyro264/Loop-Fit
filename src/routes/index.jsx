import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Hero from '../pages/Hero'
import RoutePlanner from '../pages/RoutePlanner'

const Index = () => {
  return (
    <BrowserRouter>
       <Layout>
          <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/route-planner' element={<RoutePlanner />} />
        </Routes>
       </Layout>
      
    </BrowserRouter>
  )
}

export default Index