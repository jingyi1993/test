import React, { Component } from 'react';

import './NewPost.css';
import  axios from 'axios';

class NewPost extends Component {
    state = {
        title: '',
        body: '',
        author: 'Max'
    };

    addPostHandler =() =>{
        const data = {
            title:this.state.title,
            body: this.state.body,
            author: this.state.author,
        };
        //the 2nd argument is the post content;
        axios.post('/posts', data)
            .then(response=>{
                console.log(response)
            })
    };

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({body: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.addPostHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;