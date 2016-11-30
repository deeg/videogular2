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
var VgHLS = (function () {
    function VgHLS(ref, API) {
        var _this = this;
        this.ref = ref;
        this.API = API;
        this.API.playerReadyEvent.subscribe(function (api) { return _this.onPlayerReady(); });
    }
    VgHLS.prototype.onPlayerReady = function () {
        this.vgFor = this.ref.nativeElement.getAttribute('vg-for');
        this.target = this.API.getMediaById(this.vgFor);
        this.createPlayer();
    };
    VgHLS.prototype.ngOnChanges = function (changes) {
        if (changes['hlsUrl'].currentValue) {
            this.createPlayer();
        }
        else {
            this.destroyPlayer();
        }
    };
    VgHLS.prototype.createPlayer = function () {
        if (this.hls) {
            this.destroyPlayer();
        }
        // It's a HLS source
        if (this.hlsUrl && this.hlsUrl.indexOf('.m3u8') > -1 && Hls.isSupported()) {
            var video = this.ref.nativeElement;
            this.hls = new Hls();
            this.hls.loadSource(this.hlsUrl);
            this.hls.attachMedia(video);
        }
        else {
            if (this.target) {
                this.target.pause();
                this.target.seekTime(0);
                this.ref.nativeElement.src = this.hlsUrl;
            }
        }
    };
    VgHLS.prototype.destroyPlayer = function () {
        if (this.hls) {
            this.hls.destroy();
            this.hls = null;
        }
    };
    __decorate([
        core_1.Input('vg-hls'), 
        __metadata('design:type', String)
    ], VgHLS.prototype, "hlsUrl", void 0);
    VgHLS = __decorate([
        core_1.Directive({
            selector: '[vg-hls]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, vg_api_1.VgAPI])
    ], VgHLS);
    return VgHLS;
    var _a;
}());
exports.VgHLS = VgHLS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctaGxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctaGxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNEQsZUFBZSxDQUFDLENBQUE7QUFDNUUsdUJBQXNCLG9CQUFvQixDQUFDLENBQUE7QUFPM0M7SUFPSSxlQUFvQixHQUFjLEVBQVMsR0FBUztRQVB4RCxpQkFzREM7UUEvQ3VCLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFBUyxRQUFHLEdBQUgsR0FBRyxDQUFNO1FBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBUyxJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELDZCQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDJCQUFXLEdBQVgsVUFBWSxPQUFxQjtRQUM3QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUM7SUFDTCxDQUFDO0lBRUQsNEJBQVksR0FBWjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFFRCxvQkFBb0I7UUFDcEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLElBQUksS0FBSyxHQUFvQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztZQUVwRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM3QyxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFRCw2QkFBYSxHQUFiO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUM7SUFDTCxDQUFDO0lBcEREO1FBQUMsWUFBSyxDQUFDLFFBQVEsQ0FBQzs7eUNBQUE7SUFKcEI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7U0FDdkIsQ0FBQzs7YUFBQTtJQXVERixZQUFDOztBQUFELENBQUMsQUF0REQsSUFzREM7QUF0RFksYUFBSyxRQXNEakIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tIFwiLi4vc2VydmljZXMvdmctYXBpXCI7XG5cbmRlY2xhcmUgdmFyIEhscztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbdmctaGxzXSdcbn0pXG5leHBvcnQgY2xhc3MgVmdITFMge1xuICAgIEBJbnB1dCgndmctaGxzJykgaGxzVXJsOnN0cmluZztcblxuICAgIHZnRm9yOiBzdHJpbmc7XG4gICAgdGFyZ2V0OiBhbnk7XG4gICAgaGxzOmFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVmOkVsZW1lbnRSZWYsIHB1YmxpYyBBUEk6VmdBUEkpIHtcbiAgICAgICAgdGhpcy5BUEkucGxheWVyUmVhZHlFdmVudC5zdWJzY3JpYmUoKGFwaTpWZ0FQSSkgPT4gdGhpcy5vblBsYXllclJlYWR5KCkpO1xuICAgIH1cblxuICAgIG9uUGxheWVyUmVhZHkoKSB7XG4gICAgICAgIHRoaXMudmdGb3IgPSB0aGlzLnJlZi5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgndmctZm9yJyk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5BUEkuZ2V0TWVkaWFCeUlkKHRoaXMudmdGb3IpO1xuICAgICAgICB0aGlzLmNyZWF0ZVBsYXllcigpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6U2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlc1snaGxzVXJsJ10uY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVBsYXllcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95UGxheWVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVQbGF5ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmhscykge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95UGxheWVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJdCdzIGEgSExTIHNvdXJjZVxuICAgICAgICBpZiAodGhpcy5obHNVcmwgJiYgdGhpcy5obHNVcmwuaW5kZXhPZignLm0zdTgnKSA+IC0xICYmIEhscy5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgICAgICB2YXIgdmlkZW86SFRNTFZpZGVvRWxlbWVudCA9IHRoaXMucmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgICAgIHRoaXMuaGxzID0gbmV3IEhscygpO1xuICAgICAgICAgICAgdGhpcy5obHMubG9hZFNvdXJjZSh0aGlzLmhsc1VybCk7XG4gICAgICAgICAgICB0aGlzLmhscy5hdHRhY2hNZWRpYSh2aWRlbyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnNlZWtUaW1lKDApO1xuICAgICAgICAgICAgICAgIHRoaXMucmVmLm5hdGl2ZUVsZW1lbnQuc3JjID0gdGhpcy5obHNVcmw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95UGxheWVyKCkge1xuICAgICAgICBpZiAodGhpcy5obHMpIHtcbiAgICAgICAgICAgIHRoaXMuaGxzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuaGxzID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==