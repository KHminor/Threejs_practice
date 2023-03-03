/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 rabbit.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/rabbit.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.63}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['Material.003']} />
      </group>
    </group>
  )
}

useGLTF.preload('/rabbit.gltf')