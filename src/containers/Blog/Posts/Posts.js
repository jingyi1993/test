import React, {Component} from 'react';
import axios from "../../../axios";

import Post from '../../../components/Post/Post';
import Classes from './Posts.css';


import {Link} from 'react-router-dom';



class Posts extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false,
    };

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    };

    componentDidMount () {
        console.log(this.props);
        axios.get( '/posts' )
            .then( response => {
                //work with data before it was set state;
                //slice method
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log( response );
            } )
            //a way to catch error
            //if there is an error, let server still work
            .catch(error=>{
                // console.log(er)
                // this.setState({
                //     error:true
                // })
            });
    }

    render(){

        let posts = <h style={{textAlign: 'center' }}><strong>wrong!</strong></h>;
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return (

                    <Link to={'/'+ post.id} key={post.id}>
                    <Post

                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)} />
                </Link>
                    );
            });
        }
        return(
            <section className='Posts'>
                {posts}

                {/*<section>*/}
                    {/*<FullPost id={this.state.selectedPostId} />*/}
                {/*</section>*/}
                {/*<section>*/}
                    {/*<NewPost />*/}
                {/*</section>*/}

            </section>





        );
    }
}

export default Posts;