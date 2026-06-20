import React from 'react';
import ProductCard from '../../Cards/ProductCard';

function Products(){
    return(
        <>
        
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            Products Listing
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Here's varrieties of Products that's we Exported , and you can order it in bulk quantity 
          </p>

        </div>
      </section>

<div className=' grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-4
  gap-8'>
<ProductCard
  image= "tracksuit.jpg"
  name="Track Suits"
  description="Premium quality tracksuits"
/>
<ProductCard
  image= "gymwear.jpg"
  name="Gym Wear"
  description="Premium quality gymwear"
/>
<ProductCard
  image= "jackets.jpg"
  name="Leather Jackets"
  description="Premium quality jackets"
/>
<ProductCard
  image= "sportskit.jpg"
  name="Sports Kits"
  description="Premium quality Sports Kits"
/>
<ProductCard
  image= "custom_shirt.jpg"
  name="Customize Shirts"
  description="Premium quality Shirts"
/>
<ProductCard
  image= "football.jpg"
  name="Football Kits"
  description="Premium quality Football Kits"
/>
<ProductCard
  image= "cricket.jpg"
  name="Cricket Uniforms"
  description="Premium Cricket Uniforms"
/>
<ProductCard
  image= "hoodies.jpg"
  name="Custom Hoodies"
  description="Premium quality Hoodies"
/>
<ProductCard
  image= "boxing.jpg"
  name="Boxing Wear"
  description="Premium quality Boxing Wear"
/>



</div>

</>
    )

    
}
export default Products