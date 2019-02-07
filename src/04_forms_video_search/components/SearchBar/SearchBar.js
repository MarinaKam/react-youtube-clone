import React, { Component, Fragment } from 'react';
import styles from './SearchBar.module.css';

class SearchBar extends Component {
   state = {
       value: ''
   };

    handleChange = (e) => {
      this.setState({
          value: e.target.value
      })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ value: '' });
        this.props.onSubmit(this.state.value);
    };

   render() {
       return(
           <Fragment>
               <form className={styles.form} onSubmit={this.handleSubmit}>
                   <input
                       onChange={this.handleChange}
                       value={this.state.value}
                       placeholder='Search... '/>
               </form>
           </Fragment>
       );
   }
}

export default SearchBar;