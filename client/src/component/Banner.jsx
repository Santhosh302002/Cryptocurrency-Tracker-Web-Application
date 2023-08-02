import React, { useEffect, useState } from 'react'
import { Container, Typography } from "@mui/material";
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Api } from '@mui/icons-material';
import axios from 'axios';
import Card from "../component/Card"

const useStyles = makeStyles((theme) => ({
    banner: {
        backgroundImage: "url(https://miro.medium.com/v2/resize:fit:1400/1*w2Eec-hEt9pCU376JCxRGw.jpeg)",
        opacity: 0.9,
        backgroundRepeat: "no- repeat",
        backgroundSize: "cover"
    },
    bannerContent: {
        height: 600,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
        color: "White"
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    }
}));


function Banner() {
    const classes = useStyles();
    const [CoinTrending, setCoinTrending] = useState([""]);
    const fetchData = async () => {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/search/trending`);
        setCoinTrending(data.coins);
        console.log(data.coins);
    }
    useEffect(() => {
        fetchData();
    }, [CoinTrending])

    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography
                        variant="h2"
                        style={{
                            fontWeight: "bold",
                            marginBottom: 15,
                            fontFamily: "Montserrat",
                        }}
                    >
                        CryptoX
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        style={{
                            textTransform: "capitalize",
                            fontFamily: "Montserrat",
                        }}
                    >
                        Keep Track of all the Crypto Currency
                    </Typography>
                </div>
                <div>
                    <div style={{ color: "Black", display: "flex", fontSize: 40, padding: 10, justifyContent: "center", fontWeight: 1000 }}>
                        Top Trending CyptoCoins
                    </div>
                    {
                        <div style={{ display: "flex", overflow: "auto" }}>
                            {CoinTrending.map((info) => {
                                return <Card info={info.item} />
                            })}
                        </div>
                    }
                </div>
            </Container>
        </div>
    );
}

export default Banner;
