import React from "react"

const SongList = props => {
  const renderedSongs = props.song.map((song, index) => {
    return (
      <div className="card" key={index}>
        <div className="content">
          <div className="header">{song.title}</div>
          <div className="description">
            {song.title} and duration is {song.length}
          </div>
        </div>
        <div className="ui bottom attached button" onClick={() => props.selectSongFunction(song)}>
          <i className="add icon"></i>
          Select Song
        </div>
      </div>
    )
  })
  return <div className="ui cards">{renderedSongs}</div>
}

export default SongList
