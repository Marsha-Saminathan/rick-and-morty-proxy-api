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
exports.CharacterController = void 0;
const common_1 = require("@nestjs/common");
const character_service_1 = require("./character.service");
const rxjs_1 = require("rxjs");
let CharacterController = class CharacterController {
    constructor(characterService) {
        this.characterService = characterService;
    }
    getCharacters(name = '', status = '', species = '', type = '', gender = '') {
        return this.characterService.getCharacters(name, status, species, type, gender);
    }
    getCharacterById(id) {
        return this.characterService.getCharacterById(id);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query('name')),
    __param(1, common_1.Query('status')),
    __param(2, common_1.Query('species')),
    __param(3, common_1.Query('type')),
    __param(4, common_1.Query('gender')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], CharacterController.prototype, "getCharacters", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", rxjs_1.Observable)
], CharacterController.prototype, "getCharacterById", null);
CharacterController = __decorate([
    common_1.Controller('character'),
    __metadata("design:paramtypes", [character_service_1.CharacterService])
], CharacterController);
exports.CharacterController = CharacterController;
//# sourceMappingURL=character.controller.js.map