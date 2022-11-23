
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card} from 'semantic-ui-react'
import { CategoryList, CardList } from "../../container";
import './search.scss';
import { Divider, Input } from 'antd';
export default function Posts() {
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:3001/tour`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
    
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }

    return (
        <>
       
        <div className="search--module">
            <div className="input--module">

            <i className="fa-solid fa-magnifying-glass"></i> {" "}{" "}
            <Input width={2000} placeholder="Tìm kiếm...."onChange={(e) => searchItems(e.target.value)}/>
            </div>

            <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
                {searchInput.length > 1 ? (
                    <>
                   
                    <div className="result">
                    <p>Có <strong style={{color: 'red'}}>{filteredResults.length}</strong> kết quả trùng khớp với từ khóa của bạn</p></div>
                    <CardList DataTours={filteredResults} tag={filteredResults.tags} />
                    <Divider dashed style={{borderColor: '#f97150'}}></Divider>
                    </>
                    
                ) : (
                    <>
                    </>
                    
                   
                )}
            </Card.Group>
        </div>
        </>
    )
}