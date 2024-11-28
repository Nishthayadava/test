import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send('Ready World!');
// });

app.use(express.static('dist'));
// get a list of 5 jokes

app.get('/api/jokes', (req, res) =>{
    const jokes = [
        { id: 1, title: "A Joke", content: 'Why was the math book sad? Because it...' },
        { id: 2, title: "Tech Joke", content: 'Why do programmers prefer dark mode? Because light attracts bugs!' },
        { id: 3, title: "Coffee Joke", content: 'How does a computer take its coffee? With a lot of Java!' },
        { id: 4, title: "Animal Joke", content: 'Why don’t elephants use computers? They’re afraid of the mouse!' },
        { id: 5, title: "Binary Joke", content: 'There are only 10 kinds of people in the world: those who understand binary and those who don’t.' }
    
    ];
    res.send(jokes);
})



const port = process.env.PORT || 5000;

app.listen(port, ()=> {
    console.log(`Serve at http://localhost:${port}`);
    }
);