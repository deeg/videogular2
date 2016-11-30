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
var core_1 = require("@angular/core");
var vg_api_1 = require("../services/vg-api");
var vg_fullscreen_api_1 = require("../services/vg-fullscreen-api");
var vg_utils_1 = require("../services/vg-utils");
var vg_media_1 = require("../vg-media/vg-media");
var VgPlayer = (function () {
    function VgPlayer(ref, api) {
        this.isFullscreen = false;
        this.onPlayerReady = new core_1.EventEmitter();
        this.onMediaReady = new core_1.EventEmitter();
        this.api = api;
        this.elem = ref.nativeElement;
        this.api.registerElement(this.elem);
    }
    VgPlayer.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.medias.toArray().forEach(function (media) {
            _this.api.registerMedia(media);
        });
        this.api.onPlayerReady();
        this.onPlayerReady.next(this.api);
        vg_fullscreen_api_1.VgFullscreenAPI.init(this.elem, this.medias);
        vg_fullscreen_api_1.VgFullscreenAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this));
    };
    VgPlayer.prototype.onChangeFullscreen = function (fsState) {
        if (!vg_fullscreen_api_1.VgFullscreenAPI.nativeFullscreen) {
            this.isFullscreen = fsState;
            this.zIndex = fsState ? vg_utils_1.VgUtils.getZIndex().toString() : 'auto';
        }
    };
    __decorate([
        core_1.HostBinding('class.fullscreen'), 
        __metadata('design:type', Boolean)
    ], VgPlayer.prototype, "isFullscreen", void 0);
    __decorate([
        core_1.HostBinding('style.z-index'), 
        __metadata('design:type', String)
    ], VgPlayer.prototype, "zIndex", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
    ], VgPlayer.prototype, "onPlayerReady", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
    ], VgPlayer.prototype, "onMediaReady", void 0);
    __decorate([
        core_1.ContentChildren(vg_media_1.VgMedia), 
        __metadata('design:type', (typeof (_c = typeof core_1.QueryList !== 'undefined' && core_1.QueryList) === 'function' && _c) || Object)
    ], VgPlayer.prototype, "medias", void 0);
    VgPlayer = __decorate([
        core_1.Component({
            selector: 'vg-player',
            template: "<ng-content></ng-content>",
            styles: ["\n        :host {\n            font-family: 'videogular';\n            position: relative;\n            display: flex;\n            width: 100%;\n            height: 100%;\n            overflow: hidden;\n            background-color: black;\n        }\n\n        :host.fullscreen {\n            position: fixed;\n            left: 0;\n            top: 0;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [(typeof (_d = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _d) || Object, vg_api_1.VgAPI])
    ], VgPlayer);
    return VgPlayer;
    var _a, _b, _c, _d;
}());
exports.VgPlayer = VgPlayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctcGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctcGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFTTyxlQUFlLENBQUMsQ0FBQTtBQUN2Qix1QkFBb0Isb0JBQW9CLENBQUMsQ0FBQTtBQUN6QyxrQ0FBOEIsK0JBQStCLENBQUMsQ0FBQTtBQUM5RCx5QkFBc0Isc0JBQXNCLENBQUMsQ0FBQTtBQUM3Qyx5QkFBc0Isc0JBQXNCLENBQUMsQ0FBQTtBQXVCN0M7SUFnQkksa0JBQVksR0FBZSxFQUFFLEdBQVU7UUFaTixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUkvRCxrQkFBYSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUd0RCxpQkFBWSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQU1qRCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUU5QixJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELHFDQUFrQixHQUFsQjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO1lBQ2hDLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbEMsbUNBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsbUNBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRCxxQ0FBa0IsR0FBbEIsVUFBbUIsT0FBZTtRQUM5QixFQUFFLENBQUMsQ0FBQyxDQUFDLG1DQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO1lBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxHQUFHLGtCQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBQ3BFLENBQUM7SUFDTCxDQUFDO0lBcENEO1FBQUMsa0JBQVcsQ0FBQyxrQkFBa0IsQ0FBQzs7a0RBQUE7SUFDaEM7UUFBQyxrQkFBVyxDQUFDLGVBQWUsQ0FBQzs7NENBQUE7SUFFN0I7UUFBQyxhQUFNLEVBQUU7O21EQUFBO0lBR1Q7UUFBQyxhQUFNLEVBQUU7O2tEQUFBO0lBR1Q7UUFBQyxzQkFBZSxDQUFDLGtCQUFPLENBQUM7OzRDQUFBO0lBbEM3QjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLE1BQU0sRUFBRSxDQUFDLHFYQWdCUixDQUFDO1NBQ0wsQ0FBQzs7Z0JBQUE7SUEwQ0YsZUFBQzs7QUFBRCxDQUFDLEFBekNELElBeUNDO0FBekNZLGdCQUFRLFdBeUNwQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBPdXRwdXQsXG4gICAgQ29tcG9uZW50LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBFbGVtZW50UmVmLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBBZnRlckNvbnRlbnRJbml0LFxuICAgIENvbnRlbnRDaGlsZHJlblxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtWZ0FQSX0gZnJvbSBcIi4uL3NlcnZpY2VzL3ZnLWFwaVwiO1xuaW1wb3J0IHtWZ0Z1bGxzY3JlZW5BUEl9IGZyb20gXCIuLi9zZXJ2aWNlcy92Zy1mdWxsc2NyZWVuLWFwaVwiO1xuaW1wb3J0IHtWZ1V0aWxzfSBmcm9tIFwiLi4vc2VydmljZXMvdmctdXRpbHNcIjtcbmltcG9ydCB7VmdNZWRpYX0gZnJvbSBcIi4uL3ZnLW1lZGlhL3ZnLW1lZGlhXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctcGxheWVyJyxcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICd2aWRlb2d1bGFyJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0LmZ1bGxzY3JlZW4ge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIFZnUGxheWVyIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgZWxlbTogSFRNTEVsZW1lbnQ7XG4gICAgYXBpOiBWZ0FQSTtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuZnVsbHNjcmVlbicpIGlzRnVsbHNjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUuei1pbmRleCcpIHpJbmRleDogc3RyaW5nO1xuXG4gICAgQE91dHB1dCgpXG4gICAgb25QbGF5ZXJSZWFkeTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KClcbiAgICBvbk1lZGlhUmVhZHk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihWZ01lZGlhKVxuICAgIG1lZGlhczogUXVlcnlMaXN0PFZnTWVkaWE+O1xuXG4gICAgY29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmLCBhcGk6IFZnQVBJKSB7XG4gICAgICAgIHRoaXMuYXBpID0gYXBpO1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcblxuICAgICAgICB0aGlzLmFwaS5yZWdpc3RlckVsZW1lbnQodGhpcy5lbGVtKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMubWVkaWFzLnRvQXJyYXkoKS5mb3JFYWNoKChtZWRpYSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcGkucmVnaXN0ZXJNZWRpYShtZWRpYSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYXBpLm9uUGxheWVyUmVhZHkoKTtcbiAgICAgICAgdGhpcy5vblBsYXllclJlYWR5Lm5leHQodGhpcy5hcGkpO1xuXG4gICAgICAgIFZnRnVsbHNjcmVlbkFQSS5pbml0KHRoaXMuZWxlbSwgdGhpcy5tZWRpYXMpO1xuICAgICAgICBWZ0Z1bGxzY3JlZW5BUEkub25DaGFuZ2VGdWxsc2NyZWVuLnN1YnNjcmliZSh0aGlzLm9uQ2hhbmdlRnVsbHNjcmVlbi5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZUZ1bGxzY3JlZW4oZnNTdGF0ZTpib29sZWFuKSB7XG4gICAgICAgIGlmICghVmdGdWxsc2NyZWVuQVBJLm5hdGl2ZUZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIHRoaXMuaXNGdWxsc2NyZWVuID0gZnNTdGF0ZTtcbiAgICAgICAgICAgIHRoaXMuekluZGV4ID0gZnNTdGF0ZSA/IFZnVXRpbHMuZ2V0WkluZGV4KCkudG9TdHJpbmcoKSA6ICdhdXRvJztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==