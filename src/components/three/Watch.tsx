import { useGLTF } from "@react-three/drei";

const Watch = () => {
  const glb = useGLTF("/steampunk_watch.glb");
  return (
    <mesh>
      <primitive object={glb.scene} />
    </mesh>
  );
};

export default Watch;
