import HomePage from "../components/pages/HomePage/HomePage";
import LoginPage from "../components/pages/LoginPage/LoginPage";
import NotFoundPage from "../components/pages/NotFoundPage/NotFoundPage";
import OrdersPage from "../components/pages/OrdersPage/OrdersPage";
import ProductDetailsPage from "../components/pages/ProductDetailsPage/ProductDetailsPage";
import ProductsPage from "../components/pages/ProductsPage/ProductsPage";
import RegisterPage from "../components/pages/RegisterPage/RegisterPage";

export const ARRAY_ROUTE = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/order',
        element: <OrdersPage />
    },
    {
        path: '/product',
        element: <ProductsPage />
    },
    {
        path: '/login',
        element: <LoginPage />,
        isNotShowHeaderComponent: true
    },
    {
        path: '/register',
        element: <RegisterPage />,
        isNotShowHeaderComponent: true
    },
    {
        path: '/product-details',
        element: <ProductDetailsPage />
    },
    {
        path: '*',
        element: <NotFoundPage />,
        isNotShowHeaderComponent: true
    },
];