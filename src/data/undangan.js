//   Array `daftarUndangan` sebgai "database".
//   Setiap elemen = 1 undangan. Satu aplikasi bisa melayani banyak pasangan,
//   dibedakan oleh `slug` (bagian URL: /undangan/<slug>).
//   semua tanggal jangan object Date karena akan diserialize

export const daftarUndangan = [
    {
      slug: "budi-ani",                         // dipakai di URL, huruf kecil, tanpa spasi

      // --- Metadata halaman (judul tab browser & preview saat link dibagikan) ---
      meta: {
        judul: "The Wedding of Budi & Ani",
        deskripsi: "Kami mengundang Anda untuk hadir di hari bahagia kami.",
        gambarPreview: "/undangan/budi-ani/cover.jpg",   // file di folder public/
      },

      // --- Tema: warna & font, nanti dijadikan CSS variable di layout ---
      tema: {
        warnaUtama: "#8b5e3c",       // tombol, judul
        warnaLatar: "#fdf8f3",       // background halaman
        warnaTeks: "#3b2f2f",
        warnaAksen: "#d4a373",       // garis hiasan, ikon
        fontJudul: "greatVibes",     // KUNCI dari peta font di src/lib/fonts.js
        fontIsi: "lora",             // (bukan nama font bebas — lihat penjelasan di fonts.js)
      },

      // --- Pengaturan tampil/sembunyi per bagian (semua bisa dimatikan) ---
      fitur: {
        kisahCinta: true,
        galeri: true,
        amplopDigital: true,
        ucapan: true,
        musik: true,
        countdown: true,
      },

      // --- Sampul (layar pertama sebelum undangan dibuka) ---
      sampul: {
        judulKecil: "The Wedding of",
        gambarLatar: "/undangan/budi-ani/cover.jpg",
        teksTombol: "Buka Undangan",
        sapaanTamu: "Kepada Yth. Bapak/Ibu/Saudara/Saudari",
        namaTamuDefault: "Tamu Undangan",   // dipakai jika URL tidak punya ?to=
      },

      // --- Kutipan/ayat pembuka ---
      kutipan: {
        teks: "Dan di antara tanda-tanda kekuasaan-Nya ...",
        sumber: "QS. Ar-Rum: 21",
      },

      // --- Mempelai: buat array agar urutan bisa diubah (pria dulu / wanita dulu) ---
      mempelai: [
        {
          peran: "pria",
          namaPanggilan: "Budi",
          namaLengkap: "Budi Santoso, S.Kom.",
          foto: "/undangan/budi-ani/budi.jpg",
          anakKe: "Putra pertama dari",
          namaAyah: "Bapak Slamet",
          namaIbu: "Ibu Sri",
          instagram: "budi.santoso",
        },
        {
            peran: "wanita",
            namaPanggilan: "Ani",
            namaLengkap: "Ani Lestari, S.Pd.",
            foto: "/undangan/budi-ani/ani.jpg",
            anakKe: "Putri kedua dari",
            namaAyah: "Bapak Joko",
            namaIbu: "Ibu Sri",
            instagram: "ani.lestari",
        },
      ],

      // --- Acara: array, karena jumlahnya bisa 1 (resepsi saja) atau lebih ---
      acara: [
        {
          nama: "Akad Nikah",
          mulai: "2026-12-12T08:00:00+07:00",   // format ISO + zona waktu (WIB = +07:00)
          selesai: "2026-12-12T10:00:00+07:00", // boleh null → tampil "s/d selesai"
          tempat: "Masjid Al-Ikhlas",
          alamat: "Jl. Melati No. 10, Bandung",
          linkMaps: "https://maps.app.goo.gl/xxxx",       // tombol "Buka Maps"
          embedMaps: "https://www.google.com/maps/embed?pb=...", // src untuk <iframe>, boleh null
        },
        {
            nama: "Resepsi",
            mulai: "2026-12-12T11:00:00+07:00",
            selesai: "2026-12-12T14:00:00+07:00",
            tempat: "Masjid Al-Ikhlas",
            alamat: "Jl. Melati No. 10, Bandung",
            linkMaps: "https://maps.app.goo.gl/xxxx",
        },
      ],

      // --- Countdown menghitung mundur ke waktu ini (biasanya acara pertama) ---
      tanggalCountdown: "2026-12-12T08:00:00+07:00",

      // --- Kisah cinta (timeline) ---
      kisahCinta: [
        { tahun: "2019", judul: "Pertama Bertemu", cerita: "Kami bertemu di ..." },
        { tahun: "2024", judul: "Lamaran", cerita: "..." },
      ],

      // --- Galeri: simpan file di public/undangan/<slug>/galeri/ ---
      galeri: [
        { src: "/undangan/budi-ani/galeri/1.jpg", alt: "Prewedding di pantai" },
        { src: "/undangan/budi-ani/galeri/2.jpg", alt: "..." },
      ],

      // --- Amplop digital ---
      amplop: {
        judul: "Amplop Digital",
        pengantar: "Doa restu Anda adalah karunia terindah ...",
        rekening: [
          { bank: "BCA", nomor: "1234567890", atasNama: "Budi Santoso" },
          { bank: "DANA", nomor: "081234567890", atasNama: "Ani Lestari" },
        ],
        alamatKado: "Jl. Melati No. 10, Bandung",   // boleh null
      },

      // --- Musik latar: simpan mp3 di public/ ---
      musik: {
        src: "/undangan/budi-ani/lagu.mp3",
        judul: "A Thousand Years",    // opsional, untuk aria-label
      },

      // --- Penutup ---
      penutup: {
        teks: "Merupakan suatu kehormatan apabila Bapak/Ibu berkenan hadir ...",
        salam: "Kami yang berbahagia,",
        namaKeluarga: "Keluarga Bapak Slamet & Keluarga Bapak Joko",
      },
    }

//  Siapkan file gambar/musik di folder public/undangan/<slug>/.
//   Path di data dimulai dengan "/" (contoh "/undangan/budi-ani/cover.jpg")
//   karena isi folder public/ disajikan dari root URL.
//   (docs: 03-api-reference/03-file-conventions/public-folder.md)
//


];
