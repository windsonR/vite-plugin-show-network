# vite-plugin-show-network

A plugin to show current network in console when HMR end.
在开发过程中,执行HMR之后,像webpack一样将启动的dev-server信息显示在控制台中

## usage

1. install
   `yarn add vite-plugin-show-network --dev`
3. config in `vite.config.ts`
```
import Network from 'vite-plugin-show-network'
export default defineConfig({
plugins: [
Network(),
]
})
```
