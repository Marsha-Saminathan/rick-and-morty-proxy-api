"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterModule = void 0;
const common_1 = require("@nestjs/common");
const redisStore = require("cache-manager-redis-store");
const character_controller_1 = require("./character.controller");
const character_service_1 = require("./character.service");
const common_2 = require("@nestjs/common");
let CharacterModule = class CharacterModule {
};
CharacterModule = __decorate([
    common_1.Module({
        imports: [common_2.HttpModule, common_1.CacheModule.register({
                store: redisStore,
                host: 'localhost',
                port: 6379,
                ttl: 300
            })],
        controllers: [character_controller_1.CharacterController],
        providers: [character_service_1.CharacterService],
    })
], CharacterModule);
exports.CharacterModule = CharacterModule;
//# sourceMappingURL=character.module.js.map