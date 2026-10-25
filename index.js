import express from 'express'

const app  = express();
const PORT = 3000;

const shirt = [
    {id:1, name:"black shirt", price:400},
    {id:2, name:"brown shirt", price:500},,
    {id:3, name:"red shirt", price:800}
]

app.get('/', (req, res) => {
    res.json(shirt);
})

app.listen(PORT, ()=>{
    console.log(`server is running ${PORT}`);
})