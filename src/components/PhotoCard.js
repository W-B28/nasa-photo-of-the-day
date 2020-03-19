import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import Info from "./Info";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'reactstrap';


export default function PhotoCard(){
    const [photoData, setPhotoData] = useState({});

    useEffect(() => {

        axios.get(`https://api.nasa.gov/planetary/apod?api_key=lqdBeaeAKRzWdbom86DyfgiT5wOcpMtrcGu89iX9`)
        .then(response => {
        console.log(response);
        setPhotoData(response.data);
        })
        .catch(error => {
        console.log("photo data didn't load", error);
        });

    }, []);

// styles
    const PhotoCard = styled.div `
      background-color: lightgray;
      img {
        width: 80vw;
        margin-top: 8%;
      }

    `


    return (

        <PhotoCard>

            <img src = {photoData.url} className = "space-img" alt="NASA's image of the day"/>

            <Info
            title = {photoData.title}
            date = {photoData.date}
            explanation = {photoData.explanation}
            copyright = {photoData.copyright}
            />

        </PhotoCard>

    )

}
