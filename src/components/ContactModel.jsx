import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Iphone from "./Iphone";
import { Suspense } from "react";

function ContactModel() {
  return (
    <Canvas style={{ cursor: "pointer" }} camera={{ position: [1, .3, 6] }}>
      <OrbitControls
        enableZoom={false}
        enablePan={true}
        maxAzimuthAngle={Math.PI / 4}
        maxPolarAngle={Math.PI}
        minAzimuthAngle={-Math.PI / 4}
        minPolarAngle={0}
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
        <Iphone path={"/iphone.gltf"} />
      </Suspense>
    </Canvas>
  );
}

export default ContactModel;
