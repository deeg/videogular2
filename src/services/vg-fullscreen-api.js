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
var vg_utils_1 = require("./vg-utils");
var VgFullscreenAPI = (function () {
    function VgFullscreenAPI() {
    }
    VgFullscreenAPI.init = function (elem, medias) {
        this.videogularElement = elem;
        this.medias = medias;
        var APIs = {
            w3: {
                enabled: 'fullscreenEnabled',
                element: 'fullscreenElement',
                request: 'requestFullscreen',
                exit: 'exitFullscreen',
                onchange: 'fullscreenchange',
                onerror: 'fullscreenerror'
            },
            newWebkit: {
                enabled: 'webkitFullscreenEnabled',
                element: 'webkitFullscreenElement',
                request: 'webkitRequestFullscreen',
                exit: 'webkitExitFullscreen',
                onchange: 'webkitfullscreenchange',
                onerror: 'webkitfullscreenerror'
            },
            oldWebkit: {
                enabled: 'webkitIsFullScreen',
                element: 'webkitCurrentFullScreenElement',
                request: 'webkitRequestFullScreen',
                exit: 'webkitCancelFullScreen',
                onchange: 'webkitfullscreenchange',
                onerror: 'webkitfullscreenerror'
            },
            moz: {
                enabled: 'mozFullScreen',
                element: 'mozFullScreenElement',
                request: 'mozRequestFullScreen',
                exit: 'mozCancelFullScreen',
                onchange: 'mozfullscreenchange',
                onerror: 'mozfullscreenerror'
            },
            ios: {
                enabled: 'webkitFullscreenEnabled',
                element: 'webkitFullscreenElement',
                request: 'webkitEnterFullscreen',
                exit: 'webkitExitFullscreen',
                onchange: 'webkitfullscreenchange',
                onerror: 'webkitfullscreenerror'
            },
            ms: {
                enabled: 'msFullscreenEnabled',
                element: 'msFullscreenElement',
                request: 'msRequestFullscreen',
                exit: 'msExitFullscreen',
                onchange: 'MSFullscreenChange',
                onerror: 'MSFullscreenError'
            }
        };
        for (var browser in APIs) {
            if (APIs[browser].enabled in document) {
                this.polyfill = APIs[browser];
                break;
            }
        }
        this.isAvailable = (this.polyfill != null);
    };
    VgFullscreenAPI.toggleFullscreen = function (element) {
        if (element === void 0) { element = null; }
        if (this.isFullscreen) {
            this.exit();
        }
        else {
            this.request(element);
        }
    };
    VgFullscreenAPI.request = function (elem) {
        if (!elem)
            elem = this.videogularElement;
        this.isFullscreen = true;
        this.onChangeFullscreen.next(true);
        // Perform native full screen support
        if (this.isAvailable && this.nativeFullscreen) {
            // Fullscreen for mobile devices
            if (vg_utils_1.VgUtils.isMobileDevice()) {
                // We should make fullscreen the video object if it doesn't have native fullscreen support
                // Fallback! We can't set vg-player on fullscreen, only video/audio objects
                if (!this.polyfill.enabled && elem === this.videogularElement) {
                    elem = this.medias[0];
                }
                this.enterElementInFullScreen(elem);
            }
            else {
                this.enterElementInFullScreen(this.videogularElement);
            }
        }
    };
    VgFullscreenAPI.enterElementInFullScreen = function (elem) {
        elem[this.polyfill.request]();
    };
    VgFullscreenAPI.exit = function () {
        this.isFullscreen = false;
        this.onChangeFullscreen.next(false);
        // Exit from native fullscreen
        if (this.isAvailable && this.nativeFullscreen) {
            document[this.polyfill.exit]();
        }
    };
    VgFullscreenAPI.nativeFullscreen = true;
    VgFullscreenAPI.isFullscreen = false;
    VgFullscreenAPI.onChangeFullscreen = new core_1.EventEmitter();
    VgFullscreenAPI = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], VgFullscreenAPI);
    return VgFullscreenAPI;
}());
exports.VgFullscreenAPI = VgFullscreenAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctZnVsbHNjcmVlbi1hcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1mdWxsc2NyZWVuLWFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtELGVBQWUsQ0FBQyxDQUFBO0FBQ2xFLHlCQUFzQixZQUFZLENBQUMsQ0FBQTtBQUluQztJQUFBO0lBMkhBLENBQUM7SUEvR1Usb0JBQUksR0FBWCxVQUFZLElBQWdCLEVBQUUsTUFBeUI7UUFDbkQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFNLElBQUksR0FBRztZQUNULEVBQUUsRUFBRTtnQkFDQSxPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixPQUFPLEVBQUUsaUJBQWlCO2FBQzdCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLE9BQU8sRUFBRSx5QkFBeUI7Z0JBQ2xDLE9BQU8sRUFBRSx5QkFBeUI7Z0JBQ2xDLE9BQU8sRUFBRSx5QkFBeUI7Z0JBQ2xDLElBQUksRUFBRSxzQkFBc0I7Z0JBQzVCLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLE9BQU8sRUFBRSx1QkFBdUI7YUFDbkM7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLG9CQUFvQjtnQkFDN0IsT0FBTyxFQUFFLGdDQUFnQztnQkFDekMsT0FBTyxFQUFFLHlCQUF5QjtnQkFDbEMsSUFBSSxFQUFFLHdCQUF3QjtnQkFDOUIsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsT0FBTyxFQUFFLHVCQUF1QjthQUNuQztZQUNELEdBQUcsRUFBRTtnQkFDRCxPQUFPLEVBQUUsZUFBZTtnQkFDeEIsT0FBTyxFQUFFLHNCQUFzQjtnQkFDL0IsT0FB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MUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVwQyw4QkFBOEI7UUFDOUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQzVDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDbkMsQ0FBQztJQUNMLENBQUM7SUF0SE0sZ0NBQWdCLEdBQVcsSUFBSSxDQUFDO0lBQ2hDLDRCQUFZLEdBQVcsS0FBSyxDQUFDO0lBSzdCLGtDQUFrQixHQUFxQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQVhyRTtRQUFDLGlCQUFVLEVBQUU7O3VCQUFBO0lBNEhiLHNCQUFDO0FBQUQsQ0FBQyxBQTNIRCxJQTJIQztBQTNIWSx1QkFBZSxrQkEySDNCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIEV2ZW50RW1pdHRlciwgUXVlcnlMaXN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VmdVdGlsc30gZnJvbSBcIi4vdmctdXRpbHNcIjtcbmltcG9ydCB7VmdNZWRpYX0gZnJvbSBcIi4uL3ZnLW1lZGlhL3ZnLW1lZGlhXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZ0Z1bGxzY3JlZW5BUEkge1xuICAgIHN0YXRpYyBwb2x5ZmlsbDphbnk7XG4gICAgc3RhdGljIG9uY2hhbmdlOnN0cmluZztcbiAgICBzdGF0aWMgb25lcnJvcjpzdHJpbmc7XG4gICAgc3RhdGljIG5hdGl2ZUZ1bGxzY3JlZW46Ym9vbGVhbiA9IHRydWU7XG4gICAgc3RhdGljIGlzRnVsbHNjcmVlbjpib29sZWFuID0gZmFsc2U7XG4gICAgc3RhdGljIGlzQXZhaWxhYmxlOmJvb2xlYW47XG4gICAgc3RhdGljIHZpZGVvZ3VsYXJFbGVtZW50OkhUTUxFbGVtZW50O1xuICAgIHN0YXRpYyBtZWRpYXM6UXVlcnlMaXN0PFZnTWVkaWE+O1xuXG4gICAgc3RhdGljIG9uQ2hhbmdlRnVsbHNjcmVlbjpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHN0YXRpYyBpbml0KGVsZW06SFRNTEVsZW1lbnQsIG1lZGlhczpRdWVyeUxpc3Q8VmdNZWRpYT4pIHtcbiAgICAgICAgdGhpcy52aWRlb2d1bGFyRWxlbWVudCA9IGVsZW07XG4gICAgICAgIHRoaXMubWVkaWFzID0gbWVkaWFzO1xuXG4gICAgICAgIGNvbnN0IEFQSXMgPSB7XG4gICAgICAgICAgICB3Mzoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6ICdmdWxsc2NyZWVuRW5hYmxlZCcsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogJ2Z1bGxzY3JlZW5FbGVtZW50JyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiAncmVxdWVzdEZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgICAgIGV4aXQ6ICdleGl0RnVsbHNjcmVlbicsXG4gICAgICAgICAgICAgICAgb25jaGFuZ2U6ICdmdWxsc2NyZWVuY2hhbmdlJyxcbiAgICAgICAgICAgICAgICBvbmVycm9yOiAnZnVsbHNjcmVlbmVycm9yJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5ld1dlYmtpdDoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6ICd3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCcsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogJ3dlYmtpdEZ1bGxzY3JlZW5FbGVtZW50JyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiAnd2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgICAgIGV4aXQ6ICd3ZWJraXRFeGl0RnVsbHNjcmVlbicsXG4gICAgICAgICAgICAgICAgb25jaGFuZ2U6ICd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJyxcbiAgICAgICAgICAgICAgICBvbmVycm9yOiAnd2Via2l0ZnVsbHNjcmVlbmVycm9yJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9sZFdlYmtpdDoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6ICd3ZWJraXRJc0Z1bGxTY3JlZW4nLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICd3ZWJraXRDdXJyZW50RnVsbFNjcmVlbkVsZW1lbnQnLFxuICAgICAgICAgICAgICAgIHJlcXVlc3Q6ICd3ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbicsXG4gICAgICAgICAgICAgICAgZXhpdDogJ3dlYmtpdENhbmNlbEZ1bGxTY3JlZW4nLFxuICAgICAgICAgICAgICAgIG9uY2hhbmdlOiAnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsXG4gICAgICAgICAgICAgICAgb25lcnJvcjogJ3dlYmtpdGZ1bGxzY3JlZW5lcnJvcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3o6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiAnbW96RnVsbFNjcmVlbicsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogJ21vekZ1bGxTY3JlZW5FbGVtZW50JyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiAnbW96UmVxdWVzdEZ1bGxTY3JlZW4nLFxuICAgICAgICAgICAgICAgIGV4aXQ6ICdtb3pDYW5jZWxGdWxsU2NyZWVuJyxcbiAgICAgICAgICAgICAgICBvbmNoYW5nZTogJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICAgICAgICAgICAgIG9uZXJyb3I6ICdtb3pmdWxsc2NyZWVuZXJyb3InXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW9zOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogJ3dlYmtpdEZ1bGxzY3JlZW5FbmFibGVkJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50OiAnd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICAgICAgICAgICAgIHJlcXVlc3Q6ICd3ZWJraXRFbnRlckZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgICAgIGV4aXQ6ICd3ZWJraXRFeGl0RnVsbHNjcmVlbicsXG4gICAgICAgICAgICAgICAgb25jaGFuZ2U6ICd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJyxcbiAgICAgICAgICAgICAgICBvbmVycm9yOiAnd2Via2l0ZnVsbHNjcmVlbmVycm9yJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1zOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogJ21zRnVsbHNjcmVlbkVuYWJsZWQnLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICdtc0Z1bGxzY3JlZW5FbGVtZW50JyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiAnbXNSZXF1ZXN0RnVsbHNjcmVlbicsXG4gICAgICAgICAgICAgICAgZXhpdDogJ21zRXhpdEZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgICAgIG9uY2hhbmdlOiAnTVNGdWxsc2NyZWVuQ2hhbmdlJyxcbiAgICAgICAgICAgICAgICBvbmVycm9yOiAnTVNGdWxsc2NyZWVuRXJyb3InXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yICh2YXIgYnJvd3NlciBpbiBBUElzKSB7XG4gICAgICAgICAgICBpZiAoQVBJc1ticm93c2VyXS5lbmFibGVkIGluIGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2x5ZmlsbCA9IEFQSXNbYnJvd3Nlcl07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzQXZhaWxhYmxlID0gKHRoaXMucG9seWZpbGwgIT0gbnVsbCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHRvZ2dsZUZ1bGxzY3JlZW4oZWxlbWVudDphbnkgPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnVsbHNjcmVlbikge1xuICAgICAgICAgICAgdGhpcy5leGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgcmVxdWVzdChlbGVtOmFueSkge1xuICAgICAgICBpZiAoIWVsZW0pIGVsZW0gPSB0aGlzLnZpZGVvZ3VsYXJFbGVtZW50O1xuXG4gICAgICAgIHRoaXMuaXNGdWxsc2NyZWVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUZ1bGxzY3JlZW4ubmV4dCh0cnVlKTtcblxuICAgICAgICAvLyBQZXJmb3JtIG5hdGl2ZSBmdWxsIHNjcmVlbiBzdXBwb3J0XG4gICAgICAgIGlmICh0aGlzLmlzQXZhaWxhYmxlICYmIHRoaXMubmF0aXZlRnVsbHNjcmVlbikge1xuICAgICAgICAgICAgLy8gRnVsbHNjcmVlbiBmb3IgbW9iaWxlIGRldmljZXNcbiAgICAgICAgICAgIGlmIChWZ1V0aWxzLmlzTW9iaWxlRGV2aWNlKCkpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBzaG91bGQgbWFrZSBmdWxsc2NyZWVuIHRoZSB2aWRlbyBvYmplY3QgaWYgaXQgZG9lc24ndCBoYXZlIG5hdGl2ZSBmdWxsc2NyZWVuIHN1cHBvcnRcbiAgICAgICAgICAgICAgICAvLyBGYWxsYmFjayEgV2UgY2FuJ3Qgc2V0IHZnLXBsYXllciBvbiBmdWxsc2NyZWVuLCBvbmx5IHZpZGVvL2F1ZGlvIG9iamVjdHNcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucG9seWZpbGwuZW5hYmxlZCAmJiBlbGVtID09PSB0aGlzLnZpZGVvZ3VsYXJFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0gPSB0aGlzLm1lZGlhc1swXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmVudGVyRWxlbWVudEluRnVsbFNjcmVlbihlbGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZW50ZXJFbGVtZW50SW5GdWxsU2NyZWVuKHRoaXMudmlkZW9ndWxhckVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGVudGVyRWxlbWVudEluRnVsbFNjcmVlbihlbGVtOmFueSkge1xuICAgICAgICBlbGVtW3RoaXMucG9seWZpbGwucmVxdWVzdF0oKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZXhpdCgpIHtcbiAgICAgICAgdGhpcy5pc0Z1bGxzY3JlZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUZ1bGxzY3JlZW4ubmV4dChmYWxzZSk7XG5cbiAgICAgICAgLy8gRXhpdCBmcm9tIG5hdGl2ZSBmdWxsc2NyZWVuXG4gICAgICAgIGlmICh0aGlzLmlzQXZhaWxhYmxlICYmIHRoaXMubmF0aXZlRnVsbHNjcmVlbikge1xuICAgICAgICAgICAgZG9jdW1lbnRbdGhpcy5wb2x5ZmlsbC5leGl0XSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19