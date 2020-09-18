import Head from 'next/head'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'



export default () => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />

      <title>Discord Bots App</title>
      
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://discordbots.app/" />
      <meta property="og:site_name" value="Discord Bots App" />
      <meta property="og:title" content="#1 Discord Bot List for iOS & Android." />
      <meta property="og:description" content="Browse through thousands of Discord Bots right from your phone! Download now for free on the iOS and Google Play Stores." />
      <meta property="og:image" content="/banner.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://discordbots.app/" />
      <meta property="twitter:title" content="#1 Discord Bot List for iOS & Android." />
      <meta property="twitter:description" content="Browse through thousands of Discord Bots right from your phone! Download now for free on the iOS and Google Play Stores." />
      <meta property="twitter:image" content="/banner.png" />

      <link rel="shortcut icon" href="/logo.png" type="image/jpeg" />
      <link rel="icon" href="/logo.png" type="image/x-icon" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="identifier-url" content="https://discordbots.app" />
      <meta name="keywords" content="discordbotsapp, discord bots app, discordbots, discordbots app, discord bot app" />
      <meta name="language" content="EN" />
      <meta name="copyright" content="@2020 discordbots.app" />
      <meta name="theme-color" content="#7289DA" />

      <link rel="stylesheet" href="./home.css" />

      <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
    
    </Head>
    <div className="bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6"><img src="./img.png" style={{width: '100%', height: '100%'}} /></div>
          <div className="col-lg-6">
            <div className="container">
              <h1>Discord Bots App</h1>
              <h5>Browse through thousands of Discord Bots from your phone! Download now on the Google Play
                Store
                and Apple App Store.</h5>
              <div className="buttons">
                <a href="https://play.google.com/store/apps/details?id=com.Tetracyl.discord_bots" target="blank">
                  <img src="./google-play-badge.png" style={{width: '230px', height: '90px'}} />
                </a>
                <a href="https://apps.apple.com/us/app/id1526577592" target="blank">
                  <img src="./apple-store.png" style={{width: '200px', height: '60px'}} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)