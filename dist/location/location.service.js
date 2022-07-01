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
exports.LocationService = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let LocationService = class LocationService {
    constructor(httpService, cacheManager) {
        this.httpService = httpService;
        this.cacheManager = cacheManager;
    }
    async getLocations(name, type, dimension) {
        var cachedvalue = await this.cacheManager.get('Locations');
        if (cachedvalue) {
            return cachedvalue;
        }
        var Locations = await this.httpService.get('https://rickandmortyapi.com/api/location', {
            params: {
                name: name,
                type: type,
                dimension: dimension
            }
        })
            .pipe(operators_1.map(response => response.data), operators_1.catchError((e) => {
            throw new common_1.HttpException(e.response.data, e.response.status);
        })).toPromise();
        await this.cacheManager.set('Locations', Locations);
        return Locations;
    }
    async getLocationById(id) {
        var cachedvalue = await this.cacheManager.get('LocationById');
        if (cachedvalue) {
            return cachedvalue;
        }
        var LocationById = await this.httpService.get('https://rickandmortyapi.com/api/location/' + id)
            .pipe(operators_1.map(response => response.data), operators_1.catchError((e) => {
            throw new common_1.HttpException(e.response.data, e.response.status);
        })).toPromise();
        await this.cacheManager.set('LocationById', LocationById);
        return LocationById;
    }
};
LocationService = __decorate([
    common_1.Injectable(),
    __param(1, common_1.Inject(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [common_1.HttpService, Object])
], LocationService);
exports.LocationService = LocationService;
//# sourceMappingURL=location.service.js.map