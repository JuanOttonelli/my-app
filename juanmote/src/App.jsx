import React, { Fragment, useRef } from 'react'
import './style.css';
import Nav from './components/Nav.jsx';
import Intera from './components/Intera.jsx';
import Desa from './components/Desa.jsx';
import WaveMesh from './BgShader.js';
import { Canvas } from '@react-three/fiber';



function App() {

  return (
    <Fragment>

      <div className='myFondo' >
        <Canvas>

          <WaveMesh />
        </Canvas>
      </div>

      <div className='myCanvas '  >
        <Canvas shadows
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 35], fov: 50, near: 1 }}>
          <Intera></Intera>
        </Canvas>
      </div>

      <Nav></Nav>

      <div className='myFakeCanvas' id="sectionTop"></div>
    
      <div id="sectionDesa">
        <Desa ></Desa>
      </div>

      <div className='myFakeCanvas'></div>
      <div id="sectionProc">
      </div>

    </Fragment>
  );
}

export default App;