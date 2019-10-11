<p align="center">
<img width="216" alt="Screen Shot 2019-10-11 at 11 55 26 AM" src="https://user-images.githubusercontent.com/52796844/66666182-1f4fac80-ec1e-11e9-9bd0-27ef5e31f9c7.png">
<br>
by David Hebert
</p>
  
<br>

## Overview:
<br>
Live Application: https://listener-aa.herokuapp.com/#/
<br>
<strong>Listener</strong> (a Spotify clone) is a social music streaming platform planned and executed in 10 days.
It includes user authentication, playlist management, and a persistent audio player.

<br>


## Technologies:
<br>

* Listener uses **Rails** and **PostgreSQL** for backend data management. 
* Audio and image files are stored and hosted using **S3** from **Amazon Web Services**. 
* The frontend is built using **React** and **Redux**.

<br>


## Feature Highlights:

<br>
<br>


<p align="center">
<img width="508" alt="Screen Shot 2019-10-11 at 11 58 54 AM" src="https://user-images.githubusercontent.com/52796844/66666417-92592300-ec1e-11e9-9753-7f9577d9fcf1.png">
</p>
  
<br>
  
### Persistent Media Player

<br>

Listener's media player is the leading feature and was the most challenging to implement. An HTML5 audio element has a number of native methods, properties, and events with which you can build an JavaScript application. The component is persistently mounted and manipulates a hidden audio element. The media player is broken down into two sub-components, one manages the audio features and the other display's information about the currently mounted track.

When a user click on a song, album, or playlist in the application, it is added to the track queue in the application state. The queue is an array of integers representing individual tracks ids in the backend. A track model has an attached audio file hosted by Amazon S3, as well an associated artist, album, and relevant artwork. The media player mounts the first item in the queue and awaits user input to begin playback. Skipping songs simply traverses the queue.

Inside the media player component, various properties of the HTML audio element are stored inside the component's internal state. Each button has an event listener prepared to trigger methods on the hidden audio element.

<br>
<br>
<br>

<p align="center">
<img width="508" alt="Screen Shot 2019-10-11 at 11 58 13 AM" src="https://user-images.githubusercontent.com/52796844/66666425-984f0400-ec1e-11e9-9acd-7e2d45768852.png">
</p>
<br>
  
 ### User Authentication
 
<br>

User authentication is acheived using bcrypt to generate a password hash for each user. The literal password string is lost upon account creation and never stored. When a user returns to begin a session, a new session instance compares a password input using bcrypt methods. 

Playlists have a user association that is used to determine which playlists to render when a user logs in. 
