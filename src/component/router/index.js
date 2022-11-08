import AboutUs from "../about.js";
import Career from "../career.js";
import BeldexResearch from "../belderesearch.js";
import Contributor from "../contributor.js";
import Index from "../index.js";
import Masternode from "../maternode.js";
import MediaKit from "../mediaKit.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Routerpages(){
  
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="aboutUs" element={<AboutUs />}></Route>
            <Route path="masternode" element={<Masternode />}></Route>
            <Route path="mediakit" element={<MediaKit />}></Route>
            <Route path="contributor" element={<Contributor />}></Route>
            <Route path="career" element={<Career />}></Route>
            <Route path="beldexresearch" element={<BeldexResearch />}>
            </Route>
          </Routes>
        </BrowserRouter>
    );
}