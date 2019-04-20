class Map implements IMap {
    private cache: Map = new Map({});

    constructor(obj: object) {
        this.cache = new Map(obj);
    }

    public size: number = 0;

    public set(key: any, value: any): this {
        this.cache.set(key, value);
        this.size = this.size + 1;
        return this;
    }

    public get(key: any): any {
        return this.cache.get(key);
    }

    public setIn(path: any[], value: any): this {
        let i = path.length;
        let temp = Object.create(null);
        while (i) {
            i -= 1;
            temp[path[i - 1]] = temp;
        }
        this.size = this.size + 1;
        return this;
    }

    public getIn(path: any[], defaultValue: any) {
    }

    public delete(key: any) {
    }

    public deleteIn(path: any[]) {
    }

    public clear() {
        this.cache = new Map({});
        this.size = 0;
    }

    readonly isMap: boolean;

    concat(ele: any): any {
    }

    every(): void {
    }

    filter(): void {
    }

    find(fun: (value: any, index: number, array: any[]) => boolean): any {
    }

    first(): any {
    }

    forEach(): void {
    }

    has(): boolean {
        return false;
    }

    hasIn(path: string[]): boolean {
        return false;
    }

    includes(ele: any): boolean {
        return false;
    }

    isEmpty(): boolean {
        return false;
    }

    keys(): any[] {
        return [];
    }

    map(): void {
    }

    max(fun: ((valueA: any, valueB: any) => boolean) | undefined): any {
    }

    merge(obj: any): any {
    }

    mergeDeep(obj: any): any {
    }

    min(fun: ((valueA: any, valueB: any) => boolean) | undefined): any {
    }

    reduce(): void {
    }

    slice(index?: number): any {
    }

    some(): void {
    }

    sort(fun: (valueA: any, valueB: any) => boolean): any {
    }

    take(index: number): any {
    }

    takeLast(index: number): any {
    }

    values(): any[] {
        return [];
    }
}

export default (obj: object) => {
    return new Map(obj);
};
