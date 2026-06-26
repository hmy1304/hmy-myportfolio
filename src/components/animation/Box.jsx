import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// ── 파티클: 오브젝트 주변을 랜덤하게 떠다니는 점들 ──
const Particles = ({ count = 80, radius = 3.2 }) => {
  const mesh = useRef(null)

  const { positions, speeds } = useMemo(() => {
    const pos    = new Float32Array(count * 3)
    const speeds = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      // 구면 좌표로 랜덤 분포
      const theta = Math.random() * Math.PI * 2
      const phi   = Math.acos(2 * Math.random() - 1)
      const r     = radius * (0.7 + Math.random() * 0.6)
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
      speeds[i] = 0.2 + Math.random() * 0.5
    }
    return { positions: pos, speeds }
  }, [count, radius])

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.12
      mesh.current.rotation.x += delta * 0.06
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#00f5ff"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  )
}

// ── 회로망 링: 납작한 토러스 와이어프레임 ──
const Ring = ({ radius, tube, rotX, rotZ, speed, color }) => {
  const ref = useRef(null)
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * speed
    }
  })
  return (
    <mesh ref={ref} rotation={[rotX, 0, rotZ]}>
      <torusGeometry args={[radius, tube, 3, 64]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.55} />
    </mesh>
  )
}

// ── 중심 다면체: 이코사헤드론 이중 레이어 ──
const CoreMesh = () => {
  const outerRef = useRef(null)
  const innerRef = useRef(null)

  useFrame((_, delta) => {
    if (outerRef.current) {
      outerRef.current.rotation.x += delta * 0.18
      outerRef.current.rotation.y += delta * 0.28
    }
    if (innerRef.current) {
      innerRef.current.rotation.x -= delta * 0.22
      innerRef.current.rotation.y -= delta * 0.14
    }
  })

  return (
    <group>
      {/* 외곽 와이어프레임 */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshBasicMaterial
          color="#00f5ff"
          wireframe
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* 내부 솔리드 (글로우 느낌) */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.88, 0]} />
        <meshStandardMaterial
          color="#0a1628"
          emissive="#00aaff"
          emissiveIntensity={0.9}
          transparent
          opacity={0.55}
          wireframe={false}
        />
      </mesh>

      {/* 최내부 빛 구 */}
      <mesh>
        <sphereGeometry args={[0.38, 16, 16]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#00f5ff"
          emissiveIntensity={2.5}
          transparent
          opacity={0.9}
        />
      </mesh>
    </group>
  )
}

// ── 메인 씬 ──────────────────────────────
const Box = () => {
  return (
    <group>
      {/* 조명 */}
      <ambientLight intensity={0.15} />
      <pointLight position={[0, 0, 0]} intensity={3} color="#00f5ff" distance={6} />
      <pointLight position={[4, 3, 2]} intensity={1.2} color="#7b2fff" distance={10} />
      <pointLight position={[-4, -2, -2]} intensity={0.8} color="#00ffaa" distance={10} />

      {/* 중심 오브젝트 */}
      <CoreMesh />

      {/* 회전 링 3개 (각도·속도·색상 다양화) */}
      <Ring radius={1.9} tube={0.012} rotX={Math.PI / 2}   rotZ={0}             speed={0.22}  color="#00f5ff" />
      <Ring radius={2.1} tube={0.010} rotX={Math.PI / 4}   rotZ={Math.PI / 6}   speed={-0.16} color="#7b2fff" />
      <Ring radius={2.35} tube={0.008} rotX={Math.PI / 7}  rotZ={-Math.PI / 4}  speed={0.12}  color="#00ffaa" />

      {/* 파티클 구름 */}
      <Particles count={90} radius={2.8} />
    </group>
  )
}

export default Box
