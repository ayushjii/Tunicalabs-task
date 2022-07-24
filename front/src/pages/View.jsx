import React from "react";
import styled from "styled-components";
import DataTable from "../components/DataTable";
import { HiDownload } from "react-icons/hi";
import Navbaruser from "../components/Navbaruser";
import Sidebar from "../components/Sidebar";

const ViewStyles = styled.div`
  form {
    margin: 1rem 0 1rem 0;
  }
  h1 {
    color: red;
    font-size: 25px;
  }
  button {
    dispaly: flex;
    width: 180px;
    border-radius: 4px;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    float: right;
    padding: 10px 0;
  }
  .next-btn {
    background-color: #930606;
    color: #fff;
    border-color: #930606;
  }
  input::placeholder {
    font-size: 1.2rem;
  }

  input[type="text"] {
    background-color: #e9e9e9;
    border-radius: 4px;
    border-color: #e9e9e9;
    margin-bottom: 1.5rem;
    width: 200px;
    margin-right: 15px;
    height: 40px;
  }
  select {
    border-radius: 4px;
    background-color: #e9e9e9;
    border-color: #e9e9e9;
    margin-bottom: 1rem;
    margin-right: 15px;
    width: 200px;
    height: 40px;
  }
  .download-btn {
    margin-top: 20px;
    float: left;
  }
  select {
    background-color: #e9e9e9;
    border: thin solid #e9e9e9;
    border-radius: 4px;
    display: inline-block;
    font: inherit;
    line-height: 1.5em;
    padding: 0.5em 3.5em 0.5em 1em;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
  }
`;
const View = () => {
  return (
    <>
      <Navbaruser />
      <Sidebar>
        <ViewMain />
      </Sidebar>
    </>
  );
};

const ViewMain = () => {
  return (
    <ViewStyles>
      <h1>View Student</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Age" />
        <select>
          <option>School</option>
          <option>Junior</option>
          <option>Secondary</option>
          <option>Senior</option>
        </select>
        <select>
          <option>Class</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <select className="minimal">
          <option>Division</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <button type="search" className="next-btn">
          Search
        </button>
      </form>
      <DataTable />
      <button type="text" className="next-btn download-btn">
        Download Excel <HiDownload size={20} />
      </button>
    </ViewStyles>
  );
};

export default View;
