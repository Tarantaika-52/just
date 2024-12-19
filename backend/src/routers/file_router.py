import os.path

from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse

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

@file_router.get("/get/img/{file}")
async def get_img_by_file_ep(file:str):
    im_path = os.path.join(f"files/i", file)

    if (not os.path.isfile(im_path)):
        raise HTTPException(status_code=404, detail="file not found :(")

    return FileResponse(im_path)