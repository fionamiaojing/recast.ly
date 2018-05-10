var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      q: query,
      maxResults: 5,
      key: window.YOUTUBE_API_KEY,
    },
    success: function(data) {
      console.log(data)
    },
    failure: function(data) {
      
    }
  });
};

window.searchYouTube = searchYouTube;
