//本地存储api
/**
 * localStorage
 * key
 * value == null 删除
 */
let local = function(key, value) {
    let storage = window.localStorage
        //如果浏览器不支持localStorage存到Cookie中
        //...
        //如果value未定义则为获取key对应的值
    if (value === undefined)
        return storage.getItem(key)
    else //反之则为设置或修改值或添加值或删除值
        value === null ? storage.removeItem(key) : storage.setItem(key, value)
}

/**
 * sessionStorage
 * key
 * value == null 删除
 */
let session = function(key, value) {
    let storage = window.sessionStorage
        //如果浏览器不支持localStorage存到Cookie中
        //...
        //如果value未定义则为获取key对应的值
    if (value === undefined)
        return storage.getItem(key)
    else //反之则为设置或修改值或添加值或删除值
        value === null ? storage.removeItem(key) : storage.setItem(key, value)
}

/**
 * cookie
 * key
 * days 过期天数
 * value 值
 * opt 'del' 删除
 */
let cookie = function(key, value, days) {
    if (value === undefined && document.cookie.length > 0) { //获取cookie
        let arr, reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2])
        else
            return null
    } else {
        let exdate = new Date();
        if (value === null) {
            exdate.setTime(exdate.getTime() - 1);
            let cval = cookie(key);
            if (cval != null)
                document.cookie = key + "=" + cval + ";expires=" + exdate.toGMTString();
        } else {
            exdate.setDate(exdate.getDate() + days ? days : 0)
            document.cookie = key + "=" + escape(value) +
                (days ? "" : ";expires=" + exdate.toGMTString())
        }
    }

}
export default {
    $local: function(key, value) {
        return local(key, value)
    },
    $session: function(key, value) {
        return session(key, value)
    },
    $cookie: function(key, value, days) {
        return cookie(key, value, days)
    }
}