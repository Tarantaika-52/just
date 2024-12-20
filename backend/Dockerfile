FROM python:3.11.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

VOLUME /just_data

CMD ["python3", "main.py"]