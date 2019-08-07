declare module '*.html' {
    const content: any;
    export = content;
}

declare module '*.scss' {
    const content: any;
    export = content;
}

// declare module Regular {
//     class RegularPrototype {
//         config: (data) => void;
//         init: (data) => void;
//
//         $on: (name: string, handle: Function) => void;
//         $emit: (name: string, params?: object) => void;
//         $update: (target?: string , value?: any) => void;
//     }
//
//     class RegularConstructor<P, S, D = P & S> extends RegularPrototype {
//         template: string;
//         name?: string;
//         data?: D;
//
//         [key: string]: any;
//     }
//
//     type RegularInstance<P, S> = RegularConstructor<P, S> & RegularPrototype;
//
//     const dom: any;
//     const extend: <Props = any, State = any>(constructor: RegularConstructor<Props, State>) => RegularInstance<Props, State>;
//     const filter: Function;
//     const component: Function;
// }
