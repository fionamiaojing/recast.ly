var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      q: options.query,
      maxResults: options.max,
      key: options.key,
      type: 'video',
      videoEmbeddable: true
  
    },
    success: function(data) {
      callback(data);
    },
    failure: function(data) {
      
    }
  });
};
window.debounceSearch = _.debounce(searchYouTube, 500);
window.searchYouTube = searchYouTube;
