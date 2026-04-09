import React from 'react'
import {Canvas} from '@react-three/fiber'
import { useState ,  Suspense , useEffect , useRef } from 'react'
import Loader from '../components/Loader'
import Island from '../models/island'
import Sky from '../models/sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'
import { soundoff, soundon } from "../assets/icons";
import sakura from "../assets/sakura.mp3";
const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);
    const adjustIslandForScreenSize = () => {
        let screenScale =null ;
        let  screenPosition = [0, -16, -43] ; 
        let rotation = [0.1 , 4.7 , 0];
        if (window.innerWidth < 768) {
            screenScale= [1.2 ,1.2 , 1.2];
           
        }else {
            screenScale= [1.3, 1.3, 1.3];
       
        }
        return [screenScale , screenPosition , rotation];
    }


    const adjustPlaneForScreenSize = () => {
        let screenScale  , screenPosition ; 
       
        if (window.innerWidth < 768) {
            screenScale= [5, 5, 5];
            screenPosition = [0, -1.5, 0] ;
        }else {
            screenScale= [8, 8, 8];
            screenPosition = [0, -4, -4] 
        }
        return [screenScale , screenPosition ];
    }
    const [islandScale, islandPosition , islandRotation] = adjustIslandForScreenSize();
    const [planeScale, planePosition ] = adjustPlaneForScreenSize();
  return (
   <section className ="w-full h-screen relative">
    <div className ="absolute top-28 left-0 right-0  z-10 flex items-center justify-center">
{currentStage && <HomeInfo currentStage={currentStage} />}

        </div>
   <Canvas
    className={"w-full h-screen bg-transparent" + (isRotating ? " cursor-grabbing" : " cursor-grab")}
    camera={{ position: [0, 10, 20], near: 0.1, far: 1000, fov: 75 }}
    >
        <Suspense fallback= {<Loader />}>
        <directionalLight intensity={2} position={[10, 10, 1]} />
        <ambientLight intensity={0.5} />
        
        <hemisphereLight skycolor="#b1e1ff" groundcolor="#000000" intensity={0.5} />

        <Bird />
        <Sky isRotating={isRotating} />
        <Island
        position={islandPosition}
        scale={islandScale}
        rotation={islandRotation}
        isRotating={isRotating}
        setIsRotating={setIsRotating}
        setCurrentStage={setCurrentStage}
        />

        <Plane 
        isRotating={isRotating}
        planeScale={planeScale}
        planePosition={planePosition}
       rotation ={[0,20,0]} />
        </Suspense>
   </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>




   </section>
  )
}
export default Home