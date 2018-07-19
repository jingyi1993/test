import React, { Component } from 'react';
import axios from '../../../axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null,
        id:null,
    };


    // componentDidMount () {
    //     console.log(this.props.match.params.id);
    //     this.loadData();
    // }

    componentDidUpdate () {
        console.log(this.props.match.params.id);
        // this.setState({
        //     id:this.props.match.params.id
        // })
        if ( this.props.match.params.id ) {
            //判断是否要reload
            //only fetch data only when we receive new props

            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id) ) {
                axios.get( '/posts/'+this.props.match.params.id)
                    .then( response => {
                        console.log(response.data);
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }

    }



    // deletePostHandler =()=>{
    //     axios.delete('https://jsonplaceholder.typicode.com/posts'+this.props.id)
    //         .then(response=> {
    //             console.log(response)
    //         });
    // }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id )
            .then(response => {
                console.log(response);
            });
    }



    render () {
        // let post = <p style={{ textAlign: 'center'}} className="FullPost">Please select a Post!</p>;
        // if (this.props.match.params.id) {
        //     post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        // }
        let post = null;
        if ( this.state.loadedPost ) {
             post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>

            );
        }
        return (
            <div>{post}</div>
        );
    }
}

export default FullPost;