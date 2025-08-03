import { Float, OrbitControls, useGLTF} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useEffect } from 'react'
import * as THREE from 'three'

const TechIconCardExperience = ({model}) => {
    const scene = useGLTF(model.modelPath);

    useEffect(() => {
         if(model.name === 'Interactive Developer') { 
            scene.scene.traverse((child) => {
                if(child.isMesh) {
                    if(child.name === 'Object_5') {
                        child.material = new THREE.MeshStandardMaterial({color: 'white'})
                    }
                }
            })
         }
    }, [scene])

    useEffect(() => {
        console.log('use 2')
         if(model.name === 'Solidity Developer') {
            console.log("Hi")
            scene.scene.traverse((child) => {
                if(child.isMesh) {

                    console.log("hello", child.name);
                    if(child.name === 'Curve_Solidity-Body_0') {
                        child.material = new THREE.MeshStandardMaterial({color: 'white'})
                    }
                }
            })
         }
    }, [scene, model.name])

    return (
        <Canvas>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5,5,5]} intensity={3}/>
            <spotLight position={[10,15,10]} angle={0.3} penumbra={1} intensity={2}/>
            
            <Float >
                <group scale={ model.name === 'Solidity Developer' ? [2, 2, 2] : model.scale} rotation={model.rotation}>
                    <primitive object={scene.scene} />
                </group>
            </Float>
            <OrbitControls enableZoom={false} />
        </Canvas>
    )
}

export default TechIconCardExperience;