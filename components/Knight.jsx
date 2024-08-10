/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 knight.glb 
Author: Andy Woodhead (https://sketchfab.com/Andywoodhead)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/knight-includes-file-for-3d-printing-58fc98f3223f4036b5570ae296e1be5d
Title: Knight - includes file for 3d printing
*/

import React from "react";
import * as THREE from "three";
import { Environment, PerspectiveCamera, useGLTF } from "@react-three/drei";

export function Knight(props) {
  const { nodes, materials } = useGLTF("/knight.glb");
  return (
    <>
      {/* <Environment>
            <mesh>
              <sphereGeometry args={[50, 100, 100]} />
              <meshBasicMaterial color="#2288cc" side={THREE.BackSide} />
            </mesh>
          </Environment> */}
      <group {...props} dispose={null}>
        <PerspectiveCamera makeDefault position={[0, 1, 8]} />
        <pointLight args={["white", 25]} position={[-2, 1, 0]} castShadow />
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              rotation={[Math.PI / -2, 0, 0]}
              position={[0, -1, 0]}
              receiveShadow
            >
              <planeGeometry args={[10, 10]} />
              <meshStandardMaterial color="red" />
            </mesh>
            <mesh
              castShadow
              scale={[0.01, 0.01, 0.01]}
              geometry={nodes.defaultMaterial.geometry}
              material={materials.Lower}
            />
            <mesh
              castShadow
              scale={[0.01, 0.01, 0.01]}
              geometry={nodes.defaultMaterial_1.geometry}
              material={materials.Upper}
            />
          </group>
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/knight.glb");
