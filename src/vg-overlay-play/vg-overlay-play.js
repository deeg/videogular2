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
var core_1 = require('@angular/core');
var vg_api_1 = require('../services/vg-api');
var vg_states_1 = require("../states/vg-states");
var VgOverlayPlay = (function () {
    function VgOverlayPlay(ref, API) {
        this.API = API;
        this.elem = ref.nativeElement;
    }
    VgOverlayPlay.prototype.ngOnInit = function () {
        this.vgFor = this.elem.getAttribute('vg-for');
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgOverlayPlay.prototype.onClick = function () {
        var state = this.getState();
        switch (state) {
            case vg_states_1.VgStates.VG_PLAYING:
                this.target.pause();
                break;
            case vg_states_1.VgStates.VG_PAUSED:
                this.target.play();
                break;
        }
    };
    VgOverlayPlay.prototype.getState = function () {
        var state = vg_states_1.VgStates.VG_PAUSED;
        if (this.target && this.target.state instanceof Array) {
            for (var i = 0, l = this.target.state.length; i < l; i++) {
                if (this.target.state[i] === vg_states_1.VgStates.VG_PLAYING) {
                    state = vg_states_1.VgStates.VG_PLAYING;
                    break;
                }
            }
        }
        else {
            state = this.target.state;
        }
        return state;
    };
    VgOverlayPlay = __decorate([
        core_1.Component({
            selector: 'vg-overlay-play',
            host: {
                '(click)': 'onClick()',
                'class': 'vg-overlay-play'
            },
            template: "<div class=\"vg-overlay-play\">\n            <div class=\"overlay-play-container\"\n                 [class.vg-icon-play_arrow]=\"getState() !== 'playing'\">\n            </div>\n        </div>",
            styles: ["\n        :host {\n            z-index: 200;\n        }\n        .vg-overlay-play {\n            transition: all 0.5s;\n            cursor: pointer;\n            position: absolute;\n            display: block;\n            color: white;\n            width: 100%;\n            height: 100%;\n            font-size: 80px;\n            filter: alpha(opacity=60);\n            opacity: 0.6;\n        }\n\n        .vg-overlay-play .overlay-play-container.vg-icon-play_arrow {\n            pointer-events: none;\n            width: 100%;\n            height: 100%;\n            position: absolute;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            font-size: 80px;\n        }\n\n        .vg-overlay-play:hover {\n            filter: alpha(opacity=100);\n            opacity: 1;\n        }\n\n        .vg-overlay-play:hover .overlay-play-container.vg-icon-play_arrow:before {\n            transform: scale(1.2);\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, vg_api_1.VgAPI])
    ], VgOverlayPlay);
    return VgOverlayPlay;
    var _a;
}());
exports.VgOverlayPlay = VgOverlayPlay;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctb3ZlcmxheS1wbGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctb3ZlcmxheS1wbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBbUQsZUFBZSxDQUFDLENBQUE7QUFFbkUsdUJBQW9CLG9CQUFvQixDQUFDLENBQUE7QUFDekMsMEJBQXVCLHFCQUFxQixDQUFDLENBQUE7QUFvRDdDO0lBS0ksdUJBQVksR0FBYyxFQUFTLEdBQVU7UUFBVixRQUFHLEdBQUgsR0FBRyxDQUFPO1FBQ3pDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUNsQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFNUIsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNaLEtBQUssb0JBQVEsQ0FBQyxVQUFVO2dCQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNwQixLQUFLLENBQUM7WUFFVixLQUFLLG9CQUFRLENBQUMsU0FBUztnQkFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkIsS0FBSyxDQUFDO1FBQ2QsQ0FBQztJQUNMLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxLQUFLLEdBQUcsb0JBQVEsQ0FBQyxTQUFTLENBQUM7UUFFL0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3BELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDdkQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssb0JBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUMvQyxLQUFLLEdBQUcsb0JBQVEsQ0FBQyxVQUFVLENBQUM7b0JBQzVCLEtBQUssQ0FBQztnQkFDVixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUM5QixDQUFDO1FBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBOUZMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsSUFBSSxFQUFFO2dCQUNGLFNBQVMsRUFBRSxXQUFXO2dCQUN0QixPQUFPLEVBQUUsaUJBQWlCO2FBQzdCO1lBQ0QsUUFBUSxFQUNKLG1NQUlPO1lBQ1gsTUFBTSxFQUFFLENBQUMsMjlCQW9DUixDQUFDO1NBQ0wsQ0FBQzs7cUJBQUE7SUE4Q0Ysb0JBQUM7O0FBQUQsQ0FBQyxBQTdDRCxJQTZDQztBQTdDWSxxQkFBYSxnQkE2Q3pCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7VmdBUEl9IGZyb20gJy4uL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQge1ZnU3RhdGVzfSBmcm9tIFwiLi4vc3RhdGVzL3ZnLXN0YXRlc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLW92ZXJsYXktcGxheScsXG4gICAgaG9zdDoge1xuICAgICAgICAnKGNsaWNrKSc6ICdvbkNsaWNrKCknLFxuICAgICAgICAnY2xhc3MnOiAndmctb3ZlcmxheS1wbGF5J1xuICAgIH0sXG4gICAgdGVtcGxhdGU6XG4gICAgICAgIGA8ZGl2IGNsYXNzPVwidmctb3ZlcmxheS1wbGF5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheS1wbGF5LWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgIFtjbGFzcy52Zy1pY29uLXBsYXlfYXJyb3ddPVwiZ2V0U3RhdGUoKSAhPT0gJ3BsYXlpbmcnXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIHotaW5kZXg6IDIwMDtcbiAgICAgICAgfVxuICAgICAgICAudmctb3ZlcmxheS1wbGF5IHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICAgICAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT02MCk7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cblxuICAgICAgICAudmctb3ZlcmxheS1wbGF5IC5vdmVybGF5LXBsYXktY29udGFpbmVyLnZnLWljb24tcGxheV9hcnJvdyB7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52Zy1vdmVybGF5LXBsYXk6aG92ZXIge1xuICAgICAgICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZnLW92ZXJsYXktcGxheTpob3ZlciAub3ZlcmxheS1wbGF5LWNvbnRhaW5lci52Zy1pY29uLXBsYXlfYXJyb3c6YmVmb3JlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIFZnT3ZlcmxheVBsYXkgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGVsZW06SFRNTEVsZW1lbnQ7XG4gICAgdmdGb3I6IHN0cmluZztcbiAgICB0YXJnZXQ6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHJlZjpFbGVtZW50UmVmLCBwdWJsaWMgQVBJOiBWZ0FQSSkge1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy52Z0ZvciA9IHRoaXMuZWxlbS5nZXRBdHRyaWJ1dGUoJ3ZnLWZvcicpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMuQVBJLmdldE1lZGlhQnlJZCh0aGlzLnZnRm9yKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrKCkge1xuICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSBWZ1N0YXRlcy5WR19QTEFZSU5HOlxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgVmdTdGF0ZXMuVkdfUEFVU0VEOlxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnBsYXkoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFN0YXRlKCkge1xuICAgICAgICB2YXIgc3RhdGUgPSBWZ1N0YXRlcy5WR19QQVVTRUQ7XG5cbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0ICYmIHRoaXMudGFyZ2V0LnN0YXRlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy50YXJnZXQuc3RhdGUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0LnN0YXRlW2ldID09PSBWZ1N0YXRlcy5WR19QTEFZSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gVmdTdGF0ZXMuVkdfUExBWUlORztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUgPSB0aGlzLnRhcmdldC5zdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG4iXX0=