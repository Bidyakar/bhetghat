export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    subcategory: string;
    isPopular?: boolean;
    isVegetarian?: boolean;
    isSpicy?: boolean;
}

export interface Menu {
    id: string;
    name: string;
    subcategories: string[];
}

export const menuCategories: Menu[] = [
    {
        id: 'main-course',
        name: 'Main Course',
        subcategories: [
            'Jimbu Thakali Set',
            'Dhido Set',
            'Biryani',
            'Fried Rice',
            'Chowmein',
            "Chef's Special"]

    },
    {
        id: 'momo',
        name: 'MoMo',
        subcategories: ['Mutton MoMo', 'Chicken MoMo', 'Veg MoMo']
    },
    {
        id: 'popular',
        name: 'Popular',
        subcategories: ['Thukpa', 'Western Favorites']
    },
    {
        id: 'pizza-pasta',
        name: 'Pizza & Pasta',
        subcategories: ['Pizza', 'Pasta', 'Burger and Sandwiches']
    },
    {
        id: 'starters',
        name: 'Starters',
        subcategories: ['Mutton Snacks', 'Chicken Snacks', 'Spring Roll', 'Appetizer', 'Soup and Salad']
    },
    {
        id: 'desserts',
        name: 'Desserts',
        subcategories: ['Home Made Desserts']
    },
    {
        id: 'cold-beverages',
        name: 'Cold Beverages',
        subcategories: [
            'Mocktails',
            'Smoothies',
            'Lassi',
            'Milkshakes',
            'Iced Coffee',
            'Frappe',
            'Ice Blended Coffee',
            'Non-Alcoholic']

    },
    {
        id: 'alcoholic',
        name: 'Alcoholic Drinks',
        subcategories: [
            'Cocktails',
            'Martini Cocktail',
            'Wine & Beer',
            'Alcoholic Beverage',
            'Shooters',
            'Bartender Recommendation']

    },
    {
        id: 'hot-beverages',
        name: 'Hot Beverages',
        subcategories: ['Hot Tea']
    },
    {
        id: 'extras',
        name: 'Extras',
        subcategories: ['Extra']
    }];


export const menuItems: MenuItem[] = [
    // Main Course - Jimbu Thakali Set
    {
        id: 'jimbu-thakali-veg',
        name: 'Jimbu Thakali Set (Veg)',
        description:
            'Traditional Thakali meal with rice, dal, seasonal vegetables, pickle, and papad served on a brass plate',
        price: 650,
        image: '/images/thakali.jpg',
        category: 'main-course',
        subcategory: 'Jimbu Thakali Set',
        isVegetarian: true,
        isPopular: true
    },
    {
        id: 'jimbu-thakali-chicken',
        name: 'Jimbu Thakali Set (Chicken)',
        description:
            'Complete Thakali set with tender chicken curry, rice, dal, vegetables, and traditional accompaniments',
        price: 850,
        image: '/images/thakali.jpg',
        category: 'main-course',
        subcategory: 'Jimbu Thakali Set',
        isPopular: true
    },
    {
        id: 'jimbu-thakali-mutton',
        name: 'Jimbu Thakali Set (Mutton)',
        description:
            'Premium Thakali experience with slow-cooked mutton curry and all traditional sides',
        price: 1050,
        image: '/images/thakali.jpg',
        category: 'main-course',
        subcategory: 'Jimbu Thakali Set',
        isSpicy: true
    },

    // Main Course - Biryani (From Image)
    {
        id: 'mutton-biryani',
        name: 'Mutton Biryani',
        description: 'Fragrant long-grain basmati rice cooked with tender mutton and aromatic Himalayan spices',
        price: 525,
        image: '/images/thakali.jpg',
        category: 'main-course',
        subcategory: 'Biryani',
        isPopular: true
    },
    {
        id: 'chicken-biryani',
        name: 'Chicken Biryani',
        description: 'Classic dum biryani with marinated chicken and saffron-infused rice',
        price: 455,
        image: '/images/thakali.jpg',
        category: 'main-course',
        subcategory: 'Biryani'
    },
    {
        id: 'veg-biryani',
        name: 'Veg Biryani',
        description: 'Garden fresh vegetables layered with spiced rice and herbs',
        price: 335,
        image: '/images/thakali.jpg',
        category: 'main-course',
        subcategory: 'Biryani',
        isVegetarian: true
    },

    // Main Course - Fried Rice (From Image)
    {
        id: 'mutton-fried-rice',
        name: 'Mutton Fried Rice',
        description: 'Wok-tossed rice with tender mutton bits and seasonal vegetables',
        price: 385,
        image: '/images/thakali.jpg',
        category: 'main-course',
        subcategory: 'Fried Rice'
    },
    {
        id: 'chicken-fried-rice',
        name: 'Chicken Fried Rice',
        description: 'Classic street-style fried rice with grilled chicken and egg',
        price: 345,
        image: '/images/thakali.jpg',
        category: 'main-course',
        subcategory: 'Fried Rice'
    },
    {
        id: 'veg-fried-rice',
        name: 'Veg Fried Rice',
        description: 'Lightly seasoned fried rice with a medley of fresh vegetables',
        price: 265,
        image: '/images/thakali.jpg',
        category: 'main-course',
        subcategory: 'Fried Rice',
        isVegetarian: true
    },

    // Main Course - Chowmein (From Image)
    {
        id: 'mutton-chowmein',
        name: 'Mutton Chowmein',
        description: 'Stir-fried noodles with spiced mutton and crunchy vegetables',
        price: 365,
        image: '/images/momo.jpg',
        category: 'main-course',
        subcategory: 'Chowmein'
    },
    {
        id: 'chicken-chowmein',
        name: 'Chicken Chowmein',
        description: 'Popular Nepali-style stir-fry noodles with chicken chunks',
        price: 295,
        image: '/images/momo.jpg',
        category: 'main-course',
        subcategory: 'Chowmein',
        isPopular: true
    },
    {
        id: 'veg-chowmein',
        name: 'Veg Chowmein',
        description: 'Healthy vegetable noodles tossed in savory sauces',
        price: 195,
        image: '/images/momo.jpg',
        category: 'main-course',
        subcategory: 'Chowmein',
        isVegetarian: true
    },

    // MoMo - Mutton (From Image)
    {
        id: 'mutton-vatti-momo',
        name: 'Mutton Vatti MoMo',
        description: 'Signature Vatti-style mutton dumplings with rich dipping sauce',
        price: 375,
        image: '/images/momo.jpg',
        category: 'momo',
        subcategory: 'Mutton MoMo'
    },
    {
        id: 'mutton-steam-momo',
        name: 'Mutton Steam MoMo',
        description: 'Traditional juicy steamed mutton dumplings',
        price: 335,
        image: '/images/momo.jpg',
        category: 'momo',
        subcategory: 'Mutton MoMo'
    },
    {
        id: 'mutton-kothey-momo',
        name: 'Mutton Kothey MoMo',
        description: 'Half-steamed, half-fried mutton momos for a crispy texture',
        price: 345,
        image: '/images/momo.jpg',
        category: 'momo',
        subcategory: 'Mutton MoMo'
    },

    // MoMo - Chicken (From Image)
    {
        id: 'chicken-vatti-momo',
        name: 'Chicken Vatti MoMo',
        description: 'Our famous Vatti-style chicken dumplings',
        price: 315,
        image: '/images/momo.jpg',
        category: 'momo',
        subcategory: 'Chicken MoMo',
        isPopular: true
    },
    {
        id: 'chicken-steam-momo',
        name: 'Chicken Steam MoMo',
        description: 'Classic steamed chicken momos, a Bhetghat favorite',
        price: 235,
        image: '/images/momo.jpg',
        category: 'momo',
        subcategory: 'Chicken MoMo'
    },
    {
        id: 'chicken-kothey-momo',
        name: 'Chicken Kothey MoMo',
        description: 'Pan-seared chicken momos with signature spices',
        price: 255,
        image: '/images/momo.jpg',
        category: 'momo',
        subcategory: 'Chicken MoMo'
    },

    // MoMo - Veg (From Image)
    {
        id: 'veg-vatti-momo',
        name: 'Veg Vatti MoMo',
        description: 'Vegetarian version of our Vatti-style dumplings',
        price: 225,
        image: '/images/momo.jpg',
        category: 'momo',
        subcategory: 'Veg MoMo',
        isVegetarian: true
    },
    {
        id: 'veg-steam-momo',
        name: 'Veg Steam MoMo',
        description: 'Fresh vegetable dumplings steamed to perfection',
        price: 185,
        image: '/images/momo.jpg',
        category: 'momo',
        subcategory: 'Veg MoMo',
        isVegetarian: true
    },
    {
        id: 'veg-kothey-momo',
        name: 'Veg Kothey MoMo',
        description: 'Pan-fried vegetable dumplings with aromatic herbs',
        price: 195,
        image: '/images/momo.jpg',
        category: 'momo',
        subcategory: 'Veg MoMo',
        isVegetarian: true
    },

    // Starters - Mutton Snacks (From Image)
    {
        id: 'mutton-tass-set',
        name: 'Mutton TASS Set',
        description: 'Juicy roasted mutton chunks served with traditional accompaniments',
        price: 425,
        image: '/images/chickentaas.jpg',
        category: 'starters',
        subcategory: 'Mutton Snacks',
        isPopular: true,
        isSpicy: true
    },
    {
        id: 'mutton-sekuwa-delivery',
        name: 'Mutton Sekuwa',
        description: 'Traditionally grilled mutton marinated in authentic spices',
        price: 425,
        image: '/images/chickentaas.jpg',
        category: 'starters',
        subcategory: 'Mutton Snacks'
    },
    {
        id: 'mutton-roast',
        name: 'Mutton Roast',
        description: 'Slow-roasted premium mutton seasoned with Himalayan herbs',
        price: 525,
        image: '/images/chickentaas.jpg',
        category: 'starters',
        subcategory: 'Mutton Snacks'
    },

    // Starters - Chicken Snacks (From Image)
    {
        id: 'chicken-tass-set',
        name: 'Chicken TASS Set',
        description: 'Authentic Nepali chicken tass served with traditional sides',
        price: 385,
        image: '/images/chickentaas.jpg',
        category: 'starters',
        subcategory: 'Chicken Snacks'
    },
    {
        id: 'chicken-sekuwa-delivery',
        name: 'Chicken Sekuwa',
        description: 'Flame-grilled chicken marinated with regional specialty spices',
        price: 385,
        image: '/images/chickentaas.jpg',
        category: 'starters',
        subcategory: 'Chicken Snacks'
    },
    {
        id: 'chicken-drumstick',
        name: 'Chicken Drumstick (Per Pcs)',
        description: 'Crispy fried chicken drumstick seasoned with local herbs',
        price: 175,
        image: '/images/drumstick2.jpg',
        category: 'starters',
        subcategory: 'Chicken Snacks'
    },

    // Starters - Spring Roll (From Image)
    {
        id: 'mix-spring-roll',
        name: 'Mix Spring Roll',
        description: 'Crispy rolls filled with a blend of chicken and seasonal vegetables',
        price: 365,
        image: '/images/pizza.jpg',
        category: 'starters',
        subcategory: 'Spring Roll'
    },
    {
        id: 'chicken-spring-roll',
        name: 'Chicken Spring Roll',
        description: 'Golden fried rolls packed with savory chicken filling',
        price: 335,
        image: '/images/pizza.jpg',
        category: 'starters',
        subcategory: 'Spring Roll'
    },
    {
        id: 'veg-spring-roll-delivery',
        name: 'Veg Spring Roll',
        description: 'Crunchy rolls with fresh garden vegetable filling',
        price: 265,
        image: '/images/pizza.jpg',
        category: 'starters',
        subcategory: 'Spring Roll',
        isVegetarian: true
    },

    // Pizza & Pasta (Original)
    {
        id: 'margherita-pizza',
        name: 'Margherita Pizza',
        description: 'Classic Italian pizza with fresh mozzarella, tomato sauce, and basil',
        price: 650,
        image: '/images/pizza.jpg',
        category: 'pizza-pasta',
        subcategory: 'Pizza',
        isVegetarian: true
    },
    {
        id: 'nepali-fusion-pizza',
        name: 'Nepali Fusion Pizza',
        description: 'Unique pizza topped with spiced chicken, timur, and local cheese',
        price: 850,
        image: '/images/pizza.jpg',
        category: 'pizza-pasta',
        subcategory: 'Pizza',
        isPopular: true,
        isSpicy: true
    },
    {
        id: 'classic-burger',
        name: 'Classic Beef Burger',
        description: 'Juicy beef patty with lettuce, tomato, cheese, and special sauce',
        price: 520,
        image: '/images/pizza.jpg',
        category: 'pizza-pasta',
        subcategory: 'Burger and Sandwiches'
    },

    // Desserts
    {
        id: 'gulab-jamun',
        name: 'Gulab Jamun',
        description: 'Soft milk dumplings soaked in rose-flavored sugar syrup',
        price: 220,
        image: '/images/pizza.jpg',
        category: 'desserts',
        subcategory: 'Home Made Desserts',
        isVegetarian: true,
        isPopular: true
    },

    // Beverages
    {
        id: 'mango-lassi',
        name: 'Mango Lassi',
        description: 'Traditional yogurt drink blended with fresh mango',
        price: 200,
        image: '/images/pizza.jpg',
        category: 'cold-beverages',
        subcategory: 'Lassi',
        isVegetarian: true,
        isPopular: true
    },
    {
        id: 'masala-tea',
        name: 'Masala Chiya',
        description: 'Traditional Nepali spiced tea with milk',
        price: 120,
        image: '/images/pizza.jpg',
        category: 'hot-beverages',
        subcategory: 'Hot Tea',
        isVegetarian: true,
        isPopular: true
    }
];
