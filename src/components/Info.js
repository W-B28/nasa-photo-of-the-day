import React, { useState, useEffect } from "react";
import styled from 'styled-components';


const Info =({title, date, explanation, copyright})=>{
    return (
      <div className="photo-info">
        <p>{date}</p>
        <h2>{title}</h2>
        <p>{explanation}</p>
        <p>Photo by: {copyright}</p>
      </div>
    );
  };
export default Info;
