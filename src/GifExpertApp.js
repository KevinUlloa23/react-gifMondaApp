import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['One Punch'] );

    // const handleAdd = () => {
    //     // setCategories( [ "HunterX", ...categories] );
    //     setCategories( cats => [ ...cats, 'HunterX' ] );
    // }

    console.log(categories);

  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories } />
        <hr />

        

        <ol>
            { 
                categories.map( category  => {
                    return <li key={ category }> { category } </li>
                } )
            }
        </ol>
    </>
  )
} 

