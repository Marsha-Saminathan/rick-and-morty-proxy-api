"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnCloseInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let OnCloseInterceptor = class OnCloseInterceptor {
    intercept(context, next) {
        if (context.getType() !== 'http') {
            return next.handle();
        }
        const request = context.switchToHttp().getRequest();
        const close$ = rxjs_1.fromEvent(request, 'close').pipe(operators_1.tap(() => console.log('Closed Event Fired')));
        return next.handle().pipe(operators_1.takeUntil(close$));
    }
};
OnCloseInterceptor = __decorate([
    common_1.Injectable()
], OnCloseInterceptor);
exports.OnCloseInterceptor = OnCloseInterceptor;
//# sourceMappingURL=on-close.interceptor.js.map