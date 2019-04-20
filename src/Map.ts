class Map implements IMap{
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

    delete(key: any) {
    }

    deleteIn(path: any[]) {
    }

    clear(){}
}

export default (obj: object) => {
    return new Map(obj);
};
