"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterService = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let CharacterService = class CharacterService {
    constructor(httpService, cacheManager) {
        this.httpService = httpService;
        this.cacheManager = cacheManager;
    }
    async getCharacters(name, status, species, type, gender) {
        var cachedvalue = await this.cacheManager.get('Characters');
        if (cachedvalue) {
            return cachedvalue;
        }
        var characters = await this.httpService.get('https://rickandmortyapi.com/api/character', {
            params: {
                name: name,
                status: status,
                species: species,
                type: type,
                gender: gender
            }
        })
            .pipe(operators_1.map(response => response.data), operators_1.catchError((e) => {
            throw new common_1.HttpException(e.response.data, e.response.status);
        })).toPromise();
        await this.cacheManager.set('Characters', characters);
        return characters;
    }
    async getCharacterById(id) {
        var cachedvalue = await this.cacheManager.get('CharacterById');
        if (cachedvalue) {
            return cachedvalue;
        }
        var CharacterById = await this.httpService.get('https://rickandmortyapi.com/api/character/' + id)
            .pipe(operators_1.map(response => response.data), operators_1.catchError((e) => {
            throw new common_1.HttpException(e.response.data, e.response.status);
        })).toPromise();
        await this.cacheManager.set('CharacterById', CharacterById);
        return CharacterById;
    }
};
CharacterService = __decorate([
    common_1.Injectable(),
    __param(1, common_1.Inject(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [common_1.HttpService, Object])
], CharacterService);
exports.CharacterService = CharacterService;
//# sourceMappingURL=character.service.js.map