import { Plugin, } from 'vite'
import colors from 'picocolors'

export default (): Plugin => {
  return {
    name: 'vite-plugin-show-network',
    handleHotUpdate({ server, }) {
      setTimeout(() => {
        const info = server.config.logger.info
        info(
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          colors.cyan(`\n  vite v${require('vite/package.json').version}`) +
          colors.green(' dev server running at:\n'),
          {
            clear: !server.config.logger.hasWarned,
          }
        )
        server.printUrls()
      }, 0)
    },
  }
}
