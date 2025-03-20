import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Home/index.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=78b5d28b"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "C:/Users/lthor/OneDrive/Apps/big-quiz-soon/Quiz-Dev/src/pages/Home/index.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import Main from "/src/components/Logo/index.jsx";
import "/src/pages/Home/Home.scss";
const Home = () => {
  return /* @__PURE__ */ jsxDEV("div", { className: "desktop-home", children: /* @__PURE__ */ jsxDEV(Main, {}, void 0, false, {
    fileName: "C:/Users/lthor/OneDrive/Apps/big-quiz-soon/Quiz-Dev/src/pages/Home/index.jsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/lthor/OneDrive/Apps/big-quiz-soon/Quiz-Dev/src/pages/Home/index.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
};
_c = Home;
export default Home;
var _c;
$RefreshReg$(_c, "Home");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/lthor/OneDrive/Apps/big-quiz-soon/Quiz-Dev/src/pages/Home/index.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/lthor/OneDrive/Apps/big-quiz-soon/Quiz-Dev/src/pages/Home/index.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBTU07QUFOTixPQUFPQSxvQkFBVTtBQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeEMsT0FBTztBQUVQLE1BQU1DLE9BQU9BLE1BQU07QUFDakIsU0FDRSx1QkFBQyxTQUFJLFdBQVUsZ0JBQ2IsaUNBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUssS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUE7QUFFSjtBQUFFQyxLQU5JRDtBQVFOLGVBQWVBO0FBQUssSUFBQUM7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIk1haW4iLCJIb21lIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYWluIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTG9nbydcclxuaW1wb3J0ICcuL0hvbWUuc2Nzcyc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZGVza3RvcC1ob21lJz5cclxuICAgICAgPE1haW4gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwiZmlsZSI6IkM6L1VzZXJzL2x0aG9yL09uZURyaXZlL0FwcHMvYmlnLXF1aXotc29vbi9RdWl6LURldi9zcmMvcGFnZXMvSG9tZS9pbmRleC5qc3gifQ==