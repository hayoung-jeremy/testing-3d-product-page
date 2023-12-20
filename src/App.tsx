import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { getProject } from "@theatre/core";
import { SheetProvider } from "@theatre/r3f";

import { AnimationScene } from "@/components/three";

function App() {
  const sheet = getProject("Product Animation").sheet("Scene");

  return (
    <main className="w-full h-screen">
      <Canvas gl={{ antialias: true, preserveDrawingBuffer: true }}>
        <ScrollControls pages={5}>
          <SheetProvider sheet={sheet}>
            <AnimationScene />
          </SheetProvider>
        </ScrollControls>
      </Canvas>
    </main>
  );
}

export default App;
