import { Order } from '../app/shared/interfaces/order';

export const order: Order = {
    id: 3857,
    date: '19 October, 2020',
    status: 'On hold',
    items: [
        {
            id: 1,
            slug: 'electric-planer-brandix-kl370090g-300-watts',
            name: 'Electric Planer Brandix KL370090G 300 Watts',
            image: 'assets/images/products/product-1.jpg',
            options: [
                {
                    label: 'Color',
                    value: 'Yellow',
                },
                {
                    label: 'Material',
                    value: 'Aluminium',
                },
            ],
            price: 699,
            quantity: 2,
            total: 1398,
        },
        {
            id: 2,
            slug: 'Laborer',
            name: 'Laborer',
            image: 'assets/images/products/product-2.PNG',
            price: 849,
            quantity: 1,
            total: 849,
        },
        {
            id: 5,
            slug: 'brandix-router-power-tool-2017erxpk',
            name: 'Brandix Router Power Tool 2017ERXPK',
            image: 'assets/images/products/product-5.jpg',
            options: [
                {
                    label: 'Color',
                    value: 'True Red',
                },
            ],
            price: 1210,
            quantity: 3,
            total: 3630,
        },
    ],
    additionalLines: [
        {
            label: 'Store Credit',
            total: -20,
        },
        {
            label: 'Shipping',
            total: 25,
        },
    ],
    quantity: 6,
    subtotal: 5877,
    total: 5882,
    paymentMethod: 'PayPal',
    shippingAddress: {
        firstName: 'Helena',
        lastName: 'Garcia',
        email: ' GroupOne@iti.com',
        phone: '01100000000',
        country: 'Random Federation',
        city: 'Moscow',
        postcode: '115302',
        address: 'ul. Varshavskaya, 15-2-178'
    },
    billingAddress: {
        firstName: 'Jupiter',
        lastName: 'Saturnov',
        email: 'GroupOne@iti.com',
        phone: 'ZX 971 972-57-26',
        country: 'RandomLand',
        city: 'MarsGrad',
        postcode: '115302',
        address: 'Sun Orbit, 43.3241-85.239'
    },
};
