class List implements IList {
    constructor(obj: object) {
        console.log(obj);
    }

    size: number = 0;

    set(key: any, value: any) {
    }

    get(key: any) {

    }

    setIn(path: any[], value: any) {
    }

    getIn(path: any[], defaultValue: any) {
    }

    setSize(size: number) {
    }

    delete(key: any) {
    }

    deleteIn(path: any[]) {
    }

    pop() {
    }

    push() {
    }

    shift() {
    }

    unshift() {
    }

    zip() {
    }

    clear() {
    }
}

export default (obj: object) => {
    return new List(obj);
};
