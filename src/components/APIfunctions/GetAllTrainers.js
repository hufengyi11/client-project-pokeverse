
const GetAllTrainers = () => fetch ("http://localhost:8080/trainer")
.then((trainers) => trainers.json())
.catch((error) => {console.log(error)})

export default GetAllTrainers;