import Vue from "vue";
import {
  Button,
  Card,
  Loading,
  Row,
  Col,
  Icon,
  Menu,
  MenuItem,
  Container,
  Main,
  Header,
} from "element-ui";

Vue.use(Button);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Icon);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.prototype.$loading = Loading.service;
