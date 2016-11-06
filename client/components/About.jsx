import React, { Component } from 'react';
import { hashHistory, withRouter, Link } from 'react-router';
import request from 'superagent';
import cookie from 'react-cookie';



const About = () => {
  return (

  <div>
    <div className="about">
        <h1>ARCHIVING ART</h1>
        <p>It's sad that 5ptz isnt around anymore but fortunately there is still great graffiti, murals and street art out there.  This is a place to sign up and keep enjoying the most beautiful art living on our walls, sidewalks and tunnels. The art painted around us will someday be gone whether its painted over or demolished. This is a place outside of social media to record some of the masterpieces of our time. </p>
        <p>Art is for others to enjoy for free. It is not tagging your name or favorite saying nor is it destructive. It is also not a reason to sue anyone who takes a photo or video in front of your art for copyright issues. </p>
        <p>No spam emails. Just an occasional picture admiring some local work whether its simply beautiful or badass.  Email your favorite works and we will gladly display them on the site and add to the public's library.</p>
      </div>

<div className="gallery">
<img src='//img.haozhaopian.net/share/1477491905662daY.jpg' />
<img src='//img.haozhaopian.net/share/1477435231039YaG.jpg' />
  <img src='//img.haozhaopian.net/share/1477434336224AMa.jpg' />
  <img src='//img.haozhaopian.net/share/1477433585144NdU.jpg' />
  <img src='//img.haozhaopian.net/share/1477434493920JiU.jpg' />
  <img src='//img.haozhaopian.net/share/1477434725418pee.jpg' />
  </div>
</div>

  );
}

export default withRouter(About);




