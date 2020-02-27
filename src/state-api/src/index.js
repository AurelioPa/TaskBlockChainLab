export default class StateApi {
    constructor(rawData) {
        this.data = rawData;
    }

    getState = () => {
        return this.data;
    };
}
