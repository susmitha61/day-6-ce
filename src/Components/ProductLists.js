import HOC from "./Components/HOC";
    const products = [
        {
            id: 1,
            name: 'Product A',
            price: '$19.99',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0555/9894/0342/products/31YytLl3pNL.jpg?v=1667857338',
        },
        {
            id: 2,
            name: 'Product B',
            price: '$29.99',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0545/3519/2757/products/product-image-1433447801_1024x1024.jpg?v=1614068628',
        },
        {
            id: 3,
            name: 'Product C',
            price: '$39.99',
            imageUrl: 'https://cdn.shopify.com/s/files/1/1796/6745/products/BabyHamster-Front_500x.jpg?v=1606424887',
        },
    ];
    const ProductList=HOC(products);

export default ProductList;