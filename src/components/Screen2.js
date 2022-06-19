const Screen2 = ({goToPage1_From2, goToPage3_From2}) => {


    return(
        <>
        
        <p>This is Screen 2</p>
        <button onClick={goToPage1_From2} >Click to go to Screen 1</button>
        <button onClick={goToPage3_From2} >Click to go to Screen 3</button>
        
        
        </>
    )


}

export default Screen2;