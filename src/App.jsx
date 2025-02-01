import { useState, useEffect } from "react";
import './App.css'
import NavBar from "/src/ui/navbar.tsx"
import { LoginForm } from "@/ui/loginform.tsx"
import SwipeableGallery from './components/SwipeableGallery';
import { auth, db } from './firebase/config';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsRef = collection(db, 'Products');
        const snapshot = await getDocs(productsRef);
        const productData = snapshot.docs.map(doc => ({
          id: doc.id,
          image: doc.data().image,
          name: doc.data().name,
          description: doc.data().description,
        }));
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="loading-screen">Loading...</div>;
  }

  return (
    <>
      <div className="other-content">
        <NavBar isAuthenticated={isAuthenticated} />
      </div>
      {!isAuthenticated && (
        <div className="login-form"><LoginForm /></div>
      )}
      {isAuthenticated && products.length > 0 && (
        <div className="main-content">
          <SwipeableGallery products={products} />
        </div> 
      )}
    </>
  );
}

export default App;
