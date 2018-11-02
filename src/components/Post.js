import React, { Component } from 'react'
import { connect } from 'react-redux'


class Post extends Component{
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/')
    }
    render(){
        console.log(this.props)
        const post = this.props.post ? (
            <div>
                <h3>{this.props.post.title}</h3>
                <p>{this.props.post.body}</p>
                <div>
                            <button onClick={this.handleClick}>
                                delete post
                            </button>
                        </div>
            </div>
        ) : (
            <div>
                loading.....
            </div>
        )
  return(
            <div>
                {post}
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) =>{
    let id = ownProps.match.params.post_id
    return{
        post: state.posts.find(post => post.id == id)
            
    }
}

const mapDispatchToPros = (dispatch) => {
    return{
        deletePost: (id) => { dispatch({ type: 'DELETE_POST', id: id})}
    }
}
export default connect(mapStateToProps, mapDispatchToPros)(Post)