FROM python:3.10-slim as build
WORKDIR /app
COPY . .
RUN pip install --cache-dirs -r requirements.txt
EXPOSE 8000
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8000"]
