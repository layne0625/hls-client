
function App() {
  return (
    <div className="App">
      <video
        id="my-video"
        className="video-js"
        controls
        preload="auto"
        width="640"
        height="264"
        poster="MY_VIDEO_POSTER.jpg"
        data-setup="{}"
      >
        <source src="/hlsfile/playlist.m3u8" type="application/x-mpegURL" />

        <p className="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a
          web browser that
          <a href="https://videojs.com/html5-video-support/" >supports HTML5 video</a
          >
        </p>
      </video>
    </div>
  );
}

export default App;
