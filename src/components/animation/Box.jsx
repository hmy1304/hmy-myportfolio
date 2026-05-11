import React, {useRef, useState} from 'react'
import { useFrame } from '@react-three/fiber'

const Box = ({scale=1, ...props}) => {
  const meshRef = useRef(null)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  
  useFrame((state, delta)=>{
    if(meshRef.current) {
        meshRef.current.rotation.x += delta
        meshRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <mesh
    {...props}
    ref={meshRef}
    scale={active ? scale * 1.5 : scale}
    onClick={()=>setActive(!active)}
    onPointerOver={()=>setHover(true)}
    onPointerOut={()=>setHover(false)}
    >
        <dodecahedronGeometry args={[2, 1]}/>
        <meshStandardMaterial 
        color={hovered ? "#00f5ff" : "#b388ff"}
        emissive={hovered ? "#00f5ff" : "#5b2cff"}
        emissiveIntensity={0.5}
        wireframe
        />
    </mesh>
  )
}

export default Box