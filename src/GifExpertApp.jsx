import { useState } from "react";
import  AddCategory from './Components/AddCategory'
import  GifGrid  from "./Components/GifGrid";



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Pantera Rosa']);
    const onAddCategory = (newCategory)=>{
        if(categories.includes(newCategory)) return;
        setCategories([newCategory,...categories]);
    }

  return (
    <>
    
    <h1>GifExpertApp</h1>


   <AddCategory 

    onNewCategory={ onAddCategory }

    />

    {
        categories.map((category) =>(
                <GifGrid key={category} category={category}/>
        ))        
                
    }    

    </>
)
}

export default GifExpertApp