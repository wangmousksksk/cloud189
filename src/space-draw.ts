import {message} from './message'
import {drawPrizeMarketDetails} from "./services"

export const spaceDraw = async (taskId: string) => {
    const {errorCode, prizeName} = await drawPrizeMarketDetails(taskId)
    if (errorCode === "User_Not_Chance") {
        message.info('🎉【抽奖】已抽奖')
        return
    }
    prizeName && message.info(`🎉【抽奖】${prizeName}`)
}