# React - Gallery of My Life

For this project I want to create a page that displays an image, gives a description when the image is clicked, provide a button to like the image, and also track the number of likes. I will begin with storing data information in the form of an id, title, description, and number of likes into an array located on my server. This information will be used in connection to images stored locally, that when displayed on the DOM through React, will have unique properties I can access later. For a project of this proportion I will need to run two different types of servers. My client side server and native React server will be able to communicate using axios calls instead of the ajax calls used in jQuery from previous projects.

In order to make a more effective code base, I will utilize the ability to create local state attributes and passing props to component features in React enabling repeatable rendering of images. I want to create functions that will take all locally stored images, put them into an array, and add user functionality automatically without adding everything one at a time.

Things I will need for this project are:

## Setup

npm install
npm run server
npm run client

## Usage 

1. Feel free to add you images into the public/images folder
2. In the server/modules/data.js file and write an id, title, description, and path for your image.
3. Image will display on screen in a grid form 
4. you can click each image to toggle between showing the description of the image
5. Click the "like" button to increase the amount of likes by 1 each time.

## Built With

- React
- HTML
- CSS
- JavaScript
- Node modules
- Postgres
- Postico
- Postman

## Acknowledgement

Thanks to Prime Digital Academy in Kansas City who equipped and helped me to make this application a reality.

## Support

if you would to give your own feedback to me, please email me at j.ganote0825@gmail.com