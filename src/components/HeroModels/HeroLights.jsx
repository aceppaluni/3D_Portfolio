import * as THREE from 'three'

const HeroLights = () => (
    <>
        {/**Lamp */}
        <spotLight
            position={[2, 5, 6]}
            angle={0.15}
            penumbra={0.2}
            intensity={90}
            color="white" 
        />
        {/**Blue looking overhead lamp */}
        <spotLight
            position={[4,5,4]}
            angle={0.3}
            penumbra={0.5}
            intensity={40}
            color="#4cc9f0"
        />
        {/**Purple side light */}
        <spotLight
            position={[-3, 5, 5]}
            angle={0.4}
            penumbra={1}
            intensity={60}
            color="#9d4edd" 
        />
        {/**area light */}
        <primitive
            object={new THREE.RectAreaLight("#a259ff", 8, 3, 2)}
            position={[1, 3, 4]}
            rotation={[-Math.PI / 4, Math.PI / 4, 0]}
            intensity={15} 
        />
        {/**atmosphere lighting */}
        <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7"/>
        <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4"/>
    </>
)

export default HeroLights