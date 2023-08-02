import React from 'react'
function Card(props) {
    console.log(props.info)
    return (
        <div style={{ display: "flex", margin: 10 }}>
            {
                <div style={{
                    width: 200, height: 200,
                    backgroundColor: "black",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 10,
                    borderRadius: 10,
                    opacity: 0.85
                }}>
                    {
                        <div style={{ padding: 10 }}>
                            Id: {props.info.coin_id}
                        </div>
                    }
                    {
                        <div style={{ padding: 10 }}>
                            Coin: {props.info.id}
                        </div>
                    }
                    {
                        <div style={{
                            backgroundImage: `url(${props.info.thumb})`,
                            width: 40,
                            height: 40,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            padding: 10
                        }}>
                        </div>
                    }
                    {
                        <div style={{ padding: 10 }}>
                            Price: {props.info.price_btc}
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default Card;