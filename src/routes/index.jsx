import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "../components/Navbar";
import Hero from "../pages/Hero";
import RoutePlanner from "../pages/RoutePlanner";

const queryClient = new QueryClient();

const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/route-planner" element={<RoutePlanner />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Index;
