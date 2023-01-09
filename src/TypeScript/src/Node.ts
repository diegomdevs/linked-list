export default class Node {
    constructor(private _data: any) {}

    set data(data: any) {
        this._data = data;
    }

    get data() {
        return this._data;
    }
}