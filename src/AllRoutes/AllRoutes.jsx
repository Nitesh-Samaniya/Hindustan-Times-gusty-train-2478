import React from 'react'
import { Route, Routes } from "react-router-dom";
import BusinessTagPage from './BusinessTagPage';
import LandingPage from './LandingPage';
import ShowNews from './ShowNews';
import ShowNewsLeft from './ShowNewsLeft';
import ShowNewsRight from "./ShowNewsRight";
import Entertainment from "./EntertainmentTagPage";
import SportsTagPage from "./SportsTagPage";
import HealthTagPage from './HealthTagPage';
import ScienceTagPage from './ScienceTagPage';
import TechTagPage from './TechTagPage';
import PoliticsTagPage from './PoliticsTagPage';
import BitcoinTagPage from './BitcoinTagPage';


export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/home/middle/:id' element={<ShowNews />} />
            <Route path='/home/left/:id' element={<ShowNewsLeft />} />
            <Route path='/home/right/:id' element={<ShowNewsRight />} />
            <Route path='/business' element={<BusinessTagPage />} />
            <Route path='/entertainment' element={<Entertainment />} />
            <Route path='/sports' element={<SportsTagPage />} />
            <Route path='/health' element={<HealthTagPage />} />
            <Route path='/science' element={<ScienceTagPage />} />
            <Route path='/tech' element={<TechTagPage />} />
            <Route path='/politics' element={<PoliticsTagPage />} />
            <Route path='/bitcoin' element={<BitcoinTagPage />} />




        </Routes>
    </div>
  )
}
