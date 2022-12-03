import {message} from "./message"
import {checkIn} from "./check-in"
import {userinfo} from "./userinfo"
import {spaceDraw} from "./space-draw"
import {toBytesUnit} from "@hudiemon/utils"

export const main = async () => {
    if (!process.env.COOKIE) {
        message.error('未设置 COOKIE')
        return
    }
    const {loginName} = await userinfo()
    message.info(`👤【用户】${loginName}`)
    await checkIn()
    await spaceDraw("TASK_SIGNIN")
    await spaceDraw("TASK_SIGNIN_PHOTOS")
    const {available, capacity} = await userinfo()
    message.info(`🔋【空间容量】${toBytesUnit(available)} / ${toBytesUnit(capacity)}`)

}
main().finally(message.finally)
