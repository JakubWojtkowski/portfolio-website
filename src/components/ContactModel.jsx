import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Coffee from "./Coffee";
import { Suspense } from "react";

function ContactModel() {
  return (
    <Canvas style={{ cursor: "pointer" }} camera={{ position: [3, 4, 8] }}>
      <OrbitControls
        enableZoom={false}
        enablePan={true}
        // maxAzimuthAngle={Math.PI / 4}
        // maxPolarAngle={Math.PI}
        // minAzimuthAngle={-Math.PI / 4}
        // minPolarAngle={0}
      />
      <ambientLight intensity={0.75} />
      <spotLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[10, 15, 10]}
        castShadow
      />
      <Suspense fallback={null}>
        <Coffee path={"/coffee.gltf"} />
      </Suspense>
    </Canvas>
  );
}

export default ContactModel;
