import React from 'react';
import styled from 'styled-components';
import DataTable from '../components/DataTable';
import {HiDownload} from 'react-icons/hi'

const ViewStyles = styled.div`
form{
    margin:1rem 0 1rem 0;
}
h1{
    color:red;
    font-size:25px;
}
button{
    dispaly:flex;
    ${'' /* margin: 1rem 280px; */}
    width: 180px;
    border-radius: 4px;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    float:right;
    padding: 10px 0;
}
.next-btn{
    background-color: #930606;
    color: #fff;
    border-color: #930606;
}
input::placeholder{
    font-size: 1.2rem;
}

input[type="text"]{
    background-color: #E9E9E9;
    border-radius: 4px;
    border-color: #E9E9E9;
    margin-bottom: 1.5rem;
    width: 200px;
    margin-right:15px;
    height: 40px;
}
select{
    border-radius: 4px;
    background-color: #E9E9E9;
    border-color: #E9E9E9;
    margin-bottom: 1rem;
    margin-right:15px;
    width: 200px;
    height: 40px;

}
.download-btn{
    margin-top:20px;
    float:left;
}
`

const View = () => {
    return (
        <ViewStyles>
            <h1>View Student</h1>
             <form>
         {/* <label type="text">Full Name</label> */}
        <input  type="text" placeholder="Name" />
      {/* <label type="text">Date Of Birth</label> */}
        <input  type="text" placeholder="Age" />
        {/* <div  className='minimal'> */}
        {/* <label  type="text">School</label> */}
        <select>
        <option>School</option>
        <option>Junior</option>
        <option>Secondary</option>
        <option>Senior</option>
        </select>
        {/* </div> */}
         {/* <div className='minimal'> */}
        {/* <label  type="text">Class</label> */}
        <select>
        <option>Class</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </select>
        {/* </div> */}
        {/* <div  className='minimal'> */}
        {/* <label  type="text">Division</label> */}
        <select>
        <option>Division</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        </select>
        {/* </div> */}
     <button type="search" className="next-btn">Search</button>
     </form>
     <DataTable />
     <button type="text" className="next-btn download-btn">Download Excel  <HiDownload size={20}/></button>
        </ViewStyles>

    );
};

export default View;