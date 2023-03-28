import {message} from './message'
import {userSign} from "./services"

export const checkIn = async () => {
    const {netdiskBonus, isSign} = await userSign()
    if (isSign === true) {
        message.info('🍩【签到】已签到')
        return
    }
    message.info(`🍩【签到】签到成功，获得${netdiskBonus}M`)
}