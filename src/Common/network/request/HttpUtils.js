/**
 * Created by guangqiang on 2017/8/26.
 */

/** 基于fetch 封装的网络请求工具类 **/

import {Component, useEffect} from 'react';
import {Toast} from '../../toast';
// import { RootHUD } from "../../progressHUD";
//import {TOKEN} from '../../../api'
import AsyncStorage from '@react-native-community/async-storage';
/**
 * fetch 网络请求的header，可自定义header 内容
 * @type {{Accept: string, Content-Type: string, accessToken: *}}
 */

let header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    /*Authorization: 'Bearer ' + userToken,*/
};
/**
 * GET 请求时，拼接请求URL
 * @param url 请求URL
 * @param params 请求参数
 * @returns {*}
 */
const handleUrl = url => params => {
    if (params) {
        let paramsArray = [];
        Object.keys(params).forEach(key =>
            paramsArray.push(key + '=' + encodeURIComponent(params[key])),
        );
        if (url.search(/\?/) === -1) {
            typeof params === 'object'
                ? (url += '?' + paramsArray.join('&'))
                : url;
        } else {
            url += '&' + paramsArray.join('&');
        }
    }
    return url;
};

/**
 * fetch 网络请求超时处理
 * @param original_promise 原始的fetch
 * @param timeout 超时时间 30s
 * @returns {Promise.<*>}
 */
const timeoutFetch = (original_fetch, timeout = 30000) => {
    let timeoutBlock = () => {};
    let timeout_promise = new Promise((resolve, reject) => {
        timeoutBlock = () => {
            // 请求超时处理
            reject('timeout promise');
        };
    });

    // Promise.race(iterable)方法返回一个promise
    // 这个promise在iterable中的任意一个promise被解决或拒绝后，立刻以相同的解决值被解决或以相同的拒绝原因被拒绝。
    let abortable_promise = Promise.race([original_fetch, timeout_promise]);

    setTimeout(() => {
        timeoutBlock();
    }, timeout);

    return abortable_promise;
};

export default class HttpUtils extends Component {

    static async setHeader() {
        let token = await AsyncStorage.getItem('userToken');
        console.log("token",token)
        return Object.assign(header, {
            Authorization: 'Bearer ' + token
        });
    }
    /**
     * 基于fetch 封装的GET 网络请求
     * @param url 请求URL
     * @param params 请求参数
     * @returns {Promise}
     */
    static getRequest =async (url, params = {}) => {

             let _h = await this.setHeader()
             console.log(_h)
        return timeoutFetch(
            fetch(handleUrl(url)(params), {
                method: 'GET',
                headers: _h,
            }),
        )
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    Toast.show(
                        '服务器繁忙，请稍后再试；\r\nCode:' + response.status,
                    );
                }
            })
            .then(response => {
                // RootHUD.hidden();
                // response.code：是与服务器端约定code：200表示请求成功，非200表示请求失败，message：请求失败内容
                if (response && response === 0) {
                    return response;
                } else {
                    // 非 200，错误处理
                    // alert(response.message)
                    return response;
                }
            })
            .catch(error => {
                // debugger;
                // RootHUD.hidden();
                // Toast.show(error);
            });
    };

    /**
     * 基于fetch 的 POST 请求
     * @param url 请求的URL
     * @param params 请求参数
     * @returns {Promise}
     */
    static postRequrst =async (url, params = {}) => {
        // RootHUD.show();
            //let _h = await this.setHeader()
        return timeoutFetch(
            fetch(url, {
                method: 'POST',
                headers: header,
                body: JSON.stringify(params),
            }),
        )
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    Toast.show(
                        '服务器繁忙，请稍后再试；\r\nCode:' + response.status,
                    );
                }
            },err=>{
                Toast.show(
                        "网络请求出错,请检查网络配置后再试",
                    );
                return
            })
            .then(response => {
                // RootHUD.hidden();
                if (response && response.res === 0) {
                    return response;
                } else {
                    // 非 200，错误处理
                    // alert(response.message)
                    return response;
                }
            })
            .catch(error => {
                // RootHUD.hidden();
                Toast.show(error);
            });
    };
    /**
     * DELETE请求方式
     * @param url
     * @param id
     * @returns {Promise<any> | Promise}
     */
    static delRequrst(url, id) {
        return new Promise(resolve => {
            console.log(url);
            fetch(url + '/' + id, {
                method: 'DELETE',
            })
                .then(result => {
                    resolve(result);
                })
                .catch(err => {
                    console.error(err);
                });
        });
    }
    /**
     * PUT请求方式
     * @param url
     * @param id
     * @returns {Promise<any> | Promise}
     */
    static putRequrst(url, data) {
        console.log(url, JSON.stringify(data));
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(result => {
                    resolve(result);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}
