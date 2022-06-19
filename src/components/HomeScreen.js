import {useState} from 'react';


const HomeScreen = () => {

    const [screenOption,setScreenOption] = useState(1);

    const options ={
        option1:"",
        option2: ""
    }

    // const currentlySelected = 1;

    return(
        <>
            <p>Home</p>
        </>
    )
}

export default HomeScreen;