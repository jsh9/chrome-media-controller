# chrome-media-controller


A Chrome or Edge extension to use keyboard to control webpage media (video and audio).

## 1. Installation

This extension is published on the Chrome Web Store: https://chrome.google.com/webstore/detail/media-controller/eaecmocjfoffkdgcgmjfipbnfmakeane

(Edge supports installing Chrome extensions directly.)


## 2. How to use

| Key | Function |
|-----|----------|
| `k` | Play/pause |
| `j` | Seek backward 10 seconds |
| `l` | Seek forward 10 seconds |
| `m` | Mute/unmute sound |
| `w` | Increase volume |
| `s` | Decrease volume |
| `<` (Shift+`,`) | Slow down media playback speed |
| `>` (Shift+`.`) | Speed up media playback speed |

## 3. Which websites does this extension work on

I have tested this extension on the following websites.  Websites outside of this list may still work.

### Fully compatible:

* YouTube
* HBO Max
* Amazon Prime Video
* Hulu
* Paramount+
* Disney+
* Google Podcasts

### Partially compatible:

* Netflix
   - `j` and `l` can cause the Netflix webpage to shut down, so they are disabled
   - Please use ← and → (Netflix's default) to seek backward and forward

### Not compatible at all:

* [YouTube Music](https://music.youtube.com/)
   - YouTube music has its [unofficial shortcuts](https://support.google.com/youtubemusic/thread/180145/keyboard-shortcuts-web-player-cheat-sheet?hl=en) which are very different from this extension
   - Therfore, I have disabled this extension on YouTube Music
* [Vimeo](https://vimeo.com/)
   - This extension does not work on Vimeo at all
   - [Here](https://help.vimeo.com/hc/en-us/articles/12425998125073-What-are-player-keyboard-shortcuts-) are Vimeo's official keyboard shortcuts, which unfortunately don't always work
* Spotify
   - This extension does not work on Spotify at all
* Amazon Prime Music
   - This extension does not work on Spotify at all
