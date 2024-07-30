import React, { useEffect, useRef } from "react";
import * as THREE from 'three';

const LatestProduct = () => {
  const containerRef = useRef(null);
  let scale = 0.28

  useEffect(() => {
    const container = containerRef.current;
    let width = container.clientWidth - 60;
    let height = container.clientHeight - 40;

    // init
    const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
    camera.position.z = 1;

    const scene = new THREE.Scene();

    if(width < 400) 
      scale = 0.28
    else 
      scale = 0.4


    const geometry = new THREE.BoxGeometry(scale, scale, scale);
    const material = new THREE.MeshNormalMaterial();

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // handle window resize
    const handleResize = () => {
      width = container.clientWidth - 60;
      height = container.clientHeight - 40;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // animation
    function animate(time) {
      mesh.rotation.x = time / 2000;
      mesh.rotation.y = time / 1000;

      renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);

    return () => {
      renderer.setAnimationLoop(null);
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="p-4 h-full flex justify-center items-center" ref={containerRef}></div>
  );
};

export default LatestProduct;
