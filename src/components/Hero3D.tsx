import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, useTexture } from "@react-three/drei";
import * as THREE from "three";

const BRAND_RED = new THREE.Color().setHSL(0 / 360, 0.84, 0.55);

type Mouse = { x: number; y: number };

/** A floating photo cutout — no card, transparent background preserved. */
function ScreenPanel({ url, height }: { url: string; height: number }) {
  const tex = useTexture(url);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  const img = tex.image as { width: number; height: number } | undefined;
  const aspect = img ? img.width / img.height : 0.78;

  return (
    <mesh>
      <planeGeometry args={[height * aspect, height]} />
      <meshBasicMaterial map={tex} transparent toneMapped={false} alphaTest={0.02} />
    </mesh>
  );
}

/**
 * Rotating carousel of screen panels. With one photo it is a single
 * rotating screen; add more URLs and they arrange in a circle, slowly
 * revolving so each photo takes the front in turn.
 */
function ProfileCarousel({ images, mouse }: { images: string[]; mouse: React.MutableRefObject<Mouse> }) {
  const group = useRef<THREE.Group>(null);
  const H = 4.4;
  const radius = images.length > 1 ? Math.max(1.6, images.length * 0.55) : 0;

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    // gentle oscillation + mouse-follow tilt; kept subtle so the flat
    // cutout never turns edge-on
    const targetY =
      (images.length > 1 ? t * 0.25 : Math.sin(t * 0.35) * 0.14) + mouse.current.x * 0.22;
    const targetX = mouse.current.y * 0.08;
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.06;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.06;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.5}>
      <group ref={group}>
        {images.map((url, i) => {
          const angle = (i / images.length) * Math.PI * 2;
          return (
            <group
              key={url + i}
              position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]}
              rotation={[0, angle, 0]}
            >
              <ScreenPanel url={url} height={H} />
            </group>
          );
        })}
      </group>
    </Float>
  );
}

/** Glowing orbit rings under the screen, like a stage. */
function OrbitRings() {
  const ring = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ring.current) ring.current.rotation.y = state.clock.elapsedTime * 0.3;
  });
  return (
    <group ref={ring} position={[0, -2.45, 0]} rotation={[0.06, 0, 0]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.1, 0.012, 12, 160]} />
        <meshBasicMaterial color={BRAND_RED} transparent opacity={0.55} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.55, 0.008, 12, 160]} />
        <meshBasicMaterial color={BRAND_RED} transparent opacity={0.25} />
      </mesh>
      {/* bright "comet" dot travelling the ring */}
      <mesh position={[2.1, 0, 0]}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshBasicMaterial color="#ff6b5e" />
      </mesh>
    </group>
  );
}

function Particles({ count = 220 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (points.current) points.current.rotation.y = state.clock.elapsedTime * 0.015;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={BRAND_RED} size={0.03} sizeAttenuation transparent opacity={0.5} depthWrite={false} />
    </points>
  );
}

/**
 * 3D rotating profile screen for the hero. `images` is a list of photo
 * URLs — one photo gives a single tilting screen; several arrange into a
 * revolving carousel. Pass the hero's normalized mouse position for tilt.
 */
export function Hero3D({ images, mouse }: { images: string[]; mouse: Mouse }) {
  const mouseRef = useRef<Mouse>(mouse);
  mouseRef.current = mouse;

  return (
    <div className="absolute inset-0" aria-hidden>
      <Canvas
        camera={{ position: [0, 0.15, 5.6], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.55} />
          {/* warm key light + red fill, matching the studio-portrait look */}
          <directionalLight position={[4, 5, 6]} intensity={1.6} color="#ffe0c2" />
          <directionalLight position={[-5, 2, 3]} intensity={0.5} color="#ffffff" />
          <pointLight position={[-3, -2, 3]} intensity={0.9} color={BRAND_RED} />
          <ProfileCarousel images={images} mouse={mouseRef} />
          <OrbitRings />
          <Particles />
          <Sparkles count={70} scale={[9, 6, 4]} size={2.2} speed={0.35} color="#ff5a4e" opacity={0.55} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Hero3D;
