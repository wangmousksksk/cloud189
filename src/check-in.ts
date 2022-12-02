import {message} from './message'
import {userSign} from "./services"

export const checkIn = async () => {
    const {netdiskBonus, isSign} = await userSign({
        params: {
            rand: +new Date,
            clientType: "TELEANDROID",
            version: '9.2.1',
            model: "PDHM00"
        },
        headers: {
            Referer: "https://m.cloud.189.cn/zhuanti/2016/sign/index.jsp?albumBackupOpened=1",
            Host: "m.cloud.189.cn",
            "Accept-Encoding": "gzip, deflate",
            Cookie: process.env.COOKIE
        }
    })
    if (isSign === true) {
        message.info('🍩【签到】已签到')
        return
    }
    message.info(`🍩【签到】签到成功，获得${netdiskBonus}M`)
}