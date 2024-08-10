import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Slippers } from "../components/Slippers";
import { Gun } from "../components/M249";
import { Knight } from "../components/Knight";
import * as THREE from "three";

const App = () => {
  return (
    <>
      <div className="bg-gray-300 h-screen w-full">
        <Canvas shadows>
        
          {/* <Environment preset="forest" /> */}
          <OrbitControls />

          {/* <Slippers /> */}
          {/* <Gun /> */}
          <Knight />
        </Canvas>
      </div>
    </>
  );
};

export default App;
