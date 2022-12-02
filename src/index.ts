import {message} from "./message"
import {checkIn} from "./check-in"
import {spaceDraw} from "./space-draw"
import {bytesToSize} from "./utils";
import {userinfo} from "./userinfo";

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
    message.info(`🔋【空间容量】${bytesToSize(available)} / ${bytesToSize(capacity)}`)

}
main().finally(message.finally)
