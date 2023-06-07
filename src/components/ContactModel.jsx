import React from "react";
// import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import { useGLTF } from "@react-three/drei";
import Iphone from "./Iphone"
import { Suspense } from "react";

function ContactModel() {
  return (
    <Canvas>
      {/* <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[0, 0, 0]} /> */}
      <OrbitControls
        enableZoom={false}

        // maxAzimuthAngle={Math.PI / 4}
        // maxPolarAngle={Math.PI}
        // minAzimuthAngle={-Math.PI / 4}
        // minPolarAngle={0}
      />
      <ambientLight intensity={1} />
      <spotLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[10, 15, 10]}
        castShadow
      />
      <Suspense fallback={null}>
        <Iphone path={"/scene.gltf"}/>
      </Suspense>
    </Canvas>
  );
}

export default ContactModel;
