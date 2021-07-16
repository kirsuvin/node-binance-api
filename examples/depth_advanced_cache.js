const Binance = require( '../node-binance-api.js' );

const binance = new Binance().options( {
    APIKEY: 'S0s6Aejzcq4xUgzzizcT7kKqduPH7WwjGBsXzStyvld0G8fPQi5jZfLO4yzGmUes',
    APISECRET: 'byLktDZq745wAmVQAz9Z0qc3VuZAxBvtMEK87bpbtrzffOxFrs3jhMpbtc5ba6HI',
    verbose: true
} );

//best bid -> max bid  best ask -> min ask  (already sorted in socket)
// Authenticated client, can make signed calls
/*const client2 = Binance({
  apiKey: '*******',
  apiSecret: '********',
  getTime: Date.now(),
})*/
 
( async () => {
    binance.websockets.depthCache( [ 'BTCUSDT' ], ( symbol, depth ) => {
        // let bids = binance.sortBids( depth.bids );
        // let asks = binance.sortAsks( depth.asks );
        // console.info( symbol + ' depth cache update' );
        

        //console.info( 'bids', bids );
        //console.info( 'asks', asks );
        console.info( 'best bid/ask: ' + JSON.stringify( binance.getLvlsDepth( symbol, 1, 0.2 ) ) );

        
        //console.info( 'best bid: ' + depth.bestBid );
        //console.info( 'best ask: ' + depth.bestAsk );
    // console.info( 'last updated: ' + new Date( depth.eventTime ) );
    } );
} )();
