import React, {Component} from 'react';
import axios from "../../../axios";
import FullPost from '../../Blog/FullPost/FullPost';
import NewPost from '../../Blog/NewPost/NewPost';
import Post from '../../../components/Post/Post';


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
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />;
            });
        }
        return(
            <section className='Posts'>
                {posts}

                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>

            </section>





        );
    }
}

export default Posts;