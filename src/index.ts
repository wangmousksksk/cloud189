import fill from "lodash/fill"
import {message} from "./message"
import {checkIn} from "./check-in"
import to from '@hudiemon/await-to'
import {userinfo} from "./userinfo"
import BigNumber from "bignumber.js"
import {spaceDraw} from "./space-draw"
import {toBytesUnit} from "@hudiemon/utils"

export const main = async () => {
    if (!process.env.COOKIE) {
        message.error('【secrets.COOKIE】未设置')
        return
    }

    const userinfoRes = await to(userinfo())
    if(userinfoRes.error?.errorCode === "InvalidSessionKey"){
        message.error(`【cookie】过期或不正确`)
        return
    }
    message.info(`👤【用户】${fill(userinfoRes.data.loginName.split(''), '*', 3, 7).join('')}`)
    await checkIn()
    await spaceDraw("TASK_SIGNIN")
    await spaceDraw("TASK_SIGNIN_PHOTOS")
    const {available, capacity} = await userinfo()
    message.info(`📈【容量提升】${new BigNumber(capacity).minus(userinfoRes.data.capacity).div(capacity).multipliedBy(100).toFixed(3)}%`)
    message.info(`🔋【网盘容量】${toBytesUnit(new BigNumber(capacity).minus(available).toNumber())} / ${toBytesUnit(capacity)}`)

}
main().finally(message.finally)
