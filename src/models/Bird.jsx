import {useRef , useEffect} from 'react'
import birdScene from '../assets/3d/bird.glb';
import {useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';

const Bird = () => {
     const birdRef = useRef();
     const {scene , animations } = useGLTF(birdScene);
     const {actions} = useAnimations(animations , birdRef);

     useEffect(() => {
          if (!actions || !actions["Take 001"]) return;
          actions["Take 001"].play();
     }, [actions]);

     useFrame(({clock , camera}) => {
          if (!birdRef.current) return;
          
          birdRef.current.position.y = 5 + Math.sin(clock.getElapsedTime()) * 0.5;

          if(birdRef.current.position.x > camera.position.x + 10) {
               birdRef.current.rotation.y = Math.PI;
          } else if (birdRef.current.position.x < camera.position.x - 10) {
               birdRef.current.rotation.y = 0;
          }
//movinf forward in the direction it's facing
          if(birdRef.current.rotation.y === 0){
               birdRef.current.position.x += 0.01;
               birdRef.current.position.z -= 0.001;
          } else {
            //moving backwards in the direction it's facing
               birdRef.current.position.x -= 0.01;
               birdRef.current.position.z -= 0.01;
          }
     });

  return (
    <group ref={birdRef} position={[-5, 2, 1]} scale={[0.008, 0.008, 0.008]}>
      <primitive object={scene} />
    </group>
  )
}

export default Bird