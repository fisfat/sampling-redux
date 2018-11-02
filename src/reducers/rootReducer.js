const initState = {
    posts: [
        {id: 1, title: 'hello there', body: 'lets drink some scushies'},
        {id: 2, title: 'be right bck', body: 'Akinlolu oniro ibadan'},
        {id: 3, title: 'here we go', body: 'Aspireone and two'},
        
    ],
}

const rootReducer = (state = initState, action) =>{
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        }) 
        return {
            ...state,
            posts: newPosts
        }
    }
    return state
}

export default rootReducer