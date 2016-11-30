"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var vg_api_1 = require('../../services/vg-api');
var vg_abstract_control_1 = require('../vg-abstract-control');
var VgTimeDisplay = (function (_super) {
    __extends(VgTimeDisplay, _super);
    function VgTimeDisplay(ref, API) {
        _super.call(this, API);
        this.API = API;
        this.property = 'current';
        this.format = 'mm:ss';
        this.elem = ref.nativeElement;
    }
    VgTimeDisplay.prototype.onPlayerReady = function () {
        this.vgFor = this.elem.getAttribute('vg-for');
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgTimeDisplay.prototype.getTime = function () {
        var t = 0;
        if (this.target) {
            t = Math.round(this.target.time[this.property]);
            t = isNaN(t) || this.target.isLive ? 0 : t;
        }
        return t;
    };
    __decorate([
        core_1.Input('property'), 
        __metadata('design:type', String)
    ], VgTimeDisplay.prototype, "property", void 0);
    __decorate([
        core_1.Input('format'), 
        __metadata('design:type', String)
    ], VgTimeDisplay.prototype, "format", void 0);
    VgTimeDisplay = __decorate([
        core_1.Component({
            selector: 'vg-time-display',
            template: "\n        <span *ngIf=\"target?.isLive\">LIVE</span>\n        <span *ngIf=\"!target?.isLive\">{{ getTime() | date:format }}</span>\n        <ng-content></ng-content>\n    ",
            styles: ["\n        :host {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 60px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n            pointer-events: none;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, vg_api_1.VgAPI])
    ], VgTimeDisplay);
    return VgTimeDisplay;
    var _a;
}(vg_abstract_control_1.VgAbstractControl));
exports.VgTimeDisplay = VgTimeDisplay;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctdGltZS1kaXNwbGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctdGltZS1kaXNwbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUUzRCx1QkFBb0IsdUJBQXVCLENBQUMsQ0FBQTtBQUM1QyxvQ0FBZ0Msd0JBQXdCLENBQUMsQ0FBQTtBQTZCekQ7SUFBbUMsaUNBQWlCO0lBUWhELHVCQUFZLEdBQWMsRUFBUyxHQUFTO1FBQ3hDLGtCQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRG9CLFFBQUcsR0FBSCxHQUFHLENBQU07UUFIekIsYUFBUSxHQUFVLFNBQVMsQ0FBQztRQUM5QixXQUFNLEdBQVUsT0FBTyxDQUFDO1FBSXJDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUNsQyxDQUFDO0lBRUQscUNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsR0FBVSxDQUFDLENBQUM7UUFFakIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDZCxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoRCxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUVELE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDYixDQUFDO0lBdEJEO1FBQUMsWUFBSyxDQUFDLFVBQVUsQ0FBQzs7bURBQUE7SUFDbEI7UUFBQyxZQUFLLENBQUMsUUFBUSxDQUFDOztpREFBQTtJQWpDcEI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsNktBSVQ7WUFDRCxNQUFNLEVBQUUsQ0FBQyxpa0JBa0JSLENBQUM7U0FDTCxDQUFDOztxQkFBQTtJQTZCRixvQkFBQzs7QUFBRCxDQUFDLEFBNUJELENBQW1DLHVDQUFpQixHQTRCbkQ7QUE1QlkscUJBQWEsZ0JBNEJ6QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtWZ0FQSX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7VmdBYnN0cmFjdENvbnRyb2x9IGZyb20gJy4uL3ZnLWFic3RyYWN0LWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLXRpbWUtZGlzcGxheScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJ0YXJnZXQ/LmlzTGl2ZVwiPkxJVkU8L3NwYW4+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiIXRhcmdldD8uaXNMaXZlXCI+e3sgZ2V0VGltZSgpIHwgZGF0ZTpmb3JtYXQgfX08L3NwYW4+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICBgLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIFZnVGltZURpc3BsYXkgZXh0ZW5kcyBWZ0Fic3RyYWN0Q29udHJvbCB7XG4gICAgZWxlbTpIVE1MRWxlbWVudDtcbiAgICB2Z0Zvcjogc3RyaW5nO1xuICAgIHRhcmdldDogYW55O1xuXG4gICAgQElucHV0KCdwcm9wZXJ0eScpIHByb3BlcnR5OnN0cmluZyA9ICdjdXJyZW50JztcbiAgICBASW5wdXQoJ2Zvcm1hdCcpIGZvcm1hdDpzdHJpbmcgPSAnbW06c3MnO1xuXG4gICAgY29uc3RydWN0b3IocmVmOkVsZW1lbnRSZWYsIHB1YmxpYyBBUEk6VmdBUEkpIHtcbiAgICAgICAgc3VwZXIoQVBJKTtcbiAgICAgICAgdGhpcy5lbGVtID0gcmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgICAgdGhpcy52Z0ZvciA9IHRoaXMuZWxlbS5nZXRBdHRyaWJ1dGUoJ3ZnLWZvcicpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMuQVBJLmdldE1lZGlhQnlJZCh0aGlzLnZnRm9yKTtcbiAgICB9XG5cbiAgICBnZXRUaW1lKCkge1xuICAgICAgICBsZXQgdDpudW1iZXIgPSAwO1xuXG4gICAgICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgdCA9IE1hdGgucm91bmQodGhpcy50YXJnZXQudGltZVt0aGlzLnByb3BlcnR5XSk7XG4gICAgICAgICAgICB0ID0gaXNOYU4odCkgfHwgdGhpcy50YXJnZXQuaXNMaXZlID8gMCA6IHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdDtcbiAgICB9XG59XG4iXX0=