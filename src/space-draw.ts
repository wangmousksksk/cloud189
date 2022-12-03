import {message} from './message'
import {drawPrizeMarketDetails} from "./services"

export const spaceDraw = async (config: any) => {
    const {errorCode, prizeName} = await drawPrizeMarketDetails({
        params: {
            taskId: config,
            activityId: "ACT_SIGNIN",
            noCache: Math.random()
        },
        headers: {
            Cookie: process.env.COOKIE
        }
    })
    if (errorCode === "User_Not_Chance") {
        message.info('📦【空间抽奖】已抽奖')
        return
    }
    prizeName && message.info(`📦【抽奖】${prizeName}`)
}