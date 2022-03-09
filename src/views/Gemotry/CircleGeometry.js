import {
  Scene,
  PerspectiveCamera,
  CircleGeometry,
  WebGLRenderer,
  AxesHelper,
  Mesh,
  Group,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import GUI from "lil-gui";
export default {
  name: "MixinCircleGeometry",
  data() {
    return {
      geometry: null,
      gui: null,
      camera: null,
      scene: null,
      group: null,
    };
  },
  methods: {
    /**
     * @description 初始化three对象
     * @param {Element} el
     * @param {Element} gui
     */
    initThree(el, gui) {
      this.gui = new GUI({ container: gui });
      const renderer = new WebGLRenderer({ antialias: true });
      renderer.setClearColor(0xeeeeee);
      renderer.setSize(el.clientWidth, el.clientHeight);
      this.renderer = renderer;
      el.appendChild(renderer.domElement);
    },
    /**
     * @description 坐标系帮助对象
     */
    createAxesHelper() {
      const axesHelper = new AxesHelper(10);
      this.scene.add(axesHelper);
    },
    /**
     * @description 初始化场景
     */
    initScene() {
      const scene = new Scene();
      this.scene = scene;
    },
    /**
     * @description 初始化相机
     * @param {Element} el
     */
    initCamera(el) {
      const camera = new PerspectiveCamera(
        45,
        el.clientWidth / el.clientHeight,
        0.1,
        1000
      );
      this.camera = camera;
    },
  },
};
