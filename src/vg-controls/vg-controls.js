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
var Observable_1 = require("rxjs/Observable");
var vg_api_1 = require("../services/vg-api");
var vg_abstract_control_1 = require('./vg-abstract-control');
var VgControls = (function (_super) {
    __extends(VgControls, _super);
    function VgControls(API, ref) {
        _super.call(this, API);
        this.API = API;
        this.ref = ref;
        this.isAdsPlaying = 'initial';
        this.hideControls = false;
        this.autohide = false;
        this.autohideTime = 3;
        this.elem = ref.nativeElement;
    }
    VgControls.prototype.onPlayerReady = function () {
        this.vgFor = this.elem.getAttribute('vg-for');
        this.target = this.API.getMediaById(this.vgFor);
        this.target.subscriptions.startAds.subscribe(this.onStartAds.bind(this));
        this.target.subscriptions.endAds.subscribe(this.onEndAds.bind(this));
    };
    VgControls.prototype.ngOnInit = function () {
        var mouseEnter = Observable_1.Observable.fromEvent(this.API.videogularElement, 'mouseenter');
        mouseEnter.subscribe(this.show.bind(this));
        var mouseLeave = Observable_1.Observable.fromEvent(this.API.videogularElement, 'mouseleave');
        mouseLeave.subscribe(this.hide.bind(this));
    };
    VgControls.prototype.ngAfterViewInit = function () {
        if (this.autohide) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    VgControls.prototype.onStartAds = function () {
        this.isAdsPlaying = 'none';
    };
    VgControls.prototype.onEndAds = function () {
        this.isAdsPlaying = 'initial';
    };
    VgControls.prototype.hide = function () {
        if (this.autohide) {
            clearTimeout(this.timer);
            this.hideAsync();
        }
    };
    VgControls.prototype.show = function () {
        clearTimeout(this.timer);
        this.hideControls = false;
    };
    VgControls.prototype.hideAsync = function () {
        var _this = this;
        this.timer = setTimeout(function () {
            _this.hideControls = true;
        }, this.autohideTime * 1000);
    };
    __decorate([
        core_1.HostBinding('style.pointer-events'), 
        __metadata('design:type', String)
    ], VgControls.prototype, "isAdsPlaying", void 0);
    __decorate([
        core_1.HostBinding('class.hide'), 
        __metadata('design:type', Boolean)
    ], VgControls.prototype, "hideControls", void 0);
    __decorate([
        core_1.Input('autohide'), 
        __metadata('design:type', Boolean)
    ], VgControls.prototype, "autohide", void 0);
    __decorate([
        core_1.Input('autohide-time'), 
        __metadata('design:type', Number)
    ], VgControls.prototype, "autohideTime", void 0);
    VgControls = __decorate([
        core_1.Component({
            selector: 'vg-controls',
            template: "<ng-content></ng-content>",
            styles: ["\n        :host {\n            position: absolute;\n            display: flex;\n            width: 100%;\n            height: 50px;\n            z-index: 300;\n            bottom: 0;\n            background-color: rgba(0, 0, 0, 0.5);\n            -webkit-transition: bottom 1s;\n            -khtml-transition: bottom 1s;\n            -moz-transition: bottom 1s;\n            -ms-transition: bottom 1s;\n            transition: bottom 1s;\n        }\n\n        :host.hide {\n          bottom: -50px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [vg_api_1.VgAPI, (typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], VgControls);
    return VgControls;
    var _a;
}(vg_abstract_control_1.VgAbstractControl));
exports.VgControls = VgControls;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctY29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1jb250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEUsZUFBZSxDQUFDLENBQUE7QUFDMUYsMkJBQXlCLGlCQUFpQixDQUFDLENBQUE7QUFDM0MsdUJBQW9CLG9CQUFvQixDQUFDLENBQUE7QUFDekMsb0NBQWdDLHVCQUF1QixDQUFDLENBQUE7QUEwQnhEO0lBQWdDLDhCQUFpQjtJQWE3QyxvQkFBb0IsR0FBUyxFQUFVLEdBQWM7UUFDakQsa0JBQU0sR0FBRyxDQUFDLENBQUM7UUFESyxRQUFHLEdBQUgsR0FBRyxDQUFNO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBVztRQVJoQixpQkFBWSxHQUFVLFNBQVMsQ0FBQztRQUMxQyxpQkFBWSxHQUFXLEtBQUssQ0FBQztRQUVyQyxhQUFRLEdBQVcsS0FBSyxDQUFDO1FBQ3BCLGlCQUFZLEdBQVUsQ0FBQyxDQUFDO1FBTTVDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUNsQyxDQUFDO0lBRUQsa0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsNkJBQVEsR0FBUjtRQUNJLElBQUksVUFBVSxHQUFHLHVCQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDaEYsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTNDLElBQUksVUFBVSxHQUFHLHVCQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDaEYsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxvQ0FBZSxHQUFmO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDO0lBQ0wsQ0FBQztJQUVELCtCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztJQUMvQixDQUFDO0lBRUQsNkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO0lBQ2xDLENBQUM7SUFFRCx5QkFBSSxHQUFKO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEIsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQztJQUNMLENBQUM7SUFFRCx5QkFBSSxHQUFKO1FBQ0ksWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRU8sOEJBQVMsR0FBakI7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzdCLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUE5REQ7UUFBQyxrQkFBVyxDQUFDLHNCQUFzQixDQUFDOztvREFBQTtJQUNwQztRQUFDLGtCQUFXLENBQUMsWUFBWSxDQUFDOztvREFBQTtJQUUxQjtRQUFDLFlBQUssQ0FBQyxVQUFVLENBQUM7O2dEQUFBO0lBQ2xCO1FBQUMsWUFBSyxDQUFDLGVBQWUsQ0FBQzs7b0RBQUE7SUFqQzNCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsTUFBTSxFQUFFLENBQUMscWdCQW1CUixDQUFDO1NBQ0wsQ0FBQzs7a0JBQUE7SUFxRUYsaUJBQUM7O0FBQUQsQ0FBQyxBQXBFRCxDQUFnQyx1Q0FBaUIsR0FvRWhEO0FBcEVZLGtCQUFVLGFBb0V0QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyLCBIb3N0QmluZGluZ30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7VmdBUEl9IGZyb20gXCIuLi9zZXJ2aWNlcy92Zy1hcGlcIjtcbmltcG9ydCB7VmdBYnN0cmFjdENvbnRyb2x9IGZyb20gJy4vdmctYWJzdHJhY3QtY29udHJvbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctY29udHJvbHMnLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAzMDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvdHRvbSAxcztcbiAgICAgICAgICAgIC1raHRtbC10cmFuc2l0aW9uOiBib3R0b20gMXM7XG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGJvdHRvbSAxcztcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBib3R0b20gMXM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBib3R0b20gMXM7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdC5oaWRlIHtcbiAgICAgICAgICBib3R0b206IC01MHB4O1xuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgVmdDb250cm9scyBleHRlbmRzIFZnQWJzdHJhY3RDb250cm9sIHtcbiAgICBlbGVtOkhUTUxFbGVtZW50O1xuICAgIHZnRm9yOnN0cmluZztcbiAgICB0YXJnZXQ6YW55O1xuXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wb2ludGVyLWV2ZW50cycpIGlzQWRzUGxheWluZzpzdHJpbmcgPSAnaW5pdGlhbCc7XG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5oaWRlJykgaGlkZUNvbnRyb2xzOmJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgnYXV0b2hpZGUnKSBhdXRvaGlkZTpib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCdhdXRvaGlkZS10aW1lJykgYXV0b2hpZGVUaW1lOm51bWJlciA9IDM7XG5cbiAgICBwcml2YXRlIHRpbWVyOmFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgQVBJOlZnQVBJLCBwcml2YXRlIHJlZjpFbGVtZW50UmVmKSB7XG4gICAgICAgIHN1cGVyKEFQSSk7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIG9uUGxheWVyUmVhZHkoKSB7XG4gICAgICAgIHRoaXMudmdGb3IgPSB0aGlzLmVsZW0uZ2V0QXR0cmlidXRlKCd2Zy1mb3InKTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG5cbiAgICAgICAgdGhpcy50YXJnZXQuc3Vic2NyaXB0aW9ucy5zdGFydEFkcy5zdWJzY3JpYmUodGhpcy5vblN0YXJ0QWRzLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnRhcmdldC5zdWJzY3JpcHRpb25zLmVuZEFkcy5zdWJzY3JpYmUodGhpcy5vbkVuZEFkcy5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdmFyIG1vdXNlRW50ZXIgPSBPYnNlcnZhYmxlLmZyb21FdmVudCh0aGlzLkFQSS52aWRlb2d1bGFyRWxlbWVudCwgJ21vdXNlZW50ZXInKTtcbiAgICAgICAgbW91c2VFbnRlci5zdWJzY3JpYmUodGhpcy5zaG93LmJpbmQodGhpcykpO1xuXG4gICAgICAgIHZhciBtb3VzZUxlYXZlID0gT2JzZXJ2YWJsZS5mcm9tRXZlbnQodGhpcy5BUEkudmlkZW9ndWxhckVsZW1lbnQsICdtb3VzZWxlYXZlJyk7XG4gICAgICAgIG1vdXNlTGVhdmUuc3Vic2NyaWJlKHRoaXMuaGlkZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9oaWRlKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdGFydEFkcygpIHtcbiAgICAgICAgdGhpcy5pc0Fkc1BsYXlpbmcgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgb25FbmRBZHMoKSB7XG4gICAgICAgIHRoaXMuaXNBZHNQbGF5aW5nID0gJ2luaXRpYWwnO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9oaWRlKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgICAgICB0aGlzLmhpZGVBc3luYygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLmhpZGVDb250cm9scyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGlkZUFzeW5jKCkge1xuICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGVDb250cm9scyA9IHRydWU7XG4gICAgICAgIH0sIHRoaXMuYXV0b2hpZGVUaW1lICogMTAwMCk7XG4gICAgfVxufVxuIl19