/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 chick.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/chick.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0.01, 0.82, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.76}>
        <mesh geometry={nodes.Object_5.geometry} material={materials.defaultMat_2} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.defaultMat_1} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.defaultMat_0} />
        <mesh geometry={nodes.Object_11.geometry} material={materials['defaultMat.004']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.defaultMat_3} />
      </group>
    </group>
  )
}

useGLTF.preload('/chick.gltf')
