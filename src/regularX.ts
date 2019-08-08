import RegularJs from 'regularjs';

type WatchId = number;

export class RegularX<Data> {
    $refs: any;
    data: Data;

    config(data?: Data) {

    }

    init(data?: Data) {

    }

    super() {

    }

    destroy() {
        this.super();
    }

    $watch(target: keyof Data | Array<keyof Data>, handlerFunction): WatchId {
        return 1;
    }

    $unwatch(watchId: WatchId) {

    }

    $inject() {

    }

    $update(target: string | Partial<Data>, value?: any) {

    }

    $on(name: string, handle?: Function) {

    }

    $off(name: string, handle?: Function) {

    }


    $emit(name: string, params?: any) {

    }

    $mute(isMute: boolean) {

    }

    static extend(component: any) {
        const componentInstance = new component();
        const regularObject = Object.create({});
        let prototype = componentInstance;

        while (prototype) {
            if (prototype.constructor === RegularX) break;

            Object.keys(prototype).forEach(key => {
                regularObject[key] = prototype[key];
            });

            prototype = prototype.__proto__;
        }

        delete regularObject.constructor;

        return RegularJs.extend(regularObject);
    }
}

