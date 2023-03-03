import {Suspense, useRef, useState} from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';

function Pang() {
  return (
    <div className="App">
      <div className='h-screen w-screen'>
          <Canvas style={{height: '100vh', width: '100vw'}}>
            <mesh scale={1} position={[0,0,0]}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.8} />
                <spotLight intensity={0.1} angle={0.1} penumbra={1} position={[10,5,3]} castShadow/>
                  <Model/>
                <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>
              </Suspense>
            </mesh>
          </Canvas>
    </div>
    </div>
  );
}

export default Pang;


function Model(props) {
  const ref = useRef()
  const { nodes, materials } = useGLTF('/penguin.gltf')
  return (
    <group ref={ref} {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[-Math.PI / 0.1006, 0, 0]} scale={0.5}>
        <mesh geometry={nodes.Roundcube.geometry} material={materials['Material.004']} position={[0, 1.44, -0.05]} scale={1.19} />
        <mesh geometry={nodes.Roundcube001.geometry} material={materials['Material.004']} position={[0, -0.18, -0.05]} scale={1.19} />
        <mesh geometry={nodes.Cube.geometry} material={materials['Material.004']} position={[0, 2.31, 1.64]} scale={1.19} />
        <mesh geometry={nodes.Roundcube002.geometry} material={materials['Material.004']} position={[0, -0.18, -0.05]} scale={1.19} />
        <mesh geometry={nodes.Roundcube003.geometry} material={materials['Material.004']} position={[0, 1.44, -0.05]} scale={1.19} />
        <mesh geometry={nodes.Roundcube004.geometry} material={materials['Material.004']} position={[0, 1.44, -0.05]} scale={1.19} />
        <mesh geometry={nodes.Roundcube005.geometry} material={materials['Material.004']} position={[0, -0.18, -0.05]} scale={1.19} />
        <mesh geometry={nodes.Cube001.geometry} material={materials['Material.004']} position={[0, 2.31, 1.64]} scale={1.19} />
        <mesh geometry={nodes.Roundcube006.geometry} material={materials['Material.004']} position={[0, -0.18, -0.05]} scale={1.19} />
        <mesh geometry={nodes.Roundcube007.geometry} material={materials['Material.004']} position={[0, 1.44, -0.05]} scale={1.19} />
      </group>
    </group>
  )
}

