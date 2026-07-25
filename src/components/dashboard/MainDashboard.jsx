import React, { useState, useEffect } from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image4 from "../../assets/image4.png";
import DashboardTopBar from "./TopBar";
import DashboardHeader from "./Header";
import DashboardHero from "./Hero";
import DashboardFeatures from "./Features";
import DashboardStats from "./Stats";
import DashboardAbout from "./About";
import DashboardFooter from "./Footer";

const MainDashboard = () => {
  const images = [image2, image1, image4];
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 120000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <DashboardTopBar />
      <DashboardHeader />
      <DashboardHero
        images={images}
        currentImage={currentImage}
        prevImage={prevImage}
        nextImage={nextImage}
      />
      <DashboardFeatures />
      <DashboardStats />
      <DashboardAbout />
      <DashboardFooter />
    </>
  );
};

export default MainDashboard;
