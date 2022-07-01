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
exports.EpisodeService = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let EpisodeService = class EpisodeService {
    constructor(httpService, cacheManager) {
        this.httpService = httpService;
        this.cacheManager = cacheManager;
    }
    async getEpisodes(name, episode) {
        var cachedvalue = await this.cacheManager.get('Episodes');
        if (cachedvalue) {
            return cachedvalue;
        }
        var Episodes = await this.httpService.get('https://rickandmortyapi.com/api/episode', {
            params: {
                name: name,
                episode: episode
            }
        })
            .pipe(operators_1.map(response => response.data), operators_1.catchError((e) => {
            throw new common_1.HttpException(e.response.data, e.response.status);
        })).toPromise();
        await this.cacheManager.set('Episodes', Episodes);
        return Episodes;
    }
    async getEpisodeById(id) {
        var cachedvalue = await this.cacheManager.get('EpisodeById');
        if (cachedvalue) {
            return cachedvalue;
        }
        var EpisodeById = await this.httpService.get('https://rickandmortyapi.com/api/episode/' + id)
            .pipe(operators_1.map(response => response.data), operators_1.catchError((e) => {
            throw new common_1.HttpException(e.response.data, e.response.status);
        })).toPromise();
        await this.cacheManager.set('EpisodeById', EpisodeById);
        return EpisodeById;
    }
};
EpisodeService = __decorate([
    common_1.Injectable(),
    __param(1, common_1.Inject(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [common_1.HttpService, Object])
], EpisodeService);
exports.EpisodeService = EpisodeService;
//# sourceMappingURL=episode.service.js.map