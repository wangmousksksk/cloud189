import {message} from './message'
import {drawPrizeMarketDetails} from "./services"

export const spaceDraw = async (config: any) => {
    const {prizeName} = await drawPrizeMarketDetails({
        params: {
            taskId: config,
            activityId: "ACT_SIGNIN",
            noCache: Math.random()
        },
        headers: {
            Cookie: process.env.COOKIE
        }
    })
    prizeName && message.info(`📦【抽奖】${prizeName}`)
}