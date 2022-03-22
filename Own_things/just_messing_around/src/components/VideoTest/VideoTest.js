import React, { Component } from 'react'
import './VideoTest.css'

class VideoTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            volume: 1,
            videoElement: null,
            currentVideoTime: null,
            duration: null,
            intervalId: null,
            videoUploaded: true
        }
        this.updateProgressBar = this.updateProgressBar.bind(this)
    }
    render() {
        const form = (
            <>
                <form onSubmit={this.formSubmit.bind(this)}>
                    <input type="file" name="formVideo" id="formVideo" />
                    <input type="submit" value="Wyślij" />
                </form>
            </>
        )
        return (
            <>
                {/* {this.state.videoUploaded ? <Player click={this.click.bind(this)} src={"./images/video/video.mp4"} /> : null} */}
                <video onClick={this.click.bind(this)} id="video">
                    <source src="./images/video/video.mp4" type="video/mp4" />
                </video>
                <input type="range" min="0" max="1" step="0.01" value={this.state.volume} onChange={this.volumeChangeHandler.bind(this)} />
                {Math.floor(this.state.volume * 100)}
                <br />
                <div id="durationWrapper">
                    <div id="duration" style={{ width: (this.state.currentVideoTime / this.state.duration) * 100 + '%' }}></div>
                </div>
                {this.state.videoUploaded ? null : form}
            </>
        );
    }

    click(e) {
        const video = e.target
        this.setState(prevState => {
            if (prevState.playing) {
                video.pause()
                clearInterval(this.state.intervalId)
                return {
                    playing: false,
                    intervalId: null
                }
            } else {
                video.play()
                const intervalId = setInterval(this.updateProgressBar, 200)
                const duration = this.state.videoElement.duration * 1000
                return {
                    playing: true,
                    intervalId,
                    duration
                }
            }
        })
    }

    updateProgressBar() {
        const currentVideoTime = document.getElementById("video").currentTime * 1000
        if (currentVideoTime === this.state.duration) {
            clearInterval(this.state.intervalId)
        }
        this.setState({
            currentVideoTime
        })
    }
    volumeChangeHandler(e) {
        const volume = e.target.value
        const videoElement = this.state.videoElement
        videoElement.volume = volume
        this.setState({
            volume,
            videoElement,
        })
    }

    componentDidMount() {
        this.setState({
            videoElement: document.getElementById("video"),
            currentVideoTime: document.getElementById("video").currentTime,
        })
    }

    formSubmit(e) {
        e.preventDefault()
        const file = e.target.formVideo.files[0]
        console.log(file.type)
        if (file === undefined) {
            this.setState({
                errorMessage: "Brak pliku"
            })
        } else {
            if (file.type === "video/mp4") {
                const fileReader = new FileReader()
                fileReader.onload = e => {
                    // TUTAJ MA BYĆ HANDLED UPLOAD VIDEO TAK ŻEBY DO KOMPONENTU WLECIAŁO <video> <source/> </video>
                    console.log(e.target.result)
                }
                fileReader.readAsText(e.target.formVideo.files[0])
            } else {
                this.setState({
                    errorMessage: "Błędne rozszerzenie pliku"
                })
            }
        }
    }
}

export default VideoTest;

const Player = props => {

    return (
        <video onClick={this.click.bind(this)} id="video">
            <source src="./images/video/video.mp4" type="video/mp4" />
        </video>
    )
}