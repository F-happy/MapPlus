class Map {
    constructor(obj: object) {
        console.log(obj);
    }

    set(key: any, value: any) {
    }


}

export default (obj: object) => {
    return new Map(obj);
};
