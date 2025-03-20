import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Button/index.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=78b5d28b"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "C:/Users/lthor/OneDrive/Apps/big-quiz-soon/Quiz-Dev/src/components/Button/index.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import "/src/components/Button/Button.scss";
const Button = ({ children, ...rest }) => {
  return /* @__PURE__ */ jsxDEV("button", { className: "button", ...rest, children: /* @__PURE__ */ jsxDEV("b", { className: "button-text", children }, void 0, false, {
    fileName: "C:/Users/lthor/OneDrive/Apps/big-quiz-soon/Quiz-Dev/src/components/Button/index.jsx",
    lineNumber: 7,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "C:/Users/lthor/OneDrive/Apps/big-quiz-soon/Quiz-Dev/src/components/Button/index.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
};
_c = Button;
export default Button;
var _c;
$RefreshReg$(_c, "Button");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/lthor/OneDrive/Apps/big-quiz-soon/Quiz-Dev/src/components/Button/index.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/lthor/OneDrive/Apps/big-quiz-soon/Quiz-Dev/src/components/Button/index.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBTVk7QUFOWixPQUFPLG9CQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR3RCLE1BQU1BLFNBQVNBLENBQUMsRUFBRUMsVUFBVSxHQUFHQyxLQUFLLE1BQU07QUFDdEMsU0FDSSx1QkFBQyxZQUFPLFdBQVUsVUFBUyxHQUFJQSxNQUMzQixpQ0FBQyxPQUFFLFdBQVUsZUFBZ0JELFlBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBdUMsS0FEM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBO0FBRVI7QUFBQ0UsS0FOS0g7QUFTTixlQUFlQTtBQUFPLElBQUFHO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJCdXR0b24iLCJjaGlsZHJlbiIsInJlc3QiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJpbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL0J1dHRvbi5zY3NzJztcclxuXHJcblxyXG5jb25zdCBCdXR0b24gPSAoeyBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidXR0b24nIHsuLi5yZXN0fT5cclxuICAgICAgICAgICAgPGIgY2xhc3NOYW1lPSdidXR0b24tdGV4dCc+eyBjaGlsZHJlbiB9PC9iPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uOyJdLCJmaWxlIjoiQzovVXNlcnMvbHRob3IvT25lRHJpdmUvQXBwcy9iaWctcXVpei1zb29uL1F1aXotRGV2L3NyYy9jb21wb25lbnRzL0J1dHRvbi9pbmRleC5qc3gifQ==