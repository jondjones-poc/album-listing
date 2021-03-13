#### Introduction

In this test your task is to display a list of music albums and songs, using React and Redux.

**Website** [https://album-display-poc.netlify.app/](https://album-display-poc.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/5d81a2c8-90a9-4989-905d-fcab4ebc8b97/deploy-status)](https://app.netlify.com/sites/album-display-poc/deploys)

👾☄️👻👺🕹️

#### Specification

- Test data: in the data.json file we provide a static list of songs.
- Each song in the list has 3 attributes: band, album, song
- We expect to see a list of bands and albums with in an expandable/collapsible panel for the
  songs within the given album (see screenshots on page 2):
    - The expand/collapse button on the individual albums should expand/collapse the list of songs
    - The expand/collapse button on the main Albums title should expand/collapse all the albums
- The main technologies you are expected to use
    - Choice of ajax: to get the list of songs from the server
    - Redux: to store the data
    - React: to display the list
- The supported browsers are: IE11, Firefox, Chrome, the solution expected to work on these.
  (note: only IE11, no backward compatibility with earlier IE is expected)

The following files are included in the zip file:

|  File                            |  Description                                 |
|  ------------------------------  |  ------------------------------------------  |        
|  public/data.json                |  Static dataset for the test in json format  |
|  public/index.html               |  Main html page                              |
|  src/                            |  Empty source directory                      |
|  package.json                    |  Basic template for npm / yarn|              |
|  yarn.lock                       |  Empty template for yarn                     |

#### Expected solution

1. The main purpose of this test is for you to show your ability to design and implement
   bespoke web sites using React/Redux.  
   We expect a working implementation, not just a screen design.
2. Please use ajax for getting the list of songs from the server, do not just import them.
3. Please use Redux to store the data.
4. Please use React for displaying the list.
5. You're free to use any related library you choose, this test not just about implementation skills, but  
   to see your design choices and your ability to create an integrated solution from multiple technologies.

#### Screenshots of example screens 

![Screen Shot 2017-04-03 at 22.40.04.png](/assets/37536905-Screen%20Shot%202017-04-03%20at%2022.40.04.png)

![Screen Shot 2017-04-03 at 22.40.50.png](/assets/398891032-Screen%20Shot%202017-04-03%20at%2022.40.50.png)

*(You’re free to use any icon-set you like, these are here just an example for expand/collapse icons)*
