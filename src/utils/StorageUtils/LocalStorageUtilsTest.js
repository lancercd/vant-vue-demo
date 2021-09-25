import LocalStorageUtils from "@/utils/StorageUtils/LocalStorageUtils";


class LocalStorageUtilsTest {
    constructor() {
        this.storage = LocalStorageUtils;
    }
    getExample() {
        return [
            "",
            "123",
            1,
            {"123": 123, aaa: 1, bbb: true},
            true,
            false,
            null,
            undefined,
            []
        ]
    }
    doTest() {
        const data = this.getExample();
        data.forEach((item, index) => {
            const type = typeof item;
            this.storage.setItem("key",item);
            const out = this.storage.getItem("key");
            const outType = typeof out;
            if (outType !== type || item !== out) {
                console.log("err index:" + index, "in:" + item + "  type: " + type, "out:" + out + ", type:" + outType);
            }
        })
    }
}


export default LocalStorageUtilsTest;
