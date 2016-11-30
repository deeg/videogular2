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
var vg_api_1 = require('../../../services/vg-api');
var vg_abstract_control_1 = require('../../vg-abstract-control');
var VgScrubBarCurrentTime = (function (_super) {
    __extends(VgScrubBarCurrentTime, _super);
    function VgScrubBarCurrentTime(ref, API) {
        _super.call(this, API);
        this.API = API;
        this.elem = ref.nativeElement;
    }
    VgScrubBarCurrentTime.prototype.onPlayerReady = function () {
        this.vgFor = this.elem.getAttribute('vg-for');
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgScrubBarCurrentTime.prototype.getPercentage = function () {
        return this.target ? ((this.target.time.current * 100) / this.target.time.total) + '%' : '0%';
    };
    VgScrubBarCurrentTime = __decorate([
        core_1.Component({
            selector: 'vg-scrub-bar-current-time',
            template: "<div class=\"background\" [style.width]=\"getPercentage()\"></div>",
            styles: ["\n        :host {\n            display: flex;\n            width: 100%;\n            height: 5px;\n            pointer-events: none;\n            position: absolute;\n        }\n\n        :host .background {\n            background-color: white;\n        }\n\n        vg-controls :host {\n            position: absolute;\n            top: calc(50% - 3px);\n            -webkit-border-radius: 2px;\n            -moz-border-radius: 2px;\n            border-radius: 2px;\n        }\n\n        vg-controls :host .background {\n            border: 1px solid white;\n            -webkit-border-radius: 2px;\n            -moz-border-radius: 2px;\n            border-radius: 2px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, vg_api_1.VgAPI])
    ], VgScrubBarCurrentTime);
    return VgScrubBarCurrentTime;
    var _a;
}(vg_abstract_control_1.VgAbstractControl));
exports.VgScrubBarCurrentTime = VgScrubBarCurrentTime;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctc2NydWItYmFyLWN1cnJlbnQtdGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLXNjcnViLWJhci1jdXJyZW50LXRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBRTNELHVCQUFvQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQy9DLG9DQUFnQywyQkFBMkIsQ0FBQyxDQUFBO0FBa0M1RDtJQUEyQyx5Q0FBaUI7SUFLeEQsK0JBQVksR0FBYyxFQUFTLEdBQVM7UUFDeEMsa0JBQU0sR0FBRyxDQUFDLENBQUM7UUFEb0IsUUFBRyxHQUFILEdBQUcsQ0FBTTtRQUV4QyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDbEMsQ0FBQztJQUVELDZDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCw2Q0FBYSxHQUFiO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQ2xHLENBQUM7SUFqREw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxRQUFRLEVBQUUsb0VBQWdFO1lBQzFFLE1BQU0sRUFBRSxDQUFDLGtyQkEyQlIsQ0FBQztTQUNMLENBQUM7OzZCQUFBO0lBbUJGLDRCQUFDOztBQUFELENBQUMsQUFsQkQsQ0FBMkMsdUNBQWlCLEdBa0IzRDtBQWxCWSw2QkFBcUIsd0JBa0JqQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtWZ0FQSX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7VmdBYnN0cmFjdENvbnRyb2x9IGZyb20gJy4uLy4uL3ZnLWFic3RyYWN0LWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLXNjcnViLWJhci1jdXJyZW50LXRpbWUnLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImJhY2tncm91bmRcIiBbc3R5bGUud2lkdGhdPVwiZ2V0UGVyY2VudGFnZSgpXCI+PC9kaXY+YCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLWNvbnRyb2xzIDpob3N0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSAzcHgpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLWNvbnRyb2xzIDpob3N0IC5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIFZnU2NydWJCYXJDdXJyZW50VGltZSBleHRlbmRzIFZnQWJzdHJhY3RDb250cm9sIHtcbiAgICBlbGVtOkhUTUxFbGVtZW50O1xuICAgIHZnRm9yOiBzdHJpbmc7XG4gICAgdGFyZ2V0OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6RWxlbWVudFJlZiwgcHVibGljIEFQSTpWZ0FQSSkge1xuICAgICAgICBzdXBlcihBUEkpO1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBvblBsYXllclJlYWR5KCkge1xuICAgICAgICB0aGlzLnZnRm9yID0gdGhpcy5lbGVtLmdldEF0dHJpYnV0ZSgndmctZm9yJyk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5BUEkuZ2V0TWVkaWFCeUlkKHRoaXMudmdGb3IpO1xuICAgIH1cblxuICAgIGdldFBlcmNlbnRhZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldCA/ICgodGhpcy50YXJnZXQudGltZS5jdXJyZW50ICogMTAwKSAvIHRoaXMudGFyZ2V0LnRpbWUudG90YWwpICsgJyUnIDogJzAlJztcbiAgICB9XG59XG4iXX0=