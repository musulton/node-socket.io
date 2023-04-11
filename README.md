# Socket.IO
Socket.io adalah library untuk memudahkan penggunaan WebSocket. Dengan menggunakan Socket.io kita dapat berkomunikasi secara real-time, 2 arah dan komunikasi berbasis event.

## Apa itu WebSocket?
Sebuah protokol yang memungkinkan komputer untuk dapat berkomunikasi 2 arah.

### Sebagai contoh apabila dibandingkan dengan HTTP
1. HTTP: Client hanya bisa mengirim request, dan server mengirim balik response ke client (komunikasi hanya 1 arah).
2. WebSocket: Ketika koneksi antara client dan server terhubung, maka kedua pihak dapat saling mengirim data tanpa membuka koneksi baru, sampai koneksi tersebut putus.

### Penjelasan Singkat Istilah Dasar di Socket.io
Socket.io dijadikan 2 bagian, yaitu

1. Server: Backend web
1. Client: Frontend web, Mobile, dll

Baik server maupun client memiliki fungsi utama dan API yang kurang lebih sama, yaitu:
- Event emitter: Bisa dianalogikan seperti orang berbicara tentang suatu hal / mengirim data dengan topik tertentu.
- Event listener: Pendengar atau penerima pesan dari suatu topik, sehingga antara client dengan server dapat menerima pesan dari kedua pihak.
- Broadcast: Fitur untuk mengirim data/pesan seperti event emitter, namun broadcast mengirim ke semua alamat socket yang aktif kecuali pengirimnya sendiri.