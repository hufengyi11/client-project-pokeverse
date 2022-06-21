
const GetAllTrainers = () => fetch ("http://localhost:8080/trainer", {method: 'GET'})
.then((trainers) => trainers.json())
.catch((error) => {console.log(error)})

export default GetAllTrainers;