import React, { Component } from 'react';
import Newsitem from './Newsitem';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
export class News extends Component {

    page = 1;
    url;
    articles=[];
    data;
    totalResults;
    style={display:"block"};
    loading;
   
    static defaultProps = {
      pageSize:8
    }
    static propTypes ={
      pageSize:PropTypes.number
    }
   
   
    
  constructor()
  {
    super();
    this.state = {totalResults:100,articles : this.articles,loading:false,url:`https://newsapi.org/v2/everything?q=bitcoin&apiKey=87bcf2719c294383b759cd2cf5e18d84&page=${this.page}&pageSize=${this.pageSize}`}
  }

  async componentDidMount(){
      await this.setState({loading:true})
      console.log(this.state.loading)
      await this.setState({url:`https://newsapi.org/v2/everything?q=bitcoin&apiKey=87bcf2719c294383b759cd2cf5e18d84&page=${this.page}&pageSize=${this.props.pageSize}`})
      this.data = await fetch(this.state.url)
      let parsedData = await this.data.json()
      console.log(parsedData);
      this.setState({articles : parsedData.articles.filter((element)=>{return element.urlToImage!=null}) });
      this.setState({loading:false})
      console.log(this.state.loading)
  }


handleRight=async()=>
{
  console.log(this.page)
  if(this.page !== Math.ceil(this.state.totalResults/(20*this.page)))
  {
      this.page++;
      await this.setState({loading:true})
      console.log(this.state.loading)
      await this.setState({url:`https://newsapi.org/v2/everything?q=bitcoin&apiKey=87bcf2719c294383b759cd2cf5e18d84&page=${this.page}&pageSize=${this.props.pageSize}`})
      this.data = await fetch(this.state.url)
      let parsedData = await this.data.json()
      console.log(parsedData);
      this.setState({articles : parsedData.articles.filter((element)=>{return element.urlToImage!=null}) });
      console.log("click");
      this.setState({loading:false})
      console.log(this.state.loading)
  }
  
  console.log(Math.ceil(this.state.totalResults/(20)));
  
}

handleLeft=async()=>{
  if(this.page>0)
  {
    --this.page;
    await this.setState({loading:true})
    console.log(this.state.loading)
    await this.setState({url:`https://newsapi.org/v2/everything?q=bitcoin&apiKey=87bcf2719c294383b759cd2cf5e18d84&page=${this.page}&pageSize=${this.props.pageSize}`})
    this.data = await fetch(this.state.url)
    let parsedData = await this.data.json()
    console.log(this.page);
    console.log(parsedData);
    this.setState({articles : parsedData.articles.filter((element)=>{return element.urlToImage!=null}) });
    this.setState({loading:false})
    console.log(this.state.loading)
  }
}

  render() {
    
    return (

      <div>
        {this.state.loading&&<div className="text-center"><Spinner/></div>}
        <div className='mt-3 mb-4'  style={{display:"flex",justifyContent:"space-between"}}> 
          <button disabled={this.page===1} className='btn btn-primary mx-3' onClick={this.handleLeft}>&larr; Previous</button>
          <button disabled={this.page===5} className='btn btn-primary' style={{marginRight:"30px"}} onClick={this.handleRight}>Next &rarr;</button>
        </div>
        <div  className="mx-5" style={{display:"flex",flexDirection:"row",gap:"35px",flexWrap:"wrap"}}>
          {this.state.articles.map((element)=>{
            return !this.state.loading&&<div><Newsitem title={element.title?element.title.slice(0,66):"Not available"} description={element.description?element.description.slice(0,66):"Not available"} imageUrl={element.urlToImage} url={element.url}/></div>
          })}
     
        </div>
      </div>
    )
  }
}

export default News;
