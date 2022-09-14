const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index');
const cors = require('cors');
const app = express();
// const router = require('./routes/index')

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', routes);

app.use(morgan('dev'))

// app.get('/', (req, res) =>{
//   res.status(200).send('ok..');
// })
// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
