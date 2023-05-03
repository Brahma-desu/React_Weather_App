import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import Weather from './components/Weather';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

function App() {

  const api = {
    key: "9ef56a60bbafa8631c368338ba968d07",
    // url: "https://api.openweathermap.org/data/2.5/",
    url: "https://pro.openweathermap.org/data/2.5/"
  }

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchDate = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${api.url}/forecast/hourly?lat=${lat}&lon=${long}&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        })

      // await fetch(`${api.url}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${api.key}`)
      //   .then(res => res.json())
      //   .then(result => {
      //     setData(result)
      //     console.log(result);
      //   })
    }
    fetchDate();
    // console.log("Latitude is:", lat);
    // console.log("Longitude is:", long);
  }, []);

  console.log(data.name,data.sys.sunrise,data.sys.country);

  return (
    <Box className="App">
      <Typography variant='h1' align='center'>Weather App</Typography>
      {
        (typeof data.main != 'undefined') ?(
          <Weather weatherDate={data} />
        ):(
          <Box>
            Weather Data is Not Available
            <Box>React Weather App</Box>
          </Box>
        )
      }
    </Box>
  );
}

export default App;
