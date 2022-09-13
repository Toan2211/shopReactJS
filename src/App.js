import { React } from 'react'
import Header from './components/Header'
import {
    Route,
    Routes,
    BrowserRouter,
    Navigate
} from 'react-router-dom'
import ProductFeature from './features/Product'
import CartFeature from './features/Cart'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate replace to="/products" />}
                    />
                    <Route
                        path="/products/*"
                        element={<ProductFeature />}
                    />
                    <Route path="/cart/*" element={<CartFeature />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
