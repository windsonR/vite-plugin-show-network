# vite-plugin-show-network

A plugin to show current network in console when HMR end.

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
