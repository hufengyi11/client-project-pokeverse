
const GetTownTrainers = (townName) => fetch (`http://localhost:8080/trainer/town?town=${townName}`)
.then((trainers) => trainers.json())
.catch((error) => {console.log(error)})

export default GetTownTrainers;