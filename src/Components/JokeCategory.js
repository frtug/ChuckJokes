import React from 'react'
import { Link } from 'react-router-dom'


function CategoryItem({item}){
    
    return (
        <Link style={{ textDecoration: 'none', color:'black' }} to={`/${item}`}>
            <div className=" bg-white text-center captial ">
                {item}
            </div>
        </Link>

    )
}
export default function JokeCategory(props) {
    const ShowCategory = props.categories.map((item) => {
        return(
            <div className="col p-2 " key ={item}>
               <CategoryItem  item ={item}/>
            </div>
        )
    })
    return (
        <div className="container ">
           <h2>Chuck Norries</h2> 
            <div className="row row-cols-4 bg-secondary">
                {ShowCategory}
             </div>
        </div>

    )
}
