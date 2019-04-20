type arrayFunction = (value: any, index: number, array: any[]) => boolean;

interface IBase {
    readonly size: number;

    set(key: any, value: any): this;

    get(key: any, defaultValue?: any): any;

    setIn(path: any[], value: any): this;

    getIn(path: string[], defaultValue?: any): any;

    delete(key: any): this;

    deleteIn(path: any[]): this;

    clear(): this;

    first(): any;

    find(fun: arrayFunction): any;

    max(fun: undefined | ((valueA: any, valueB: any) => boolean)): any;

    min(fun: undefined | ((valueA: any, valueB: any) => boolean)): any;

    keys(): any[];

    values(): any[];

    slice(index?: number): any;

    take(index: number): any;

    takeLast(index: number): any;

    filter(): void;

    map(): void;

    every(): void;

    some(): void;

    forEach(): void;

    reduce(): void;

    merge(obj: any): any;

    mergeDeep(obj: any): any;

    isEmpty(): boolean;

    has(): boolean;

    hasIn(path: string[]): boolean;

    includes(ele: any): boolean;

    sort(fun: (valueA: any, valueB: any) => boolean): any;

    concat(ele: any): any;
}

interface IMap extends IBase {
    readonly isMap: boolean;
}

interface IList extends IBase {
    readonly isList: boolean;

    setSize(size: number): void;

    pop(): void;

    push(): void;

    shift(): void;

    unshift(): void;

    zip(): void;

    indexOf(ele: any): number;

    findIndex(fun: arrayFunction): number;

    join(): string;

    reverse(): any[]
}
