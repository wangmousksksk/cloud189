import {getUserInfoForPortal} from "./services"

export const userinfo = () => {
    return getUserInfoForPortal({
        params: {
            noCache: Math.random()
        },
        headers: {
            Cookie: process.env.COOKIE,
            Accept: "application/json;charset=UTF-8"
        }
    })
}