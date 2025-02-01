import { useState } from "react";
import './App.css'
import NavBar from "/src/ui/navbar.tsx"
import { LoginForm } from "@/ui/loginform.tsx"


const products = [
  { id: 1, name: "Product A", image: "/productA.jpg", price: 99 },
  { id: 2, name: "Product B", image: "/productB.jpg", price: 149 },
  // Add more products
];

function App() {
  return (
    <>
    <NavBar />
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
    </>
  );
}

export default App;
