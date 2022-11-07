// import React, { Component } from 'react'
// import axios from 'axios'
// import './search.scss';
// import { CategoryList, CardList } from "../../container";
// class Search extends Component {
    
//   constructor(props) {
//     super(props)
//     this.state = {
//       Posts: [],
//     }
//     this.cancelToken = ''
//     this.onIptClick = this.onIptClick.bind(this)
//     this.node = React.createRef()
//   }
  
//   componentDidMount() {
//     document.addEventListener('mousedown', this.onIptClick)
//   }

//   componentWillUnmount() {
//     document.removeEventListener('mousedown', this.onIptClick)
//   }

//   onIptClick = (e) => {
//     if (this.node.current.contains(e.target)) {
//       return
//     }
//     this.setState({
//       Posts: [],
//     })
//   }

//   onLsChange = async (e) => {
//     if (this.isReqToken) {
//       this.isReqToken.cancel()
//     }

//     this.isReqToken = axios.CancelToken.source()

//     await axios
//       .get('https://tourapi-dev-n.herokuapp.com/tour', {
//         isReqToken: this.isReqToken.token,
//       })
//       .then((res) => {
//         this.setState({
//           Posts: res.data,
//         })
//       })
//       .catch((error) => {
//         if (axios.isCancel(error) || error) {
//           console.log('Could not get')
//         }
//       })

//     let filterSearch = e.target.value.toLowerCase()

//     let searchRes = this.state.Posts.filter((e) => {
//       let finalRes = e.ten.toLowerCase()
//       return finalRes.indexOf(filterSearch) !== -1
//     })

//     this.setState({
//       Posts: searchRes,
//     })
//   }

//   render() {
//     const renderTour =(tour) => {
//         <>
//         <p>Kết quả tìm kiếm</p>
//         <CardList DataTours={tour}/></>
//       }
//     return (
//       <div className="searchModule">
//         <h2>Search tour nha</h2>
//         <input
//           onClick={this.onIptClick}
//           onChange={this.onLsChange}
//           type="text"
//           placeholder="Search ..."
//           ref={this.node}
//         />
//         <ul>
//           {this.state.Posts.map((res) => {
//             console.log("post", res);
//             return <li key={res._id} onClick={renderTour(res)}>{res.ten}</li>
//             {/* <CardList DataTours={res} tag={res.tags}/></>) */}
            
//           })}
//         </ul>
//       </div>
//     )
//   }
// }

// export default Search;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Input } from 'semantic-ui-react'
import { CategoryList, CardList } from "../../container";
export default function Posts() {
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        axios.get(`https://tourapi-dev-n.herokuapp.com/tour`)
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
        <div style={{ padding: 20 }}>
            <Input icon='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />
            <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
                {searchInput.length > 1 ? (
                    <CardList DataTours={filteredResults} tag={filteredResults.tags} />
                    // filteredResults.map((item) => {
                    //     console.log(item);
                    //     return (
                            
                    //         <Card>
                    //             <Card.Content>
                    //                 <Card.Header>{item.ten}</Card.Header>
                    //                 <Card.Description>
                    //                     {item.gia}
                    //                 </Card.Description>
                    //             </Card.Content>
                    //         </Card>
                    //     )
                    // })

                ) : (
                    <CardList DataTours={APIData} tag={APIData.tags}/>
                    
                    // console.log('api', APIData)
                    
                    // APIData.map((item) => {
                    //     console.log('item 2', item)
                    //     return (
                    //         <CardList DataTours={item} tag={item.tags}/>
                            
                    //     )
                    // })
                )}
            </Card.Group>
        </div>
    )
}