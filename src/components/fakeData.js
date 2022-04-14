const fakeData = [
    {
        "category": 'burger',
        "name": 'Bigti Burger',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786131/testo-burger-project/all-food-items/burgers/bigti-burger_uhacul.png',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 12.95,
        "star": 5,
        "starCount": 46
    },
    {
        "category": 'burger',
        "name": 'Black Sheep',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786130/testo-burger-project/all-food-items/burgers/black-sheep_hyk4vg.jpg',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 9.75,
        "star": 4,
        "starCount": 7
    },
    {
        "category": 'burger',
        "name": 'Classic Burger',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786133/testo-burger-project/all-food-items/burgers/classic-burger_qr27pp.jpg',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 7.95,
        "star": 5,
        "starCount": 12
    },
    {
        "category": 'burger',
        "name": 'Crispy Chicken',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786134/testo-burger-project/all-food-items/burgers/crispy-chicken_k46dxd.jpg',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 8.50,
        "star": 4,
        "starCount": 10
    },
    {
        "category": 'burger',
        "name": 'Double Burger',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786133/testo-burger-project/all-food-items/burgers/double-burger_ipj10l.jpg',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 10.35,
        "star": 5,
        "starCount": 19
    },
    {
        "category": 'burger',
        "name": 'Holm Burger',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786134/testo-burger-project/all-food-items/burgers/holm-burger_zlgtmd.png',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 11.35,
        "star": 5,
        "starCount": 17
    },
    {
        "category": 'burger',
        "name": 'Komil Burger',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786133/testo-burger-project/all-food-items/burgers/komil-burger_kzqaqv.png',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 11.40,
        "star": 5,
        "starCount": 22
    },
    {
        "category": 'burger',
        "name": 'Smokey House',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786134/testo-burger-project/all-food-items/burgers/smokey-house_rszvfb.jpg',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 9.50,
        "star": 3,
        "starCount": 68
    },
    {
        "category": 'burger',
        "name": 'Sough Burger',
        "id": "BGX09",
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786134/testo-burger-project/all-food-items/burgers/sough-burger_srlxu4.png',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 9.95,
        "star": 5,
        "starCount": 37
    },
    {
        "category": 'burger',
        "name": 'Spanish Burger',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786135/testo-burger-project/all-food-items/burgers/spanish-burger_zw9uqs.jpg',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 8.95,
        "star": 4,
        "starCount": 19
    },
    {
        "category": 'burger',
        "name": 'Turkey Burger',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786134/testo-burger-project/all-food-items/burgers/turkey-burger_far3sh.jpg',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 8.95,
        "star": 4,
        "starCount": 8
    },
    {
        "category": 'burger',
        "name": 'Ultimate Bacon',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786134/testo-burger-project/all-food-items/burgers/ultimate-bacon_nn0zka.jpg',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 9.99,
        "star": 5,
        "starCount": 49
    },
    {
        "category": 'dessert',
        "name": 'Belgian Waffle',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786134/testo-burger-project/all-food-items/desserts/belgian-waffle_adyeue.png',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 7.98,
        "star": 5,
        "starCount": 51
    },
    {
        "category": 'dessert',
        "name": 'Cheese Cake',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786135/testo-burger-project/all-food-items/desserts/cheese-cake_kn3del.png',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 7.99,
        "star": 5,
        "starCount": 105
    },
    {
        "category": 'dessert',
        "name": 'Chocolate Cake',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786135/testo-burger-project/all-food-items/desserts/chocolate-cake_aqauyo.png',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 7.99,
        "star": 5,
        "starCount": 101
    },
    {
        "category": 'dessert',
        "name": 'Strawberry Cake',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786135/testo-burger-project/all-food-items/desserts/strawberry-cake_zxkqdo.png',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 8.15,
        "star": 5,
        "starCount": 99
    },
    {
        "category": 'pasta',
        "name": 'Fettuccine Alfredo',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786135/testo-burger-project/all-food-items/pasta/fettuccine-alfredo_oc8xcn.png',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 7.55,
        "star": 5,
        "starCount": 5
    },
    {
        "category": 'pasta',
        "name": 'Pancetta Spaghetti',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786135/testo-burger-project/all-food-items/pasta/pancetta-spaghetti_xvus4v.png',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 8.25,
        "star": 4,
        "starCount": 9
    },
    {
        "category": 'pasta',
        "name": 'Spaghetti Bolognese',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786136/testo-burger-project/all-food-items/pasta/spaghetti-bolognese_boc39w.png',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 9.75,
        "star": 5,
        "starCount": 12
    },
    {
        "category": 'pasta',
        "name": 'Tuna Pasta Bake',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786136/testo-burger-project/all-food-items/pasta/tuna-pasta-bake_oxk6zi.png',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 9.87,
        "star": 5,
        "starCount": 19
    },
    {
        "category": 'pizza',
        "name": 'Buffalo Chicken Pizza',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786136/testo-burger-project/all-food-items/pizza/buffalo-chicken-pizza_nblcwo.png',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 12.99,
        "star": 4,
        "starCount": 18
    },
    {
        "category": 'pizza',
        "name": 'Prosciuttio & Arugula Pizza',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786136/testo-burger-project/all-food-items/pizza/prosciuttio-_-arugula-pizza_k5cwd1.png',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 12.15,
        "star": 5,
        "starCount": 16
    },
    {
        "category": 'pizza',
        "name": 'Spicy BBQ Chicken Pizza',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786136/testo-burger-project/all-food-items/pizza/spicy-bbq-chicken-pizza_twvzaz.png',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 12.55,
        "star": 4,
        "starCount": 8
    },
    {
        "category": 'salad',
        "name": 'Chicken Salad',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786137/testo-burger-project/all-food-items/salads/chicken-salad_g4opzc.png',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 7.98,
        "star": 5,
        "starCount": 91
    },
    {
        "category": 'salad',
        "name": 'Greek Salad',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786136/testo-burger-project/all-food-items/salads/greek-salad_lee3hm.png',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 8.25,
        "star": 4,
        "starCount": 24
    },
    {
        "category": 'salad',
        "name": 'Spinach Salad',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786137/testo-burger-project/all-food-items/salads/spinach-salad_lrwrsi.png',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 6.95,
        "star": 4,
        "starCount": 16
    },
    {
        "category": 'salad',
        "name": 'Turkey Salad',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786137/testo-burger-project/all-food-items/salads/turkey-salad_zk6kme.png',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 7.95,
        "star": 5,
        "starCount": 9
    },
    {
        "category": 'sides',
        "name": 'Chicken Nuggets',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786137/testo-burger-project/all-food-items/sides/chicken-nuggets_tcyglp.png',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 18.90,
        "star": 5,
        "starCount": 11
    },
    {
        "category": 'sides',
        "name": 'French Fries',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786137/testo-burger-project/all-food-items/sides/french-fries_e8hc62.png',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 11.88,
        "star": 5,
        "starCount": 127
    },
    {
        "category": 'sides',
        "name": 'Mozzarella Sticks',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786138/testo-burger-project/all-food-items/sides/mozzarella-sticks_z1p9hi.png',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 8.50,
        "star": 5,
        "starCount": 103
    },
    {
        "category": 'sides',
        "name": 'Onion Rings',
        "image": 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786137/testo-burger-project/all-food-items/sides/onion-rings_r1ok6a.png',
        "briefInfo": 'Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula',
        "description": 'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien',
        "price": 9.99,
        "star": 4,
        "starCount": 89
    }
];

export default fakeData;

// const imageGallery = [
//     {
//         name: 'Classic Burger',
//         image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786140/testo-burger-project/image-gallery/img-01_wd3ynv.jpg',
//         star: 5,
//         starCount: 12
//     },
//     {
//         name: 'Buffalo Chicken Pizza',
//         image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786141/testo-burger-project/image-gallery/img-02_jv8pqf.jpg',
//         star: 4,
//         starCount: 18
//     },
//     {
//         name: 'Grilled Ribs',
//         image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786141/testo-burger-project/image-gallery/img-03_udlnpb.jpg',
//         star: 5,
//         starCount: 25
//     },
//     {
//         name: 'Spicy BBQ Chicken Pizza',
//         image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786141/testo-burger-project/image-gallery/img-04_btrqmo.jpg',
//         star: 4,
//         starCount: 8

//     },
//     {
//         name: 'Prosciuttio & Arugula Pizza',
//         image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786141/testo-burger-project/image-gallery/img-05_hgunpd.jpg',
//         star: 5,
//         starCount: 16
//     },
//     {
//         name: 'Komil Burger',
//         image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786141/testo-burger-project/image-gallery/img-06_i6qdh7.jpg',
//         star: 4,
//         starCount: 3
//     },
//     {
//         name: 'Ultimate Bacon Burger',
//         image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786141/testo-burger-project/image-gallery/img-07_mx1fsi.jpg',
//         star: 5,
//         starCount: 36
//     },
//     {
//         name: 'Rib Eye',
//         image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786142/testo-burger-project/image-gallery/img-08_st8axq.jpg',
//         star: 4,
//         starCount: 29
//     },
//     {
//         name: 'Grilled Salmon',
//         image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786142/testo-burger-project/image-gallery/img-09_wd6pod.jpg',
//         star: 5,
//         starCount: 24
//     },
//     {
//         name: 'Philadelphia Roll',
//         image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786142/testo-burger-project/image-gallery/img-10_hq7m7r.jpg',
//         star: 4,
//         starCount: 11
//     },
//     {
//         name: 'Lemon Garlic Shrimp',
//         image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786142/testo-burger-project/image-gallery/img-11_gql45o.jpg',
//         star: 5,
//         starCount: 16
//     },
//     {
//         name: 'Spaghetti Bolognese',
//         image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786142/testo-burger-project/image-gallery/img-12_uduhna.jpg',
//         star: 4,
//         starCount: 22
//     },
// ];