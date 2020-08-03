import express, { Application } from 'express'

const port = process.env.PORT || 8080
//initializing the server//
const server: Application = express()

// listening to the server //
server.listen(port, () => {console.log('Zeems API is online!!!!')})
