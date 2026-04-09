import {useRef , useEffect} from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import planeScene from '../assets/3d/plane.glb'

const Plane = ({isRotating, planeScale = [5,5,5], planePosition = [0, -4, -4], rotation = [0, 20, 0], ...props }) => {
    const ref = useRef();
  const { scene , animations } = useGLTF(planeScene);
  const {actions} = useAnimations(animations, ref);

  useEffect(() => {
    if (!actions || !actions["Take 001"]) return;
    
    if (isRotating ){
        actions["Take 001"].play();
    }
    else {
        actions["Take 001"].stop();
    }
  }, [ actions , isRotating ])

  return (
    <group position={planePosition} scale={planeScale} rotation={rotation} ref={ref}>
      <primitive object={scene} />
    </group>
  )
}

export default Plane