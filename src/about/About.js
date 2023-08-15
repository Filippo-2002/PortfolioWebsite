import React, {Component} from "react";
import Avatar from "../avatar/Avatar.js";
import AboutMenu from "./AboutMenu.js";


export default class About extends React.Component {
    render(){
        return <>
            <Avatar page = 'about'/>
            <AboutMenu/>
        </>;    
    }
}