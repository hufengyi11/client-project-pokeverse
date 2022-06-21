
const PostTrainer = (newTrainer) => fetch ("http://localhost:8080/trainer", {method: 'POST', body: newTrainer})
.then((trainers) => trainers.json())
.catch((error) => {console.log(error)})

export default PostTrainer;