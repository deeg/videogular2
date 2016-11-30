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
var common_1 = require('@angular/common');
var vg_controls_1 = require('./src/vg-controls/vg-controls');
var vg_fullscreen_1 = require('./src/vg-controls/vg-fullscreen/vg-fullscreen');
var vg_mute_1 = require('./src/vg-controls/vg-mute/vg-mute');
var vg_volume_1 = require('./src/vg-controls/vg-volume/vg-volume');
var vg_play_pause_1 = require('./src/vg-controls/vg-play-pause/vg-play-pause');
var vg_playback_button_1 = require('./src/vg-controls/vg-playback-button/vg-playback-button');
var vg_scrub_bar_1 = require('./src/vg-controls/vg-scrub-bar/vg-scrub-bar');
var vg_scrub_bar_buffering_time_1 = require('./src/vg-controls/vg-scrub-bar/vg-scrub-bar-buffering-time/vg-scrub-bar-buffering-time');
var vg_scrub_bar_cue_points_1 = require('./src/vg-controls/vg-scrub-bar/vg-scrub-bar-cue-points/vg-scrub-bar-cue-points');
var vg_scrub_bar_current_time_1 = require('./src/vg-controls/vg-scrub-bar/vg-scrub-bar-current-time/vg-scrub-bar-current-time');
var vg_time_display_1 = require('./src/vg-controls/vg-time-display/vg-time-display');
var vg_track_selector_1 = require('./src/vg-controls/vg-track-selector/vg-track-selector');
var VgControlsModule = (function () {
    function VgControlsModule() {
    }
    VgControlsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [
                vg_controls_1.VgControls,
                vg_fullscreen_1.VgFullscreen,
                vg_mute_1.VgMute,
                vg_volume_1.VgVolume,
                vg_play_pause_1.VgPlayPause,
                vg_playback_button_1.VgPlaybackButton,
                vg_scrub_bar_1.VgScrubBar,
                vg_scrub_bar_buffering_time_1.VgScrubBarBufferingTime,
                vg_scrub_bar_cue_points_1.VgScrubBarCuePoints,
                vg_scrub_bar_current_time_1.VgScrubBarCurrentTime,
                vg_time_display_1.VgTimeDisplay,
                vg_track_selector_1.VgTrackSelector
            ],
            exports: [
                vg_controls_1.VgControls,
                vg_fullscreen_1.VgFullscreen,
                vg_mute_1.VgMute,
                vg_volume_1.VgVolume,
                vg_play_pause_1.VgPlayPause,
                vg_playback_button_1.VgPlaybackButton,
                vg_scrub_bar_1.VgScrubBar,
                vg_scrub_bar_buffering_time_1.VgScrubBarBufferingTime,
                vg_scrub_bar_cue_points_1.VgScrubBarCuePoints,
                vg_scrub_bar_current_time_1.VgScrubBarCurrentTime,
                vg_time_display_1.VgTimeDisplay,
                vg_track_selector_1.VgTrackSelector
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], VgControlsModule);
    return VgControlsModule;
}());
exports.VgControlsModule = VgControlsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLDRCQUF5QiwrQkFBK0IsQ0FBQyxDQUFBO0FBQ3pELDhCQUEyQiwrQ0FBK0MsQ0FBQyxDQUFBO0FBQzNFLHdCQUFxQixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3pELDBCQUF1Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBQy9ELDhCQUEwQiwrQ0FBK0MsQ0FBQyxDQUFBO0FBQzFFLG1DQUErQix5REFBeUQsQ0FBQyxDQUFBO0FBQ3pGLDZCQUF5Qiw2Q0FBNkMsQ0FBQyxDQUFBO0FBQ3ZFLDRDQUFzQyx3RkFBd0YsQ0FBQyxDQUFBO0FBQy9ILHdDQUFrQyxnRkFBZ0YsQ0FBQyxDQUFBO0FBQ25ILDBDQUFvQyxvRkFBb0YsQ0FBQyxDQUFBO0FBQ3pILGdDQUE0QixtREFBbUQsQ0FBQyxDQUFBO0FBQ2hGLGtDQUE4Qix1REFBdUQsQ0FBQyxDQUFBO0FBaUN0RjtJQUFBO0lBQStCLENBQUM7SUEvQmhDO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBRTtZQUN6QixZQUFZLEVBQUU7Z0JBQ1Ysd0JBQVU7Z0JBQ1YsNEJBQVk7Z0JBQ1osZ0JBQU07Z0JBQ04sb0JBQVE7Z0JBQ1IsMkJBQVc7Z0JBQ1gscUNBQWdCO2dCQUNoQix5QkFBVTtnQkFDVixxREFBdUI7Z0JBQ3ZCLDZDQUFtQjtnQkFDbkIsaURBQXFCO2dCQUNyQiwrQkFBYTtnQkFDYixtQ0FBZTthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3QkFBVTtnQkFDViw0QkFBWTtnQkFDWixnQkFBTTtnQkFDTixvQkFBUTtnQkFDUiwyQkFBVztnQkFDWCxxQ0FBZ0I7Z0JBQ2hCLHlCQUFVO2dCQUNWLHFEQUF1QjtnQkFDdkIsNkNBQW1CO2dCQUNuQixpREFBcUI7Z0JBQ3JCLCtCQUFhO2dCQUNiLG1DQUFlO2FBQ2xCO1NBQ0osQ0FBQzs7d0JBQUE7SUFDNkIsdUJBQUM7QUFBRCxDQUFDLEFBQWhDLElBQWdDO0FBQW5CLHdCQUFnQixtQkFBRyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtWZ0NvbnRyb2xzfSBmcm9tICcuL3NyYy92Zy1jb250cm9scy92Zy1jb250cm9scyc7XG5pbXBvcnQge1ZnRnVsbHNjcmVlbn0gZnJvbSAnLi9zcmMvdmctY29udHJvbHMvdmctZnVsbHNjcmVlbi92Zy1mdWxsc2NyZWVuJztcbmltcG9ydCB7VmdNdXRlfSBmcm9tICcuL3NyYy92Zy1jb250cm9scy92Zy1tdXRlL3ZnLW11dGUnO1xuaW1wb3J0IHtWZ1ZvbHVtZX0gZnJvbSAnLi9zcmMvdmctY29udHJvbHMvdmctdm9sdW1lL3ZnLXZvbHVtZSc7XG5pbXBvcnQge1ZnUGxheVBhdXNlfSBmcm9tICcuL3NyYy92Zy1jb250cm9scy92Zy1wbGF5LXBhdXNlL3ZnLXBsYXktcGF1c2UnO1xuaW1wb3J0IHtWZ1BsYXliYWNrQnV0dG9ufSBmcm9tICcuL3NyYy92Zy1jb250cm9scy92Zy1wbGF5YmFjay1idXR0b24vdmctcGxheWJhY2stYnV0dG9uJztcbmltcG9ydCB7VmdTY3J1YkJhcn0gZnJvbSAnLi9zcmMvdmctY29udHJvbHMvdmctc2NydWItYmFyL3ZnLXNjcnViLWJhcic7XG5pbXBvcnQge1ZnU2NydWJCYXJCdWZmZXJpbmdUaW1lfSBmcm9tICcuL3NyYy92Zy1jb250cm9scy92Zy1zY3J1Yi1iYXIvdmctc2NydWItYmFyLWJ1ZmZlcmluZy10aW1lL3ZnLXNjcnViLWJhci1idWZmZXJpbmctdGltZSc7XG5pbXBvcnQge1ZnU2NydWJCYXJDdWVQb2ludHN9IGZyb20gJy4vc3JjL3ZnLWNvbnRyb2xzL3ZnLXNjcnViLWJhci92Zy1zY3J1Yi1iYXItY3VlLXBvaW50cy92Zy1zY3J1Yi1iYXItY3VlLXBvaW50cyc7XG5pbXBvcnQge1ZnU2NydWJCYXJDdXJyZW50VGltZX0gZnJvbSAnLi9zcmMvdmctY29udHJvbHMvdmctc2NydWItYmFyL3ZnLXNjcnViLWJhci1jdXJyZW50LXRpbWUvdmctc2NydWItYmFyLWN1cnJlbnQtdGltZSc7XG5pbXBvcnQge1ZnVGltZURpc3BsYXl9IGZyb20gJy4vc3JjL3ZnLWNvbnRyb2xzL3ZnLXRpbWUtZGlzcGxheS92Zy10aW1lLWRpc3BsYXknO1xuaW1wb3J0IHtWZ1RyYWNrU2VsZWN0b3J9IGZyb20gJy4vc3JjL3ZnLWNvbnRyb2xzL3ZnLXRyYWNrLXNlbGVjdG9yL3ZnLXRyYWNrLXNlbGVjdG9yJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbIENvbW1vbk1vZHVsZSBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBWZ0NvbnRyb2xzLFxuICAgICAgICBWZ0Z1bGxzY3JlZW4sXG4gICAgICAgIFZnTXV0ZSxcbiAgICAgICAgVmdWb2x1bWUsXG4gICAgICAgIFZnUGxheVBhdXNlLFxuICAgICAgICBWZ1BsYXliYWNrQnV0dG9uLFxuICAgICAgICBWZ1NjcnViQmFyLFxuICAgICAgICBWZ1NjcnViQmFyQnVmZmVyaW5nVGltZSxcbiAgICAgICAgVmdTY3J1YkJhckN1ZVBvaW50cyxcbiAgICAgICAgVmdTY3J1YkJhckN1cnJlbnRUaW1lLFxuICAgICAgICBWZ1RpbWVEaXNwbGF5LFxuICAgICAgICBWZ1RyYWNrU2VsZWN0b3JcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgVmdDb250cm9scyxcbiAgICAgICAgVmdGdWxsc2NyZWVuLFxuICAgICAgICBWZ011dGUsXG4gICAgICAgIFZnVm9sdW1lLFxuICAgICAgICBWZ1BsYXlQYXVzZSxcbiAgICAgICAgVmdQbGF5YmFja0J1dHRvbixcbiAgICAgICAgVmdTY3J1YkJhcixcbiAgICAgICAgVmdTY3J1YkJhckJ1ZmZlcmluZ1RpbWUsXG4gICAgICAgIFZnU2NydWJCYXJDdWVQb2ludHMsXG4gICAgICAgIFZnU2NydWJCYXJDdXJyZW50VGltZSxcbiAgICAgICAgVmdUaW1lRGlzcGxheSxcbiAgICAgICAgVmdUcmFja1NlbGVjdG9yXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBWZ0NvbnRyb2xzTW9kdWxlIHt9XG4iXX0=