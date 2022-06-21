
const DeleteTrainer = (trainerId) => fetch (`http://localhost:8080/trainer/${trainerId}`, {method: 'DELETE'})
.catch((error) => {console.log(error)})

export default DeleteTrainer;