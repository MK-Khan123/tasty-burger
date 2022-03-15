import bigtiBurger from '../images/all-food-items/burgers/bigti-burger.png';
import blackSheep from '../images/all-food-items/burgers/black-sheep.jpg';
import classicBurger from '../images/all-food-items/burgers/classic-burger.jpg';
import crispyChicken from '../images/all-food-items/burgers/crispy-chicken.jpg';
import doubleBurger from '../images/all-food-items/burgers/double-burger.jpg';
import holmBurger from '../images/all-food-items/burgers/holm-burger.png';
import komilBurger from '../images/all-food-items/burgers/komil-burger.png';
import smokeyHouse from '../images/all-food-items/burgers/smokey-house.jpg';
import soughBurger from '../images/all-food-items/burgers/sough-burger.png';
import spanishBurger from '../images/all-food-items/burgers/spanish-burger.jpg';
import turkeyBurger from '../images/all-food-items/burgers/turkey-burger.jpg';
import ultimateBacon from '../images/all-food-items/burgers/ultimate-bacon.jpg';
import belgianWaffle from '../images/all-food-items/desserts/belgian-waffle.png';
import cheeseCake from '../images/all-food-items/desserts/cheese-cake.png';
import chocolateCake from '../images/all-food-items/desserts/chocolate-cake.png';
import strawberryCake from '../images/all-food-items/desserts/strawberry-cake.png';
import fettuccineAlfredo from '../images/all-food-items/pasta/fettuccine-alfredo.png';
import pancettaSpaghetti from '../images/all-food-items/pasta/pancetta-spaghetti.png';
import spaghettiBolognese from '../images/all-food-items/pasta/spaghetti-bolognese.png';
import tunaPastaBake from '../images/all-food-items/pasta/tuna-pasta-bake.png';
import buffaloChickenPizza from '../images/all-food-items/pizza/buffalo-chicken-pizza.png';
import prosciuttioArugulaPizza from '../images/all-food-items/pizza/prosciuttio-&-arugula-pizza.png';
import spicyBbqChickenPizza from '../images/all-food-items/pizza/spicy-bbq-chicken-pizza.png';
import chickenSalad from '../images/all-food-items/salads/chicken-salad.png';
import greekSalad from '../images/all-food-items/salads/greek-salad.png';
import spinachSalad from '../images/all-food-items/salads/spinach-salad.png';
import turkeySalad from '../images/all-food-items/salads/turkey-salad.png';
import chickenNuggets from '../images/all-food-items/sides/chicken-nuggets.png';
import frenchFries from '../images/all-food-items/sides/french-fries.png';
import mozzarellaSticks from '../images/all-food-items/sides/mozzarella-sticks.png';
import onionRings from '../images/all-food-items/sides/onion-rings.png';

const fakeData = [
    {
        "category": 'Burger',
        "id": 'BGX01',
        "name": 'Bigti Burger',
        "image": bigtiBurger,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 12.95,
        "star": 5,
        "starCount": 46
    },
    {
        "category": 'Burger',
        "id": 'BGX02',
        "name": 'Black Sheep',
        "image": blackSheep,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 9.75,
        "star": 4,
        "starCount": 7
    },
    {
        "category": 'Burger',
        "id": 'BGX03',
        "name": 'Classic Burger',
        "image": classicBurger,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 7.95,
        "star": 5,
        "starCount": 12
    },
    {
        "category": 'Burger',
        "id": 'BGX04',
        "name": 'Crispy Chicken',
        "image": crispyChicken,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 8.50,
        "star": 4,
        "starCount": 10
    },
    {
        "category": 'Burger',
        "id": 'BGX05',
        "name": 'Double Burger',
        "image": doubleBurger,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 10.35,
        "star": 5,
        "starCount": 19
    },
    {
        "category": 'Burger',
        "id": 'BGX06',
        "name": 'Holm Burger',
        "image": holmBurger,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 11.35,
        "star": 5,
        "starCount": 17
    },
    {
        "category": 'Burger',
        "id": 'BGX07',
        "name": 'Komil Burger',
        "image": komilBurger,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 11.40,
        "star": 5,
        "starCount": 22
    },
    {
        "category": 'Burger',
        "id": 'BGX08',
        "name": 'Smokey House',
        "image": smokeyHouse,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 9.50,
        "star": 3,
        "starCount": 68
    },
    {
        "category": 'Burger',
        "id": 'BGX09',
        "name": 'Sough Burger',
        "image": soughBurger,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 9.95,
        "star": 5,
        "starCount": 37
    },
    {
        "category": 'Burger',
        "id": 'BGX10',
        "name": 'Spanish Burger',
        "image": spanishBurger,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 8.95,
        "star": 4,
        "starCount": 19
    },
    {
        "category": 'Burger',
        "id": 'BGX11',
        "name": 'Turkey Burger',
        "image": turkeyBurger,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 8.95,
        "star": 4,
        "starCount": 8
    },
    {
        "category": 'Burger',
        "id": 'BGX12',
        "name": 'Ultimate Bacon',
        "image": ultimateBacon,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 9.99,
        "star": 5,
        "starCount": 49
    },
    {
        "category": 'Desserts',
        "id": 'DSX01',
        "name": 'Belgian Waffle',
        "image": belgianWaffle,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 7.98,
        "star": 5,
        "starCount": 51
    },
    {
        "category": 'Desserts',
        "id": 'DSX02',
        "name": 'Cheese Cake',
        "image": cheeseCake,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 7.99,
        "star": 5,
        "starCount": 105
    },
    {
        "category": 'Desserts',
        "id": 'DSX03',
        "name": 'Chocolate Cake',
        "image": chocolateCake,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 7.99,
        "star": 5,
        "starCount": 101
    },
    {
        "category": 'Desserts',
        "id": 'DSX04',
        "name": 'Strawberry Cake',
        "image": strawberryCake,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 8.15,
        "star": 5,
        "starCount": 99
    },
    {
        "category": 'Pasta',
        "id": 'PSX01',
        "name": 'Fettuccine Alfredo',
        "image": fettuccineAlfredo,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 7.55,
        "star": 5,
        "starCount": 5
    },
    {
        "category": 'Pasta',
        "id": 'PSX02',
        "name": 'Pancetta Spaghetti',
        "image": pancettaSpaghetti,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 8.25,
        "star": 4,
        "starCount": 9
    },
    {
        "category": 'Pasta',
        "id": 'PSX03',
        "name": 'Spaghetti Bolognese',
        "image": spaghettiBolognese,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 9.75,
        "star": 5,
        "starCount": 12
    },
    {
        "category": 'Pasta',
        "id": 'PSX04',
        "name": 'Tuna Pasta Bake',
        "image": tunaPastaBake,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 9.87,
        "star": 5,
        "starCount": 19
    },
    {
        "category": 'Pizza',
        "id": 'PZX01',
        "name": 'Buffalo Chicken Pizza',
        "image": buffaloChickenPizza,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 12.99,
        "star": 4,
        "starCount": 18
    },
    {
        "category": 'Pizza',
        "id": 'PZX02',
        "name": 'Prosciuttio & Arugula Pizza',
        "image": prosciuttioArugulaPizza,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 12.15,
        "star": 5,
        "starCount": 16
    },
    {
        "category": 'Pizza',
        "id": 'PZX03',
        "name": 'Spicy BBQ Chicken Pizza',
        "image": spicyBbqChickenPizza,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 12.55,
        "star": 4,
        "starCount": 8
    },
    {
        "category": 'Salads',
        "id": 'SLX01',
        "name": 'Chicken Salad',
        "image": chickenSalad,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 7.98,
        "star": 5,
        "starCount": 91
    },
    {
        "category": 'Salads',
        "id": 'SLX02',
        "name": 'Greek Salad',
        "image": greekSalad,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 8.25,
        "star": 4,
        "starCount": 24
    },
    {
        "category": 'Salads',
        "id": 'SLX03',
        "name": 'Spinach Salad',
        "image": spinachSalad,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 6.95,
        "star": 4,
        "starCount": 16
    },
    {
        "category": 'Salads',
        "id": 'SLX04',
        "name": 'Turkey Salad',
        "image": turkeySalad,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 7.95,
        "star": 5,
        "starCount": 9
    },
    {
        "category": 'Sides',
        "id": 'SDX01',
        "name": 'Chicken Nuggets',
        "image": chickenNuggets,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 18.90,
        "star": 5,
        "starCount": 11
    },
    {
        "category": 'Sides',
        "id": 'SDX02',
        "name": 'French Fries',
        "image": frenchFries,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 11.88,
        "star": 5,
        "starCount": 127
    },
    {
        "category": 'Sides',
        "id": 'SDX03',
        "name": 'Mozzarella Sticks',
        "image": mozzarellaSticks,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 8.50,
        "star": 5,
        "starCount": 103
    },
    {
        "category": 'Sides',
        "id": 'SDX04',
        "name": 'Onion Rings',
        "image": onionRings,
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 9.99,
        "star": 4,
        "starCount": 89
    }
];

export default fakeData;