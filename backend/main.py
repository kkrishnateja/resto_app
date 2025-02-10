from fastapi import FastAPI, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel
from typing import List

app = FastAPI()

# MongoDB Connection
MONGO_URI = "mongodb://localhost:27017"
client = AsyncIOMotorClient(MONGO_URI)
db = client.restaurant

# Models
class MenuItem(BaseModel):
    name: str
    category: str
    price: float
    description: str

class Reservation(BaseModel):
    name: str
    email: str
    phone: str
    date: str
    time: str
    guests: int

# Routes
@app.get("/menu", response_model=List[MenuItem])
async def get_menu():
    return await db.menu.find().to_list(100)

@app.post("/menu")
async def add_menu_item(item: MenuItem):
    await db.menu.insert_one(item.model_dump())
    return {"message": "Item added"}

@app.post("/reserve")
async def make_reservation(reservation: Reservation):
    await db.reservations.insert_one(reservation.model_dump())
    return {"message": "Reservation confirmed"}

@app.get("/contact")
async def contact_details():
    return {"address": "123 Food St, City", "phone": "123-456-7890", "email": "contact@restaurant.com"}
