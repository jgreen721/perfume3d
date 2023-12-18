import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import { Box, OrbitControls, useTexture } from '@react-three/drei';
import Experience from './Experience';
import Overlay from "./Overlay.jsx"
import "./Solution2.css"
const Table = ()=>{
  const texture = useTexture("./darkwooddesk.png");


  return (
    <Box position={[0,-2,2]} args={[10,2,6]}>
    <meshLambertMaterial map={texture}/>
  </Box>
  )
}

const Solution2 = ({setSolution1}) => {
  return (
    <div className="solution2-container">
                  <Canvas style={{height:'100vh'}}>
                    <color attach="background" args={["black"]}/>
                    <directionalLight/>
                    <ambientLight intensity={.6}/>
                    <pointLight rotation={[0,0,0]} position={[-2,1,0]}/>
                    <OrbitControls/>
                    <Suspense fallback={()=><h1>Loading</h1>}>
                    <Experience/>
                    </Suspense>
                 <Table/>
                  </Canvas>
                  <Overlay/>

    </div>
  )
}

export default Solution2