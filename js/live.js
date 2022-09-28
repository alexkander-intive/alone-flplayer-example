(() => {

  const rawPlatformConfig = {
    NAME: "MSG DTC Staging",
    CONFIG_ENDPOINT: "https://config-service.msgcms-stag.quickplay.com/remote/config?flat=true",
    LIVE_CHANNEL_ENDPOINT: "https://live-data-store.msgcms-stag.quickplay.com/content/urn/resource/catalog",
    METADATA_ENDPOINT: "https://data-store.msgcms-stag.quickplay.com/content/urn/resource/catalog",
    AUTHORIZATION_ENDPOINT: "https://auth.d2c-stag.quickplay.com/oauth2/token",
    CLIENT_REGISTERATION_ENDPOINT: "https://device-register-service.d2c-stag.quickplay.com/",
    CONTENT_AUTH_ENDPOINT: "https://playback-auth-service.d2c-stag.quickplay.com",
    BOOKMARK_ENDPOINT: "https://bookmark-service.d2c-stag.quickplay.com",
    STREAM_CONCURRENCY_ENDPOINT: "https://stream-service.d2c-stag.quickplay.com",
    FAVOURITE_ENDPOINT: "https://favorite-service.d2c-stag.quickplay.com",
    SEARCH_ENDPOINT: "https://data-store.msgcms-stag.quickplay.com/content/search",
    LOOKUP_ENDPOINT: "https://data-store.msgcms-stag.quickplay.com",
    LIVE_LOOKUP_ENDPOINT: "https://live-data-store.msgcms-stag.quickplay.com/content/lookup",
    LIVE_SEARCH_ENDPOINT: "https://live-metadata.msgcms-stag.quickplay.com/content/search",
    IMAGE_RESIZER_ENDPOINT: "https://image-resizer-cloud.msgcms-stag.quickplay.com/image",
    HEARTBEAT_ENDPOINT: "https://heartbeat-service.d2c-stag.quickplay.com",
    LICENSE_RENEW_ENDPOINT: "https://license-refresh.d2c-stag.quickplay.com",
    CLIENT_ID: "webclient-ui-app",
    CLIENT_SECRET: "806c6696-fffc-4667-91fb-08a77d55e072",
    X_CLIENT_ID: "msg-msgdtc-web",
    DEVICE_NAME: "web",
  };

  const platformConfig = {
    clientID: rawPlatformConfig.CLIENT_ID,
    clientSecret: rawPlatformConfig.CLIENT_SECRET,
    xClientId: rawPlatformConfig.X_CLIENT_ID,
    authorizationEndPoint: rawPlatformConfig.AUTHORIZATION_ENDPOINT,
  };

  const platformClientDataKeyStorage = 'client-name';
  const contentId = '306C8BAB-A230-4E60-A8D5-DA588056027F';
  const accessToken = "eyJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0..9hSYO95ByEv-lFSE.Mw_fZqA2FD1CBKl8v9x61NeT9QtCPtbJx_RJJM_02bTa3NHNAdK50v0UXZdkth5NvWdounANo-JL5_BxrzEm1ncJwbKVNKw8i79fTPfCQrACQZBIT1Zy11ievx6mm0ehLK5VDEhe-wtMBs7hrQukHgB1T5ESRf1lui9b4b8mdDaQkKMReAhi0P3OOF1SxGYdQDyF_2bJNl2TuGRcgSZHwOMHZj3oKyvSmMI1m5QrbtA0jmyn9WhGvFueh5g3CWy0lsbn1VF0DjMDy8xw6Ff2KKhxxHJHgxKqP_VyI2vjlWMHnv8UP9AffT4xJmWZ04XAhkev32QtJxNwRbF6ZM1JdaPd0zzDIuXN68zG7gual3jG3SW2s-qysoVi0vSJ0YITdeMILSGRyYHaU8uEuvMw895WfVjbYLhHQLFbTAIEFlixE4D8NAw23vcpVlCyKBUNaKUMkfqB4OZFZP5-aFohX_yc_F_M4IPCOgCo84Lrz6Cv4WFzYXDen7gNlB8g521T6HjPAVRL3QKn1un5CNiZ6AbYeCsRsztb9WuFH-ZwE6LO2vvGDUhHbSYQFisqHb9Ie0ffwra_7Rl2q0jaHUZ7Ve9ezMi6XQUyo-n6U-yBQXBkzB6lBlQJVPooYQJfpDtyj2vKcfjrm0aoRIzcF8ktfnPPZRFhPgEpHkcTtyMY1IflqX4.S-Z_kit18pIbPFqATswTTA";

  const savePlatformClient = (client) => {
    localStorage.setItem(platformClientDataKeyStorage, JSON.stringify(client))
  };

  const getCachedPlatformClient = () => {
    const rawPlatformClient = localStorage.getItem(platformClientDataKeyStorage)
    if (rawPlatformClient) {
      return JSON.stringify(rawPlatformClient);
    }
    return null;
  }

  let platformClient;
  const cachedPlatformClient = getCachedPlatformClient();
  const hasCachedPlatformClient = !!cachedPlatformClient;

  if (hasCachedPlatformClient) {
    platformClient = flPlatformAuthorizer.createPlatformClient(
      cachedPlatformClient.id,
      cachedPlatformClient.name,
    );
  } else {
    platformClient = flPlatformAuthorizer.createPlatformClient('firstlight-msg-staging-deviceId-001');
  }
  savePlatformClient(platformClient);

  const platformAuthorizer = flPlatformAuthorizer.createPlatformAuthorizer(
    platformConfig,
    {
      fetchUserAuthorizationToken: () => {
        return { accessToken: accessToken };
      },
    },
  );

  const contentAuthconfiguration = {
    endPointUrl: rawPlatformConfig.CONTENT_AUTH_ENDPOINT,
    clientRegistrationEndPointUrl: rawPlatformConfig.CLIENT_REGISTERATION_ENDPOINT,
  };

  const contentAuthorizer = flContentAuthorization.createContentAuthorizer(
    contentAuthconfiguration,
    platformAuthorizer,
    platformClient
  );

  contentAuthorizer.authorizePlayback({
    mediaID: contentId,
    consumptionType: flContentAuthorization.ConsumptionType.LIVE,
    catalogType: 'channel',
    mediaType: flPlayerInterface.MediaType.DASH,
    drmScheme: flPlayerInterface.DrmScheme.WIDEVINE,
    playbackMode: flContentAuthorization.PlaybackMode.LIVE,
  }).then((asset)=>{

    console.log(asset);

    const videoElement = document.getElementById('videoLive');
    const contentUrl =
      'https://storage.googleapis.com/shaka-demo-assets/' +
      'angel-one-widevine/dash.mpd';
    const licenseUrl = 'https://cwip-shaka-proxy.appspot.com/no_auth';
    const playerBuilder = flPlayer.createPlayerBuilder();
    const player = playerBuilder
      .mediaElement(videoElement)
      .mediaUrl(asset.contentUrl)
      .drmLicenseUrl(asset.licenseUrl)
      .drmScheme(asset.drmScheme)
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
  
    document.getElementById('videoLivePlayButton').addEventListener('click', ()=>{
      player.play();
    });

    document.getElementById('videoLivePauseButton').addEventListener('click', ()=>{
      player.pause();
    });

  })

})()