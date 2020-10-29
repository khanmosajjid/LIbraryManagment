import React, { useState,useEffect } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationBtn = ({showPerPage,onPaginationChange,total}) => {
    const [counter,setCounter]=useState(1);
    const[numberOfBtn,setNumberOfBtn]=useState(Math.ceil(total/showPerPage))
    useEffect(()=>{
        const value =showPerPage*counter;
        // console.log("object")
        onPaginationChange(value-showPerPage,value); 
    },[counter]);
    const onButtonClick=(type)=>{
        if(type=="prev"){
            if(counter==1){
                setCounter(1);
            }else{
                setCounter(counter-1)
            }
            
        }else if(type==='next'){
            if(numberOfBtn===counter){
                setCounter(counter);
            }else{
                setCounter(counter+1)
            }

        }
};
  return (
    <Pagination aria-label="Page navigation example">
    {/* <PaginationItem>
        <PaginationLink first href="#" />
      </PaginationItem> */}
      <PaginationItem>
        <PaginationLink previous  onClick={()=>setCounter(counter-1)} />
      </PaginationItem>
      {
          new Array(5).fill("").map((el,index)=>(
            <PaginationItem>
            <PaginationLink href="#" onClick={()=>setCounter(index+1)}>
              {index+1}
            </PaginationLink>
          </PaginationItem>
          ))
      }
      {/* <PaginationItem>
        <PaginationLink href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          5
        </PaginationLink>
      </PaginationItem> */}
      <PaginationItem>
        <PaginationLink next onClick={()=>setCounter(counter+1)} />
      </PaginationItem>
      {/* <PaginationItem>
        <PaginationLink last href="#" />
      </PaginationItem> */}
    </Pagination>
  );
}

export default PaginationBtn;