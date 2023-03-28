import {request} from './request'
import {AxiosRequestConfig} from 'axios'

// 获取用户基础信息
export const getUserInfoForPortal = (): Promise<{ loginName: string, available: number, capacity: number }> => request.get('https://cloud.189.cn/api/open/user/getUserInfoForPortal.action', {
    params: {
        noCache: Math.random()
    },
    headers: {
        Cookie: process.env.COOKIE,
        Accept: "application/json;charset=UTF-8"
    }
})
export const getDrawTimes = (config: AxiosRequestConfig) => request.get('https://m.cloud.189.cn/v2/getDrawTimes.action', config)
export const drawPrizeMarketDetails = (taskId: string): Promise<{ errorCode: string, prizeName: string }> =>
    request.get('https://m.cloud.189.cn/v2/drawPrizeMarketDetails.action', {
        params: {
            taskId,
            activityId: "ACT_SIGNIN",
            noCache: Math.random()
        },
        headers: {
            Cookie: process.env.COOKIE,
        }
    })
export const openFortuneBoxMarket = (config: AxiosRequestConfig) => request.get("https://m.cloud.189.cn/v2/openFortuneBoxMarket.action", config)
/**
 * 获取 accessToken
 */
export const getAccessTokenBySsKey = (config: AxiosRequestConfig): Promise<{ accessToken: string }> => request.get("https://api.cloud.189.cn/open/oauth2/getAccessTokenBySsKey.action", config)
/**
 * 签到
 */
export const userSign = (): Promise<any> => request.get("https://api.cloud.189.cn/mkt/userSign.action", {
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
