import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";
import Login from "./pages/login";
import ProductList from "./pages/Products";
import Landing from "./pages/Landing";
import ProtectedRoute from "./routes/routes";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer position="top-center"/>
      <Header
        onSearch={(value) => setSearchQuery(value)}
        onSortChange={(value) => setSortOption(value)}
      />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <ProductList searchQuery={searchQuery} sortOption={sortOption} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
