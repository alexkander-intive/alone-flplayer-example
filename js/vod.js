(() => {
  const videoElement = document.getElementById('videoVod');
  const contentUrl =
    'https://storage.googleapis.com/shaka-demo-assets/' +
    'angel-one-widevine/dash.mpd';
  const licenseUrl = 'https://cwip-shaka-proxy.appspot.com/no_auth';
  const playerBuilder = flPlayer.createPlayerBuilder();
  const player = playerBuilder
    .mediaElement(videoElement)
    .mediaUrl(contentUrl)
    .drmLicenseUrl(licenseUrl)
    .drmScheme(flPlayerInterface.DrmScheme.WIDEVINE)
    .mediaType(flPlayerInterface.MediaType.DASH)
    .build();

  player.subscribe('error', function (error) {
    console.log('error', error);
  });

  player.subscribe('contentloaded', function () {
    console.log('contentloaded');
  });

  player.subscribe('playbackstatechanged', function (state) {
    console.log('playbackstatechanged', state);
  });
  
  document.getElementById('videoVodPlayButton').addEventListener('click', ()=>{
    player.play();
  });

  document.getElementById('videoVodPauseButton').addEventListener('click', ()=>{
    player.pause();
  });
  
  player.play();
  
})()