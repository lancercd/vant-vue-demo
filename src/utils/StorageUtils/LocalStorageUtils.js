import StringUtils from "@/utils/StringUtils";

/**
 * LocalStorageUtils
 */
class LocalStorageUtils {
    /**
     * localStorage设置数据
     * @param key
     * @param value
     */
    static setItem(key, value) {
        if(StringUtils.isEmpty(key)){
            throw Error("key is invalid");
        }
        if (value === null || value === undefined) {
            value = "";
        }
        value = JSON.stringify(value);
        window.localStorage.setItem(key, value);
    }

    /**
     * localStorage获取数据
     * @param key
     * @returns {any}
     */
    static getItem(key) {
        if(StringUtils.isEmpty(key)){
            throw Error("key is invalid");
        }
        const data = window.localStorage.getItem("key");
        try {
            return JSON.parse(data);
        }catch (e) {
            return data;
        }
    }

    /**
     * 移除localStorage中的数据s
     * @param key
     */
    static removeItem(key) {
        if(StringUtils.isEmpty(key)){
            throw Error("key is invalid");
        }
        window.localStorage.removeItem(key);
    }
}


export default LocalStorageUtils;
