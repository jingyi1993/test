import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import './Blog.css';
import Posts from './Posts/Posts';
import {Route, NavLink} from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';



class Blog extends Component {


    render () {


        return (
            <div className="Blog">
                    <nav>
                        <ul>
                            <li><NavLink to='/Posts'>Home</NavLink></li>
                            <li><NavLink  to = '/new-post'>New Post</NavLink></li>
                        </ul>
                    </nav>
                {/*<Posts/>*/}
                <Route path='/Posts' component={Posts}/>

                <Route path='/new-post' component={NewPost}/>

            </div>
        );
    }
}

export default Blog;