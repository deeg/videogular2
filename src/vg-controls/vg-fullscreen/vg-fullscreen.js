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
var vg_fullscreen_api_1 = require("../../services/vg-fullscreen-api");
var vg_abstract_control_1 = require('../vg-abstract-control');
var VgFullscreen = (function (_super) {
    __extends(VgFullscreen, _super);
    function VgFullscreen(ref, API) {
        _super.call(this, API);
        this.API = API;
        this.isFullscreen = false;
        this.elem = ref.nativeElement;
        vg_fullscreen_api_1.VgFullscreenAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this));
    }
    VgFullscreen.prototype.onChangeFullscreen = function (fsState) {
        this.isFullscreen = fsState;
    };
    VgFullscreen.prototype.onPlayerReady = function () {
        this.vgFor = this.elem.getAttribute('vg-for');
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgFullscreen.prototype.onClick = function () {
        var element = this.target;
        if (this.target instanceof vg_api_1.VgAPI) {
            element = null;
        }
        vg_fullscreen_api_1.VgFullscreenAPI.toggleFullscreen(element);
    };
    VgFullscreen = __decorate([
        core_1.Component({
            selector: 'vg-fullscreen',
            host: {
                '(click)': 'onClick()'
            },
            template: "<div class=\"icon\"\n             [class.vg-icon-fullscreen]=\"!isFullscreen\"\n             [class.vg-icon-fullscreen_exit]=\"isFullscreen\">\n        </div>",
            styles: ["\n        :host {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        :host .icon {\n            pointer-events: none;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, vg_api_1.VgAPI])
    ], VgFullscreen);
    return VgFullscreen;
    var _a;
}(vg_abstract_control_1.VgAbstractControl));
exports.VgFullscreen = VgFullscreen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctZnVsbHNjcmVlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLWZ1bGxzY3JlZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBRTNELHVCQUFvQix1QkFBdUIsQ0FBQyxDQUFBO0FBQzVDLGtDQUE4QixrQ0FBa0MsQ0FBQyxDQUFBO0FBQ2pFLG9DQUFnQyx3QkFBd0IsQ0FBQyxDQUFBO0FBa0N6RDtJQUFrQyxnQ0FBaUI7SUFNL0Msc0JBQVksR0FBYyxFQUFTLEdBQVM7UUFDeEMsa0JBQU0sR0FBRyxDQUFDLENBQUM7UUFEb0IsUUFBRyxHQUFILEdBQUcsQ0FBTTtRQUY1QyxpQkFBWSxHQUFXLEtBQUssQ0FBQztRQUl6QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7UUFDOUIsbUNBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRCx5Q0FBa0IsR0FBbEIsVUFBbUIsT0FBZTtRQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztJQUNoQyxDQUFDO0lBRUQsb0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELDhCQUFPLEdBQVA7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTFCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLFlBQVksY0FBSyxDQUFDLENBQUMsQ0FBQztZQUMvQixPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25CLENBQUM7UUFFRCxtQ0FBZSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUE3REw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsSUFBSSxFQUFFO2dCQUNGLFNBQVMsRUFBRSxXQUFXO2FBQ3pCO1lBQ0QsUUFBUSxFQUNKLGdLQUdPO1lBQ1gsTUFBTSxFQUFFLENBQUMsNmhCQW9CUixDQUFDO1NBQ0wsQ0FBQzs7b0JBQUE7SUErQkYsbUJBQUM7O0FBQUQsQ0FBQyxBQTlCRCxDQUFrQyx1Q0FBaUIsR0E4QmxEO0FBOUJZLG9CQUFZLGVBOEJ4QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtWZ0FQSX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7VmdGdWxsc2NyZWVuQVBJfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdmctZnVsbHNjcmVlbi1hcGlcIjtcbmltcG9ydCB7VmdBYnN0cmFjdENvbnRyb2x9IGZyb20gJy4uL3ZnLWFic3RyYWN0LWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLWZ1bGxzY3JlZW4nLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJyhjbGljayknOiAnb25DbGljaygpJ1xuICAgIH0sXG4gICAgdGVtcGxhdGU6XG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiaWNvblwiXG4gICAgICAgICAgICAgW2NsYXNzLnZnLWljb24tZnVsbHNjcmVlbl09XCIhaXNGdWxsc2NyZWVuXCJcbiAgICAgICAgICAgICBbY2xhc3MudmctaWNvbi1mdWxsc2NyZWVuX2V4aXRdPVwiaXNGdWxsc2NyZWVuXCI+XG4gICAgICAgIDwvZGl2PmAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0IC5pY29uIHtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgVmdGdWxsc2NyZWVuIGV4dGVuZHMgVmdBYnN0cmFjdENvbnRyb2wge1xuICAgIGVsZW06SFRNTEVsZW1lbnQ7XG4gICAgdmdGb3I6c3RyaW5nO1xuICAgIHRhcmdldDpPYmplY3Q7XG4gICAgaXNGdWxsc2NyZWVuOmJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHJlZjpFbGVtZW50UmVmLCBwdWJsaWMgQVBJOlZnQVBJKSB7XG4gICAgICAgIHN1cGVyKEFQSSk7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICBWZ0Z1bGxzY3JlZW5BUEkub25DaGFuZ2VGdWxsc2NyZWVuLnN1YnNjcmliZSh0aGlzLm9uQ2hhbmdlRnVsbHNjcmVlbi5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZUZ1bGxzY3JlZW4oZnNTdGF0ZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaXNGdWxsc2NyZWVuID0gZnNTdGF0ZTtcbiAgICB9XG5cbiAgICBvblBsYXllclJlYWR5KCkge1xuICAgICAgICB0aGlzLnZnRm9yID0gdGhpcy5lbGVtLmdldEF0dHJpYnV0ZSgndmctZm9yJyk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5BUEkuZ2V0TWVkaWFCeUlkKHRoaXMudmdGb3IpO1xuICAgIH1cblxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy50YXJnZXQ7XG5cbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0IGluc3RhbmNlb2YgVmdBUEkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgVmdGdWxsc2NyZWVuQVBJLnRvZ2dsZUZ1bGxzY3JlZW4oZWxlbWVudCk7XG4gICAgfVxufVxuIl19