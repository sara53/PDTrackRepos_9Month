import logo from "./logo.svg";
import "./App.css";
import { SharedLayout } from "./layout/SharedLayout";
import { Home, ProductDetails, ProductForm, Products, NotFound } from "./pages";

import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import { getAllProducts } from "./api/productAPI";
import { Error } from "./pages/Error";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path='/' element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route
						path='products'
						loader={getAllProducts}
						errorElement={<Error />}
						element={<Products />}
					/>
					<Route path='products/:id' element={<ProductDetails />} />
					<Route path='products/:id/edit' element={<ProductForm />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</>
		)
	);
	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App;
