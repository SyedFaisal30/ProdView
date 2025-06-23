import Header from "./components/header";
import Footer from "./components/Footer";
const App = () => {
  return (  
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Welcome to ProdView
        </h2>
      </main>

      <Footer />
    </div>
  );
};

export default App;
