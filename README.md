# Luanime API

Luanime API adalah layanan RESTful API berperforma tinggi yang dibangun menggunakan Bun dan ElysiaJS. Proyek ini dirancang untuk melakukan scraping dan menyajikan data anime dari sumber eksternal secara terstruktur. Menggunakan Cheerio untuk HTML parsing yang efisien, API ini menyediakan antarmuka JSON yang bersih untuk aplikasi klien.

## Tech Stack

- Runtime: [Bun](https://bun.sh/)
- Framework: [ElysiaJS](https://elysiajs.com/)
- Scraping: [Cheerio](https://cheerio.js.org/)
- Logging: [Pino](https://getpino.io/)
- Language: [TypeScript](https://www.typescriptlang.org/)

## Features

- High Performance: Memanfaatkan Bun runtime untuk eksekusi cepat dan penggunaan memori efisien.
- Type-Safe: Dikembangkan sepenuhnya dengan TypeScript untuk integritas data.
- Modular Architecture: Pemisahan yang jelas antara routes, controllers, dan services.
- Structured Logging: Terintegrasi dengan Pino untuk request tracking dan error logging.
- Resilient Scraping: Implementasi timeout dan selector yang tangguh untuk ekstraksi data.

## Prerequisites

- [Bun](https://bun.sh/) v1.1.0 atau lebih tinggi
- [Git](https://git-scm.com/)

## Installation

1. Clone repository:
   ```bash
   git clone https://github.com/nolict/luanime-api.git
   cd luanime-api
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env
   ```
   Sesuaikan konfigurasi di dalam file .env.

## Development

Jalankan server dalam development mode dengan hot-reloading:
```bash
bun run dev
```

Jalankan linting dan type check:
```bash
bun run lint
```

## Testing

Jalankan rangkaian automated testing menggunakan Bun test runner:
```bash
bun test
```

## Deployment

Persiapkan aplikasi untuk production environment:
```bash
bun run start
```

## Documentation

- [API Documentation](API.md) - Detail mengenai endpoint yang tersedia.

## License

MIT License
