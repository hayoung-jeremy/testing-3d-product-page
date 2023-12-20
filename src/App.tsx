import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Watch } from "@/components/three";

function App() {
  return (
    <main className="w-full h-screen">
      <Canvas gl={{ antialias: true }}>
        <color attach="background" args={["#f5f6f7"]} />
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.5} position={[10, 15, 10]} />
        <Environment preset="city" />
        <Watch />
      </Canvas>
    </main>
  );
}

export default App;
