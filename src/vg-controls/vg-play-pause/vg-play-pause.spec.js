"use strict";
var vg_play_pause_1 = require("./vg-play-pause");
var vg_api_1 = require("../../services/vg-api");
var vg_states_1 = require("../../states/vg-states");
describe('Play/Pause Button', function () {
    var playPause;
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
        playPause = new vg_play_pause_1.VgPlayPause(ref, api);
    });
    it('Should get media by id on init', function () {
        spyOn(playPause.elem, 'getAttribute').and.callThrough();
        spyOn(api, 'getMediaById').and.callFake(function () {
            return {
                volume: 1
            };
        });
        playPause.onPlayerReady();
        expect(playPause.elem.getAttribute).toHaveBeenCalledWith('vg-for');
        expect(api.getMediaById).toHaveBeenCalledWith('vg-for');
    });
    it('Should get state for one media file', function () {
        api.medias = {
            main: {
                state: vg_states_1.VgStates.VG_PLAYING
            }
        };
        playPause.target = api;
        var state = playPause.getState();
        expect(state).toBe(vg_states_1.VgStates.VG_PLAYING);
    });
    describe('onClick (single and multiple media)', function () {
        it('should pause if current state is different play', function () {
            spyOn(api, 'pause').and.callFake(function () { });
            api.medias = {
                main: {
                    state: vg_states_1.VgStates.VG_PLAYING
                }
            };
            playPause.target = api;
            playPause.onClick();
            expect(api.pause).toHaveBeenCalled();
        });
        it('should play if current state is pause', function () {
            spyOn(api, 'play').and.callFake(function () { });
            api.medias = {
                main: {
                    state: vg_states_1.VgStates.VG_PAUSED
                }
            };
            playPause.target = api;
            playPause.onClick();
            expect(api.play).toHaveBeenCalled();
        });
        it('should play if current state is ended', function () {
            spyOn(api, 'play').and.callFake(function () { });
            api.medias = {
                main: {
                    state: vg_states_1.VgStates.VG_ENDED
                }
            };
            playPause.target = api;
            playPause.onClick();
            expect(api.play).toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctcGxheS1wYXVzZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctcGxheS1wYXVzZS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM1Qyx1QkFBb0IsdUJBQXVCLENBQUMsQ0FBQTtBQUU1QywwQkFBdUIsd0JBQXdCLENBQUMsQ0FBQTtBQUVoRCxRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFDMUIsSUFBSSxTQUFxQixDQUFDO0lBQzFCLElBQUksR0FBYyxDQUFDO0lBQ25CLElBQUksR0FBUyxDQUFDO0lBRWQsVUFBVSxDQUFDO1FBQ1AsR0FBRyxHQUFHO1lBQ0YsYUFBYSxFQUFFO2dCQUNYLFlBQVksRUFBRSxVQUFDLElBQUk7b0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDaEIsQ0FBQzthQUNKO1NBQ0osQ0FBQztRQUVGLEdBQUcsR0FBRyxJQUFJLGNBQUssRUFBRSxDQUFDO1FBQ2xCLEdBQUcsQ0FBQyxNQUFNLEdBQUc7WUFDVCxJQUFJLEVBQUU7Z0JBQ0YsS0FBSyxFQUFFLG9CQUFRLENBQUMsVUFBVTthQUM3QjtZQUNELFNBQVMsRUFBRTtnQkFDUCxLQUFLLEVBQUUsb0JBQVEsQ0FBQyxTQUFTO2FBQzVCO1NBQ0osQ0FBQztRQUdGLFNBQVMsR0FBRyxJQUFJLDJCQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdDQUFnQyxFQUFFO1FBQ2pDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4RCxLQUFLLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDcEMsTUFBTSxDQUFDO2dCQUNILE1BQU0sRUFBRSxDQUFDO2FBQ1osQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO1FBRUgsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRTFCLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25FLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMscUNBQXFDLEVBQUU7UUFDdEMsR0FBRyxDQUFDLE1BQU0sR0FBRztZQUNULElBQUksRUFBRTtnQkFDRixLQUFLLEVBQUUsb0JBQVEsQ0FBQyxVQUFVO2FBQzdCO1NBQ0osQ0FBQztRQUVGLFNBQVMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBRXZCLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVqQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMscUNBQXFDLEVBQUU7UUFDNUMsRUFBRSxDQUFDLGlEQUFpRCxFQUFFO1lBQ2xELEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFPLENBQUMsQ0FBQyxDQUFDO1lBRTNDLEdBQUcsQ0FBQyxNQUFNLEdBQUc7Z0JBQ1QsSUFBSSxFQUFFO29CQUNGLEtBQUssRUFBRSxvQkFBUSxDQUFDLFVBQVU7aUJBQzdCO2FBQ0osQ0FBQztZQUVGLFNBQVMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBRXZCLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUVwQixNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsdUNBQXVDLEVBQUU7WUFDeEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQU8sQ0FBQyxDQUFDLENBQUM7WUFFMUMsR0FBRyxDQUFDLE1BQU0sR0FBRztnQkFDVCxJQUFJLEVBQUU7b0JBQ0YsS0FBSyxFQUFFLG9CQUFRLENBQUMsU0FBUztpQkFDNUI7YUFDSixDQUFDO1lBRUYsU0FBUyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFFdkIsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRXBCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRTtZQUN4QyxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBTyxDQUFDLENBQUMsQ0FBQztZQUUxQyxHQUFHLENBQUMsTUFBTSxHQUFHO2dCQUNULElBQUksRUFBRTtvQkFDRixLQUFLLEVBQUUsb0JBQVEsQ0FBQyxRQUFRO2lCQUMzQjthQUNKLENBQUM7WUFFRixTQUFTLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUV2QixTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFcEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VmdQbGF5UGF1c2V9IGZyb20gXCIuL3ZnLXBsYXktcGF1c2VcIjtcbmltcG9ydCB7VmdBUEl9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy92Zy1hcGlcIjtcbmltcG9ydCB7RWxlbWVudFJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7VmdTdGF0ZXN9IGZyb20gXCIuLi8uLi9zdGF0ZXMvdmctc3RhdGVzXCI7XG5cbmRlc2NyaWJlKCdQbGF5L1BhdXNlIEJ1dHRvbicsICgpID0+IHtcbiAgICBsZXQgcGxheVBhdXNlOlZnUGxheVBhdXNlO1xuICAgIGxldCByZWY6RWxlbWVudFJlZjtcbiAgICBsZXQgYXBpOlZnQVBJO1xuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgIHJlZiA9IHtcbiAgICAgICAgICAgIG5hdGl2ZUVsZW1lbnQ6IHtcbiAgICAgICAgICAgICAgICBnZXRBdHRyaWJ1dGU6IChuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBhcGkgPSBuZXcgVmdBUEkoKTtcbiAgICAgICAgYXBpLm1lZGlhcyA9IHtcbiAgICAgICAgICAgIG1haW46IHtcbiAgICAgICAgICAgICAgICBzdGF0ZTogVmdTdGF0ZXMuVkdfUExBWUlOR1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgICAgIHN0YXRlOiBWZ1N0YXRlcy5WR19QQVVTRURcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuXG4gICAgICAgIHBsYXlQYXVzZSA9IG5ldyBWZ1BsYXlQYXVzZShyZWYsIGFwaSk7XG4gICAgfSk7XG5cbiAgICBpdCgnU2hvdWxkIGdldCBtZWRpYSBieSBpZCBvbiBpbml0JywgKCkgPT4ge1xuICAgICAgICBzcHlPbihwbGF5UGF1c2UuZWxlbSwgJ2dldEF0dHJpYnV0ZScpLmFuZC5jYWxsVGhyb3VnaCgpO1xuICAgICAgICBzcHlPbihhcGksICdnZXRNZWRpYUJ5SWQnKS5hbmQuY2FsbEZha2UoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2b2x1bWU6IDFcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBsYXlQYXVzZS5vblBsYXllclJlYWR5KCk7XG5cbiAgICAgICAgZXhwZWN0KHBsYXlQYXVzZS5lbGVtLmdldEF0dHJpYnV0ZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgoJ3ZnLWZvcicpO1xuICAgICAgICBleHBlY3QoYXBpLmdldE1lZGlhQnlJZCkudG9IYXZlQmVlbkNhbGxlZFdpdGgoJ3ZnLWZvcicpO1xuICAgIH0pO1xuXG4gICAgaXQoJ1Nob3VsZCBnZXQgc3RhdGUgZm9yIG9uZSBtZWRpYSBmaWxlJywgKCkgPT4ge1xuICAgICAgICBhcGkubWVkaWFzID0ge1xuICAgICAgICAgICAgbWFpbjoge1xuICAgICAgICAgICAgICAgIHN0YXRlOiBWZ1N0YXRlcy5WR19QTEFZSU5HXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcGxheVBhdXNlLnRhcmdldCA9IGFwaTtcblxuICAgICAgICB2YXIgc3RhdGUgPSBwbGF5UGF1c2UuZ2V0U3RhdGUoKTtcblxuICAgICAgICBleHBlY3Qoc3RhdGUpLnRvQmUoVmdTdGF0ZXMuVkdfUExBWUlORyk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnb25DbGljayAoc2luZ2xlIGFuZCBtdWx0aXBsZSBtZWRpYSknLCAoKSA9PiB7XG4gICAgICAgIGl0KCdzaG91bGQgcGF1c2UgaWYgY3VycmVudCBzdGF0ZSBpcyBkaWZmZXJlbnQgcGxheScsICgpID0+IHtcbiAgICAgICAgICAgIHNweU9uKGFwaSwgJ3BhdXNlJykuYW5kLmNhbGxGYWtlKCgpID0+IHt9KTtcblxuICAgICAgICAgICAgYXBpLm1lZGlhcyA9IHtcbiAgICAgICAgICAgICAgICBtYWluOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiBWZ1N0YXRlcy5WR19QTEFZSU5HXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcGxheVBhdXNlLnRhcmdldCA9IGFwaTtcblxuICAgICAgICAgICAgcGxheVBhdXNlLm9uQ2xpY2soKTtcblxuICAgICAgICAgICAgZXhwZWN0KGFwaS5wYXVzZSkudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnc2hvdWxkIHBsYXkgaWYgY3VycmVudCBzdGF0ZSBpcyBwYXVzZScsICgpID0+IHtcbiAgICAgICAgICAgIHNweU9uKGFwaSwgJ3BsYXknKS5hbmQuY2FsbEZha2UoKCkgPT4ge30pO1xuXG4gICAgICAgICAgICBhcGkubWVkaWFzID0ge1xuICAgICAgICAgICAgICAgIG1haW46IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IFZnU3RhdGVzLlZHX1BBVVNFRFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHBsYXlQYXVzZS50YXJnZXQgPSBhcGk7XG5cbiAgICAgICAgICAgIHBsYXlQYXVzZS5vbkNsaWNrKCk7XG5cbiAgICAgICAgICAgIGV4cGVjdChhcGkucGxheSkudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnc2hvdWxkIHBsYXkgaWYgY3VycmVudCBzdGF0ZSBpcyBlbmRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHNweU9uKGFwaSwgJ3BsYXknKS5hbmQuY2FsbEZha2UoKCkgPT4ge30pO1xuXG4gICAgICAgICAgICBhcGkubWVkaWFzID0ge1xuICAgICAgICAgICAgICAgIG1haW46IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IFZnU3RhdGVzLlZHX0VOREVEXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcGxheVBhdXNlLnRhcmdldCA9IGFwaTtcblxuICAgICAgICAgICAgcGxheVBhdXNlLm9uQ2xpY2soKTtcblxuICAgICAgICAgICAgZXhwZWN0KGFwaS5wbGF5KS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iXX0=