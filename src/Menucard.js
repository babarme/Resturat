import React from 'react'
import Menu from './Menu'

// const mystyle={
//    style= "color:red"
// }


// const ordernow=()=>{
//     return(
    
//       <div>
      
//         </div>
    
//     )
// }



const Menucard = ({menuData}) => {
    const mystyle={
        boxShadow:"0 0 2px 1px rgba(0, 140, 186, 0.5",
        cursor:"pointer",
        // border:"1px solid black",
        borderRadius:"8px",
        opacity:0.5,
        
    }
    const style={
        marginBottom:"10px"
    }
    return (  
    <div>

<div className="main-card--cointainer">
        { menuData.map((x)=>{
    // console.log(curElement)
    return(
    <>  
         <div className=" card-container " >
        <div className="card" >
        <div className=" card-body" key={x.id}>
                {/* <span className="card-number card-circle subtle">{x.id}</span> */}
                <span className="card-author subtle"> {x.category} </span>
                
                <h2 className="card-title"> {x.name} </h2>
                <h3 style={style} className="card-author subtle"> price  {x.price*2} $ </h3>
                {/* <span className="car-discription subtle">  */}
                {/* {x.description} */}
                {/* </span> */}
                {/* <div className="card-read"> </div>   */}

                 <img style={mystyle} src={x.image} alt="" className="card-media" />
                 <span className= "card-tag subtle" > Order now </span>
        </div>

        </div>
        </div>
        
     </>
    );
       })}

           </div>  
     </div>
    
    
    );
    
}

export default Menucard
