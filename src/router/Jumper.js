import router from "./index";
import RouterPath from "./RouterPath";

class Jumper {
    static to(path) {
        return router.push({path})
    }
    static toSpace() {
        return Jumper.to(RouterPath.SPACE);
    }
    static redirectTo(path) {
        return router.replace({path})
    }
}

export default Jumper;
