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
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var vg_player_1 = require("./vg-player");
var vg_api_1 = require("../services/vg-api");
var vg_fullscreen_api_1 = require("../services/vg-fullscreen-api");
describe('Videogular Player', function () {
    var player;
    var ref;
    var api;
    beforeEach(function () {
        ref = {
            nativeElement: {
                querySelectorAll: function () {
                    return [{}];
                }
            }
        };
        api = new vg_api_1.VgAPI();
        player = new vg_player_1.VgPlayer(ref, api);
    });
    it('Should handle native fullscreen', function () {
        vg_fullscreen_api_1.VgFullscreenAPI.nativeFullscreen = true;
        player.onChangeFullscreen(true);
        expect(player.isFullscreen).toBeFalsy();
    });
    it('Should handle emulated fullscreen enabled', function () {
        vg_fullscreen_api_1.VgFullscreenAPI.nativeFullscreen = false;
        player.onChangeFullscreen(true);
        expect(player.isFullscreen).toBeTruthy();
        expect(player.zIndex).toBe('1');
    });
    it('Should handle emulated fullscreen enabled', function () {
        vg_fullscreen_api_1.VgFullscreenAPI.nativeFullscreen = false;
        player.onChangeFullscreen(false);
        expect(player.isFullscreen).toBeFalsy();
        expect(player.zIndex).toBe('auto');
    });
});
describe('Videogular Player', function () {
    var builder;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [VgPlayerTest, vg_player_1.VgPlayer]
        });
    });
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.compileComponents();
    }));
    it('Should create a VgPlayer component', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(VgPlayerTest);
        fixture.detectChanges();
        var compiled = fixture.debugElement.nativeElement;
        var video = compiled.querySelector('video');
        expect(video.controls).toBe(true);
    }));
});
var VgPlayerTest = (function () {
    function VgPlayerTest() {
    }
    VgPlayerTest = __decorate([
        core_1.Component({
            template: "\n        <vg-player>\n            <video vg-media id=\"singleVideo\" preload=\"auto\" controls>\n                <source src=\"http://static.videogular.com/assets/videos/videogular.mp4\" type=\"video/mp4\">\n                <source src=\"http://static.videogular.com/assets/videos/videogular.ogg\" type=\"video/ogg\">\n                <source src=\"http://static.videogular.com/assets/videos/videogular.webm\" type=\"video/webm\">\n            </video>\n        </vg-player>\n    ",
            providers: [vg_api_1.VgAPI]
        }), 
        __metadata('design:paramtypes', [])
    ], VgPlayerTest);
    return VgPlayerTest;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctcGxheWVyLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1wbGF5ZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsd0JBQXFDLHVCQUF1QixDQUFDLENBQUE7QUFDN0QscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLDBCQUF1QixhQUFhLENBQUMsQ0FBQTtBQUVyQyx1QkFBb0Isb0JBQW9CLENBQUMsQ0FBQTtBQUN6QyxrQ0FBOEIsK0JBQStCLENBQUMsQ0FBQTtBQUc5RCxRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFDMUIsSUFBSSxNQUFlLENBQUM7SUFDcEIsSUFBSSxHQUFjLENBQUM7SUFDbkIsSUFBSSxHQUFTLENBQUM7SUFFZCxVQUFVLENBQUM7UUFDUCxHQUFHLEdBQUc7WUFDRixhQUFhLEVBQUU7Z0JBQ1gsZ0JBQWdCLEVBQUU7b0JBQ2QsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2hCLENBQUM7YUFDSjtTQUNKLENBQUM7UUFFRixHQUFHLEdBQUcsSUFBSSxjQUFLLEVBQUUsQ0FBQztRQUNsQixNQUFNLEdBQUcsSUFBSSxvQkFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxpQ0FBaUMsRUFBRTtRQUNsQyxtQ0FBZSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUV4QyxNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywyQ0FBMkMsRUFBRTtRQUM1QyxtQ0FBZSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUV6QyxNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywyQ0FBMkMsRUFBRTtRQUM1QyxtQ0FBZSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUV6QyxNQUFNLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN4QyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBRUgsUUFBUSxDQUFDLG1CQUFtQixFQUFFO0lBQzFCLElBQUksT0FBTyxDQUFDO0lBRVosVUFBVSxDQUFDO1FBQ1AsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUMzQixZQUFZLEVBQUUsQ0FBQyxZQUFZLEVBQUUsb0JBQVEsQ0FBQztTQUN6QyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQyxlQUFLLENBQUM7UUFDYixpQkFBTyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDaEMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVKLEVBQUUsQ0FBQyxvQ0FBb0MsRUFDbkMsZUFBSyxDQUFDO1FBQ0YsSUFBSSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEQsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO1FBQ2xELElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFNUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQ0wsQ0FBQztBQUNOLENBQUMsQ0FBQyxDQUFDO0FBY0g7SUFBQTtJQUFvQixDQUFDO0lBWnJCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxtZUFRVDtZQUNELFNBQVMsRUFBRSxDQUFDLGNBQUssQ0FBQztTQUNyQixDQUFDOztvQkFBQTtJQUNrQixtQkFBQztBQUFELENBQUMsQUFBckIsSUFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FzeW5jLCBpbmplY3QsIFRlc3RCZWR9IGZyb20gXCJAYW5ndWxhci9jb3JlL3Rlc3RpbmdcIjtcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtWZ1BsYXllcn0gZnJvbSBcIi4vdmctcGxheWVyXCI7XG5pbXBvcnQge1ZnTWVkaWF9IGZyb20gXCIuLi92Zy1tZWRpYS92Zy1tZWRpYVwiO1xuaW1wb3J0IHtWZ0FQSX0gZnJvbSBcIi4uL3NlcnZpY2VzL3ZnLWFwaVwiO1xuaW1wb3J0IHtWZ0Z1bGxzY3JlZW5BUEl9IGZyb20gXCIuLi9zZXJ2aWNlcy92Zy1mdWxsc2NyZWVuLWFwaVwiO1xuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5kZXNjcmliZSgnVmlkZW9ndWxhciBQbGF5ZXInLCAoKSA9PiB7XG4gICAgbGV0IHBsYXllcjpWZ1BsYXllcjtcbiAgICBsZXQgcmVmOkVsZW1lbnRSZWY7XG4gICAgbGV0IGFwaTpWZ0FQSTtcblxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICByZWYgPSB7XG4gICAgICAgICAgICBuYXRpdmVFbGVtZW50OiB7XG4gICAgICAgICAgICAgICAgcXVlcnlTZWxlY3RvckFsbDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3t9XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgYXBpID0gbmV3IFZnQVBJKCk7XG4gICAgICAgIHBsYXllciA9IG5ldyBWZ1BsYXllcihyZWYsIGFwaSk7XG4gICAgfSk7XG5cbiAgICBpdCgnU2hvdWxkIGhhbmRsZSBuYXRpdmUgZnVsbHNjcmVlbicsICgpID0+IHtcbiAgICAgICAgVmdGdWxsc2NyZWVuQVBJLm5hdGl2ZUZ1bGxzY3JlZW4gPSB0cnVlO1xuXG4gICAgICAgIHBsYXllci5vbkNoYW5nZUZ1bGxzY3JlZW4odHJ1ZSk7XG5cbiAgICAgICAgZXhwZWN0KHBsYXllci5pc0Z1bGxzY3JlZW4pLnRvQmVGYWxzeSgpO1xuICAgIH0pO1xuXG4gICAgaXQoJ1Nob3VsZCBoYW5kbGUgZW11bGF0ZWQgZnVsbHNjcmVlbiBlbmFibGVkJywgKCkgPT4ge1xuICAgICAgICBWZ0Z1bGxzY3JlZW5BUEkubmF0aXZlRnVsbHNjcmVlbiA9IGZhbHNlO1xuXG4gICAgICAgIHBsYXllci5vbkNoYW5nZUZ1bGxzY3JlZW4odHJ1ZSk7XG5cbiAgICAgICAgZXhwZWN0KHBsYXllci5pc0Z1bGxzY3JlZW4pLnRvQmVUcnV0aHkoKTtcbiAgICAgICAgZXhwZWN0KHBsYXllci56SW5kZXgpLnRvQmUoJzEnKTtcbiAgICB9KTtcblxuICAgIGl0KCdTaG91bGQgaGFuZGxlIGVtdWxhdGVkIGZ1bGxzY3JlZW4gZW5hYmxlZCcsICgpID0+IHtcbiAgICAgICAgVmdGdWxsc2NyZWVuQVBJLm5hdGl2ZUZ1bGxzY3JlZW4gPSBmYWxzZTtcblxuICAgICAgICBwbGF5ZXIub25DaGFuZ2VGdWxsc2NyZWVuKGZhbHNlKTtcblxuICAgICAgICBleHBlY3QocGxheWVyLmlzRnVsbHNjcmVlbikudG9CZUZhbHN5KCk7XG4gICAgICAgIGV4cGVjdChwbGF5ZXIuekluZGV4KS50b0JlKCdhdXRvJyk7XG4gICAgfSk7XG59KTtcblxuZGVzY3JpYmUoJ1ZpZGVvZ3VsYXIgUGxheWVyJywgKCkgPT4ge1xuICAgIHZhciBidWlsZGVyO1xuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtWZ1BsYXllclRlc3QsIFZnUGxheWVyXVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGJlZm9yZUVhY2goYXN5bmMoKCkgPT4ge1xuICAgICAgICBUZXN0QmVkLmNvbXBpbGVDb21wb25lbnRzKCk7XG4gICAgfSkpO1xuXG4gICAgaXQoJ1Nob3VsZCBjcmVhdGUgYSBWZ1BsYXllciBjb21wb25lbnQnLFxuICAgICAgICBhc3luYygoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KFZnUGxheWVyVGVzdCk7XG4gICAgICAgICAgICBmaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgIGxldCBjb21waWxlZCA9IGZpeHR1cmUuZGVidWdFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgdmlkZW8gPSBjb21waWxlZC5xdWVyeVNlbGVjdG9yKCd2aWRlbycpO1xuXG4gICAgICAgICAgICBleHBlY3QodmlkZW8uY29udHJvbHMpLnRvQmUodHJ1ZSk7XG4gICAgICAgIH0pXG4gICAgKTtcbn0pO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8dmctcGxheWVyPlxuICAgICAgICAgICAgPHZpZGVvIHZnLW1lZGlhIGlkPVwic2luZ2xlVmlkZW9cIiBwcmVsb2FkPVwiYXV0b1wiIGNvbnRyb2xzPlxuICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiaHR0cDovL3N0YXRpYy52aWRlb2d1bGFyLmNvbS9hc3NldHMvdmlkZW9zL3ZpZGVvZ3VsYXIubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPlxuICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiaHR0cDovL3N0YXRpYy52aWRlb2d1bGFyLmNvbS9hc3NldHMvdmlkZW9zL3ZpZGVvZ3VsYXIub2dnXCIgdHlwZT1cInZpZGVvL29nZ1wiPlxuICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiaHR0cDovL3N0YXRpYy52aWRlb2d1bGFyLmNvbS9hc3NldHMvdmlkZW9zL3ZpZGVvZ3VsYXIud2VibVwiIHR5cGU9XCJ2aWRlby93ZWJtXCI+XG4gICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICA8L3ZnLXBsYXllcj5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW1ZnQVBJXVxufSlcbmNsYXNzIFZnUGxheWVyVGVzdCB7fSJdfQ==