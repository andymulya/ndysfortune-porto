import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Background3D() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let renderer
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    } catch {
      return undefined
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.z = 14

    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    }
    resize()
    window.addEventListener('resize', resize)

    const N = 700
    const pos = new Float32Array(N * 3)
    const col = new Float32Array(N * 3)
    const palette = [
      [0.23, 0.51, 0.96],
      [0.13, 0.83, 0.93],
      [0.2, 0.73, 0.51],
      [0.96, 0.77, 0.26],
    ]
    for (let i = 0; i < N; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 46
      pos[i * 3 + 1] = (Math.random() - 0.5) * 28
      pos[i * 3 + 2] = (Math.random() - 0.5) * 22 - 4
      const c = palette[i % palette.length]
      col[i * 3] = c[0]
      col[i * 3 + 1] = c[1]
      col[i * 3 + 2] = c[2]
    }
    const pg = new THREE.BufferGeometry()
    pg.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    pg.setAttribute('color', new THREE.BufferAttribute(col, 3))
    const pts = new THREE.Points(
      pg,
      new THREE.PointsMaterial({ size: 0.09, vertexColors: true, transparent: true, opacity: 0.85 }),
    )
    scene.add(pts)

    const ico = new THREE.Mesh(
      new THREE.IcosahedronGeometry(3.4, 0),
      new THREE.MeshBasicMaterial({ color: 0x3b82f6, wireframe: true, transparent: true, opacity: 0.28 }),
    )
    ico.position.set(9.5, 3.2, -4)
    scene.add(ico)

    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(2.1, 0.55, 90, 12),
      new THREE.MeshBasicMaterial({ color: 0x22d3ee, wireframe: true, transparent: true, opacity: 0.16 }),
    )
    knot.position.set(-10, -3.4, -6)
    scene.add(knot)

    const ico2 = new THREE.Mesh(
      new THREE.OctahedronGeometry(1.6, 0),
      new THREE.MeshBasicMaterial({ color: 0x10b981, wireframe: true, transparent: true, opacity: 0.3 }),
    )
    ico2.position.set(-7.5, 4, -2)
    scene.add(ico2)

    let mx = 0
    let my = 0
    const onMouse = (e) => {
      mx = e.clientX / window.innerWidth - 0.5
      my = e.clientY / window.innerHeight - 0.5
    }
    window.addEventListener('mousemove', onMouse)

    let raf = 0
    let t = 0
    const loop = () => {
      raf = requestAnimationFrame(loop)
      t += 0.0016
      pts.rotation.y = t * 0.05
      pts.rotation.x = Math.sin(t * 0.4) * 0.05
      ico.rotation.x = t * 0.35
      ico.rotation.y = t * 0.5
      knot.rotation.x = t * 0.25
      knot.rotation.y = t * 0.32
      ico2.rotation.x = -t * 0.4
      ico2.rotation.y = t * 0.55
      camera.position.x += (mx * 1.6 - camera.position.x) * 0.04
      camera.position.y += (-my * 1.1 - camera.position.y) * 0.04
      camera.lookAt(0, 0, 0)
      renderer.render(scene, camera)
    }
    loop()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
      pg.dispose()
      renderer.dispose()
    }
  }, [])

  return <canvas id="bg3d" ref={canvasRef} />
}
