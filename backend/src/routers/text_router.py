from fastapi import APIRouter
import os.path
import hashlib
import random
import json

text_router = APIRouter()

@text_router.get("/get/quote/random")
async def get_rand_quote_ep():
    if (not os.path.exists("/just_data/files")):
        os.mkdir("/just_data/files")

    if (not os.path.exists("/just_data/files/json")):
        os.mkdir("/just_data/files/json")

        with open("/just_data/files/json/quotes.json", "w") as q_list:
            q = {"q": []}
            q_list.write("{}")

    with open("/just_data/files/json/quotes.json", "r", encoding='utf-8') as q_list:
        q = json.load(q_list)["q"]

    return random.choice(q)