# React - Gallery of My Life

For this project I want to create a page that displays an image, gives a description when the image is clicked, provide a button to like the image, and also track the number of likes. I will begin with storing data information in the form of an id, title, description, and number of likes into an array located on my server. This information will be used in connection to images stored locally, that when displayed on the DOM through React, will have unique properties I can access later. For a project of this proportion I will need to run two different types of servers. My client side server and native React server will be able to communicate using axios calls instead of the ajax calls used in jQuery from previous projects.

In order to make a more effective code base, I will utilize the ability to create local state attributes and passing props to component features in React enabling repeatable rendering of images. I want to create functions that will take all locally stored images, put them into an array, and add user functionality automatically without adding everything one at a time.

Things I will need for this project are:

* create React app
    -Dependencies-
        - axios
        - react
        - react-dom
        - react-scripts
        - nodemon

* Node Modules
* Server 
* GET/PUT router call
* JavaSCript
* CSS
* Images
* Multiple Components

## Description

To begin I used axios to retrieve the data (id, title, description, number of likes), and stored it in the main App. I then created a component I could pass that information to. This helps clear up space on my App. Once in the Gallery Item component I can create my array that loops through my data, and gives me access to each unique property. In that component I added some css to create a grid structure for the images similar to one you would see on Instagram. I then imported that component to my App to keep the lines of communication open. Next I created a GalleryListItem that my user functionality lives on. In this component I created a function to control the click function for the image description. Next I needed to use conditional rendering to add toggle capability where the user can click for the description and then hide it if clicked again. Here is where I used props to pass along the image and description from the array in the previous component. 

After that I jumped back into my App to create a function to handle an update to the page every time the like button was clicked. Using axios again, I called to the server to access my router where a conditional statement incremented each like by one. Now I can pass that to each component where each image can have access to it. In my Gallery List Item component I created a button to trigger that function. I also added css to turn the cursor into a pointer letting the user know what they could and couldn't click on, and handle the the toggle properties of the description. 

Overall this project gave me insight on how to break up chucks of code into smaller component files in React. Although my project was relatively small, I can see where this would allow larger websites the ability to continuously add more products and users into their database and then display them in a repeatable structure.