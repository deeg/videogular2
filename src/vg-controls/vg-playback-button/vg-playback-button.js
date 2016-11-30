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
var VgPlaybackButton = (function (_super) {
    __extends(VgPlaybackButton, _super);
    function VgPlaybackButton(ref, API) {
        _super.call(this, API);
        this.API = API;
        this.elem = ref.nativeElement;
        this.playbackValues = ['0.5', '1.0', '1.5', '2.0'];
        this.playbackIndex = 1;
    }
    VgPlaybackButton.prototype.onPlayerReady = function () {
        this.vgFor = this.elem.getAttribute('vg-for');
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgPlaybackButton.prototype.onClick = function () {
        this.playbackIndex = ++this.playbackIndex % this.playbackValues.length;
        if (this.target instanceof vg_api_1.VgAPI) {
            this.target.playbackRate = (this.playbackValues[this.playbackIndex]);
        }
        else {
            this.target.playbackRate[this.vgFor] = (this.playbackValues[this.playbackIndex]);
        }
    };
    VgPlaybackButton.prototype.getPlaybackRate = function () {
        return this.target ? this.target.playbackRate : 1.0;
    };
    VgPlaybackButton = __decorate([
        core_1.Component({
            selector: 'vg-playback-button',
            host: {
                '(click)': 'onClick()'
            },
            template: "{{getPlaybackRate()}}x",
            styles: ["\n        :host {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n            width: 50px;\n            color: white;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, vg_api_1.VgAPI])
    ], VgPlaybackButton);
    return VgPlaybackButton;
    var _a;
}(vg_abstract_control_1.VgAbstractControl));
exports.VgPlaybackButton = VgPlaybackButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctcGxheWJhY2stYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctcGxheWJhY2stYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUUzRCx1QkFBb0IsdUJBQXVCLENBQUMsQ0FBQTtBQUM1QyxvQ0FBZ0Msd0JBQXdCLENBQUMsQ0FBQTtBQTZCekQ7SUFBc0Msb0NBQWlCO0lBUW5ELDBCQUFZLEdBQWMsRUFBUyxHQUFTO1FBQ3hDLGtCQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRG9CLFFBQUcsR0FBSCxHQUFHLENBQU07UUFFeEMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsd0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELGtDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUV2RSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxZQUFZLGNBQUssQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDckYsQ0FBQztJQUNMLENBQUM7SUFFRCwwQ0FBZSxHQUFmO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO0lBQ3hELENBQUM7SUE1REw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixJQUFJLEVBQUU7Z0JBQ0YsU0FBUyxFQUFFLFdBQVc7YUFDekI7WUFDRCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLE1BQU0sRUFBRSxDQUFDLG1sQkFtQlIsQ0FBQztTQUNMLENBQUM7O3dCQUFBO0lBbUNGLHVCQUFDOztBQUFELENBQUMsQUFsQ0QsQ0FBc0MsdUNBQWlCLEdBa0N0RDtBQWxDWSx3QkFBZ0IsbUJBa0M1QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtWZ0FQSX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7VmdBYnN0cmFjdENvbnRyb2x9IGZyb20gJy4uL3ZnLWFic3RyYWN0LWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLXBsYXliYWNrLWJ1dHRvbicsXG4gICAgaG9zdDoge1xuICAgICAgICAnKGNsaWNrKSc6ICdvbkNsaWNrKCknXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogYHt7Z2V0UGxheWJhY2tSYXRlKCl9fXhgLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIFZnUGxheWJhY2tCdXR0b24gZXh0ZW5kcyBWZ0Fic3RyYWN0Q29udHJvbCB7XG4gICAgZWxlbTpIVE1MRWxlbWVudDtcbiAgICB2Z0Zvcjogc3RyaW5nO1xuICAgIHRhcmdldDogYW55O1xuXG4gICAgcGxheWJhY2tWYWx1ZXM6IEFycmF5PHN0cmluZz47XG4gICAgcGxheWJhY2tJbmRleDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocmVmOkVsZW1lbnRSZWYsIHB1YmxpYyBBUEk6VmdBUEkpIHtcbiAgICAgICAgc3VwZXIoQVBJKTtcbiAgICAgICAgdGhpcy5lbGVtID0gcmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMucGxheWJhY2tWYWx1ZXMgPSBbJzAuNScsICcxLjAnLCAnMS41JywgJzIuMCddO1xuICAgICAgICB0aGlzLnBsYXliYWNrSW5kZXggPSAxO1xuICAgIH1cblxuICAgIG9uUGxheWVyUmVhZHkoKSB7XG4gICAgICAgIHRoaXMudmdGb3IgPSB0aGlzLmVsZW0uZ2V0QXR0cmlidXRlKCd2Zy1mb3InKTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG4gICAgfVxuXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5wbGF5YmFja0luZGV4ID0gKyt0aGlzLnBsYXliYWNrSW5kZXggJSB0aGlzLnBsYXliYWNrVmFsdWVzLmxlbmd0aDtcblxuICAgICAgICBpZiAodGhpcy50YXJnZXQgaW5zdGFuY2VvZiBWZ0FQSSkge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQucGxheWJhY2tSYXRlID0gKHRoaXMucGxheWJhY2tWYWx1ZXNbdGhpcy5wbGF5YmFja0luZGV4XSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5wbGF5YmFja1JhdGVbdGhpcy52Z0Zvcl0gPSAodGhpcy5wbGF5YmFja1ZhbHVlc1t0aGlzLnBsYXliYWNrSW5kZXhdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFBsYXliYWNrUmF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ID8gdGhpcy50YXJnZXQucGxheWJhY2tSYXRlIDogMS4wO1xuICAgIH1cbn1cbiJdfQ==