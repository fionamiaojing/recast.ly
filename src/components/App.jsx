class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      videolist: exampleVideoData,
      currentVideo: exampleVideoData[0],
    };
  }
  
  onClickListVideoTitle(video) {
    console.log(video);
    this.setState({
      currentVideo: video
    });
  }
  
  onSubmitText() {
    console.log('submitted');
  }
  
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList onClick={this.onClickListVideoTitle.bind(this)}videos={this.state.videolist} />
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
