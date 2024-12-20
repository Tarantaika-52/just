import os.path
import hashlib
import random
from fastapi import APIRouter, HTTPException, File, UploadFile
from fastapi.responses import FileResponse
import base64
import shutil

file_router = APIRouter()

@file_router.get("/state")
async def get_state_ep():
    return {
        "data":{
            "server_message": "all right"
        },
        "meta":{
            "country": "RU",
            "return_hash": ""
        }
    }

@file_router.post("/upload/img")
async def upload_img_file_ep(file: UploadFile = File(...)):
    if (not os.path.exists("/just_data/files")):
        os.mkdir("/just_data/files")
        os.mkdir("/just_data/files/i")

    f_name = hashlib.sha256((file.filename.encode() + str(random.randint(0, 9999999)).encode())).hexdigest()
    f_loc = os.path.join("/just_data/files/i", f"{f_name}.jpg")

    with open(f_loc, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return f_name + ".jpg"

@file_router.get("/get/img/{file}")
async def get_img_by_file_ep(file:str):
    im_path = os.path.join(f"/just_data/files/i", file)

    if (not os.path.isfile(im_path)):
        raise HTTPException(status_code=404, detail="file not found :(")

    return FileResponse(im_path)