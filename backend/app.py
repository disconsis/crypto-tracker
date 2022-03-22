#!/usr/bin/env python3

import requests as Req
from flask import Flask, request

coinranking_api_key = "coinrankingface2f7b8ba00388523872ad20496418d12dec1bdca65df1"
coinranking_base_url = "https://api.coinranking.com/v2/"

app = Flask(__name__)

headers = {
    "x-access-token": coinranking_api_key,
}

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def get(path):
    full_url = coinranking_base_url + path
    response = Req.get(
        full_url,
        headers = headers,
        params = request.args,
    )
    return response.text
