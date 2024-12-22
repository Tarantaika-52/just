from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import logging
from src.routers.file_router import file_router
from src.routers.text_router import text_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(file_router, prefix="/f")
app.include_router(text_router, prefix="/t")

if __name__ == "__main__":
    print("running...")
    uvicorn.run(app, host='0.0.0.0', port=8000)