import { https } from "firebase-functions"; //const functions = require("firebase-functions");

export const hideKey = https.onRequest((request, response) =>{
    if (request.method === "POST"){
        let key = firebase.config().openai_api_key;

        response.status(200).send(key)
    }
},{cors:true});

/*import { https } from "firebase-functions"; //const functions = require("firebase-functions");
import { post } from 'axios'; //const axios = require('axios');

export const hideKey = https.onRequest((request, response) => {

    if (request.method === OPTIONS) {
    response.set(Access-Control-Allow-Headers, authorization,content-type);
    response.set(Access-Control-Allow-Origin, );
    return response.status(204).send();
    }
        else {
        response.set(Access-Control-Allow-Origin, );
        }

    if(request.method === POST){
        let message = request.body.message;
        let apikey = process.env.openai_api_key;
        const headers = {
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
        };

    // Define the request data
    const requestData = {
        prompt: message,
        temperature: 0.5,
        max_tokens: 2048,
        };

    //Send the request to the OpenAI API
    post("https://api.openai.com/v1/completions", requestData, { headers })
        .then(r => {
            console.log(r.data.choices[0].text);
            response.status(200).send({response: r.data.choices[0].text});
        })
        .catch(error => {
            console.error(error);
            response.status(500).send(error);
        });

    }else{
    response.status(200).send(Only , POST);
    }

}, {cors: true});*/