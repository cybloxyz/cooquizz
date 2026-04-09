export const menuData = [
    {
        id: "XJ92",
        name: { en: "Spaghettini alla puttanesca", id: "Spaghettini alla puttanesca" },
        description: { en: "A savory sauce with tomatoes, olives, capers, and anchovies.", id: "Hidangan gurih dari tomat, minyak zaitun, teri, dan kaper." },
        price: 3.99, image: "/spag.png", rarity: "AVERAGE",
        recipe: {
            ingredients: { id: ["Pasta", "Tomat", "Teri", "Zaitun"], en: ["Pasta", "Tomato", "Anchovies", "Olives"] },
            instructions: { 
                id: ["Rebus pasta hingga al dente.", "Tumis bawang putih dan teri.", "Masukkan tomat dan zaitun.", "Campur pasta ke dalam saus."], 
                en: ["Boil pasta until al dente.", "Sauté garlic and anchovies.", "Add tomatoes and olives.", "Toss pasta into the sauce."] 
            }
        }
    },
    {
        id: "B7K1",
        name: { en: "Beef Yakiniku Bento", id: "Bento Yakiniku Daging Sapi" },
        description: { en: "Grilled beef slices with yakiniku sauce.", id: "Irisan daging sapi panggang saus yakiniku." },
        price: 4.50, image: "/teri.png", rarity: "RARE",
        recipe: {
            ingredients: { id: ["Daging Sapi", "Saus Yakiniku", "Nasi"], en: ["Beef Slices", "Yakiniku Sauce", "Rice"] },
            instructions: { 
                id: ["Iris daging sapi tipis-tipis.", "Tumis daging hingga kecokelatan.", "Tuangkan saus yakiniku dan aduk rata.", "Sajikan di kotak bento dengan nasi."], 
                en: ["Slice beef thinly.", "Sauté beef until browned.", "Pour yakiniku sauce and mix well.", "Serve in a bento box with rice."] 
            }
        }
    },
    {
        id: "L4P9",
        name: { en: "Salmon Sashimi Bento", id: "Bento Sashimi Salmon" },
        description: { en: "Fresh salmon sashimi served with rice.", id: "Sashimi salmon segar disajikan dengan nasi." },
        price: 8.99, image: "/sas.png", rarity: "SUPER RARE",
        recipe: {
            ingredients: { id: ["Salmon Grade-A", "Nasi Jepang", "Wasabi"], en: ["Grade-A Salmon", "Japanese Rice", "Wasabi"] },
            instructions: { 
                id: ["Iris salmon segar dengan pisau tajam.", "Siapkan nasi Jepang yang sudah dibumbui.", "Tata salmon di atas nasi.", "Sajikan dengan wasabi dan kecap asin."], 
                en: ["Slice fresh salmon with a sharp knife.", "Prepare seasoned Japanese rice.", "Arrange salmon over rice.", "Serve with wasabi and soy sauce."] 
            }
        }
    },
    {
        id: "H2V6",
        name: { en: "Spaghettoni Marinara", id: "Spaghettoni Marinara" },
        description: { en: "Spaghetti with simple tomato-based sauce.", id: "Spaghetti dengan saus tomat sederhana." },
        price: 2.99, image: "/ram.png", rarity: "COMMON",
        recipe: {
            ingredients: { id: ["Spaghetti", "Saus Tomat", "Oregano"], en: ["Spaghetti", "Tomato Sauce", "Oregano"] },
            instructions: { 
                id: ["Rebus spaghetti.", "Panaskan saus tomat di wajan.", "Campurkan spaghetti ke saus.", "Taburkan oregano di atasnya."], 
                en: ["Boil spaghetti.", "Heat tomato sauce in a pan.", "Mix spaghetti with the sauce.", "Sprinkle oregano on top."] 
            }
        }
    },
    {
        id: "M9R3",
        name: { en: "Sushi Platter", id: "Sushi Platter" },
        description: { en: "Variety of sushi types served together.", id: "Berbagai jenis sushi yang disajikan bersama." },
        price: 12.99, image: "/sus.png", rarity: "SUPER RARE",
        recipe: {
            ingredients: { id: ["Nasi Sushi", "Ikan Segar", "Nori"], en: ["Sushi Rice", "Fresh Fish", "Nori"] },
            instructions: { 
                id: ["Siapkan nasi sushi.", "Potong ikan menjadi irisan kecil.", "Bentuk nasi dan letakkan ikan di atasnya.", "Susun rapi di piring besar."], 
                en: ["Prepare sushi rice.", "Cut fish into small slices.", "Shape rice and place fish on top.", "Arrange neatly on a platter."] 
            }
        }
    },
    {
        id: "Q1W8",
        name: { en: "Classic Omelette", id: "Telur Dadar Klasik" },
        description: { en: "Fluffy eggs seasoned with salt and pepper.", id: "Telur lembut yang dibumbui garam dan lada." },
        price: 1.50, image: "/egg.png", rarity: "COMMON",
        recipe: {
            ingredients: { id: ["2 Telur", "Mentega", "Garam"], en: ["2 Eggs", "Butter", "Salt"] },
            instructions: { 
                id: ["Kocok telur dengan garam.", "Panaskan mentega di wajan.", "Tuang telur dan masak hingga set.", "Lipat telur dan sajikan."], 
                en: ["Whisk eggs with salt.", "Heat butter in a pan.", "Pour eggs and cook until set.", "Fold and serve."] 
            }
        }
    },
    {
        id: "F5D2",
        name: { en: "Garlic Bread", id: "Roti Bawang" },
        description: { en: "Toasted bread with butter and minced garlic.", id: "Roti panggang dengan mentega dan bawang putih." },
        price: 2.00, image: "/garlic.png", rarity: "COMMON",
        recipe: {
            ingredients: { id: ["Baguette", "Bawang Putih", "Mentega"], en: ["Baguette", "Garlic", "Butter"] },
            instructions: { 
                id: ["Iris roti baguette.", "Campur mentega dengan bawang putih cincang.", "Oleskan pada roti.", "Panggang hingga garing."], 
                en: ["Slice the baguette.", "Mix butter with minced garlic.", "Spread on the bread.", "Toast until crispy."] 
            }
        }
    },
    {
        id: "T7N4",
        name: { en: "Fruit Salad", id: "Salad Buah" },
        description: { en: "Fresh seasonal fruits mixed with honey.", id: "Buah musiman segar dicampur madu." },
        price: 2.50, image: "/fruit.png", rarity: "COMMON",
        recipe: {
            ingredients: { id: ["Apel", "Pisang", "Madu"], en: ["Apple", "Banana", "Honey"] },
            instructions: { 
                id: ["Cuci semua buah.", "Potong buah ukuran dadu.", "Masukkan ke mangkuk.", "Tuangkan madu dan aduk."], 
                en: ["Wash all fruits.", "Dice the fruits.", "Put in a bowl.", "Drizzle with honey and toss."] 
            }
        }
    },
    {
        id: "G3H9",
        name: { en: "Chicken Teriyaki", id: "Ayam Teriyaki" },
        description: { en: "Juicy chicken glazed with sweet teriyaki sauce.", id: "Ayam lezat dengan saus teriyaki manis." },
        price: 5.50, image: "/teri_chick.png", rarity: "AVERAGE",
        recipe: {
            ingredients: { id: ["Ayam", "Saus Teriyaki", "Wijen"], en: ["Chicken", "Teriyaki Sauce", "Sesame"] },
            instructions: { 
                id: ["Potong ayam ukuran suapan.", "Tumis ayam hingga matang.", "Masukkan saus teriyaki.", "Masak hingga saus mengental."], 
                en: ["Cut chicken into bite-sized pieces.", "Sauté chicken until cooked.", "Add teriyaki sauce.", "Cook until sauce thickens."] 
            }
        }
    },
    {
        id: "Z2X5",
        name: { en: "Mushroom Risotto", id: "Risotto Jamur" },
        description: { en: "Creamy Italian rice with sautéed mushrooms.", id: "Nasi Italia lembut dengan tumisan jamur." },
        price: 6.00, image: "/risotto.png", rarity: "AVERAGE",
        recipe: {
            ingredients: { id: ["Beras Arborio", "Jamur", "Kaldu"], en: ["Arborio Rice", "Mushrooms", "Broth"] },
            instructions: { 
                id: ["Tumis jamur dan sisihkan.", "Masak beras dengan kaldu sedikit demi sedikit.", "Aduk terus hingga lembut.", "Masukkan kembali jamur dan keju."], 
                en: ["Sauté mushrooms and set aside.", "Cook rice by adding broth gradually.", "Stir constantly until creamy.", "Fold in mushrooms and cheese."] 
            }
        }
    },
    {
        id: "K8Y1",
        name: { en: "Beef Tacos", id: "Taco Daging" },
        description: { en: "Corn tortillas filled with seasoned beef.", id: "Tortila jagung isi daging berbumbu." },
        price: 4.80, image: "/tacos.png", rarity: "AVERAGE",
        recipe: {
            ingredients: { id: ["Kulit Taco", "Daging Cincang", "Jinten"], en: ["Taco Shells", "Ground Beef", "Cumin"] },
            instructions: { 
                id: ["Tumis daging dengan bumbu jinten.", "Siapkan kulit taco panas.", "Isi dengan daging.", "Tambah topping selada dan keju."], 
                en: ["Sauté beef with cumin seasoning.", "Warm the taco shells.", "Fill with beef.", "Add lettuce and cheese toppings."] 
            }
        }
    },
    {
        id: "P4J6",
        name: { en: "Club Sandwich", id: "Sandwich Club" },
        description: { en: "Triple-layered sandwich with turkey and bacon.", id: "Sandwich tiga lapis dengan kalkun dan daging asap." },
        price: 5.00, image: "/sandwich.png", rarity: "AVERAGE",
        recipe: {
            ingredients: { id: ["Roti", "Daging Asap", "Selada", "Tomat"], en: ["Bread", "Bacon", "Lettuce", "Tomato"] },
            instructions: { 
                id: ["Panggang 3 lembar roti.", "Susun daging dan tomat di lapis pertama.", "Tutup roti, susun selada di lapis kedua.", "Tusuk dengan tusuk gigi dan potong."], 
                en: ["Toast 3 slices of bread.", "Layer bacon and tomato on the first slice.", "Cover with bread, layer lettuce on second slice.", "Secure with toothpicks and cut."] 
            }
        }
    },
    {
        id: "R9S2",
        name: { en: "Shrimp Scampi", id: "Udang Scampi" },
        description: { en: "Shrimp sautéed in garlic and lemon.", id: "Udang tumis bawang putih dan lemon." },
        price: 9.50, image: "/shrimp.png", rarity: "RARE",
        recipe: {
            ingredients: { id: ["Udang", "Bawang Putih", "Lemon"], en: ["Shrimp", "Garlic", "Lemon"] },
            instructions: { 
                id: ["Tumis bawang putih dalam mentega.", "Masukkan udang hingga berubah warna merah.", "Peras lemon di atasnya.", "Taburkan peterseli segar."], 
                en: ["Sauté garlic in butter.", "Add shrimp until pink.", "Squeeze lemon over it.", "Sprinkle fresh parsley."] 
            }
        }
    },
    {
        id: "V3B8",
        name: { en: "Japanese Ramen", id: "Ramen Jepang" },
        description: { en: "Rich broth with noodles and soft-boiled egg.", id: "Kuah kaldu kental dengan mi dan telur." },
        price: 11.00, image: "/ramen.png", rarity: "RARE",
        recipe: {
            ingredients: { id: ["Mi Ramen", "Kaldu", "Telur", "Daging"], en: ["Ramen Noodles", "Broth", "Egg", "Meat"] },
            instructions: { 
                id: ["Masak kaldu selama beberapa jam.", "Rebus mi ramen secara terpisah.", "Tuangkan kaldu ke mangkuk berisi mi.", "Beri topping telur dan daging."], 
                en: ["Cook broth for several hours.", "Boil ramen noodles separately.", "Pour broth into bowl with noodles.", "Top with egg and meat."] 
            }
        }
    },
    {
        id: "C5N9",
        name: { en: "Lamb Chops", id: "Iga Domba" },
        description: { en: "Tender grilled lamb with rosemary.", id: "Iga domba panggang empuk dengan rosemary." },
        price: 18.00, image: "/lamb.png", rarity: "RARE",
        recipe: {
            ingredients: { id: ["Iga Domba", "Rosemary", "Bawang Putih"], en: ["Lamb Chops", "Rosemary", "Garlic"] },
            instructions: { 
                id: ["Bumbui domba dengan rosemary.", "Panaskan wajan hingga berasap.", "Panggang domba 3-4 menit tiap sisi.", "Istirahatkan daging sebelum dipotong."], 
                en: ["Season lamb with rosemary.", "Heat pan until smoking.", "Sear lamb 3-4 mins per side.", "Rest the meat before slicing."] 
            }
        }
    },
    {
        id: "W1Q7",
        name: { en: "Pad Thai", id: "Pad Thai" },
        description: { en: "Stir-fried rice noodles with tofu.", id: "Mi beras goreng dengan tahu." },
        price: 8.50, image: "/padthai.png", rarity: "RARE",
        recipe: {
            ingredients: { id: ["Kwetiau", "Tahu", "Kacang", "Tauge"], en: ["Rice Noodles", "Tofu", "Peanuts", "Bean Sprouts"] },
            instructions: { 
                id: ["Rendam kwetiau hingga lunak.", "Tumis tahu dan bumbu pad thai.", "Masukkan kwetiau dan tauge.", "Sajikan dengan taburan kacang tanah."], 
                en: ["Soak noodles until soft.", "Sauté tofu and pad thai sauce.", "Add noodles and sprouts.", "Serve with crushed peanuts."] 
            }
        }
    },
    {
        id: "Y6Z3",
        name: { en: "Wagyu Ribeye", id: "Ribeye Wagyu" },
        description: { en: "Premium A5 Wagyu with extreme marbling.", id: "Daging Wagyu A5 premium dengan lemak lumer." },
        price: 45.00, image: "/wagyu.png", rarity: "SUPER RARE",
        recipe: {
            ingredients: { id: ["Wagyu A5", "Garam Laut"], en: ["A5 Wagyu", "Sea Salt"] },
            instructions: { 
                id: ["Biarkan daging di suhu ruang.", "Taburkan sedikit garam laut.", "Panggang cepat di wajan sangat panas.", "Sajikan segera selagi lemak meleleh."], 
                en: ["Bring meat to room temperature.", "Sprinkle a bit of sea salt.", "Flash-sear on a very hot pan.", "Serve immediately while fat is melting."] 
            }
        }
    },
    {
        id: "A8E4",
        name: { en: "Lobster Thermidor", id: "Lobster Thermidor" },
        description: { en: "Lobster cooked in creamy brandy sauce.", id: "Lobster dimasak dalam saus brandy kental." },
        price: 55.00, image: "/lobster.png", rarity: "SUPER RARE",
        recipe: {
            ingredients: { id: ["Lobster", "Krim", "Keju", "Brandy"], en: ["Lobster", "Cream", "Cheese", "Brandy"] },
            instructions: { 
                id: ["Rebus lobster dan ambil dagingnya.", "Masak saus krim dengan brandy.", "Masukkan kembali daging ke cangkang.", "Taburi keju dan panggang hingga cokelat."], 
                en: ["Boil lobster and remove meat.", "Cook cream sauce with brandy.", "Stuff meat back into shells.", "Top with cheese and broil until brown."] 
            }
        }
    },
    {
        id: "U2I9",
        name: { en: "Truffle Pasta", id: "Pasta Truffle" },
        description: { en: "Pasta with fresh black truffle shavings.", id: "Pasta dengan irisan truffle hitam segar." },
        price: 35.00, image: "/truffle.png", rarity: "SUPER RARE",
        recipe: {
            ingredients: { id: ["Pasta", "Truffle Hitam", "Mentega"], en: ["Pasta", "Black Truffle", "Butter"] },
            instructions: { 
                id: ["Masak pasta segar.", "Aduk dengan mentega kualitas tinggi.", "Iris tipis truffle hitam di atasnya.", "Tambahkan sedikit minyak truffle."], 
                en: ["Cook fresh pasta.", "Toss with high-quality butter.", "Shave black truffle on top.", "Drizzle with truffle oil."] 
            }
        }
    },
    {
        id: "O7L1",
        name: { en: "Dragon Roll Sushi", id: "Dragon Roll Sushi" },
        description: { en: "Exquisite eel and avocado sushi roll.", id: "Gulungan sushi belut dan alpukat istimewa." },
        price: 22.00, image: "/dragon.png", rarity: "SUPER RARE",
        recipe: {
            ingredients: { id: ["Belut (Unagi)", "Alpukat", "Nori"], en: ["Eel (Unagi)", "Avocado", "Nori"] },
            instructions: { 
                id: ["Gulung nasi dan belut di dalam nori.", "Iris alpukat sangat tipis.", "Letakkan alpukat di atas gulungan sushi.", "Potong dan beri saus unagi manis."], 
                en: ["Roll rice and eel in nori.", "Slice avocado very thinly.", "Place avocado on top of the roll.", "Cut and drizzle with sweet unagi sauce."] 
            }
        }
    }
];