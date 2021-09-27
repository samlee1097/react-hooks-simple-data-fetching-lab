import {useEffect, useState} from "react"

function App(){
    const [rendered, SetRendered] = useState(false)
    const [image, SetImage] = useState("")

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp=> resp.json())
        .then(data => {
            SetImage(data);
            SetRendered(!rendered);
        })
    }, [])

    return(
    rendered ? <img src={image.message} alt="A Random Dog"></img> : <p>Loading...</p>
    );
}

export default App