const ButtonFunctions = () => {

    const buttonFunctions =  {

        StartUpScreen : {
            start: <button  className='yesButton-invisible' onClick={() => {console.log('Started')}}></button>
        },
        HomeScreen : {
            goUp : () => {console.log("Clicked Up")},
            goDown: () => {console.log("Clicked Down")},
            goTo: <button className="yesButton-invisble" onClick={() => {console.log("Clicked Go To")}}></button>,
        },


    }

    return(
        <>
        
        </>
    )





}

export default ButtonFunctions