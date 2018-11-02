import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class Home extends Component {

   
    render(){
        console.log(this.props)
        const {posts} = this.props
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div key={post.id}>
                        <h3 className="text-center"><Link to={"/" + post.id}> {post.title} </Link></h3>
                        <p className="text-center">{post.body}</p>
                        
                    </div>
                )
            })
        ) : (
            <div>
                No posts to show
            </div>
        )

        return(
            <div>
                {postList}
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        posts: state.posts
    }
}



export default connect(mapStateToProps)(Home)