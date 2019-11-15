import React from "react";
import "./VideoPage.css";

export default function VideoPage() {
  return (
    <div className="video-page-container">
      <div className="info-big-title">Videos</div>
      <div className="info-text youtube-text">
        Here is a collection of some of my favourite videos featuring the cast
        and crew of Call the Midwife.
      </div>
      <div className="info-title youtube-text">Charity & Fun</div>
      <div className="info-text youtube-text">
        The fantastic Red Nose Day video from 2013. Features most of the main
        cast from Series 1.
      </div>
      <iframe 
        title="charity-playlist"
        className="video-frame"
        src="https://www.youtube.com/embed/playlist?list=PLUe7aTsP6T8JOZLwzAH3mA4vLxPcsjHqK"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowFullScreen"
      />
      <div className="info-text youtube-text">
        Call the Midwife - The Musical! Well, almost. BBC Children in Need,
        2013. Features a duet with Laura Main (Shelagh) and Stephen McGann (Dr
        Turner), and a performance of "Why do fools fall in love". The video
        features Judy Parfitt (Sister Monica Joan), Jenny Agutter (Sister
        Julienne), Ben Caplan (Noakes), Leo Staar (Alec) and several
        singers/dancers.
      </div>
      <iframe
        title="ctm-the-musical"
        className="video-frame"
        src="https://www.youtube.com/embed/c_0m4cjOEIM"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowFullScreen"
      />

      <div className="info-text youtube-text">
        The Runner - a sketch from one of the earlier series, featuring the
        mishaps of a runner on the set of Call the Midwife. The video features
        several main cast members.
      </div>
      <iframe
        title="the-runner"
        className="video-frame"
        src="https://www.youtube.com/embed/Jw-39_mY_CI"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowFullScreen"
      />

      <div className="info-text youtube-text">
        In 2015, Laura Main (Shelagh), Jenny Agutter (Sister Julienne), Jack
        Ashton (Tom) and Stephen McGann (Dr Turner) took part in a mini Strictly
        competition.
      </div>
      <iframe
        title="ctm-strictly"
        className="video-frame"
        src="https://www.youtube.com/embed/ipihMQL8kUM"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowFullScreen"
      />
      <div className="info-text youtube-text">
        This 2016 BBC Children in Need video involves Eddie Redmayne being
        connected to various people by GBBO hosts- I mean incompetent phone
        operators, Mel and Sue. It mainly features other things, but there is a
        quick visit to Nonnatus House (at timestamp 1:44), so
        I thought it was worth including.
      </div>
      <iframe
        title="ctm-2016-cameo"
        className="video-frame"
        src="https://www.youtube.com/embed/JdOtQr-eLgk"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowFullScreen"
      />


<div className="info-title youtube-text">Videos by others about/featuring Call the Midwife content/characters</div>
<div className="info-text youtube-text">
        Reaction videos is a thing that has become very popular over the past couple of years.
        People online are reacting to everything - including Call the Midwife! These next two videos
        are by an acual OBGYN, reacting to episodes of Call the Midwife. In the first one she reacts to
        S2E8, and in the second to S5E6. More episodes might have been uploaded since the creation of
        this page, which will be found on the youtuber's channel.
      </div>
      <iframe
        title="ctm-react-drmamajones-1"
        className="video-frame"
        src="https://www.youtube.com/embed/videoseries?list=PLUe7aTsP6T8LiKXBzssISWFk2BYM48Tcy"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowFullScreen"
      />
      <iframe
        title="ctm-react-drmamajones-2"
        className="video-frame"
        src="https://www.youtube.com/embed/ViYnMTClRWo"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowFullScreen"
      />

<div className="info-text youtube-text">
        Here is a short video from Newzoids, featuring a well-known and beloved character.
      </div>
      <iframe
        title="ctm-newzoids"
        className="video-frame"
        src="https://www.youtube.com/embed/3YVkygNWElo"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowFullScreen"
      />



      <div className="info-title youtube-text">Interviews</div>
      <div className="info-text youtube-text">
        There are a lot of Interviews with the cast online. Below is a playlist
        of a selection that have been found on youtube.
      </div>
      <iframe
        title="interview-playlist"
        className="video-frame"
        src="https://www.youtube.com/embed/videoseries?list=PLUe7aTsP6T8JGFZrXq-TkkwlwT52JuuHr"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowFullScreen"
      />
    </div>
  );
}
