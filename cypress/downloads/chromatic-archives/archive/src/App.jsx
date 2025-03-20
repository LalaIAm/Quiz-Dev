import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=78b5d28b"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "C:/Users/lthor/OneDrive/Apps/big-quiz-soon/Quiz-Dev/src/App.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=78b5d28b"; const useEffect = __vite__cjsImport3_react["useEffect"];
import {
  Routes,
  Route,
  useLocation
} from "/node_modules/.vite/deps/react-router-dom.js?v=68046935";
import Home from "/src/pages/Home/index.jsx";
const App = () => {
  _s();
  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {
    let title = "";
    let metaDescription = "";
    switch (pathname) {
      case "/":
        title = "Quiz App";
        metaDescription = "";
        break;
    }
    if (title) {
      document.title = title;
    }
    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);
  return /* @__PURE__ */ jsxDEV(Routes, { children: /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(Home, {}, void 0, false, {
    fileName: "C:/Users/lthor/OneDrive/Apps/big-quiz-soon/Quiz-Dev/src/App.jsx",
    lineNumber: 38,
    columnNumber: 32
  }, this) }, void 0, false, {
    fileName: "C:/Users/lthor/OneDrive/Apps/big-quiz-soon/Quiz-Dev/src/App.jsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/lthor/OneDrive/Apps/big-quiz-soon/Quiz-Dev/src/App.jsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
};
_s(App, "BXcZrDMM76mmm4zA8/QV5UbMNXE=", false, function() {
  return [useLocation];
});
_c = App;
export default App;
var _c;
$RefreshReg$(_c, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/lthor/OneDrive/Apps/big-quiz-soon/Quiz-Dev/src/App.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/lthor/OneDrive/Apps/big-quiz-soon/Quiz-Dev/src/App.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBcUMrQjsyQkFyQy9CO0FBQWtCLE1BQVEsY0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNqQztBQUFBLEVBQ0VBO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQUFBLE9BQ0s7QUFDUCxPQUFPQyxVQUFVO0FBRWpCLE1BQU1DLE1BQU1BLE1BQU07QUFBQUMsS0FBQTtBQUNoQixRQUFNQyxXQUFXSixZQUFZO0FBQzdCLFFBQU1LLFdBQVdELFNBQVNDO0FBRTFCQyxZQUFVLE1BQU07QUFDZCxRQUFJQyxRQUFRO0FBQ1osUUFBSUMsa0JBQWtCO0FBRXRCLFlBQVFILFVBQVE7QUFBQSxNQUNkLEtBQUs7QUFDSEUsZ0JBQVE7QUFDUkMsMEJBQWtCO0FBQ2xCO0FBQUEsSUFDSjtBQUNBLFFBQUlELE9BQU87QUFDVEUsZUFBU0YsUUFBUUE7QUFBQUEsSUFDbkI7QUFDQSxRQUFJQyxpQkFBaUI7QUFDbkIsWUFBTUUscUJBQXFCRCxTQUFTRTtBQUFBQSxRQUNsQztBQUFBLE1BQ0Y7QUFDQSxVQUFJRCxvQkFBb0I7QUFDdEJBLDJCQUFtQkUsVUFBVUo7QUFBQUEsTUFDL0I7QUFBQSxJQUNGO0FBQUEsRUFDRixHQUFHLENBQUNILFFBQVEsQ0FBQztBQUViLFNBQ0UsdUJBQUMsVUFDQyxpQ0FBQyxTQUFNLE1BQUssS0FBSSxTQUFTLHVCQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBa0MsS0FEcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBO0FBRUo7QUFBRUYsR0FoQ0lELEtBQUc7QUFBQSxVQUNVRixXQUFXO0FBQUE7QUFBQWEsS0FEeEJYO0FBa0NOLGVBQWVBO0FBQUksSUFBQVc7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIlJvdXRlcyIsIlJvdXRlIiwidXNlTG9jYXRpb24iLCJIb21lIiwiQXBwIiwiX3MiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidXNlRWZmZWN0IiwidGl0bGUiLCJtZXRhRGVzY3JpcHRpb24iLCJkb2N1bWVudCIsIm1ldGFEZXNjcmlwdGlvblRhZyIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQXBwLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBSb3V0ZXMsXG4gIFJvdXRlLFxuICB1c2VMb2NhdGlvbixcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL3BhZ2VzL0hvbWUnO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3QgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0aXRsZSA9ICcnO1xuICAgIGxldCBtZXRhRGVzY3JpcHRpb24gPSAnJztcblxuICAgIHN3aXRjaCAocGF0aG5hbWUpIHtcbiAgICAgIGNhc2UgJy8nOlxuICAgICAgICB0aXRsZSA9ICdRdWl6IEFwcCc7XG4gICAgICAgIG1ldGFEZXNjcmlwdGlvbiA9ICcnO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xuICAgIH1cbiAgICBpZiAobWV0YURlc2NyaXB0aW9uKSB7XG4gICAgICBjb25zdCBtZXRhRGVzY3JpcHRpb25UYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnaGVhZCA+IG1ldGFbbmFtZT1cImRlc2NyaXB0aW9uXCJdJ1xuICAgICAgKTtcbiAgICAgIGlmIChtZXRhRGVzY3JpcHRpb25UYWcpIHtcbiAgICAgICAgbWV0YURlc2NyaXB0aW9uVGFnLmNvbnRlbnQgPSBtZXRhRGVzY3JpcHRpb247XG4gICAgICB9XG4gICAgfVxuICB9LCBbcGF0aG5hbWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxSb3V0ZXM+XG4gICAgICA8Um91dGUgcGF0aD0nLycgZWxlbWVudD17PEhvbWUgLz59IC8+XG4gICAgPC9Sb3V0ZXM+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwiZmlsZSI6IkM6L1VzZXJzL2x0aG9yL09uZURyaXZlL0FwcHMvYmlnLXF1aXotc29vbi9RdWl6LURldi9zcmMvQXBwLmpzeCJ9