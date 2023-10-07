import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductDetailPage from "./pages/ProductDetails";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, path: "", element: <HomePage /> },
			{ path: "products", element: <ProductsPage /> },
			{ path: "products/:productId", element: <ProductDetailPage /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
