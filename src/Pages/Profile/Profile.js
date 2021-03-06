import React, {useContext} from 'react';
import "./Profile.css";
import setting from "../../assets/cogwheel.png";
import userPic from "../../assets/kirito.jpg";
import Songs from "../../components/ProfileTabs/Songs/Songs"
import Info from "../../components/ProfileTabs/Info/Info";
import Stats from "../../components/ProfileTabs/Stats/Stats";
import Upload from "../../components/ProfileTabs/Upload/Upload";
import Events from "../../components/ProfileTabs/Events/Events";
import {NavLink, Route, Switch} from "react-router-dom";
import songImg from "../../assets/kirito-square.jpg";
import {VisibilityContext} from "../../context/visibilityProvider";

function Profile({user}) {

    const artist = {artistName : "Leroy Jenkins", age : 24, genre : "edm", profilePicture : songImg };

    const list = [
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : userPic },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : userPic },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : userPic },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : userPic },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : userPic },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : userPic },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : userPic },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : userPic },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : userPic },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : userPic },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : userPic },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : userPic },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : userPic },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : userPic },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : userPic },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : userPic },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : userPic },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : userPic },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : userPic },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : userPic },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : userPic },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : userPic },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : userPic },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : userPic },
        {songName : "Leroy Jenkins", songLength : 260, genre : "edm", songImg : userPic },
    ];

    return (
        <>
            <div className={"profile-container"}>
                <div className={"profile-header"}>
                    <div className={"user-picture"}>
                        <img className={"user-picture"} src={userPic} alt={"kirito"}/>
                    </div>
                    <div className={"settings"}>
                        <img className={"settings"} src={setting} alt={"Settings"}/>
                    </div>
                </div>
                <nav className={"profile-nav"}>
                    <NavLink className={"Link"} activeClassName={"active link"} to={"/Profile/Info"}>Info</NavLink>
                    <NavLink className={"Link"} activeClassName={"active link"} to={"/Profile/Songs"}>Songs</NavLink>
                    <NavLink className={"Link"} activeClassName={"active link"} to={"/Profile/Events"}>Events</NavLink>
                    <NavLink className={"Link"} activeClassName={"active link"} to={"/Profile/Stats"}>Stats</NavLink>
                    <NavLink className={"Link"} activeClassName={"active link"} to={"/Profile/Upload"}>Upload</NavLink>
                </nav>
                <div className={"content"}>
                    <Switch>
                        <Route path={"/profile/Info"} >
                            <Info artist={artist}/>
                        </Route>
                        <Route path={"/profile/Songs"} >
                            <Songs list={list}/>
                        </Route>
                        <Route path={"/profile/Events"} >
                            <Events />
                        </Route>
                        <Route path={"/profile/Stats"} >
                            <Stats />
                        </Route>
                        <Route path={"/profile/Upload"} >
                            <Upload />
                        </Route>
                    </Switch>
                </div>
            </div>
        </>
    );
}

export default Profile;