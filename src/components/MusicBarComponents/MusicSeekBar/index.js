import React from "react";
import "./style.scss";

const DurationOfSong = props => {
  console.log(props.duration);
  if (props.duration) {
    return (
      <p>
        {Math.round(props.duration / 60)}:{Math.round(props.duration % 60)}
      </p>
    );
  } else {
    return <p>0:0</p>;
  }
};

class MusicSeekBar extends React.Component {
  handleOnClick = e => {
    const percent =
      (e.clientX - e.currentTarget.offsetLeft) / e.currentTarget.offsetWidth;
    var temp = Math.round(percent * this.props.duration);
    this.props.adjustSeek(temp);
  };

  render() {
    return (
      <div className="slider-container-seek">
        <div className="main-music-bar-box">
          <div className="duration-div">
            <p>
              {Math.round(this.props.currentDuration / 60)}:
              {Math.round(this.props.currentDuration % 60)}
            </p>
          </div>
          <div className="music-bar-box" onClick={this.handleOnClick}>
            <div
              className="increasing-bar-box"
              style={{
                width:
                  (this.props.currentDuration * 100) / this.props.duration + "%"
              }}
            />
          </div>
          <div className="duration-div">
            <DurationOfSong duration={this.props.duration} />
          </div>
        </div>
      </div>
    );
  }
}

export default MusicSeekBar;
