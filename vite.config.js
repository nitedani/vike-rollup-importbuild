import vike from "vike/plugin"
import { builtinModules } from "module"
export default {
    plugins: [
        vike(),
        {
            apply(_, { isSsrBuild }) {
                return isSsrBuild
            },
            config() {
                return {
                    build: {
                        rollupOptions: {
                            input: { index: "server/index.js" },
                        },
                    },
                    ssr: {
                        noExternal: true,
                        external: [...builtinModules, ...builtinModules.map(m => `node:${m}`), "vite"]
                    }
                }
            }
        }
    ],

}