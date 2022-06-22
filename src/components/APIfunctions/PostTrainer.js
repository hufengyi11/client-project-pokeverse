
const PostTrainer = (newTrainer) => fetch("http://localhost:8080/trainer", {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: newTrainer
})
    .then((trainers) => trainers.json())
    .catch((error) => { console.log(error) })

export default PostTrainer;

