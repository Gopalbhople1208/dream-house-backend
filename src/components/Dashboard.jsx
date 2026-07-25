






// import React, { useState, useEffect } from "react";
// import image1 from "../assets/image1.png";
// import image2 from "../assets/image2.png";
// import image4 from "../assets/image4.png";
// import DashboardTopBar from "./dashboard/TopBar";
// import DashboardHeader from "./dashboard/Header";
// import DashboardHero from "./dashboard/Hero";
// import DashboardFeatures from "./dashboard/Features";
// import DashboardStats from "./dashboard/Stats";
// import DashboardAbout from "./dashboard/About";
// import DashboardFooter from "./dashboard/Footer";

// const Dashboard = () => {
//   const images = [image2, image1, image4];
//   const [currentImage, setCurrentImage] = useState(0);

//   const nextImage = () => {
//     setCurrentImage((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 120000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <>
//       <DashboardTopBar />
//       <DashboardHeader />
//       <DashboardHero
//         images={images}
//         currentImage={currentImage}
//         prevImage={prevImage}
//         nextImage={nextImage}
//       />
//       <DashboardFeatures />
//       <DashboardStats />
//       <DashboardAbout />
//       <DashboardFooter />
//     </>
//   );
// };

// export default Dashboard;

// </ul>

//     {/* Desktop Buttons */}
//       <div className="hidden lg:flex items-center gap-4">


//         <Link to="/resident-login">

//         <button className="bg-blue-950 hover:bg-blue-900 text-white px-5 py-2 rounded-lg flex items-center gap-2 transition">
//           <UserRound size={18} />
//           <span>RESIDENT LOGIN</span>
//         </button>
//         </Link>


//         <Link to="/admin-login">
//         <button className="bg-yellow-600 hover:bg-yellow-500 text-white px-5 py-2 rounded-lg flex items-center gap-2 transition">
//           <ShieldCheck size={18} />
//           <span>ADMIN LOGIN</span>
//         </button>
// </Link>
//       </div>

//       {/* Mobile Menu Button */}
//       <button className="lg:hidden">
//         <Menu size={28} />
//       </button>

//     </div>
//   </div>

// {/* 
// <div className="flex py-1 ">
//   <img src={logo} alt="Dream House Logo" className="h-20" />


//   <div className =" gap-8 flex py-8 px-19 ">
//     <ui>HOME</ui>
//     <ui>ABOUT SOCIETY</ui>
//     <ui>AMENITIES</ui>
//     <ui>GALLERY</ui>
//     <ui>CONTACT US</ui>
//   </div>

 
//   <div className="flex gap-10 px-18 py-6">
//   <button className="bg-blue-950 text-white h-10 w-42 rounded flex items-center justify-center gap-2">
//     <UserRound size={20} />
//     <span>RESIDENT LOGIN</span>
//   </button>

//   <button className="bg-yellow-600 text-white h-10 w-42 rounded flex items-center justify-center gap-2">
//     <ShieldCheck size={20} />
//     <span>SOCIETY ADMIN </span>
//   </button>
// </div>

// </div> */}
// <section className="relative">

//   {/* Background Image */}
//   <img
//     src={images[currentImage]}
//     alt="Dream House Society"
//     className="w-full h-[400px] md:h-[500px] lg:h-[650px] object-cover"
//   />

//   {/* Overlay */}
//   <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/50 to-transparent"></div>

//   {/* Content */}
//   <div className="absolute inset-0 flex items-center">

//     <div className="px-6 md:px-12 lg:px-20 max-w-3xl text-white">

//       <p className="text-sm md:text-lg text-yellow-400 mb-2">
//         Welcome To
//       </p>

//       <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
//         Dream <span className="text-yellow-400">House</span>
//         <br />
//         Society
//       </h1>

//       <div className="w-20 md:w-32 h-1 bg-yellow-400 mt-4 md:mt-6"></div>

//       <p className="mt-4 text-sm md:text-lg text-gray-200">
//         A community built on trust, security and happiness.
//       </p>

//       <h3 className="mt-2 text-lg md:text-2xl font-semibold">
//         Better Living, Better Community
//       </h3>

//       {/* Buttons */}
//       <div className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-4">

//         <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 px-6 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold transition">
//           <Hotel size={18} />
//           Explore Amenities
//         </button>

//         <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold transition">
//           <Phone size={18} />
//           Contact Us
//         </button>

//       </div>

//     </div>

//   </div>

//   {/* Previous Button */}
//   <button
//     className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-full border border-white hover:bg-white/30 transition"
//     onClick={prevImage}
//   >
//     <ChevronLeft color="#fff" size={20} />
//   </button>

//   {/* Next Button */}
//   <button
//     className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-full border border-white hover:bg-white/30 transition"
//     onClick={nextImage}
//   >
//     <ChevronRight color="#fff" size={20} />
//   </button>

// </section>

// {/* 

// <section className="relative">
//   <img src={images[currentImage]} alt="dream house" className="w-full h-[500px] object-cover" />

// <div className="absolute inset-0 bg-gradient-to-r from-blue-950/100 via-blue-950/35 to-transparent"></div>
// <div className="absolute top-60  left-30 -translate-y-1/2 text-white">
// <div className="text-xl ">Welcome to</div>
// <div className="text-4xl font-bold">Dream <span className="text-yellow-400">House</span> Society</div>
// <div className="w-35 h-0.5 mt-10 bg-amber-400"></div>
// <div className=" mt-4  text-xs px-">A Community built on trust, security and happiness</div>
// <div className="font-bold text-lg">Better Living, Better Community</div>

//   <div className=" mt-20  flex  gap-7">
//     <button className="bg-yellow-400 gap-2 flex items-center text-blue-950 px-6 py-2 rounded-lg hover:bg-amber-500  transition duration-300"><Hotel size={18}/><span>Explore Now</span></button>
//       <button className="text-white flex gap-2 items-center bg-blue-950 px-4 py-2 rounded-lg hover:bg-blue-900  transition duration-300">
//         <Phone size={18}/>
//         <span>Explore Now</span>
//         </button>

  
// </div>

// </div>


// <button className="absolute left-5 top-1/2 transform -translate-y-1/2  p-1.5 rounded-full border-2 border-white" onClick={prevImage}>
//   <ChevronRight color="#ffff"   size={18}/>
// </button>

// <button className="absolute right-5 top-1/2 -translate-y-1/2  p-1.5 rounded-full border-2 border-white" onClick={nextImage}>
  
//   <ChevronLeft color="#ffff" size={18}/>
// </button>

// </section> */}


// <div className="bg-white py-12">
//   <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">

//     {/* Security */}
//     <div className="bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center">
//       <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
//         <Shield color="#978aff" size={28} />
//       </div>
//       <h3 className="mt-4 font-semibold text-gray-800">
//         24×7 Security
//       </h3>
//       <p className="mt-2 text-sm text-gray-500">
//         Advanced CCTV surveillance and trained security personnel.
//       </p>
//     </div>

//     {/* Online Payment */}
//     <div className="bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center">
//       <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
//         <HandCoins color="#5af287" size={28} />
//       </div>
//       <h3 className="mt-4 font-semibold text-gray-800">
//         Online Payments
//       </h3>
//       <p className="mt-2 text-sm text-gray-500">
//         Pay maintenance bills and book services online.
//       </p>
//     </div>

//     {/* Community Living */}
//     <div className="bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center">
//       <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full">
//         <UsersRound color="#708dff" size={28} />
//       </div>
//       <h3 className="mt-4 font-semibold text-gray-800">
//         Community Living
//       </h3>
//       <p className="mt-2 text-sm text-gray-500">
//         A friendly community that celebrates togetherness.
//       </p>
//     </div>

//     {/* Easy Management */}
//     <div className="bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center">
//       <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full">
//         <Settings color="#D4A017" size={28} />
//       </div>
//       <h3 className="mt-4 font-semibold text-gray-800">
//         Easy Management
//       </h3>
//       <p className="mt-2 text-sm text-gray-500">
//         Smart management system for daily society operations.
//       </p>
//     </div>

//     {/* Green Environment */}
//     <div className="bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center">
//       <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
//         <Leaf color="#5af287" size={28} />
//       </div>
//       <h3 className="mt-4 font-semibold text-gray-800">
//         Green Environment
//       </h3>
//       <p className="mt-2 text-sm text-gray-500">
//         Eco-friendly surroundings with landscaped gardens.
//       </p>
//     </div>

//     {/* Amenities */}
//     <div className="bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center">
//       <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full">
//         <RiBuildingLine color="#D4A017" size={28} />
//       </div>
//       <h3 className="mt-4 font-semibold text-gray-800">
//         Modern Amenities
//       </h3>
//       <p className="mt-2 text-sm text-gray-500">
//         Gym, clubhouse, swimming pool, gardens and more.
//       </p>
//     </div>

//   </div>
// </div>
// {/* 
// <div className=" bg-white flex justify-center gap-6 ">
//  <div className="w-52 h-40 shadow-xl rounded-lg hover:shadow-2xl transition duration-300 px-6 py-5 flex flex-col items-center text-center">

//   <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
//     <Shield color="#978aff" size={24} />
//   </div>

//   <h3 className="mt-4 font-semibold text-gray-800">
//     24x7 Security
//   </h3>

//   <p className="mt-2 text-sm text-gray-500">
//     Advance Security System With CCTV Surveillance and Security Personnel
//   </p>

// </div>

//  <div className="w-52 h-40 shadow-xl rounded-lg hover:shadow-2xl transition duration-300 px-6 py-5 flex flex-col items-center text-center">

//   <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
//     <HandCoins color="#5af287" size={24} />
//   </div>

//   <h3 className="mt-4 font-semibold text-gray-800">
//     Online Payment 
//   </h3>

//   <p className="mt-2 text-sm text-gray-500">
//     Hassle-Free Maintenance Payments and Booking Services online
//   </p>

// </div>

//   <div className="w-52 h-40 shadow-xl rounded-lg hover:shadow-2xl transition duration-300 px-6 py-5 flex flex-col items-center text-center">

//   <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
//     <UsersRound color="#708dff" size={24} />
//   </div>

//   <h3 className="mt-4 font-semibold text-gray-800">
//     Community Living
//   </h3>

//   <p className="mt-2 text-sm text-gray-500">
//     A Friendly and Vibrant Community That Celebrates Togetherness
//   </p>

// </div> */}

  
//   {/* <div className="w-52 h-40 shadow-xl rounded-lg hover:shadow-2xl transition duration-300 px-6 py-5 flex flex-col items-center text-center">

//   <div className="flex items-center justify-center w-16 h-16 bg-yellow-50 rounded-full">
//     <Settings color="rgba(240,187,64,1)" size={24}/>
//   </div>

//   <h3 className="mt-4 font-semibold text-gray-800">
//     Easy Management
//   </h3>

//   <p className="mt-2 text-sm text-gray-500">
//     Smart Society Management System for All Daily Operations
//   </p>

// </div>

//  <div className="w-52 h-40 shadow-xl rounded-lg hover:shadow-2xl transition duration-300 px-6 py-5 flex flex-col items-center text-center">

//   <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
//     <Leaf size={24} color="#5af287" />
//   </div>

//   <h3 className="mt-4 font-semibold text-gray-800">
//     Green Environment
//   </h3>

//   <p className="mt-2 text-sm text-gray-500">
//     Eco-friendly and peaceful surroundings.
//   </p>

// </div>

//   <div className="w-52 h-40 shadow-xl rounded-lg hover:shadow-2xl transition duration-300 px-6 py-5 flex flex-col items-center text-center">

//   <div className="flex items-center justify-center w-16 h-16 bg-yellow-50 rounded-full">
//     <RiBuildingLine size={24} color="rgba(240,187,64,1)" />
//   </div>

//   <h3 className="mt-4 font-semibold text-gray-800">
//     Modern Amenities
//   </h3>

//   <p className="mt-2 text-sm text-gray-500">
//   Enjoy World-class amenities like gym,Clubhouse & more.
//   </p>

// </div>




// </div> */}


// <div className="bg-white py-10">
//   <div className="max-w-7xl mx-auto px-4">

//     <div className="bg-blue-950 rounded-2xl p-6 shadow-xl">

//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

//         {/* Towers */}
//         <div className="flex items-center gap-4">
//           <Building2
//             size={50}
//             color="#F0BB40"
//             strokeWidth={1.25}
//           />
//           <div>
//             <h2 className="text-white text-2xl font-bold">12</h2>
//             <p className="text-gray-300 text-sm">Towers</p>
//           </div>
//         </div>

//         {/* Families */}
//         <div className="flex items-center gap-4">
//           <Users
//             size={50}
//             color="#F0BB40"
//             strokeWidth={1.25}
//           />
//           <div>
//             <h2 className="text-white text-2xl font-bold">832</h2>
//             <p className="text-gray-300 text-sm">Families</p>
//           </div>
//         </div>

//         {/* Flats */}
//         <div className="flex items-center gap-4">
//           <House
//             size={50}
//             color="#F0BB40"
//             strokeWidth={1.25}
//           />
//           <div>
//             <h2 className="text-white text-2xl font-bold">311</h2>
//             <p className="text-gray-300 text-sm">Flats</p>
//           </div>
//         </div>

//         {/* Security */}
//         <div className="flex items-center gap-4">
//           <Shield
//             size={50}
//             color="#F0BB40"
//             strokeWidth={1.25}
//           />
//           <div>
//             <h2 className="text-white text-2xl font-bold">24×7</h2>
//             <p className="text-gray-300 text-sm">Security</p>
//           </div>
//         </div>

//         {/* Excellence */}
//         <div className="flex items-center gap-4">
//           <TreeDeciduous
//             size={50}
//             color="#F0BB40"
//             strokeWidth={1.25}
//           />
//           <div>
//             <h2 className="text-white text-2xl font-bold">5+</h2>
//             <p className="text-gray-300 text-sm">
//               Years of Excellence
//             </p>
//           </div>
//         </div>

//       </div>

//     </div>

//   </div>
// </div>

// {/* <div className="bg-white h-29 py-8 flex justify-center">
//   <div className="bg-blue-950 w-[1230px] h-20 rounded-lg flex items-center px-10">

//     <Building2  strokeWidth={1}  color="rgba(240,187,64,1)" size={50} />

//     <div className="ml-5">
//       <h2 className="text-white text-2xl font-bold">12</h2>
//       <p className="text-gray-300 text-sm">Towers</p>
//     </div>
// <div className="w-0.5 py-5 bg-gray-500 ml-17"></div>

// <div className="ml-9">
//   <Users size={50} color="rgba(240,187,64,1)" strokeWidth={1.25}  />

// </div>
//      <div className="ml-5">
//       <h2 className="text-white text-2xl font-bold">832</h2>
//       <p className="text-gray-300 text-sm">Families</p>
//     </div>

//     <div className="w-0.5 py-5 bg-gray-500 ml-17"></div>
//     <div className="ml-9">
//   <House  size={50} color="rgba(240,187,64,1)" strokeWidth={1.25}  />

// </div>
//      <div className="ml-5">
//       <h2 className="text-white text-2xl font-bold">311</h2>
//       <p className="text-gray-300 text-sm">Flats</p>
//     </div>






//     <div className="w-0.5 py-5 bg-gray-500 ml-17"></div>
//     <div className="ml-9">
//   <Shield   size={50} color="rgba(240,187,64,1)" strokeWidth={1.25}  />

// </div>
//      <div className="ml-5">
//       <h2 className="text-white text-2xl font-bold">24x7</h2>
//       <p className="text-gray-300 text-sm">Security</p>
//     </div>




// <div className="w-0.5 py-5 bg-gray-500 ml-30"></div>
//     <div className="ml-9">
//   <TreeDeciduous   size={50} color="rgba(240,187,64,1)" strokeWidth={1.25}  />

// </div>
//      <div className="ml-5">
//       <h2 className="text-white text-2xl font-bold">5+</h2>
//       <p className="text-gray-300 text-sm">Year Of Excellence</p>
//     </div>



//   </div>






  
// </div> */}
// {/* <div>
// <div className="h-5 mt-5 flex ml-4">
//   <div className="h-0.5 w-15 ml-15 mt-6.5 bg-amber-600"></div>
//   <div className="px-2 py-3 text-amber-500 text-xl font-bold">About Us</div>
//     <div className="h-0.5 w-15  mt-6.5 bg-amber-600"></div>

//     <div className="max-w-4xl px-35 mt-2 leading-8 text-gray-600">Dream House Society is more than just a place to live.It is a community
//       designed to offer a Perfect blend of comfort,Convenience and luxury.Our mission is to provide a safe, secure and harmonious environment
//       where families can thrive and create beautiful memories
//     </div>
//       <div className="h-0.5 w-10 absolute right-67 mt-6.5 bg-amber-600"></div>

// <div className="mt-3 right-28 absolute text-amber-500 text-xl font-semibold">Why Choose Us?</div>
//   <div className="h-0.5 w-10 absolute right-17 mt-6.5 bg-amber-600"></div>

//   <div className="mt-15 right-60 absolute">
//    <span className="text-blue-900"><MapPin strokeWidth={1.75} /></span>
 
//     </div>
//     <div className="text-blue-950 mt-15 right-27 font-semibold absolute">Prime Location</div>


//      <div className="mt-23 right-60 absolute">
//    <span className="text-blue-900"><Building2 strokeWidth={1.5} /></span>
 
//     </div>
//     <div className="text-blue-950 mt-23 right-17 font-semibold absolute">Quality Construction</div>



// <div className="mt-31 right-60 absolute">
//    <span className="text-blue-900"><ShieldCog  strokeWidth={1.75} /></span>
 
//     </div>
//     <div className="text-blue-950 mt-31 right-17 font-semibold absolute">Transparency & Trust</div>




// <div className="mt-38 right-60 absolute">
//    <span className="text-blue-900"><Cog   strokeWidth={1.75} /></span>
 
//     </div>
//     <div className="text-blue-950 mt-38 right-18 font-semibold absolute">Timely Maintenance</div>





// <div className="mt-46 right-60 absolute">
//    <span className="text-blue-900"><ShieldUser   strokeWidth={1.75} /></span>
 
//     </div>
//     <div className="text-blue-950 mt-46 right-17 font-semibold absolute">Resident Satisfaction</div>















// </div>
// <div className="h-37">
//   <div className="ml-17 mt-10 text-2xl font-bold text-blue-950">Building Better Communities</div>
//   <div>

// <button className="bg-blue-950 text-white h-10 w-35 rounded-xl ml-[440px] hover:bg-blue-900 mt-19 duration-500">Read More</button>

//   </div>
// </div>


// <div className="mt-12"> 
//   <div className="bg-blue-950 h-90 ">

// <div className="flex  px-19">
  
//   <img src={footer1} alt="Dream House Logo"  className="h-30" />
  
//   <div className="text-amber-400 text-xl  font-bold px-22 py-11 ">QUICK LINKS 
//   <div className="bg-amber-400 h-0.5 w-10 mt-1 "></div>
//   </div>
//   <ui className="space-y-2 absolute mt-22 px-96 text-white">
   
//       <li className="flex item-center gap-2">
//       <ChevronRight />
//       Home
//     </li>
//       <li className="flex item-center gap-2">
//       <ChevronRight />
//       About Society
//     </li>
//       <li className="flex item-center gap-2">
//       <ChevronRight />
//       Amenities
//     </li>
//       <li className="flex item-center gap-2">
//       <ChevronRight />
//       Gallery
//     </li>
//      <li className="flex item-center gap-2">
//       <ChevronRight />
//       Contact us
//     </li>
//      <li className="flex item-center gap-2">
//       <ChevronRight />
//       Resident Login
//     </li>
//      <li className="flex item-center gap-2">
//       <ChevronRight />
//       Society Admin Login
//     </li>
//   </ui>
  
 
  

//   <div className="text-amber-400 text-xl  font-bold px-10 py-11 ">AMENITIES 
//   <div className="bg-amber-400 h-0.5 w-10 mt-1 "></div>
//   </div>
//   <ui className="space-y-2 absolute mt-22 right-120 text-white">
   
//       <li className="flex item-center gap-2">
//       <Shield />
//       24x7 Security
//     </li>
//       <li className="flex item-center gap-2">
//       <RiBuildingLine  size={24}/>
//       Modern Cube House
//     </li>
//       <li className="flex item-center gap-2">
//       <WavesLadder />
//       Swimming Pool
//     </li>
//       <li className="flex item-center gap-2">
//       <Dumbbell />
//       Gymnasium
//     </li>
//      <li className="flex item-center gap-2">
//       <Leaf />
//       Green Environment
//     </li>
//      <li className="flex item-center gap-2">
//       <CarTaxiFront />
//       Ample parking
//     </li>
     
//   </ui>
  
 
  





//   <div className="text-amber-400 text-xl  font-bold px-27 py-11 ">CONTACT US
//   <div className="bg-amber-400 h-0.5 w-10 mt-1 "></div>
//   </div>
//   <ui className="space-y-2 absolute mt-22 right-3 text-white">
   
//       <li className="flex item-center gap-2">
//       <MapPin />
//       Dream House Society,Green City,New Delhi-110016
//     </li>
//       <li className="flex item-center gap-2">
//       <Phone />
//       +91 9146206019
//     </li>
//       <li className="flex item-center gap-2">
//       <Mail />
//       info@dreamhousesociety.com
//     </li>
//       <li className="flex item-center gap-2">
//       <ClockFading />
//       Mon-Sat: 9:00 AM-6:00PM
//     </li>

//     <ui>

// <div className="text-amber-400 text-xl font-bold">
//   NEWSLETTER
// </div>
//  <div className="bg-amber-400 h-0.5 w-10 mt-1 "></div>
// <div className="flex item-center gap-2">Subscribe to get latest Updates and notices</div>
//        <div class="flex flex-col md:flex-row absolute justify-center ">
//       <input
//         type="email"
//         placeholder="Enter your email"
//         class="px-7 mt-3  py-2 rounded-lg  w-45 border border-gray-300 focus:outline-none"
//       />

//       <button
//         class="bg-[#D4A017] text-white px-2 mt-3 rounded-lg font-semibold hover:opacity-90"
//       >
//         Subscribe
//       </button>
//       </div>
     

      
//     </ui>
     
//   </ui>
  
 
  


// </div>
// <div>
// <div className="max-w-lg px-16  leading-8 text-white">Dream House Society is more than just a place to live.It is a community
//       designed to offer a Perfect blend of comfort,Convenience and luxury.Our mission is to provide a safe, secure and harmonious environment
//       where families can thrive and create beautiful memories
//     </div>

// </div>
//   </div>
 
// </div>









// <div className="bg-white py-2 ">
//   <div className="text-blue-950 text-sm font-semibold">
//   <p className="ml-35 mt-1"> © 2026 Dream House Society.All Rights Reserved.<span className="ml-95">Privacy policy </span> <span className="ml-25">Terms & Conditions </span>
//   <span className="ml-25">Refund Policy</span> </p>
// <div className="bg-mauve-500 absolute  right-50 "></div>

// </div>
  
// </div>

// </div>




//  */}



// <div className="bg-gray-50 py-16">
//   <div className="max-w-7xl mx-auto px-6">

//     {/* Section Heading */}
//     <div className="text-center mb-12">
//       <div className="flex justify-center items-center gap-3">
//         <div className="h-[2px] w-12 bg-amber-500"></div>
//         <h2 className="text-3xl font-bold text-amber-500">
//           About Dream House Society
//         </h2>
//         <div className="h-[2px] w-12 bg-amber-500"></div>
//       </div>

//       <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
//         Creating a secure, modern and vibrant living experience where
//         families enjoy comfort, convenience and community together.
//       </p>
//     </div>

//     <div className="grid lg:grid-cols-2 gap-12 items-center">

//       {/* Left Side */}
//       <div>

//         <h3 className="text-4xl font-bold text-blue-950 leading-tight">
//           Building Better Communities
//         </h3>

//         <p className="mt-6 text-gray-600 leading-8">
//           Dream House Society is more than just a residential community.
//           We provide a safe, secure and well-maintained environment with
//           modern amenities, smart management services and a vibrant
//           neighborhood culture.
//         </p>

//         <p className="mt-4 text-gray-600 leading-8">
//           Our goal is to enhance residents' lifestyles through excellent
//           facilities, transparent management and a strong sense of
//           community living.
//         </p>

//         <button className="mt-8 bg-blue-950 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-medium transition">
//           Read More
//         </button>

//       </div>

//       {/* Right Side */}
//       <div className="grid sm:grid-cols-2 gap-5">

//         <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition">
//           <MapPin className="text-amber-500 mb-3" size={28} />
//           <h4 className="font-semibold text-blue-950">
//             Prime Location
//           </h4>
//           <p className="text-sm text-gray-500 mt-2">
//             Located in a well-connected area with easy access to schools,
//             hospitals and shopping centers.
//           </p>
//         </div>

//         <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition">
//           <Building2 className="text-amber-500 mb-3" size={28} />
//           <h4 className="font-semibold text-blue-950">
//             Quality Construction
//           </h4>
//           <p className="text-sm text-gray-500 mt-2">
//             Premium construction standards ensuring safety, durability
//             and comfort.
//           </p>
//         </div>

//         <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition">
//           <ShieldCog className="text-amber-500 mb-3" size={28} />
//           <h4 className="font-semibold text-blue-950">
//             Transparency & Trust
//           </h4>
//           <p className="text-sm text-gray-500 mt-2">
//             Clear communication and transparent management practices for
//             all residents.
//           </p>
//         </div>

//         <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition">
//           <ShieldUser className="text-amber-500 mb-3" size={28} />
//           <h4 className="font-semibold text-blue-950">
//             Resident Satisfaction
//           </h4>
//           <p className="text-sm text-gray-500 mt-2">
//             Dedicated support and services designed around resident needs.
//           </p>
//         </div>

//       </div>

//     </div>

//   </div>
// </div>

// <footer className="bg-blue-950 text-white mt-12">

//   <div className="max-w-7xl mx-auto px-6 py-12">

//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

//       {/* About */}
//       <div>
//         <img src={footer1} alt="Dream House" className="h-30 mb-5" />

//         <p className="text-gray-300 leading-7">
//           Dream House Society is more than just a place to live.
//           It is a community designed to offer a perfect blend
//           of comfort, convenience and luxury.
//         </p>
//       </div>

//       {/* Quick Links */}
//       <div>

//         <h3 className="text-amber-400 text-xl font-bold">
//           QUICK LINKS
//         </h3>

//         <div className="w-10 h-[2px] bg-amber-400 mt-2 mb-5"></div>

//         <ul className="space-y-3">

//           <li className="flex gap-2 items-center">
//             <ChevronRight size={18} />
//             Home
//           </li>

//           <li className="flex gap-2 items-center">
//             <ChevronRight size={18} />
//             About Society
//           </li>

//           <li className="flex gap-2 items-center">
//             <ChevronRight size={18} />
//             Amenities
//           </li>

//           <li className="flex gap-2 items-center">
//             <ChevronRight size={18} />
//             Gallery
//           </li>

//           <li className="flex gap-2 items-center">
//             <ChevronRight size={18} />
//             Contact Us
//           </li>

//         </ul>

//       </div>

//       {/* Amenities */}
//       <div>

//         <h3 className="text-amber-400 text-xl font-bold">
//           AMENITIES
//         </h3>

//         <div className="w-10 h-[2px] bg-amber-400 mt-2 mb-5"></div>

//         <ul className="space-y-3">

//           <li className="flex gap-2 items-center">
//             <Shield size={18} />
//             24x7 Security
//           </li>

//           <li className="flex gap-2 items-center">
//             <RiBuildingLine size={18} />
//             Modern Club House
//           </li>

//           <li className="flex gap-2 items-center">
//             <WavesLadder size={18} />
//             Swimming Pool
//           </li>

//           <li className="flex gap-2 items-center">
//             <Dumbbell size={18} />
//             Gymnasium
//           </li>

//           <li className="flex gap-2 items-center">
//             <Leaf size={18} />
//             Green Environment
//           </li>

//         </ul>

//       </div>

//       {/* Contact */}
//       <div>

//         <h3 className="text-amber-400 text-xl font-bold">
//           CONTACT US
//         </h3>

//         <div className="w-10 h-[2px] bg-amber-400 mt-2 mb-5"></div>

//         <div className="space-y-4">

//           <div className="flex gap-2">
//             <MapPin size={18} />
//             <span>Dream House Society, Green City</span>
//           </div>

//           <div className="flex gap-2">
//             <Phone size={18} />
//             <span>+91 9146206019</span>
//           </div>

//           <div className="flex gap-2">
//             <Mail size={18} />
//             <span>info@dreamhousesociety.com</span>
//           </div>

//         </div>

//         <div className="mt-6">

//           <h4 className="text-amber-400 font-bold">
//             NEWSLETTER
//           </h4>

//           <div className="flex flex-col sm:flex-row gap-2 mt-3">

//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="flex-1 px-4 py-2 rounded-lg border-white border-1 text-white outline-none"
//             />

//             <button className="bg-amber-500 px-4 py-2 rounded-lg hover:bg-amber-600">
//               Subscribe
//             </button>

//           </div>

//         </div>

//       </div>

//     </div>

//   </div>

//   <div className="border-t border-blue-800">

//     <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">

//       <p>
//         © 2026 Dream House Society. All Rights Reserved.
//       </p>

//       <div className="flex gap-6 flex-wrap">
//         <span>Privacy Policy</span>
//         <span>Terms & Conditions</span>
//         <span>Refund Policy</span>
//       </div>

//     </div>

//   </div>

// </footer>



//     </>
//   );
// }

// export default Dashboard;
















import React, { useState, useEffect } from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image4 from "../assets/image4.png";
import DashboardTopBar from "./dashboard/TopBar";
import DashboardHeader from "./dashboard/Header";
import DashboardHero from "./dashboard/Hero";
import DashboardFeatures from "./dashboard/Features";
import DashboardStats from "./dashboard/Stats";
import DashboardAbout from "./dashboard/About";
import DashboardFooter from "./dashboard/Footer";

const Dashboard = () => {
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

export default Dashboard;