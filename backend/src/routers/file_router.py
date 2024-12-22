import os.path
import hashlib
import random
from fastapi import APIRouter, HTTPException, File, UploadFile, Response
from fastapi.responses import FileResponse
import shutil

file_router = APIRouter()

@file_router.post("/upload/img")
async def upload_img_file_ep(file: UploadFile = File(...)):
    if (not os.path.exists("/just_data/files")):
        os.mkdir("/just_data/files")
    if (not os.path.exists("/just_data/files/i")):
        os.mkdir("/just_data/files/i")

    f_name = hashlib.sha256((file.filename.encode() + str(random.randint(0, 9999999)).encode())).hexdigest()
    f_name = f_name[8:32]

    f_format = file.filename.split(".")[-1]

    f_loc = os.path.join("/just_data/files/i", f"{f_name}.{f_format}")

    with open(f_loc, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return f_name + "." + f_format

@file_router.get("/get/img/ls")
async def get_images_list(response: Response):
    im_path = "/just_data/files/i"

    #Не кешировать
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "0"

    return os.listdir(im_path)

@file_router.get("/get/img/{file}")
async def get_img_by_file_ep(file:str):
    im_path = os.path.join(f"/just_data/files/i", file)

    if (not os.path.isfile(im_path)):
        raise HTTPException(status_code=404, detail="file not found :(")

    return FileResponse(im_path)