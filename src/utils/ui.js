import Vue from 'vue';
import {
  Button,
  Card,
  Loading,
  Row,
  Col,
  Icon,
  Menu,
  MenuItem,

} from "element-ui";


Vue.use(Button);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Icon);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.prototype.$loading = Loading.service;
