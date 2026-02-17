"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useTheme } from "next-themes";
import { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";

function Particles({ count = 100, color = "#000000" }) {
    const mesh = useRef<THREE.InstancedMesh>(null);
    const lightPosition = useRef(new THREE.Vector3());
    const mouse = useRef(new THREE.Vector2());

    const dummy = useMemo(() => new THREE.Object3D(), []);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
        }
        return temp;
    }, [count]);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        }
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useFrame((state, delta) => {
        if (!mesh.current) return;

        // Smooth mouse movement
        lightPosition.current.x = THREE.MathUtils.lerp(lightPosition.current.x, mouse.current.x * 10, 0.1);
        lightPosition.current.y = THREE.MathUtils.lerp(lightPosition.current.y, mouse.current.y * 10, 0.1);

        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
            t = particle.t += speed / 2;
            const a = Math.cos(t) + Math.sin(t * 1) / 10;
            const b = Math.sin(t) + Math.cos(t * 2) / 10;
            const s = Math.cos(t);

            dummy.position.set(
                (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            );
            dummy.scale.set(s, s, s);
            dummy.rotation.set(s * 5, s * 5, s * 5);
            dummy.updateMatrix();
            mesh.current!.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <dodecahedronGeometry args={[0.2, 0]} />
            <meshStandardMaterial color={color} roughness={0.5} metalness={0.5} />
        </instancedMesh>
    );
}

function FloatingShape({ position, color }: { position: [number, number, number], color: string }) {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh position={position}>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color={color}
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </mesh>
        </Float>
    )
}

export default function GeometricBackground() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const primaryColor = isDark ? "#3b82f6" : "#2563eb";
    const particleColor = isDark ? "#ffffff" : "#000000";

    return (
        <div className="absolute inset-0 -z-10 h-full w-full">
            <Canvas camera={{ position: [0, 0, 20], fov: 45 }}>
                <ambientLight intensity={isDark ? 0.2 : 0.8} />
                <pointLight position={[10, 10, 10]} />
                <Particles count={isDark ? 80 : 50} color={particleColor} />
                <Environment preset={isDark ? "city" : "studio"} />
                <FloatingShape position={[-5, 2, -5]} color={primaryColor} />
                <FloatingShape position={[5, -2, -5]} color={primaryColor} />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]" />
        </div>
    );
}
