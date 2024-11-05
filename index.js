import express from "express";
import axios from "axios";
import 'dotenv/config';

const app = express();
const port = 3000;
const API_URL = "https://pro-api.coinmarketcap.com";

app.use(express.static("public"));


app.get("/", async (req, res) => {
    const response = await axios.get(API_URL + "/v1/cryptocurrency/listings/latest", {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.API_KEY,
            'Accept': 'application/json'
        }
    });
    // console.log(response.data);
    res.render("index.ejs", { cryptoResponse: response.data });
})

app.get("/bitcoin", async (req, res) => {
    const response = await axios.get(API_URL + "/v1/cryptocurrency/listings/latest", {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.API_KEY,
            'Accept': 'application/json'
        }
    });
    res.render("bitcoin.ejs", { cryptoResponse: response.data });
})

app.get("/ethereum", async (req, res) => {
    const response = await axios.get(API_URL + "/v1/cryptocurrency/listings/latest", {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.API_KEY,
            'Accept': 'application/json'
        }
    });
    res.render("ethereum.ejs", { cryptoResponse: response.data });
})

app.get("/tether", async (req, res) => {
    const response = await axios.get(API_URL + "/v1/cryptocurrency/listings/latest", {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.API_KEY,
            'Accept': 'application/json'
        }
    });
    res.render("tether.ejs", { cryptoResponse: response.data });
})

app.get("/bnb", async (req, res) => {
    const response = await axios.get(API_URL + "/v1/cryptocurrency/listings/latest", {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.API_KEY,
            'Accept': 'application/json'
        }
    });
    res.render("bnb.ejs", { cryptoResponse: response.data });
})

app.get("/solana", async (req, res) => {
    const response = await axios.get(API_URL + "/v1/cryptocurrency/listings/latest", {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.API_KEY,
            'Accept': 'application/json'
        }
    });
    res.render("solana.ejs", { cryptoResponse: response.data });
})

app.get("/usdc", async (req, res) => {
    const response = await axios.get(API_URL + "/v1/cryptocurrency/listings/latest", {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.API_KEY,
            'Accept': 'application/json'
        }
    });
    res.render("usdc.ejs", { cryptoResponse: response.data });
})

app.get("/xrp", async (req, res) => {
    const response = await axios.get(API_URL + "/v1/cryptocurrency/listings/latest", {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.API_KEY,
            'Accept': 'application/json'
        }
    });
    res.render("xrp.ejs", { cryptoResponse: response.data });
})

app.get("/dogecoin", async (req, res) => {
    const response = await axios.get(API_URL + "/v1/cryptocurrency/listings/latest", {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.API_KEY,
            'Accept': 'application/json'
        }
    });
    res.render("dogecoin.ejs", { cryptoResponse: response.data });
})

app.get("/tron", async (req, res) => {
    const response = await axios.get(API_URL + "/v1/cryptocurrency/listings/latest", {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.API_KEY,
            'Accept': 'application/json'
        }
    });
    res.render("tron.ejs", { cryptoResponse: response.data });
})

app.get("/toncoin", async (req, res) => {
    const response = await axios.get(API_URL + "/v1/cryptocurrency/listings/latest", {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.API_KEY,
            'Accept': 'application/json'
        }
    });
    res.render("toncoin.ejs", { cryptoResponse: response.data });
})

app.listen(port, (req, res) => {
    console.log(`Port running on port ${port}`);
})