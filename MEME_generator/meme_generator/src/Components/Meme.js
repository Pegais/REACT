import React from "react"
import memesData from "../MemeData"   //importing data like this

export default function Meme() {
    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * // ----------------------------------->>>>>>>>>>>>>>>>>>>>>this means [meme,setmeme]=useState({
     *                                                                                              topText:"",
     *                                                                                              bottomText:"",
     *                                                                                              randomImage:"image-url"
     *                                                                                                      })
     * 
    
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * ---------------------------------------------->>>>>>>>>>>>>>>>>>>>>>[allMemeImages,setAllMemeIMages]=useState(memeData)
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
    

// update state with the use of meme as variable to take the data .
    // update state with the use of setMeme function.
    // three default argument in object to be passed in useState();
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })//default state for rendering the component.



    // storing the object-data into allmemeImage.
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    console.log(allMemeImages)
    
    // function for getting random images and updating the state
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url;

        // now updating the state for generating the meme;
        setMeme(prevMeme => (console.log(prevMeme),{
            ...prevMeme,
            randomImage:url
        }))
        
        
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.randomImage} className="meme--image" />
        </main>
    )
}