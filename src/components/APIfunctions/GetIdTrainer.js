
const GetIdTrainers = (trainerId) => fetch (`http://localhost:8080/trainer/${trainerId}`, {method: 'GET'})
.then((trainers) => trainers.json())
.catch((error) => {console.log(error)})

export default GetIdTrainers;