import fill from "lodash/fill"
import {message} from "./message"
import {checkIn} from "./check-in"
import {userinfo} from "./userinfo"
import BigNumber from "bignumber.js"
import {spaceDraw} from "./space-draw"
import {toBytesUnit} from "@hudiemon/utils"

export const main = async () => {
    if (!process.env.COOKIE) {
        message.error('未设置 COOKIE')
        return
    }
    const {loginName, capacity: prevCapacity} = await userinfo()
    message.info(`👤【用户】${fill(loginName.split(''), '*', 3, 7).join('')}`)
    await checkIn()
    await spaceDraw("TASK_SIGNIN")
    await spaceDraw("TASK_SIGNIN_PHOTOS")
    const {available, capacity} = await userinfo()
    message.info(`📈【容量提升】${new BigNumber(prevCapacity).minus(capacity).div(capacity).multipliedBy(100).toNumber()}%`)
    message.info(`🔋【网盘容量】${toBytesUnit(available)} / ${toBytesUnit(capacity)}`)

}
main().finally(message.finally)
