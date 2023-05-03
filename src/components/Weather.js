import React from "react";
import { Card, Typography } from "@mui/material";


function Weather(weatherDate) {
    console.log(weatherDate.name);

    return (
// console.log(data.name,data.sys.sunrise,data.sys.country);
        <Card>
            <Typography>
                {weatherDate.name}
            </Typography>
            {/* <Typography>
                {weatherDate.sys.country}
            </Typography> */}
            {/* <p>Temprature: {weatherDate.main.temp}</p>
            <p>Sunrise: {weatherDate.sys.sunrise}</p>
            <p>Sunset: {weatherDate.sys.country}</p> */}
        </Card>
    )
}

export default Weather;