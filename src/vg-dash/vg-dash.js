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
var VgDASH = (function () {
    function VgDASH(ref, API) {
        var _this = this;
        this.ref = ref;
        this.API = API;
        this.API.playerReadyEvent.subscribe(function (api) { return _this.onPlayerReady(); });
    }
    VgDASH.prototype.onPlayerReady = function () {
        this.vgFor = this.ref.nativeElement.getAttribute('vg-for');
        this.target = this.API.getMediaById(this.vgFor);
        this.createPlayer();
    };
    VgDASH.prototype.ngOnChanges = function (changes) {
        if (changes['dashUrl'].currentValue) {
            this.createPlayer();
        }
        else {
            this.destroyPlayer();
        }
    };
    VgDASH.prototype.createPlayer = function () {
        if (this.player) {
            this.destroyPlayer();
        }
        // It's a DASH source
        if (this.dashUrl && this.dashUrl.indexOf('.mpd') > -1) {
            this.player = dashjs.MediaPlayer().create();
            this.player.getDebug().setLogToBrowserConsole(false);
            this.player.initialize(this.ref.nativeElement, this.dashUrl, false);
        }
        else {
            if (this.target) {
                this.target.pause();
                this.target.seekTime(0);
                this.ref.nativeElement.src = this.dashUrl;
            }
        }
    };
    VgDASH.prototype.destroyPlayer = function () {
        if (this.player) {
            this.player.reset();
            this.player = null;
        }
    };
    __decorate([
        core_1.Input('vg-dash'), 
        __metadata('design:type', String)
    ], VgDASH.prototype, "dashUrl", void 0);
    VgDASH = __decorate([
        core_1.Directive({
            selector: '[vg-dash]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, vg_api_1.VgAPI])
    ], VgDASH);
    return VgDASH;
    var _a;
}());
exports.VgDASH = VgDASH;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctZGFzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLWRhc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE0RCxlQUFlLENBQUMsQ0FBQTtBQUM1RSx1QkFBc0Isb0JBQW9CLENBQUMsQ0FBQTtBQU8zQztJQU9JLGdCQUFvQixHQUFjLEVBQVMsR0FBUztRQVB4RCxpQkFvREM7UUE3Q3VCLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFBUyxRQUFHLEdBQUgsR0FBRyxDQUFNO1FBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBUyxJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELDhCQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDRCQUFXLEdBQVgsVUFBWSxPQUFxQjtRQUM3QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUM7SUFDTCxDQUFDO0lBRUQsNkJBQVksR0FBWjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFFRCxxQkFBcUI7UUFDckIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hFLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM5QyxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFRCw4QkFBYSxHQUFiO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7SUFDTCxDQUFDO0lBbEREO1FBQUMsWUFBSyxDQUFDLFNBQVMsQ0FBQzs7MkNBQUE7SUFKckI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7U0FDeEIsQ0FBQzs7Y0FBQTtJQXFERixhQUFDOztBQUFELENBQUMsQUFwREQsSUFvREM7QUFwRFksY0FBTSxTQW9EbEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tIFwiLi4vc2VydmljZXMvdmctYXBpXCI7XG5cbmRlY2xhcmUgdmFyIGRhc2hqcztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbdmctZGFzaF0nXG59KVxuZXhwb3J0IGNsYXNzIFZnREFTSCB7XG4gICAgQElucHV0KCd2Zy1kYXNoJykgZGFzaFVybDpzdHJpbmc7XG5cbiAgICB2Z0Zvcjogc3RyaW5nO1xuICAgIHRhcmdldDogYW55O1xuICAgIHBsYXllcjphbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjpFbGVtZW50UmVmLCBwdWJsaWMgQVBJOlZnQVBJKSB7XG4gICAgICAgIHRoaXMuQVBJLnBsYXllclJlYWR5RXZlbnQuc3Vic2NyaWJlKChhcGk6VmdBUEkpID0+IHRoaXMub25QbGF5ZXJSZWFkeSgpKTtcbiAgICB9XG5cbiAgICBvblBsYXllclJlYWR5KCkge1xuICAgICAgICB0aGlzLnZnRm9yID0gdGhpcy5yZWYubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZnLWZvcicpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMuQVBJLmdldE1lZGlhQnlJZCh0aGlzLnZnRm9yKTtcbiAgICAgICAgdGhpcy5jcmVhdGVQbGF5ZXIoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOlNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKGNoYW5nZXNbJ2Rhc2hVcmwnXS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGxheWVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lQbGF5ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZVBsYXllcigpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lQbGF5ZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEl0J3MgYSBEQVNIIHNvdXJjZVxuICAgICAgICBpZiAodGhpcy5kYXNoVXJsICYmIHRoaXMuZGFzaFVybC5pbmRleE9mKCcubXBkJykgPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIgPSBkYXNoanMuTWVkaWFQbGF5ZXIoKS5jcmVhdGUoKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmdldERlYnVnKCkuc2V0TG9nVG9Ccm93c2VyQ29uc29sZShmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5pbml0aWFsaXplKHRoaXMucmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuZGFzaFVybCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQucGF1c2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5zZWVrVGltZSgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZi5uYXRpdmVFbGVtZW50LnNyYyA9IHRoaXMuZGFzaFVybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3lQbGF5ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXllcikge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==