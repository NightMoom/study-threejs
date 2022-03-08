import {
  BoxGeometry,
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  AxesHelper,
  Mesh,
  LineBasicMaterial,
  MeshPhongMaterial,
  LineSegments,
  Group,
  BufferGeometry,
  Float32BufferAttribute,
  DoubleSide,
  WireframeGeometry,
} from "three";
// 控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { guis } from "@/utils/gui-utils";
import GUI from "lil-gui";
export default {
  name: "MinixBoxGeometry",
  data() {
    return {
      boxGeometry: null,
      camera: null,
      renderer: null,
      scene: null,
      group: null,
      gui: null,
    };
  },
  methods: {
    /**
     * @description 初始化three
     * @param {Element} el
     * @param {Element} gui
     */
    async initThree(el, gui) {
      this.gui = new GUI({ container: gui });

      const renderer = new WebGLRenderer({ antialias: true });
      renderer.setClearColor(0xeeeeee);
      renderer.setSize(el.clientWidth, el.clientHeight);
      this.renderer = renderer;
      el.appendChild(renderer.domElement);

      await this.initScene();
      await this.initCamera(el);
      await this.createGeometry();
      await this.creaeteAxisHelper();
      const orbit = new OrbitControls(this.camera, renderer.domElement);
      orbit.enableZoom = false;
      this.animateRender();
    },
    animateRender() {
      requestAnimationFrame(this.animateRender);
      this.group.rotation.x += 0.005;
      this.group.rotation.y += 0.005;
      this.camera.updateProjectionMatrix();
      this.renderer.render(this.scene, this.camera);
    },
    /**
     * @description 初始化相机
     * @param {Element} el
     */
    async initCamera(el) {
      const camera = new PerspectiveCamera(
        45,
        el.clientWidth / el.clientHeight,
        0.1,
        1000
      );
      camera.position.x = 10;
      camera.position.y = 10;
      camera.position.z = 20;
      camera.lookAt(this.scene.position);
      this.camera = camera;
    },
    /**
     * @description 初始化场景
     */
    initScene() {
      this.scene = new Scene();
    },

    /**
     * @description 创建坐标轴帮助对象
     */
    creaeteAxisHelper() {
      const axesHelper = new AxesHelper(10);
      this.scene.add(axesHelper);
    },
    /**
     * @description 创建几何体
     */
    createGeometry() {
      // const geometry = new BoxGeometry(4, 4, 4);
      // const material = new MeshBasicMaterial({ color: 0xff0000 });
      // const mesh = new Mesh(geometry, material);

      // this.scene.add(mesh);
      const data = {
        width: 3,
        height: 3,
        depth: 3,
        widthSegments: 1,
        heightSegments: 1,
        depthSegments: 1,
      };

      const group = new Group();
      const geometry = new BufferGeometry();
      geometry.setAttribute("position", new Float32BufferAttribute([], 3));

      const lineMaterial = new LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.5,
      });
      const meshMaterial = new MeshPhongMaterial({
        color: 0x156289,
        emissive: 0x072534,
        side: DoubleSide,
        flatShading: true,
      });
      group.add(new LineSegments(geometry, lineMaterial));
      group.add(new Mesh(geometry, meshMaterial));
      const generateGeometry = () => {
        this.updateGroupGeometry(
          group,
          new BoxGeometry(
            data.width,
            data.height,
            data.depth,
            data.widthSegments,
            data.heightSegments,
            data.depthSegments
          )
        );
      };
      const { gui } = this;
      const folder = gui.addFolder("THREE.BoxGeometry");
      folder.add(data, "width", 1, 30).onChange(generateGeometry);
      folder.add(data, "height", 1, 30).onChange(generateGeometry);
      folder.add(data, "depth", 1, 30).onChange(generateGeometry);
      folder
        .add(data, "widthSegments", 1, 10)
        .step(1)
        .onChange(generateGeometry);
      folder
        .add(data, "heightSegments", 1, 10)
        .step(1)
        .onChange(generateGeometry);
      folder
        .add(data, "depthSegments", 1, 10)
        .step(1)
        .onChange(generateGeometry);
      this.scene.add(group);
      this.group = group;
      console.log("group", group);
      generateGeometry();
    },
    updateGroupGeometry(mesh, geometry) {
      mesh.children[0].geometry.dispose();
      mesh.children[1].geometry.dispose();

      mesh.children[0].geometry = new WireframeGeometry(geometry);
      mesh.children[1].geometry = geometry;

      // these do not update nicely together if shared
    },
  },
};
