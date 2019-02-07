import React, { Component, Fragment } from 'react';
import SearchBar from "../SearchBar/SearchBar";
import styles from './App.module.css';
import VideoList from "../VideoList/VideoList";
import youtube from "../../api/youtube";
import VideoDetail from "../VideoDetail/VideoDetail";

class App extends Component {
    state = {
        videos: [],
        selectedVideo: null,
        currentPage: 1,
        videosPerPage: 5,
        activePage: 1
    };

    componentDidMount() {
        this.onSearchSubmit('react js');
    }

    onSearchSubmit = async (value) => {
        if (!value) {
            this.setState({videos: []});
        }
        const response = await youtube.get('/search', {
            params: {
                q: value
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        });
    };

    handleClick = (event) => {
        event.preventDefault();
        this.setState({
            currentPage: Number(event.target.id),
            activePage: Number(event.target.id)
        });
    };

    render() {
        //pagination
        const { videos, currentPage, videosPerPage } = this.state;
        // Logic for displaying videos
        const indexOfLastVideo = currentPage * videosPerPage;
        const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
        const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(videos.length / videosPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => (
            <li
                key={number}
                id={number}
                onClick={this.handleClick}
                className={this.state.activePage === number ? styles['active'] : ''}
            >
                {number}
            </li>
        ));


        return(
            <Fragment>
                <section className={ styles.app }>
                    <h1>Video Search</h1>
                    <hr className={ styles[ 'app__first' ] }/>
                    <hr className={ styles[ 'app__second' ] } />
                    <hr className={ styles[ 'app__third' ] } />
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                </section>
                <section className={styles['app-cnt']}>
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList onVideoSelect={this.onVideoSelect} videos={ currentVideos }/>
                </section>
                <section>
                    <ul className={styles['app__page-numbers']}>
                        {renderPageNumbers}
                    </ul>
                </section>
            </Fragment>
        );
    }
}

export default App;
