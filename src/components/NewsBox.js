import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

export default class NewsBox extends Component {
        
    constructor(props){
        super(props)
        this.state={
           articles: [],
            loading : false,
            page : 1,
            totalResults : 1    
        }
        document.title = `${this.firstCapital(this.props.category)}-NewsMonkey`
    }
    firstCapital=(ele)=>{
        let a = ele.slice(0,1).toUpperCase()
        return`${a}${ele.slice(1)}`
    } 

     handleEvent = async()=>{
         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pagesize=${this.props.pgno}`
         this.setState({loading : true})
         let data = await fetch(url)
         let data2 = await data.json()
         console.log(data2)
         this.setState ({articles : data2.articles,
            totalResults : data2.totalResults,
            loading : false
            })
     }
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pagesize=${this.props.pgno}`
        this.props.ProgressL(10)
        this.setState({loading : true})
        let data = await fetch(url)
        this.props.ProgressL(40)
        let data2 = await data.json()
        console.log(data2)
        this.setState ({articles : data2.articles,
        page : 1,
        totalResults : data2.totalResults,
        loading : false
        })
        this.props.ProgressL(100)

    }

    fetchMoreData= async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pagesize=${this.props.pgno}&page=${this.state.page+1}`
        this.setState({loading : true})
        let data = await fetch(url)
        let data2 = await data.json()
        console.log(data2)
        this.setState ({
        articles : this.state.articles.concat(data2.articles),
        page : this.state.page + 1,
        totalResults : data2.totalResults,
        loading : false
        })
    }
    
  render() {
    return (
      <>
        <h2 className="d-flex justify-content-center"> {`NewsMonkey - Top ${this.firstCapital(this.props.category)} Headlines`}</h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Loading/>}
        >
        <div className="container">
        <div className="row">
      { this.state.articles.map((ele)=>{return <div className="col md-3 my-4" key={ele.url}>
        <NewsItem title={ele.title} description={ele.description} ImgUrl={ele.urlToImage} InfoUrl={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source.name}/>
        </div>
      })}
      </div>        
      </div>
      </InfiniteScroll>
      </>
    );
  }
}
