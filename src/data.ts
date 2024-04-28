type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
    {
        id: 1,
        title: "Sicilian",
        desc: "A homemade pizza dough is the base of this red pie studded with melt-in-your-mouth squash and salty salami.",
        img: "/food1.png",
        price: 24.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 2,
        title: "Whole Grill",
        desc: "Grilled Chicken is a very popular recipe made with chicken, hung curd and spices like cumin powder and black pepper.",
        img: "/item1.png",
        price: 39.2,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 3,
        title: "Roasted Lamp",
        desc: "By cooking a lamb in an oven or over an open flame until the meat is crispy on the outside and tender on the inside.",
        img: "/item2.png",
        price: 45.65,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 4,
        title: "Crunchy chicken",
        desc: "The chicken is hand-breaded at individual KFC outlets with wheat flour mixed with seasoning in a two- to four-minute process. ",
        img: "/item3.png",
        price: 35.53,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 5,
        title: "Roasted Chicken",
        desc: "Has garlic herb butter under and on the skin, is stuffed with lemon and herbs, roasted until it's crispy and deep golden. ",
        img: "/item4.png",
        price: 26.78,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 6,
        title: "French Fries",
        desc: " side dish or snack typically made from deep-fried potatoes that have been cut into various shapes, especially thin strips.",
        img: "/item5.png",
        price: 20.8,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 7,
        title: "Beff Burger",
        desc: "A burger is a patty of ground beef grilled and placed between two halves of a bun.",
        img: "/food1.png",
        price: 15.29,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
]
