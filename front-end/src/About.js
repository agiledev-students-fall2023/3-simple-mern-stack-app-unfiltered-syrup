import "./About.css"
import React, { useState , useEffect } from 'react';
import axios from 'axios'

const About = props => {
    const [urlArray, setUrlArray] = useState([]);
    const [text, setText] = useState('');
    const [url, setUrl] = useState('static-assets/image.jpg');
    const fetchText = () => {
        axios
          .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/texts/get_text`)
          .then(response => {
            //receives text from backend
            const texts = response.data.content
            setText(response.data.content[1].content)
          })
          .catch(err => {
            const errMsg = JSON.stringify(err, null, 2) // convert error object to a string so we can simply dump it to the screen
          })
      }
      //trigger on page load
      useEffect(() => {
        fetchText();
      }, []);

    const fetchImageUrls = () => {
        axios
          .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/images/get_image`)
          .then(response => {
            //receives image urls from backend
            const results = response.data.url
            setUrlArray(results)
            
          })
          .catch(err => {
            const errMsg = JSON.stringify(err, null, 2) // convert error object to a string so we can simply dump it to the screen
          })
      }
      //trigger on page load
      useEffect(() => {
        fetchImageUrls();
      }, []);

    const changeImage = () => {
        console.log('current image url: ' + url)
        if (url == urlArray[0].content) {
            setUrl(urlArray[1].content)
        } else setUrl(urlArray[0].content)
    }

    return (
      <>
      <div className='aboutPageContainer'>
      <h1>About Us</h1>
      <div className='imageContainer'>
        <img className='personalImage' src = {url}></img>
        <div className='description'>
            {text} 
        <div onClick={changeImage} className="link">Click here for the image</div>
        </div>
        </div>
      </div>
      </>
    )
  }
  
  // make this component available to be imported into any other file
  export default About
  