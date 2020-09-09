import React from "react"

const SongDetails = props => {
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">{props.selectedSongDetails.title}</div>
          <div className="description">
            {props.selectedSongDetails.title} and duration is {props.selectedSongDetails.length}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SongDetails
