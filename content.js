document.addEventListener('keydown', handleKeyDown);

const allowedUrls = [
  'https://www.youtube.com/watch*',
  'https://www.netflix.com/watch/*',
  'https://play.hbomax.com/player/*',
  'https://podcasts.google.com/*',
  'https://www.paramountplus.com/shows/video/*',
  'https://www.disneyplus.com/video/*',
  'https://www.amazon.com/gp/video/detail/*',
  'https://www.hulu.com/watch/*',
];

function isUrlAllowed(allowedUrls, urlToCheck) {
  console.log(`urlToCheck: ${urlToCheck}`);
  return allowedUrls.some(url => {
    const regex = new RegExp("^" + url.replace("*", ".*") + "$");
    return regex.test(urlToCheck);
  });
}

function handleKeyDown(event) {
  const currentUrl = window.location.href;

  console.log(`currentUrl: ${currentUrl}`);

  if (!isUrlAllowed(allowedUrls, currentUrl)) {
    console.log('URL not in the allowlist for Media Controller');
    return;
  }

  console.log('Allowed');

  if (  // k, j, l, m, <, > are already defined in YouTube
    currentUrl.includes('youtube.com')
    && ['k', 'j', 'l', 'm', '<', '>'].includes(event.key)
  ) {
    return;
  }

  if (  // j & l cause issues on Netflix
    currentUrl.includes('netflix.com')
    && ['j', 'l'].includes(event.key)
  ) {
    return;
  }

  const mediaElements = Array.from(document.querySelectorAll('video, audio'));

  mediaElements.forEach((media) => {
    const volumeStep = 0.05;
    const playbackRateStep = 0.1;

    switch (event.key) {
      case 'k':
        if (media.paused) media.play();
        else media.pause();
        break;
      case 'j':
        media.currentTime = Math.max(media.currentTime - 10, 0);
        break;
      case 'l':
        media.currentTime = Math.min(media.currentTime + 10, media.duration);
        break;
      case 'm':
        media.muted = !media.muted;
        break;
      case 's':
        newVolume = Math.max(media.volume - volumeStep, 0);
        media.volume = newVolume;
        showStatusPrompt(newVolume, 'Volume');
        break;
      case 'w':
        newVolume = Math.min(media.volume + volumeStep, 1);
        media.volume = newVolume;
        showStatusPrompt(newVolume, 'Volume');
        break;
      case '<':
        newPlaybackRate = Math.max(media.playbackRate - playbackRateStep, 0.5);
        media.playbackRate = newPlaybackRate;
        showStatusPrompt(newPlaybackRate, 'Speed');
        break;
      case '>':
        newPlaybackRate = Math.min(media.playbackRate + 0.1, 2);
        media.playbackRate = newPlaybackRate;
        showStatusPrompt(newPlaybackRate, 'Speed');
        break;
    }
  });
}


function showStatusPrompt(status, name) {
  let statusPrompt = document.getElementById('status-prompt');

  if (!statusPrompt) {
    statusPrompt = document.createElement('div');
    statusPrompt.id = 'status-prompt';
    statusPrompt.style.position = 'fixed';
    statusPrompt.style.top = '10%';
    statusPrompt.style.left = '50%';
    statusPrompt.style.transform = 'translate(-50%, -50%)';
    statusPrompt.style.padding = '10px';
    statusPrompt.style.borderRadius = '5px';
    statusPrompt.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    statusPrompt.style.color = 'white';
    statusPrompt.style.fontSize = '18px';
    statusPrompt.style.fontWeight = 'regular';
    statusPrompt.style.zIndex = '9999';
    document.body.appendChild(statusPrompt);
  }

  statusPrompt.textContent = `${name}: ${(status * 100).toFixed(0)}%`;
  statusPrompt.style.display = 'block';

  clearTimeout(statusPrompt.timeout);
  statusPrompt.timeout = setTimeout(() => {
    statusPrompt.style.display = 'none';
  }, 1000);
}
