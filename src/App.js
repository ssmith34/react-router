import { createBrowserRouter } from "react-router-dom";
import ProductDetailPage from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: '/root',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:productId', element: <ProductDetailPage /> }
    ]
  }
])

function App() {
  return <div></div>;
}

export default App;
