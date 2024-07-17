import { dangerouslySkipEscape } from "vike/server"

export default function onRenderHtml(ctx){
    return dangerouslySkipEscape(ctx.Page)
}