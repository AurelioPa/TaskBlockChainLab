export default class StateApi {
    constructor(rawData) {
        this.data = rawData.data;
    }

    getState = () => {
        return this.data;
    };
}
