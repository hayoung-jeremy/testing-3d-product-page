import { useFrame } from "@react-three/fiber";
import { Environment, useScroll } from "@react-three/drei";
import { val } from "@theatre/core";
import { PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";
import { Watch } from ".";

const AnimationScene = () => {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  useFrame(() => {
    if (!sheet) return;

    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  return (
    <>
      <color attach="background" args={["#f5f6f7"]} />
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.5} position={[10, 15, 10]} />
      <Environment preset="city" />
      <PerspectiveCamera theatreKey="Camera" makeDefault position={[0, 0, 0]} fov={90} near={0.01} far={100} />
      <Watch />
    </>
  );
};

export default AnimationScene;
