# Testo Burger (on going MERN Stack Project)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Important Notice!

This website design is inspired from one of many beautiful designs created by [Jthemes](https://themeforest.net/user/jthemes) (A theme forest member). [Jthemes](https://themeforest.net/user/jthemes) is the author of these amazing wordpress themes [Testo - Restaurant Caffe Wordpress Theme](https://preview.themeforest.net/item/testo-restaurant-wordpress-theme/full_screen_preview/31422987?_ga=2.63873324.2064031116.1654529768-1907816928.1645096157). (Please check out their amazing Word Press Themes if you haven't already !) 

I have developed a website based on one of their theme with some customizations of my own. This is purely an approach motivated by learning purposes. Almost all the images and graphics used in the website belong to the respective owner and I do not claim any right over them.

## Firebase Live Site Link

The project was deployed at Firebase. One can access the link by clicking here [Firebase Live Site Link](https://testo-burger.web.app/).

## `Technology Used`
* React.js
* Material UI
* React Router (6.2.1)
* React Redux
* Redux Toolkit
* React Stripe JS
* MongoDB
* Firebase Authentication
* Context API
* Node.js
* Express.js
* React Hooks Form
* React Swiper JS
* Axios
* CRUD operations
* Heroku
* React Reveal
* SweetAlert2

## `Project Features`

1. User can add foods from the homepage (`Explore Our Menu` section), `Our Menu` tab (at Navbar) and `All Items` section under `Shop` tab available at Navbar. But he/she needs to login first to proceed to `Cart`. 

2. Applied Private Route (also known as Protected Route/ Authenticated Route) to restrict convenient access. Implemented Google sign in and Github sign in method using Firebase Authentication. User can also register and sign in using their credentials. 

3. The data displayed in the homepage is fetched from MongoDB but for some parts I used static data. Used route parameter to fetch data dynamically from MongoDB and displayed accordingly.

4. Used React Redux for state management of `Cart` and handling `Checkout` Data. Followed _Ducks pattern_ while implementing Redux.

5. User can pay with card (integrated payment gateway method specifically Stripe Payment) while ordering.

6. Exhausted CRUD operations on multiple occasions while building the website.

7. In addition, I used Material UI to make the website device responsive. Furthermore, we deployed the client site on Firebase which can be accessed through the above mentioned link to explore the website. Server side is deployed using Heroku.

8. Working on to add these features
    * Sign in using Twitter account
    * User can view his/her orders (along with status).
    * Admin/User differentiation.
    * Admin will be able to manage Food Items and Placed Orders.
    * An admin will be capable of adding another user as an admin.

In order to access the server side code of this website, please [click here](https://github.com/MK-Khan123/testo-burger-server/).

You can contact me through [LinkedIn](https://www.linkedin.com/in/mehnaz-ahmed-khan/), [Twitter](https://twitter.com/MehnazAhmedKha1) or through my email mehnazkhan231@gmail.com.

Thank you.