const Selections = () => {

    
    const pokemonNames = {
        option1: "Machamp",
        option2: "Lillipup",
        option3: "Slowking",
        option4: "Meowth"

    }

    const selectedPokemonOptions = {
        option1 :<p className={"pokemonOptionSelected"} >Machamp</p>,
        option2 : <p className={"pokemonOptionSelected"} >Lillipup</p>,
        option3 : <p className={"pokemonOptionSelected"} >Slowking</p>,
        option4 : <p className={"pokemonOptionSelected"} >Meowth</p>
    }
    
    const computerSelection = ()=> {
        const randomElement = Math.ceil(Math.random() * selectablePokemons.length);

        while(pokemonNames[`option${randomElement}`]===selectedPokemon){

            let rand = Math.ceil(Math.random() * selectablePokemons.length);
            if(pokemonNames[`option${rand}`]===selectedPokemon){
                continue;
            }else{
                setComputerPickNumber(rand)
                return selectedPokemonOptions[`option${rand}`]
            }
            
            
        }
        
        setComputerPickNumber(randomElement)
        return selectedPokemonOptions[`option${randomElement}`]
    }


    return(
        <>
        </>
    )



}