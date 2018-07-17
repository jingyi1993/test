import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import './Blog.css';
import Posts from './Posts/Posts';
import Classes from './Blog.css';


class Blog extends Component {





    render () {


        return (
            <div className={Classes.Blog}>


                    <nav>
                        <ul>
                            <li><a href = '/'>Home</a></li>
                            <li><a href = '/'>New Post</a></li>
                        </ul>
                    </nav>
                <Posts/>

            </div>
        );
    }
}

export default Blog;