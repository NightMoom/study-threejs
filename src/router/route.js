const ctx = require.context("@/views/", true, /\.vue$/);
const allFileName = ctx.keys();

export const MenuPath = Array.from(
  new Set([...allFileName.map((i) => i.replace("./", "").split("/")[0])])
);
export const routePath = Array.from(
  new Set([...allFileName.map((i) => i.replace(".", "").replace(".vue", ""))])
);

export const createRoute = MenuPath.map((i) => {
  let route = {};
  let children = routePath
    .filter((k) => k.indexOf(i) > -1)
    .map((y) => {
      return {
        path: y,
        name: y.replace(`/${i}/`, ""),
        component: () => import(`@/views${y}.vue`),
      };
    });
  route = {
    path: i,
    name: i,
    children,
    component: () => import("@/Layout/index"),
  };
  return route;
});
