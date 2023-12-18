import React, {useEffect,useState,useRef} from 'react'
import {useGLTF,Sphere,Text} from "@react-three/drei"
import { useThree, useFrame } from '@react-three/fiber';
import {LayerMaterial,Gradient} from "lamina"
import * as THREE from "three"

const PerfumScene = ()=>{
    const img = useGLTF("./perfumechallengeflowers.glb");
    const [coords,setCoords] = useState([1,-1,3])
    const [scale,setScale] = useState(1)

    console.log(img)


    useEffect(()=>{
if(innerWidth < 850){
  setCoords((coords)=>coords = [1,-.8,3])
  setScale(.6)
  console.log('reset coords')
}
    },[])

    onresize=(e)=>{
      if(innerWidth < 850){
        setCoords((coords)=>coords = [1,-.8,3])
        setScale(.6)
      }
    }


    return (
        <group scale={scale} position={coords} rotation={[0,Math.PI * 1.45,0]}>
            <primitive object={img.scene}/>
        </group>
    )

}

// const AdText = ()=>{


//   return (
//     <group>
//       <Text scale={.4}>
//         Gabrielle Essence 
//       </Text>
//       <Text scale={.4} position={[-.25,-.5,0]}>
//       Eau De Parfum
//       </Text>
//       <Text scale={.15} position={[.5,-1,0]}>
//       A floral, solar and voluptuous interpretation composed 
//       </Text>
//       <Text scale={.15} position={[-.75,-1.25,0]}>
//       by Olivier Polge, 
//       </Text>
//       <Text scale={.15} position={[.2,-1.5,0]}>
    
//   Perfumer-Creator for the House of CHANEL.
//       </Text>
//     </group>
//   )
// }



const Experience = () => {
  const {camera} = useThree();
  const perfumeRef = useRef();



  useFrame((state,delta)=>{
        // camera.position.z += .01;
        if(camera.position.x < 1.2){
          camera.position.x += .01;
          return;
        }
        if(camera.position.x > 1.15 && camera.position.z > 4.5){
          camera.position.z -= .01;
          camera.position.y -= .005;
        }
  })
  return (
    <>
    <Sphere scale={20}>
      <LayerMaterial side={THREE.BackSide}>
          <Gradient colorA="lightblue" colorB="white" axes="y" start={0} end={.5}/>
      </LayerMaterial>
    </Sphere>
  
    <group ref={perfumeRef}>
    <PerfumScene/>
    </group>
    </>
  )
}

export default Experience