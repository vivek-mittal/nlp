const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const responseHandler = require('./js/response_handler');
const AYLIENTextAPI = require('aylien_textapi');
const textapi = new AYLIENTextAPI({
    application_id: "998355fa",
    application_key: "bdea2fae7804ed1e67c8a93a104993d9"
});
app.use(express.static('dist'));

app.get('/', (request, response) => {
    response.sendFile('dist/index.html', { root: __dirname });
});

app.get('/sentiment', (req, res) => {
    textapi.sentiment(responseHandler.getRequestParam(req), function(error, response) {
        console.log('sentiment');
        responseHandler.handleResponse(error, response, res);
    });
});

app.get('/classify', (req, res) => {
    textapi.classify(responseHandler.getRequestParam(req), function(error, response) {
        console.log('classify');
        responseHandler.handleResponse(error, response, res);
    });
});
app.get('/elsa', (req, res) => {
    textapi.entityLevelSentiment(responseHandler.getRequestParam(req), function(error, response) {
        console.log('elsa');
        responseHandler.handleResponse(error, response, res);
    });
});
app.get('/entities', (req, res) => {
    textapi.entities(responseHandler.getRequestParam(req), function(error, response) {
        console.log('entities');
        responseHandler.handleResponse(error, response, res);
    });
});
app.get('/concepts', (req, res) => {
    textapi.concepts(responseHandler.getRequestParam(req), function(error, response) {
        console.log('concepts');
        responseHandler.handleResponse(error, response, res);
    });
});
app.get('/summarize', (req, res) => {
    textapi.summarize(responseHandler.getRequestParamForSummary(req), function(error, response) {
        console.log('summarize');
        responseHandler.handleResponse(error, response, res);
    });
});
app.get('/language', (req, res) => {
    textapi.language(responseHandler.getRequestParam(req), function(error, response) {
        console.log('language');
        responseHandler.handleResponse(error, response, res);
    });
});

startListening();

function startListening() {
    app.listen(3000, () => {
        console.log('Listening on 3000');
    });
}

