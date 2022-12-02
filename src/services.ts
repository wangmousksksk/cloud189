import {request} from './request'
import {AxiosRequestConfig} from 'axios'

// 获取用户基础信息
export const getUserInfoForPortal = (config: AxiosRequestConfig): Promise<{ loginName: string, available: number, capacity: number }> => request.get('https://cloud.189.cn/api/open/user/getUserInfoForPortal.action',config)
// https://cloud.189.cn/api/open/user/getUserInfoForPortal.action?noCache=0.5269843554253391
export const getDrawTimes = (config: AxiosRequestConfig) => request.get('https://m.cloud.189.cn/v2/getDrawTimes.action', config)
export const drawPrizeMarketDetails = (config: AxiosRequestConfig): Promise<{ errorCode: string, prizeName: string }> => request.get('https://m.cloud.189.cn/v2/drawPrizeMarketDetails.action', config)
export const openFortuneBoxMarket = (config: AxiosRequestConfig) => request.get("https://m.cloud.189.cn/v2/openFortuneBoxMarket.action", config)
/**
 * 获取 accessToken
 */
export const getAccessTokenBySsKey = (config: AxiosRequestConfig): Promise<{ accessToken: string }> => request.get("https://api.cloud.189.cn/open/oauth2/getAccessTokenBySsKey.action", config)
/**
 * 签到
 */
export const userSign = (config: AxiosRequestConfig):Promise<any> => request.get("https://api.cloud.189.cn/mkt/userSign.action", config)
