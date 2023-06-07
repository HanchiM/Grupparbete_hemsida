function Opennav() {
  document.getElementById("MySidenav").style.width = "140px";
  document.getElementById("Main").style.marginLeft = "140px";
}

function Closenav() {
  document.getElementById("MySidenav").style.width = "0";
  document.getElementById("Main").style.marginLeft = "0";
}


document.addEventListener('DOMContentLoaded', function() {
  const Video = document.getElementById('MyVideo');
  const VideoSource = document.getElementById('VideoSource');
  const VideoUrls = [
    'Assets/Videos/Movie.mp4',
    'Assets/Videos/Walking.mp4',
    'Assets/Videos/Shibuya.mp4'
  ];
  let CurrentVideoIndex = 0;
  let IsFading = false;

  function FadeOutVideo() {
    IsFading = true;
    Video.style.opacity = '0';
  }

  function FadeInVideo() {
    Video.style.opacity = '1';
    IsFading = false;
  }

  function PlayNextVideo() {
    if (IsFading) return; // Prevent overlapping transitions

    FadeOutVideo();

    // Wait for the fade out transition to complete
    setTimeout(function() {
      CurrentVideoIndex = (CurrentVideoIndex + 1) % VideoUrls.length;
      VideoSource.setAttribute('src', VideoUrls[CurrentVideoIndex]);
      Video.load();

      // Wait for the new video to be loaded
      Video.addEventListener('canplay', function() {
        FadeInVideo();
        Video.play();
      }, { once: true });
    }, 500);
  }
  VideoSource.setAttribute('src', VideoUrls[CurrentVideoIndex]);
  Video.load();
  // Start the slideshow
  setInterval(PlayNextVideo, 5000);
});

