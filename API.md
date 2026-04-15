# API Documentation

Seluruh endpoint Luanime API menggunakan prefix /api/v1. Seluruh response diberikan dalam format JSON.

## Standard Response Structure

### Success
```json
{
  "status": "ok",
  "data": {}
}
```

### Error
```json
{
  "error": "ErrorType",
  "message": "Human readable description"
}
```

## Endpoints

### Health Check

Memeriksa health status aplikasi dan informasi sistem saat ini.

- URL: /api/v1/health
- Method: GET
- Response:
  - status: "ok"
  - timestamp: ISO 8601 timestamp saat ini
  - uptime: Uptime aplikasi dalam detik
  - environment: Nilai NODE_ENV saat ini

### Home Anime List

Mengambil daftar anime entries terbaru dari situs target.

- URL: /api/v1/home
- Method: GET
- Response:
  - status: "ok"
  - data: Array of anime objects
    - title: String (Judul anime)
    - slug: Slug untuk URL
    - imageUrl: String (URL gambar)
    - episode: String (Informasi episode terakhir)

## Error Handling

| Status Code | Description |
|---|---|
| 200 | OK / Success |
| 400 | Bad Request (Validation Failure) |
| 404 | Not Found |
| 500 | Internal Server Error |

## Usage Examples

### Fetching latest anime
```bash
curl http://localhost:3000/api/v1/home
```

### Checking system health
```bash
curl http://localhost:3000/api/v1/health
```
