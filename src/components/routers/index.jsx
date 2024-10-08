import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WhatWeDo  from '../Pages/WhatWeDo'
import Projects  from '../Pages/Projects'
import Company  from '../Pages/Company'
import Contacts  from '../Pages/Contacts'

const index = () => {
    const routes = [
        {path:'/what-we-do', element: WhatWeDo},
        {path:'/projects', element: Projects},
        {path:'/tutorials', element: Company},
        {path:'/contacts', element: Contacts},
    ]
  return (
        <Routes>
            {routes.map((elem, index) => {
                return (
                    <Route key={index} path= {elem.path} element={<elem.element />} />
                )
            })}
        </Routes>
  )
}

export default index