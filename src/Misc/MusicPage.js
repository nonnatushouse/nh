import React from "react";
import "./VideoPage.css";
import "../Info.css";

export default function MusicPage() {
  return (
    <div className="music-container">
      <div className="info-big-title">Music</div>
      <div className="info-title youtube-text music-title">
        Original Score & Albums
      </div>
      <div className="info-text youtube-text">
        Call the Midwife has an excellent score, composed by{" "}
        <a
          href="http://petersalem.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Peter Salem
        </a>{" "}
        (series 1-4) and{" "}
        <a
          href="http://coolmusicltd.com/composers/maurizio-malagnini/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maurizio Malagnini
        </a>{" "}
        (series 4 onwards).
      </div>
      <div className="info-text youtube-text">
        {" "}
        There are as of 2019 three albums released with music from Call the
        Midwife.{" "}
      </div>
      <div className="info-text youtube-text">
        {" "}
        The first one,{" "}
        <a
          href="https://www.amazon.co.uk/Call-Midwife-Album-Various-Artists/dp/B00AOAO24G"
          target="_blank"
          rel="noopener noreferrer"
        >
          Call The Midwife: The Album
        </a>{" "}
        was released in 2013 and contains a mix of scores composed by Peter
        Salem, songs sung by the actors (such as the nuns singing psalms), and a
        few of the '50s and '60s songs featured in the show by other artists.
        The album is available on{" "}
        <a
          href="https://open.spotify.com/album/2bNByRrKWDrTMcqIA7aE0T"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spotify
        </a>
        .
      </div>
      <div className="info-text youtube-text">
        {" "}
        The second one,{" "}
        <a
          href="https://www.amazon.co.uk/Call-Midwife-Christmas-Various-Artists/dp/B00FE9R21C"
          target="_blank"
          rel="noopener noreferrer"
        >
          Call the Midwife - The Christmas Album
        </a>{" "}
        is similar to the first one in that it contains a mix of original scores
        by Peter Salem and songs featured on the show by other artists. A
        version of the album containing only the Peter Salem originals is
        available on{" "}
        <a
          href="https://open.spotify.com/album/2rJGK6vnb6phisPR1ZDmA3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spotify
        </a>
        .
      </div>

      <div className="info-text youtube-text">
        {" "}
        A third album simply named{" "}
        <a
          href="https://www.amazon.co.uk/Call-Midwife-Maurizio-Malagnini/dp/B07BSCQM4R"
          target="_blank"
          rel="noopener noreferrer"
        >
          Call the Midwife
        </a>{" "}
        was released in 2018. This one only contains original scores, mostly by
        Maurizio Malagnini (and a few which he and Peter Salem colaborated on).
        Like the others, this one is available on{" "}
        <a
          href="https://open.spotify.com/album/1vOZvgb8oBDq4pGqTf74c6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spotify
        </a>
        . Please note that the songs on this album are from series 5-7, and some
        of the titles may potentially contain spoilers. So wait to listen to
        this album until you are all caught up!
      </div>

      <div className="info-title youtube-text music-title">Featured Music</div>
      <div className="info-text youtube-text">
        Call the Midwife features a lot of music from the '50s and '60s.
        Information about what song is played when can be found on the site{" "}
        <a
          href="https://www.tunefind.com/show/call-the-midwife"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tunefind
        </a>
        . Here you will find what songs are played, series by series, episode by
        episode.
      </div>
      <div className="info-title youtube-text music-title">
        A few personal favourites
      </div>

      <div className="info-text-bold info-text youtube-text">In the Mirror</div>
      <div className="info-text youtube-text">
        {" "}
        Could not find a youtube version of this, but it's available on{" "}
        <a
          href="https://open.spotify.com/track/0gF94kjAFn91LsBJKGushz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spotify
        </a>
        . Wishing to avoid spoilers I shall not go into detail on this one, but
        it's a beautiful score and is played at several importat moments for a
        certain character.
      </div>

      <div className="info-text-bold info-text youtube-text">
        Where Rose Lies
      </div>
      <div className="info-text youtube-text">
        This score is also very beautiful and is used in several emotional
        moments, but unlike 'Into the Mirror' it is not tied to a specific
        character. It is available on{" "}
        <a
          href="https://open.spotify.com/track/53NF5LFzmWCZbHkQV6ddAm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spotify
        </a>
        .
      </div>

      {/* Why Do Fools Fall In Love? */}
      <div className="info-text-bold info-text youtube-text">
        Why Do Fools Fall In Love - Frankie Lymon & The Teenagers
      </div>
      <div className="info-text youtube-text">
        The song was featured at the end of S1E6. The same song was also sung by
        some of the members of cast for a{" "}
        <a
          href="https://www.youtube.com/watch?v=c_0m4cjOEIM"
          target="_blank"
          rel="noopener noreferrer"
        >
          charity event
        </a>{" "}
        for BBC Children in Need.
      </div>
      <iframe
        title="music-why-do-fools-fall-in-love-playlist"
        className="video-frame"
        src="https://www.youtube.com/embed/videoseries?list=PLUe7aTsP6T8JVs-1FcUTDX7uqaq9NKiq9"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowFullScreen"
      />
      {/* My Special Angel */}
      <div className="info-text-bold info-text youtube-text">
        My Special Angel - Malcolm Vaughan
      </div>
      <div className="info-text youtube-text">
        The song was featured in S2E2 as Chummy and Peter's song. It's all made
        extra sweet when the song is repeated again at the end of the episode
        (that version can be listened to on{" "}
        <a
          href="https://open.spotify.com/track/5iKwV1kXW1Ix0cWx1DbbOt"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spotify
        </a>{" "}
        ).
      </div>
      <iframe
        title="music-my-special-angel"
        className="video-frame"
        src="https://www.youtube.com/embed/xYf7n1JJAwI"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowFullScreen"
      />

      {/* May the Good Lord Bless and Keep You */}
      <div className="info-text-bold info-text youtube-text">
        May the Good Lord Bless and Keep You - Jim Reeves
      </div>
      <div className="info-text youtube-text">
        The song was featured in S3E8. This one also twice, once as being played
        as a record, and the other as a performance by the cast. The cast
        recording is not available on neither youtube nor Spotify, but a group
        called <a
          href="https://youtu.be/ze-z3MfIbr4"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Maidstone Singers
        </a> recorded a version arranged to sound like the performance in Call the Midwife. 
      </div>
      <iframe
        title="music-may-the-good-lord"
        className="video-frame"
        src="https://www.youtube.com/embed/PD9KLA4qz3A"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowFullScreen"
      />


      {/* I Love How You Love Me */}
      <div className="info-text-bold info-text youtube-text">
      I Love How You Love Me - Paris Sisters
      </div>
      <div className="info-text youtube-text">
        The song was featured in S5E7. To avoid spoilers I shall say no more about it, I very much enjoy both the song and the scene it is played over.
        </div>
      <iframe
        title="music-love-how-you-love-me"
        className="video-frame"
        src="https://www.youtube.com/embed/AQwVtLXAWTo"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowFullScreen"
      />


    </div>
  );
}
