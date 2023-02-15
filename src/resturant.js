import React,{useState} from 'react'
import "./style.css"
import Menu from './Menu'
import Menucard from './Menucard';

const Resturant = () => {
    const [menuData,setmenuData]= useState(Menu);

    const filteritem=(category)=>{
        const updatedList=Menu.filter((curelement)=>{
return curelement.category===category;
        
         });
         setmenuData(updatedList);
    }
    return (
        <>

<nav className="navbar" >
    <div className="btn-group">
        <button className=" btn-group__item" onClick={()=> filteritem("breakfast")}>Breakfast</button>
        <button className=" btn-group__item" onClick={()=> filteritem("lunch")}>Lunch</button>
        <button className=" btn-group__item" onClick={()=> filteritem("evening")}>Evening</button>
        <button className=" btn-group__item" onClick={()=> filteritem("dinner")}>Dinner</button>
        <button className=" btn-group__item" onClick={()=>setmenuData(Menu) }>All</button>

    </div>
</nav>
        <Menucard menuData={menuData}/>
        </>
    )
}

export default Resturant
