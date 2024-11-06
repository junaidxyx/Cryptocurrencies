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

app.get("/1", async (req, res) => {
    const response = await axios.get(API_URL + "/v1/cryptocurrency/listings/latest", {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.API_KEY,
            'Accept': 'application/json'
        }
    });
    res.render("bitcoin.ejs", { cryptoResponse: response.data });
})

app.get("/2", async (req, res) => {
    const response = await axios.get(API_URL + "/v1/cryptocurrency/listings/latest", {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.API_KEY,
            'Accept': 'application/json'
        }
    });
    res.render("ethereum.ejs", { cryptoResponse: response.data });
})

app.get("/3", async (req, res) => {
    const response = await axios.get(API_URL + "/v1/cryptocurrency/listings/latest", {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.API_KEY,
            'Accept': 'application/json'
        }
    });
    res.render("tether.ejs", { cryptoResponse: response.data });
})

app.get("/4", async (req, res) => {
    const response = await axios.get(API_URL + "/v1/cryptocurrency/listings/latest", {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.API_KEY,
            'Accept': 'application/json'
        }
    });
    res.render("bnb.ejs", { cryptoResponse: response.data });
})

app.get("/5", async (req, res) => {
    const response = await axios.get(API_URL + "/v1/cryptocurrency/listings/latest", {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.API_KEY,
            'Accept': 'application/json'
        }
    });
    res.render("solana.ejs", { cryptoResponse: response.data });
})

app.get("/6", async (req, res) => {
    const response = await axios.get(API_URL + "/v1/cryptocurrency/listings/latest", {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.API_KEY,
            'Accept': 'application/json'
        }
    });
    res.render("usdc.ejs", { cryptoResponse: response.data });
})

app.get("/7", async (req, res) => {
    const response = await axios.get(API_URL + "/v1/cryptocurrency/listings/latest", {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.API_KEY,
            'Accept': 'application/json'
        }
    });
    res.render("xrp.ejs", { cryptoResponse: response.data });
})

app.get("/8", async (req, res) => {
    const response = await axios.get(API_URL + "/v1/cryptocurrency/listings/latest", {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.API_KEY,
            'Accept': 'application/json'
        }
    });
    res.render("dogecoin.ejs", { cryptoResponse: response.data });
})

app.get("/9", async (req, res) => {
    const response = await axios.get(API_URL + "/v1/cryptocurrency/listings/latest", {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.API_KEY,
            'Accept': 'application/json'
        }
    });
    res.render("tron.ejs", { cryptoResponse: response.data });
})

app.get("/10", async (req, res) => {
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