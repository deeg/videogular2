"use strict";
var vg_playback_button_1 = require("./vg-playback-button");
var vg_api_1 = require("../../services/vg-api");
var vg_states_1 = require("../../states/vg-states");
describe('Playback Button', function () {
    var playbackButton;
    var ref;
    var api;
    beforeEach(function () {
        ref = {
            nativeElement: {
                getAttribute: function (name) {
                    return name;
                }
            }
        };
        api = new vg_api_1.VgAPI();
        api.medias = {
            main: {
                state: vg_states_1.VgStates.VG_PLAYING
            },
            secondary: {
                state: vg_states_1.VgStates.VG_PAUSED
            }
        };
        playbackButton = new vg_playback_button_1.VgPlaybackButton(ref, api);
    });
    it('Should set playbackIndex default value to 1', function () {
        expect(playbackButton.playbackIndex).toEqual(1);
    });
    it('Should get media by id on init', function () {
        spyOn(playbackButton.elem, 'getAttribute').and.callThrough();
        spyOn(api, 'getMediaById');
        playbackButton.onPlayerReady();
        expect(playbackButton.elem.getAttribute).toHaveBeenCalledWith('vg-for');
        expect(api.getMediaById).toHaveBeenCalledWith('vg-for');
    });
    describe('onClick (single and multiple media)', function () {
        it('should increase playbackIndex', function () {
            api.medias = {
                main: {
                    state: vg_states_1.VgStates.VG_PLAYING
                }
            };
            playbackButton.target = api;
            playbackButton.onClick();
            expect(playbackButton.playbackIndex).toEqual(2);
        });
        it('should set playbackRate to target media', function () {
            api.medias = {
                main: {
                    state: vg_states_1.VgStates.VG_PLAYING
                }
            };
            playbackButton.target = api;
            playbackButton.onClick();
            expect(playbackButton.target.playbackRate).toEqual('1.5');
        });
        it('should set playbackRate to target media', function () {
            var media = {
                playbackRate: {
                    test: '1'
                }
            };
            playbackButton.target = media;
            playbackButton.vgFor = 'test';
            playbackButton.onClick();
            expect(playbackButton.target.playbackRate.test).toEqual('1.5');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctcGxheWJhY2stYnV0dG9uLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1wbGF5YmFjay1idXR0b24uc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUNBQStCLHNCQUFzQixDQUFDLENBQUE7QUFDdEQsdUJBQW9CLHVCQUF1QixDQUFDLENBQUE7QUFFNUMsMEJBQXVCLHdCQUF3QixDQUFDLENBQUE7QUFFaEQsUUFBUSxDQUFDLGlCQUFpQixFQUFFO0lBQ3hCLElBQUksY0FBK0IsQ0FBQztJQUNwQyxJQUFJLEdBQWMsQ0FBQztJQUNuQixJQUFJLEdBQVMsQ0FBQztJQUVkLFVBQVUsQ0FBQztRQUNQLEdBQUcsR0FBRztZQUNGLGFBQWEsRUFBRTtnQkFDWCxZQUFZLEVBQUUsVUFBQyxJQUFJO29CQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7YUFDSjtTQUNKLENBQUM7UUFFRixHQUFHLEdBQUcsSUFBSSxjQUFLLEVBQUUsQ0FBQztRQUNsQixHQUFHLENBQUMsTUFBTSxHQUFHO1lBQ1QsSUFBSSxFQUFFO2dCQUNGLEtBQUssRUFBRSxvQkFBUSxDQUFDLFVBQVU7YUFDN0I7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLG9CQUFRLENBQUMsU0FBUzthQUM1QjtTQUNKLENBQUM7UUFHRixjQUFjLEdBQUcsSUFBSSxxQ0FBZ0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNkNBQTZDLEVBQUU7UUFDOUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0NBQWdDLEVBQUU7UUFDakMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdELEtBQUssQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFM0IsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRS9CLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hFLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMscUNBQXFDLEVBQUU7UUFDNUMsRUFBRSxDQUFDLCtCQUErQixFQUFFO1lBQ2hDLEdBQUcsQ0FBQyxNQUFNLEdBQUc7Z0JBQ1QsSUFBSSxFQUFFO29CQUNGLEtBQUssRUFBRSxvQkFBUSxDQUFDLFVBQVU7aUJBQzdCO2FBQ0osQ0FBQztZQUVGLGNBQWMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBRTVCLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUV6QixNQUFNLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyx5Q0FBeUMsRUFBRTtZQUMxQyxHQUFHLENBQUMsTUFBTSxHQUFHO2dCQUNULElBQUksRUFBRTtvQkFDRixLQUFLLEVBQUUsb0JBQVEsQ0FBQyxVQUFVO2lCQUM3QjthQUNKLENBQUM7WUFFRixjQUFjLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUU1QixjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFekIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLHlDQUF5QyxFQUFFO1lBQzFDLElBQUksS0FBSyxHQUFHO2dCQUNSLFlBQVksRUFBRTtvQkFDVixJQUFJLEVBQUUsR0FBRztpQkFDWjthQUNKLENBQUM7WUFFRixjQUFjLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM5QixjQUFjLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUU5QixjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFekIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ZnUGxheWJhY2tCdXR0b259IGZyb20gXCIuL3ZnLXBsYXliYWNrLWJ1dHRvblwiO1xuaW1wb3J0IHtWZ0FQSX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3ZnLWFwaVwiO1xuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtWZ1N0YXRlc30gZnJvbSBcIi4uLy4uL3N0YXRlcy92Zy1zdGF0ZXNcIjtcblxuZGVzY3JpYmUoJ1BsYXliYWNrIEJ1dHRvbicsICgpID0+IHtcbiAgICBsZXQgcGxheWJhY2tCdXR0b246VmdQbGF5YmFja0J1dHRvbjtcbiAgICBsZXQgcmVmOkVsZW1lbnRSZWY7XG4gICAgbGV0IGFwaTpWZ0FQSTtcblxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICByZWYgPSB7XG4gICAgICAgICAgICBuYXRpdmVFbGVtZW50OiB7XG4gICAgICAgICAgICAgICAgZ2V0QXR0cmlidXRlOiAobmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgYXBpID0gbmV3IFZnQVBJKCk7XG4gICAgICAgIGFwaS5tZWRpYXMgPSB7XG4gICAgICAgICAgICBtYWluOiB7XG4gICAgICAgICAgICAgICAgc3RhdGU6IFZnU3RhdGVzLlZHX1BMQVlJTkdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICAgICAgICBzdGF0ZTogVmdTdGF0ZXMuVkdfUEFVU0VEXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cblxuICAgICAgICBwbGF5YmFja0J1dHRvbiA9IG5ldyBWZ1BsYXliYWNrQnV0dG9uKHJlZiwgYXBpKTtcbiAgICB9KTtcblxuICAgIGl0KCdTaG91bGQgc2V0IHBsYXliYWNrSW5kZXggZGVmYXVsdCB2YWx1ZSB0byAxJywgKCkgPT4ge1xuICAgICAgICBleHBlY3QocGxheWJhY2tCdXR0b24ucGxheWJhY2tJbmRleCkudG9FcXVhbCgxKTtcbiAgICB9KTtcblxuICAgIGl0KCdTaG91bGQgZ2V0IG1lZGlhIGJ5IGlkIG9uIGluaXQnLCAoKSA9PiB7XG4gICAgICAgIHNweU9uKHBsYXliYWNrQnV0dG9uLmVsZW0sICdnZXRBdHRyaWJ1dGUnKS5hbmQuY2FsbFRocm91Z2goKTtcbiAgICAgICAgc3B5T24oYXBpLCAnZ2V0TWVkaWFCeUlkJyk7XG5cbiAgICAgICAgcGxheWJhY2tCdXR0b24ub25QbGF5ZXJSZWFkeSgpO1xuXG4gICAgICAgIGV4cGVjdChwbGF5YmFja0J1dHRvbi5lbGVtLmdldEF0dHJpYnV0ZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgoJ3ZnLWZvcicpO1xuICAgICAgICBleHBlY3QoYXBpLmdldE1lZGlhQnlJZCkudG9IYXZlQmVlbkNhbGxlZFdpdGgoJ3ZnLWZvcicpO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ29uQ2xpY2sgKHNpbmdsZSBhbmQgbXVsdGlwbGUgbWVkaWEpJywgKCkgPT4ge1xuICAgICAgICBpdCgnc2hvdWxkIGluY3JlYXNlIHBsYXliYWNrSW5kZXgnLCAoKSA9PiB7XG4gICAgICAgICAgICBhcGkubWVkaWFzID0ge1xuICAgICAgICAgICAgICAgIG1haW46IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IFZnU3RhdGVzLlZHX1BMQVlJTkdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBwbGF5YmFja0J1dHRvbi50YXJnZXQgPSBhcGk7XG5cbiAgICAgICAgICAgIHBsYXliYWNrQnV0dG9uLm9uQ2xpY2soKTtcblxuICAgICAgICAgICAgZXhwZWN0KHBsYXliYWNrQnV0dG9uLnBsYXliYWNrSW5kZXgpLnRvRXF1YWwoMik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdzaG91bGQgc2V0IHBsYXliYWNrUmF0ZSB0byB0YXJnZXQgbWVkaWEnLCAoKSA9PiB7XG4gICAgICAgICAgICBhcGkubWVkaWFzID0ge1xuICAgICAgICAgICAgICAgIG1haW46IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IFZnU3RhdGVzLlZHX1BMQVlJTkdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBwbGF5YmFja0J1dHRvbi50YXJnZXQgPSBhcGk7XG5cbiAgICAgICAgICAgIHBsYXliYWNrQnV0dG9uLm9uQ2xpY2soKTtcblxuICAgICAgICAgICAgZXhwZWN0KHBsYXliYWNrQnV0dG9uLnRhcmdldC5wbGF5YmFja1JhdGUpLnRvRXF1YWwoJzEuNScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnc2hvdWxkIHNldCBwbGF5YmFja1JhdGUgdG8gdGFyZ2V0IG1lZGlhJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1lZGlhID0ge1xuICAgICAgICAgICAgICAgIHBsYXliYWNrUmF0ZToge1xuICAgICAgICAgICAgICAgICAgICB0ZXN0OiAnMSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBwbGF5YmFja0J1dHRvbi50YXJnZXQgPSBtZWRpYTtcbiAgICAgICAgICAgIHBsYXliYWNrQnV0dG9uLnZnRm9yID0gJ3Rlc3QnO1xuXG4gICAgICAgICAgICBwbGF5YmFja0J1dHRvbi5vbkNsaWNrKCk7XG5cbiAgICAgICAgICAgIGV4cGVjdChwbGF5YmFja0J1dHRvbi50YXJnZXQucGxheWJhY2tSYXRlLnRlc3QpLnRvRXF1YWwoJzEuNScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIl19