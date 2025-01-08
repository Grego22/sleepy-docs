<script>
    import * as THREE from "three";
    import { onMount } from "svelte";
  
    let scene, camera, renderer, starField;
  
    onMount(() => {
      // Scene setup
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;
  
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
  
      // Resize handling
      const handleResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      };
      window.addEventListener("resize", handleResize);
  
      // Create stars
      const starGeometry = new THREE.BufferGeometry();
      const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.02 });
  
      const starVertices = [];
      for (let i = 0; i < 10000; i++) {
        starVertices.push(
          (Math.random() - 0.5) * 1000,
          (Math.random() - 0.5) * 1000,
          (Math.random() - 0.5) * 1000
        );
      }
  
      starGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(starVertices, 3)
      );
  
      starField = new THREE.Points(starGeometry, starMaterial);
      scene.add(starField);
  
      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
  
        starField.rotation.x += 0.0005;
        starField.rotation.y += 0.0005;
  
        renderer.render(scene, camera);
      };
  
      animate();
  
      return () => {
        window.removeEventListener("resize", handleResize);
        renderer.dispose();
        document.body.removeChild(renderer.domElement);
      };
    });
  </script>
  
  <style>
    :global(canvas) {
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
    }
  </style>
  