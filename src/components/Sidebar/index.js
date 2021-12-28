import React from 'react'
import { useDataLayerValue } from '../../Store/DataLayer';
import SidebarOption from '../SidebarOption';
import './index.css';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

export default function Sidebar() {
  const [{ playList }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} option="Home" />
      <SidebarOption Icon={SearchIcon} option="Search" />
      <SidebarOption Icon={PlaylistPlayIcon} option="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playList?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
    </div>
  )
}
