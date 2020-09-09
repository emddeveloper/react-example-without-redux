import React, { useState } from "react"
import SongList from "./SongList"
import SongDetails from "./SongDetails"

const App = () => {
  const [songs, setSongs] = useState([
    {
      title: "Hello i'm wanna go",
      length: 4.56
    },
    {
      title: "Hello i'm wanna go 1",
      length: 4.06
    },
    {
      title: "Hello i'm wanna go 2",
      length: 2.56
    },
    {
      title: "Hello i'm wanna go 3",
      length: 5.56
    }
  ])
  const [selectedSong, setSelectedSong] = useState(songs[0])
  const [showDetails, setShwDetails] = useState(false)
  const selectSongFunction = selectSong => {
    setSelectedSong(selectSong)
    setShwDetails(true)
  }
  return (
    <div className="ui container">
      <SongList song={songs} selectSongFunction={selectSongFunction} />
      {showDetails ? <SongDetails selectedSongDetails={selectedSong} /> : ""}
    </div>
  )
}

export default App
