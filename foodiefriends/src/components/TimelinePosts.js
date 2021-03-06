import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/timelineAction'
import { Link } from 'react-router-dom'

class TimelinePosts extends Component {
    componentDidMount() {
        // what is componentDidMount? What does it do?
        // Review Lifecycle methods
        this.props.fetchPosts()
    }

    render() {
        // props: {posts: Array(0), newPost: {…}, loading: {…}, fetchPosts: ƒ}
        // props come from state in timelineAction/postReducer
        if (this.props.loading === true) {
            return (
                <h1>Loading...</h1>
            )
        } else {
            const postItems = this.props.posts.reverse().map(post => (
                <div key={post.id} className='timeline-posts'>
                    <Link to={{pathname: `/posts/${post.id}`}}>
                    <img onClick={this.onClick} className='post-img'
                        src={post.img} 
                        style={{
                            height: "514px",
                            width: "411px"
                        }}
                    />
                    </Link>
                    <div className='ingredient-direction-toggler'>
                        <h3>{post.name}</h3>
                        <p>by {post.user.username}</p>
                    </div>
                </div>
            ))
            return (
                <div>
                    {postItems}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.items,
        newPost: state.posts.newItem,
        loading: state.loading
    }
}

export default connect(mapStateToProps, { fetchPosts })(TimelinePosts)