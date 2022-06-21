
const PutTrainer = (trainerId, townName) => fetch (`http://localhost:8080/trainer/${trainerId}?town=${townName}`, {method: 'PUT'})
.catch((error) => {console.log(error)})

export default PutTrainer;