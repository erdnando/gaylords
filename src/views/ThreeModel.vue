<template>
    <div id="container"></div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'ThreeModel',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      windowWidth: 0,
      windowHeight: 0,
    }
  },
  methods: {
    init: function() {
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )

      this.renderer = new THREE.WebGLRenderer();

      let container = document.getElementById('container');
      container.appendChild(this.renderer.domElement);
      

      const geometry = new THREE.BoxGeometry(1, 1,5)
      const material = new THREE.MeshBasicMaterial({ color: 0x40f000 })
      this.cube = new THREE.Mesh(geometry, material)
      this.scene.add(this.cube)

      this.camera.position.z = 5

      const animate = function() {}
    },
    animate: function() {
      requestAnimationFrame(this.animate)

      this.cube.rotation.x += 0.01
      this.cube.rotation.y += 0.01

      this.renderer.render(this.scene, this.camera)
    },
    onWindowResize(){
        this.renderer.setSize(window.innerWidth, window.innerHeight-80);
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix()
    },
  },
  mounted() {
      this.init();
      this.animate();
       this.$nextTick(function() {
         window.addEventListener('resize', () => {this.onWindowResize()})

         this.onWindowResize();
       })
  },
  created() {
     
  },
}
</script>

<style scoped>
    
</style>