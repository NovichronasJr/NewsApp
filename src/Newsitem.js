import React,{ Component } from 'react'

class Newsitem extends Component{


    render()
    {
        let {title,description,imageUrl,url} = this.props;
       
        return(
    <div>
        <div class="card" style={{width:"18rem"}}>
            <img src={imageUrl} class="card-img-top" style={{width:"286px",height:"200px"}} alt=" "/>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
        )
    }

}
export default Newsitem;