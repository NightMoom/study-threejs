export const boxGeometry =
  '```javascript\nimport {\n  BoxGeometry,\n  Scene,\n  WebGLRenderer,\n  PerspectiveCamera,\n  AxesHelper,\n  Mesh,\n  LineBasicMaterial,\n  MeshPhongMaterial,\n  LineSegments,\n  Group,\n  BufferGeometry,\n  Float32BufferAttribute,\n  DoubleSide,\n  WireframeGeometry,\n} from "three";\n// 控制器\nimport { OrbitControls } from "three/examples/jsm/controls/OrbitControls";\n// import { guis } from "@/utils/gui-utils";\nimport GUI from "lil-gui";\nexport default {\n  name: "MinixBoxGeometry",\n  data() {\n    return {\n      boxGeometry: null,\n      camera: null,\n      renderer: null,\n      scene: null,\n      group: null,\n      gui: null,\n    };\n  },\n  methods: {\n    /**\n     * @description 初始化three\n     * @param {Element} el\n     * @param {Element} gui\n     */\n    async initThree(el, gui) {\n      this.gui = new GUI({ container: gui });\n\n      const renderer = new WebGLRenderer({ antialias: true });\n      renderer.setClearColor(0xeeeeee);\n      renderer.setSize(el.clientWidth, el.clientHeight);\n      this.renderer = renderer;\n      el.appendChild(renderer.domElement);\n\n      await this.initScene();\n      await this.initCamera(el);\n      await this.createGeometry();\n      await this.creaeteAxisHelper();\n      const orbit = new OrbitControls(this.camera, renderer.domElement);\n      orbit.enableZoom = false;\n      this.animateRender();\n    },\n    animateRender() {\n      requestAnimationFrame(this.animateRender);\n      this.group.rotation.x += 0.005;\n      this.group.rotation.y += 0.005;\n      this.camera.updateProjectionMatrix();\n      this.renderer.render(this.scene, this.camera);\n    },\n    /**\n     * @description 初始化相机\n     * @param {Element} el\n     */\n    async initCamera(el) {\n      const camera = new PerspectiveCamera(\n        45,\n        el.clientWidth / el.clientHeight,\n        0.1,\n        1000\n      );\n      camera.position.x = 10;\n      camera.position.y = 10;\n      camera.position.z = 20;\n      camera.lookAt(this.scene.position);\n      this.camera = camera;\n    },\n    /**\n     * @description 初始化场景\n     */\n    initScene() {\n      this.scene = new Scene();\n    },\n\n    /**\n     * @description 创建坐标轴帮助对象\n     */\n    creaeteAxisHelper() {\n      const axesHelper = new AxesHelper(10);\n      this.scene.add(axesHelper);\n    },\n    /**\n     * @description 创建几何体\n     */\n    createGeometry() {\n      // const geometry = new BoxGeometry(4, 4, 4);\n      // const material = new MeshBasicMaterial({ color: 0xff0000 });\n      // const mesh = new Mesh(geometry, material);\n\n      // this.scene.add(mesh);\n      const data = {\n        width: 3,\n        height: 3,\n        depth: 3,\n        widthSegments: 1,\n        heightSegments: 1,\n        depthSegments: 1,\n      };\n\n      const group = new Group();\n      const geometry = new BufferGeometry();\n      geometry.setAttribute("position", new Float32BufferAttribute([], 3));\n\n      const lineMaterial = new LineBasicMaterial({\n        color: 0xffffff,\n        transparent: true,\n        opacity: 0.5,\n      });\n      const meshMaterial = new MeshPhongMaterial({\n        color: 0x156289,\n        emissive: 0x072534,\n        side: DoubleSide,\n        flatShading: true,\n      });\n      group.add(new LineSegments(geometry, lineMaterial));\n      group.add(new Mesh(geometry, meshMaterial));\n      const generateGeometry = () => {\n        this.updateGroupGeometry(\n          group,\n          new BoxGeometry(\n            data.width,\n            data.height,\n            data.depth,\n            data.widthSegments,\n            data.heightSegments,\n            data.depthSegments\n          )\n        );\n      };\n      const { gui } = this;\n      const folder = gui.addFolder("THREE.BoxGeometry");\n      folder.add(data, "width", 1, 30).onChange(generateGeometry);\n      folder.add(data, "height", 1, 30).onChange(generateGeometry);\n      folder.add(data, "depth", 1, 30).onChange(generateGeometry);\n      folder\n        .add(data, "widthSegments", 1, 10)\n        .step(1)\n        .onChange(generateGeometry);\n      folder\n        .add(data, "heightSegments", 1, 10)\n        .step(1)\n        .onChange(generateGeometry);\n      folder\n        .add(data, "depthSegments", 1, 10)\n        .step(1)\n        .onChange(generateGeometry);\n      this.scene.add(group);\n      this.group = group;\n      console.log("group", group);\n      generateGeometry();\n    },\n    updateGroupGeometry(mesh, geometry) {\n      mesh.children[0].geometry.dispose();\n      mesh.children[1].geometry.dispose();\n\n      mesh.children[0].geometry = new WireframeGeometry(geometry);\n      mesh.children[1].geometry = geometry;\n\n      // these do not update nicely together if shared\n    },\n  },\n};\n\n```';