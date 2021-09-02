import './App.css';
import {Form, Col,Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import axios from 'axios';
import { useState } from 'react';



function App() {
  const[searchInput, setSearchInput]= useState('')
  const[responseData, setResponseData]=useState([])
  const[errorMsg, setErrorMsg]=useState('')

    const columns = [
      {
        dataField: "title",
        text: "Title",
        wrap:true,
        sort: false
      },
      {
        dataField: "url",
        text: "Url",
        wrap:true,
        sort: false
      },
      {
        dataField: "description",
        text: "Description",
        wrap:true,
        sort: false
      }
    ];

  /**
   * 
   * @param {*} e 
   * @returns search result
   */

  const handleSearchQuery = (e) =>{
    e.preventDefault();
    console.log(e.target.value)
    if(!searchInput){
      alert('please enter text to search')
      return;
    }
    /**
     * hit service request after pass search value from here
     */
     axios.get(`https://help-search-api-prod.herokuapp.com/search?query=${searchInput}`)
      .then((response) => {
        if(response.status===200 && response.data.results.length>=1){
          setResponseData(response.data.results)
          setSearchInput('')
        } else{
          setResponseData([])
          setErrorMsg('No Data Found')
        }
      });
   }

  /** 
   * 
   * @param {*} target value
   * @return input value 
   */
  const onSearchQuery = (e) =>{
      if(e.target.value){
        setSearchInput(e.target.value)
      }
  }


  return (
    <div className="App">
      <Form>
  <Form.Row className="align-items-center">
    <Col sm={3} className="my-1">
      <input type="text" id="_searcharticle" placeholder="Search Query..." value={searchInput} onChange={onSearchQuery}/>
      <Button type="submit" onClick={(e)=>handleSearchQuery(e)}>Submit</Button>
    </Col>
    {responseData.length>=1?<BootstrapTable
        bootstrap4
        keyField="title"
        data={responseData}
        columns={columns}
        pagination={paginationFactory({ sizePerPage: 5})}
      />:''}

      {errorMsg? <span style={{color:'red'}}>No Data Found</span>:''}
   
   
  </Form.Row>
</Form>
    </div>
  );
}

export default App;
