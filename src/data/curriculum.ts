import { DarsData, MufrodatItem } from "../types";

export const CURRICULUM: DarsData[] = [
  // =========================================================================
  // DARS 1: التَّعَارُفُ (PERKENALAN DAN IDENTITAS DIRI)
  // =========================================================================
  {
    id: "dars-1",
    number: 1,
    titleArabic: "التَّعَارُفُ",
    titleIndonesian: "Perkenalan & Identitas Diri",
    subtitle: "Identitas, Asal Daerah, Hobi, Kata Ganti & Isim Isyarah",
    description:
      "Menguasai perkenalan diri secara lengkap, membedakan kata ganti (dhamir) dan kata tunjuk (isim isyarah), serta menyusun kalimat dan menulis berdasarkan gambar.",
    learningObjectives: [
      "Memahami isi cerita perkenalan melalui audio dan menjawab pertanyaan audio dengan tepat (Istima').",
      "Mempraktikkan dialog perkenalan dan latihan berbicara mandiri menggunakan perekam suara (Kalam).",
      "Memahami teks hiwar dua tokoh dan menyusun kembali kalimat bahasa Arab sesuai isi bacaan (Qira'ah).",
      "Menulis kalimat-kalimat bahasa Arab secara runtut dan tepat berdasarkan gambar ilustrasi (Kitabah).",
    ],
    grammarPoints: [
      {
        title: "1. Kata Ganti (الضَّمَائِرُ — Isim Dhamir)",
        explanation:
          "Untuk memperkenalkan diri dan menanyakan identitas lawan bicara dengan tepat, perhatikan kesesuaian kata ganti dengan jenis kelamin (mudzakkar/muannats).",
        examples: [
          { arabic: "أَنَا طَالِبٌ مُجْتَهِدٌ / أَنَا طَالِبَةٌ مُجْتَهِدَةٌ", indonesian: "Saya siswa yang rajin / Saya siswi yang rajin" },
          { arabic: "أَنْتَ مِنْ سُورَابَايَا / أَنْتِ مِنْ سِيدُوَارْجُو", indonesian: "Kamu (lk) dari Surabaya / Kamu (pr) dari Sidoarjo" },
          { arabic: "هُوَ صَدِيقِي / هِيَ صَدِيقَتِي", indonesian: "Dia (lk) temanku / Dia (pr) temanku" },
        ],
      },
      {
        title: "2. Kata Tunjuk (أَسْمَاءُ الإِشَارَةِ — Isim Isyarah)",
        explanation:
          "Gunakan هَذَا untuk menunjuk kata benda/orang laki-laki (mudzakkar) dekat, dan هَذِهِ untuk perempuan (muannats) dekat.",
        examples: [
          { arabic: "هَذَا أَخِي مُحَمَّدٌ، هُوَ طَالِبٌ فِي الصَّفِّ السَّابِعِ.", indonesian: "Ini saudaraku Muhammad, dia siswa kelas tujuh." },
          { arabic: "هَذِهِ مَدْرَسَتِي، هِيَ مَدْرَسَةٌ جَمِيلَةٌ وَنَظِيفَةٌ.", indonesian: "Ini sekolahku, ia sekolah yang indah dan bersih." },
        ],
      },
      {
        title: "3. Kalimat Alasan & Cita-cita (Level High)",
        explanation:
          "Di level High, gabungkan fakta identitas dengan alasan menggunakan لِأَنَّ (karena) dan harapan masa depan menggunakan أَتَمَنَّى أَنْ أَكُونَ (saya bercita-cita menjadi...).",
        examples: [
          {
            arabic: "أُحِبُّ اللُّغَةَ الْعَرَبِيَّةَ لِأَنَّهَا لُغَةُ الْقُرْآنِ الْكَرِيمِ.",
            indonesian: "Saya mencintai bahasa Arab karena ia adalah bahasa Al-Qur'an Al-Karim.",
          },
          {
            arabic: "أَتَمَنَّى أَنْ أَكُونَ مُعَلِّمًا لِلُّغَةِ الْعَرَبِيَّةِ فِي الْمُسْتَقْبَلِ.",
            indonesian: "Saya berharap menjadi guru bahasa Arab di masa depan.",
          },
        ],
      },
    ],
    mufrodat: [
      {
        id: "d1-m1",
        arabic: "التَّعَارُفُ",
        transliteration: "At-Ta'āruf",
        indonesian: "Perkenalan",
        category: "Dars 1",
        exampleArabic: "نَتَعَلَّمُ الْيَوْمَ مَوْضُوعَ التَّعَارُفِ بَيْنَ الطُّلَّابِ.",
        exampleIndonesian: "Hari ini kita belajar tema perkenalan antar siswa.",
        darsId: "dars-1",
      },
      {
        id: "d1-m2",
        arabic: "الِاسْمُ",
        transliteration: "Al-Ism",
        indonesian: "Nama",
        category: "Dars 1",
        exampleArabic: "اِسْمِي مُحَمَّدٌ وَاسْمُ صَدِيقِي أَحْمَدُ.",
        exampleIndonesian: "Namaku Muhammad dan nama temanku Ahmad.",
        darsId: "dars-1",
      },
      {
        id: "d1-m3",
        arabic: "الْعُنْوَانُ",
        transliteration: "Al-'Unwān",
        indonesian: "Alamat",
        category: "Dars 1",
        exampleArabic: "عُنْوَانُ بَيْتِي فِي شَارِعِ أَحْمَدَ يَانِي.",
        exampleIndonesian: "Alamat rumahku di Jalan Ahmad Yani.",
        darsId: "dars-1",
      },
      {
        id: "d1-m4",
        arabic: "الْمَدْرَسَةُ",
        transliteration: "Al-Madrasah",
        indonesian: "Sekolah / Madrasah",
        category: "Dars 1",
        exampleArabic: "أَدْرُسُ فِي الْمَدْرَسَةِ الْمُتَوَسِّطَةِ الْإِسْلَامِيَّةِ.",
        exampleIndonesian: "Saya belajar di Madrasah Tsanawiyah (SMP Islam).",
        darsId: "dars-1",
      },
      {
        id: "d1-m5",
        arabic: "الْفَصْلُ",
        transliteration: "Al-Faṣl",
        indonesian: "Kelas",
        category: "Dars 1",
        exampleArabic: "فَصْلُنَا نَظِيفٌ وَمُرَتَّبٌ كُلَّ صَبَاحٍ.",
        exampleIndonesian: "Kelas kami bersih dan rapi setiap pagi.",
        darsId: "dars-1",
      },
      {
        id: "d1-m6",
        arabic: "الْهِوَايَةُ",
        transliteration: "Al-Hiwāyah",
        indonesian: "Hobi",
        category: "Dars 1",
        exampleArabic: "هِوَايَتِي قِرَاءَةُ الْكُتُبِ وَكِتَابَةُ الْقِصَصِ.",
        exampleIndonesian: "Hobiku membaca buku dan menulis cerita.",
        darsId: "dars-1",
      },
      {
        id: "d1-m7",
        arabic: "الْأُسْرَةُ",
        transliteration: "Al-Usrah",
        indonesian: "Keluarga",
        category: "Dars 1",
        exampleArabic: "أَسْكُنُ فِي سُورَابَايَا مَعَ أُسْرَتِي السَّعِيدَةِ.",
        exampleIndonesian: "Saya tinggal di Surabaya bersama keluargaku yang bahagia.",
        darsId: "dars-1",
      },
      {
        id: "d1-m8",
        arabic: "الْمَدِينَةُ",
        transliteration: "Al-Madīnah",
        indonesian: "Kota",
        category: "Dars 1",
        exampleArabic: "سُورَابَايَا مَدِينَةٌ كَبِيرَةٌ وَمَشْهُورَةٌ.",
        exampleIndonesian: "Surabaya adalah kota yang besar dan terkenal.",
        darsId: "dars-1",
      },
      {
        id: "d1-m9",
        arabic: "الطَّالِبُ",
        transliteration: "Aṭ-Ṭālib",
        indonesian: "Siswa / Pelajar",
        category: "Dars 1",
        exampleArabic: "هَذَا الطَّالِبُ يَتَكَلَّمُ بِاللُّغَةِ الْعَرَبِيَّةِ بِفَصَاحَةٍ.",
        exampleIndonesian: "Siswa ini berbicara bahasa Arab dengan fasih.",
        darsId: "dars-1",
      },
      {
        id: "d1-m10",
        arabic: "الْمُجْتَهِدُ",
        transliteration: "Al-Mujtahid",
        indonesian: "Yang Bersungguh-sungguh / Rajin",
        category: "Dars 1",
        exampleArabic: "الطَّالِبُ الْمُجْتَهِدُ يُرَاجِعُ دُرُوسَهُ كُلَّ يَوْمٍ.",
        exampleIndonesian: "Siswa yang rajin mengulang pelajarannya setiap hari.",
        darsId: "dars-1",
      },
      {
        id: "d1-m11",
        arabic: "الصَّدِيقُ",
        transliteration: "Aṣ-Ṣadīq",
        indonesian: "Teman / Sahabat",
        category: "Dars 1",
        exampleArabic: "أُحَاوِلُ أَنْ أَتَكَلَّمَ بِالْعَرَبِيَّةِ مَعَ صَدِيقِي.",
        exampleIndonesian: "Saya berusaha berbicara bahasa Arab bersama temanku.",
        darsId: "dars-1",
      },
      {
        id: "d1-m12",
        arabic: "الْمُوَاطَنَةُ",
        transliteration: "Al-Muwāṭanah",
        indonesian: "Kewarganegaraan",
        category: "Dars 1",
        exampleArabic: "مُوَاطَنَتِي إِنْدُونِيسِيَّةٌ وَأَفْتَخِرُ بِبَلَدِي.",
        exampleIndonesian: "Kewarganegaraanku Indonesia dan saya bangga dengan negaraku.",
        darsId: "dars-1",
      },
    ],
    ungkapan: [
      {
        arabic: "مَا اسْمُكَ؟",
        indonesian: "Siapa namamu?",
        responseArabic: "اِسْمِي مُحَمَّدٌ، أَنَا طَالِبٌ فِي الصَّفِّ السَّابِعِ.",
        responseIndonesian: "Namaku Muhammad, saya siswa kelas tujuh.",
      },
      {
        arabic: "مِنْ أَيْنَ أَنْتَ؟",
        indonesian: "Dari mana asalmu?",
        responseArabic: "أَنَا مِنْ مَدِينَةِ سُورَابَايَا.",
        responseIndonesian: "Saya berasal dari kota Surabaya.",
      },
      {
        arabic: "أَيْنَ تَسْكُنُ؟",
        indonesian: "Di mana kamu tinggal?",
        responseArabic: "أَسْكُنُ فِي وَنُوكْرُومُو مَعَ أُسْرَتِي.",
        responseIndonesian: "Saya tinggal di Wonokromo bersama keluargaku.",
      },
      {
        arabic: "فِي أَيِّ صَفٍّ تَدْرُسُ؟",
        indonesian: "Di kelas berapa kamu belajar?",
        responseArabic: "أَدْرُسُ فِي الصَّفِّ السَّابِعِ بِالْمَدْرَسَةِ الْمُتَوَسِّطَةِ.",
        responseIndonesian: "Saya belajar di kelas VII Madrasah Tsanawiyah.",
      },
      {
        arabic: "مَا هِوَايَتُكَ؟",
        indonesian: "Apa hobimu?",
        responseArabic: "هِوَايَتِي قِرَاءَةُ الْكُتُبِ وَكِتَابَةُ الْقِصَصِ الْقَصِيرَةِ.",
        responseIndonesian: "Hobiku membaca buku dan menulis cerita pendek.",
      },
      {
        arabic: "مَاذَا تُحِبُّ؟",
        indonesian: "Apa yang kamu sukai?",
        responseArabic: "أُحِبُّ تَعَلُّمَ اللُّغَاتِ الْأَجْنَبِيَّةِ وَخَاصَّةً الْعَرَبِيَّةَ.",
        responseIndonesian: "Saya suka mempelajari bahasa asing terutama bahasa Arab.",
      },
      {
        arabic: "لِمَاذَا تُحِبُّ اللُّغَةَ الْعَرَبِيَّةَ؟",
        indonesian: "Mengapa kamu menyukai bahasa Arab?",
        responseArabic: "أُحِبُّهَا لِأَنَّهَا لُغَةُ الْقُرْآنِ الْكَرِيمِ وَتُسَاعِدُنِي عَلَى فَهْمِهِ.",
        responseIndonesian: "Saya menyukainya karena ia bahasa Al-Qur'an Al-Karim dan membantu memahaminya.",
      },
    ],
    istima: {
      titleArabic: "قِصَّةُ طَالِبٍ مُجْتَهِدٍ",
      titleIndonesian: "Kisah Seorang Siswa yang Bersungguh-sungguh",
      illustrationType: "intro-class",
      audioTextArabic:
        "اِسْمِي مُحَمَّدٌ. أَنَا طَالِبٌ فِي الصَّفِّ السَّابِعِ بِالْمَدْرَسَةِ الْمُتَوَسِّطَةِ. أَسْكُنُ فِي سُورَابَايَا مَعَ أُسْرَتِي. أُحِبُّ اللُّغَةَ الْعَرَبِيَّةَ لِأَنَّهَا لُغَةُ الْقُرْآنِ الْكَرِيمِ. أَتَعَلَّمُ الْمُفْرَدَاتِ الْعَرَبِيَّةَ كُلَّ يَوْمٍ، وَأُحَاوِلُ أَنْ أَتَكَلَّمَ بِاللُّغَةِ الْعَرَبِيَّةِ مَعَ أَصْدِقَائِي. هِوَايَتِي قِرَاءَةُ الْكُتُبِ وَكِتَابَةُ الْقِصَصِ الْقَصِيرَةِ. أَتَمَنَّى أَنْ أَكُونَ مُعَلِّمًا لِلُّغَةِ الْعَرَبِيَّةِ فِي الْمُسْتَقْبَلِ.",
      questions: [
        {
          id: "d1-ist-1",
          questionArabic: "فِي أَيِّ صَفٍّ يَدْرُسُ مُحَمَّدٌ؟",
          options: [
            "فِي الصَّفِّ السَّابِعِ بِالْمَدْرَسَةِ الْمُتَوَسِّطَةِ",
            "فِي الصَّفِّ الثَّامِنِ بِالْمَدْرَسَةِ الْمُتَوَسِّطَةِ",
            "فِي الصَّفِّ السَّادِسِ بِالْمَدْرَسَةِ الِابْتِدَائِيَّةِ",
            "فِي الصَّفِّ التَّاسِعِ بِالْمَدْرَسَةِ الثَّانَوِيَّةِ",
          ],
          correctIndex: 0,
          explanationIndonesian: "Muhammad memperkenalkan diri sebagai siswa kelas VII MTs (الصَّفِّ السَّابِعِ بِالْمَدْرَسَةِ الْمُتَوَسِّطَةِ).",
          skillFocus: "Informasi Identitas",
        },
        {
          id: "d1-ist-2",
          questionArabic: "أَيْنَ يَسْكُنُ مُحَمَّدٌ وَمَعَ مَنْ؟",
          options: [
            "فِي جَاكَرْتَا مَعَ جَدِّهِ",
            "فِي سُورَابَايَا مَعَ أُسْرَتِهِ",
            "فِي سِيدُوَارْجُو مَعَ أَصْدِقَائِهِ",
            "فِي مَالَانْج مَعَ مُعَلِّمِهِ",
          ],
          correctIndex: 1,
          explanationIndonesian: "Dalam audio disebutkan: أَسْكُنُ فِي سُورَابَايَا مَعَ أُسْرَتِي (Saya tinggal di Surabaya bersama keluargaku).",
          skillFocus: "Informasi Tempat Tinggal",
        },
        {
          id: "d1-ist-3",
          questionArabic: "لِمَاذَا يُحِبُّ مُحَمَّدٌ اللُّغَةَ الْعَرَبِيَّةَ؟",
          options: [
            "لِأَنَّهَا لُغَةُ الْقُرْآنِ الْكَرِيمِ",
            "لِأَنَّهَا لُغَةٌ صَعْبَةٌ",
            "لِأَنَّهَا لُغَةُ الْأَصْدِقَاءِ",
            "لِأَنَّهَا لُغَةُ الْحِسَابِ",
          ],
          correctIndex: 0,
          explanationIndonesian: "Alasan utama Muhammad menyukai bahasa Arab adalah karena ia merupakan bahasa Al-Qur'an Al-Karim.",
          skillFocus: "Alasan Menyukai Bahasa Arab",
        },
        {
          id: "d1-ist-4",
          questionArabic: "مَا عَادَةُ مُحَمَّدٍ فِي تَعَلُّمِ اللُّغَةِ الْعَرَبِيَّةِ كُلَّ يَوْمٍ؟",
          options: [
            "يَلْعَبُ كُرَةَ الْقَدَمِ كُلَّ مَسَاءٍ",
            "يَتَعَلَّمُ الْمُفْرَدَاتِ الْعَرَبِيَّةَ كُلَّ يَوْمٍ",
            "يَسْتَمِعُ إِلَى الْمُوسِيقَى فَقَطْ",
            "يَكْتُبُ الْحِسَابَ كُلَّ صَبَاحٍ",
          ],
          correctIndex: 1,
          explanationIndonesian: "Kebiasaan belajar Muhammad adalah mempelajari kosakata Arab setiap hari.",
          skillFocus: "Kebiasaan Belajar",
        },
        {
          id: "d1-ist-5",
          questionArabic: "مَاذَا يُحَاوِلُ مُحَمَّدٌ أَنْ يَفْعَلَ مَعَ أَصْدِقَائِهِ؟",
          options: [
            "أَنْ يَشْتَرِيَ الْأَقْلَامَ الْجَدِيدَةَ",
            "أَنْ يَتَكَلَّمَ بِاللُّغَةِ الْعَرَبِيَّةِ مَعَهُمْ",
            "أَنْ يَسْكُنَ فِي بُيُوتِهِمْ",
            "أَنْ يُنَظِّفَ السَّبُّورَةَ بَعْدَ الدَّرْسِ",
          ],
          correctIndex: 1,
          explanationIndonesian: "Muhammad berusaha mempraktikkan bahasa Arab dengan berbicara bersama teman-temannya.",
          skillFocus: "Aktivitas Bersama Teman",
        },
        {
          id: "d1-ist-6",
          questionArabic: "مَا هِوَايَةُ مُحَمَّدٍ الْمُفَضَّلَةُ؟",
          options: [
            "السِّبَاحَةُ وَرُكُوبُ الدَّرَّاجَةِ",
            "قِرَاءَةُ الْكُتُبِ وَكِتَابَةُ الْقِصَصِ الْقَصِيرَةِ",
            "الرَّسْمُ وَتَصْوِيرُ الطَّبِيعَةِ",
            "لَعِبُ كُرَةِ السَّلَّةِ وَالْجَرْيُ",
          ],
          correctIndex: 1,
          explanationIndonesian: "Hobi Muhammad adalah membaca buku dan menulis cerita pendek.",
          skillFocus: "Hobi",
        },
        {
          id: "d1-ist-7",
          questionArabic: "مَا أُمْنِيَةُ مُحَمَّدٍ فِي الْمُسْتَقْبَلِ؟",
          options: [
            "أَنْ يَكُونَ طَبِيبًا مَشْهُورًا",
            "أَنْ يَكُونَ مُهَنْدِسًا كَبِيرًا",
            "أَنْ يَكُونَ مُعَلِّمًا لِلُّغَةِ الْعَرَبِيَّةِ",
            "أَنْ يَكُونَ تَاجِرًا فِي الْمَدِينَةِ",
          ],
          correctIndex: 2,
          explanationIndonesian: "Cita-cita Muhammad adalah menjadi guru bahasa Arab di masa depan.",
          skillFocus: "Cita-cita",
        },
        {
          id: "d1-ist-8",
          questionArabic: "مَا الِاسْتِنْتَاجُ الصَّحِيحُ عَنْ شَخْصِيَّةِ مُحَمَّدٍ مِنْ خِلَالِ الْقِصَّةِ؟",
          options: [
            "هُوَ طَالِبٌ كَسُولٌ لَا يُحِبُّ الْقِرَاءَةَ",
            "هُوَ طَالِبٌ مُجْتَهِدٌ يَرْبِطُ بَيْنَ هِوَايَتِهِ وَأُمْنِيَتِهِ فِي الْمُسْتَقْبَلِ",
            "هُوَ يَتَعَلَّمُ اللُّغَةَ الْعَرَبِيَّةَ بِلَا هَدَفٍ",
            "هُوَ يَتَكَلَّمُ الْعَرَبِيَّةَ فِي الْبَيْتِ فَقَطْ وَلَا يُحِبُّ الْمَدْرَسَةَ",
          ],
          correctIndex: 1,
          explanationIndonesian: "Muhammad siswa yang rajin yang menghubungkan hobinya dengan cita-citanya menjadi guru bahasa Arab.",
          skillFocus: "Kesimpulan Isi Cerita",
          isInference: true,
        },
      ],
    },
    kalam: {
      titleArabic: "التَّعَارُفُ وَتَبَادُلُ الْمَعْلُومَاتِ",
      titleIndonesian: "Perkenalan dan Saling Bertukar Informasi",
      hiwar: [
        {
          speakerArabic: "أَحْمَدُ",
          speakerSide: "right",
          textArabic: "السَّلَامُ عَلَيْكُمْ، كَيْفَ حَالُكَ؟",
          textIndonesian: "Assalamu'alaikum, bagaimana kabarmu?",
        },
        {
          speakerArabic: "عَلِيٌّ",
          speakerSide: "left",
          textArabic: "وَعَلَيْكُمُ السَّلَامُ، أَنَا بِخَيْرٍ، وَالْحَمْدُ لِلَّهِ.",
          textIndonesian: "Wa'alaikumussalam, saya baik, alhamdulillah.",
        },
        {
          speakerArabic: "أَحْمَدُ",
          speakerSide: "right",
          textArabic: "مَا اسْمُكَ وَمِنْ أَيْنَ أَنْتَ؟",
          textIndonesian: "Siapa namamu dan dari mana asalmu?",
        },
        {
          speakerArabic: "عَلِيٌّ",
          speakerSide: "left",
          textArabic: "اِسْمِي عَلِيٌّ، وَأَنَا مِنْ سُورَابَايَا.",
          textIndonesian: "Namaku Ali, dan saya berasal dari Surabaya.",
        },
        {
          speakerArabic: "أَحْمَدُ",
          speakerSide: "right",
          textArabic: "مَا هِوَايَتُكَ؟",
          textIndonesian: "Apa hobimu?",
        },
        {
          speakerArabic: "عَلِيٌّ",
          speakerSide: "left",
          textArabic: "هِوَايَتِي قِرَاءَةُ الْكُتُبِ وَكِتَابَةُ الْقِصَصِ.",
          textIndonesian: "Hobiku membaca buku dan menulis cerita.",
        },
        {
          speakerArabic: "أَحْمَدُ",
          speakerSide: "right",
          textArabic: "لِمَاذَا تُحِبُّ اللُّغَةَ الْعَرَبِيَّةَ؟",
          textIndonesian: "Mengapa kamu menyukai bahasa Arab?",
        },
        {
          speakerArabic: "عَلِيٌّ",
          speakerSide: "left",
          textArabic: "أُحِبُّهَا لِأَنَّهَا تُسَاعِدُنِي عَلَى فَهْمِ الْقُرْآنِ الْكَرِيمِ.",
          textIndonesian: "Saya menyukainya karena ia membantuku memahami Al-Qur'an Al-Karim.",
        },
        {
          speakerArabic: "أَحْمَدُ",
          speakerSide: "right",
          textArabic: "مَا أُمْنِيَتُكَ فِي الْمُسْتَقْبَلِ؟",
          textIndonesian: "Apa cita-citamu di masa depan?",
        },
        {
          speakerArabic: "عَلِيٌّ",
          speakerSide: "left",
          textArabic: "أَتَمَنَّى أَنْ أَكُونَ مُعَلِّمًا لِلُّغَةِ الْعَرَبِيَّةِ.",
          textIndonesian: "Saya berharap menjadi guru bahasa Arab.",
        },
      ],
      challenges: [
        {
          id: "d1-kalam-1",
          badgeLabel: "Latihan 1",
          titleIndonesian: "Wawancara Perkenalan Diri (أُجِيبُ عَنِ الْأَسْئِلَةِ)",
          titleArabic: "الْمُقَابَلَةُ الشَّخْصِيَّةُ",
          instructionIndonesian:
            "Dengarkan pertanyaan wawancara di bawah ini, lalu rekam suaramu saat menjawab secara lisan dengan kalimat lengkap (nama, asal daerah, tempat tinggal, hobi, alasan belajar bahasa Arab, dan cita-cita).",
          promptArabic:
            "مَا اسْمُكَ؟ وَمِنْ أَيْنَ أَنْتَ؟ وَأَيْنَ تَسْكُنُ؟ وَمَا هِوَايَتُكَ؟ وَلِمَاذَا تُحِبُّ اللُّغَةَ الْعَرَبِيَّةَ؟ وَمَا أُمْنِيَتُكَ فِي الْمُسْتَقْبَلِ؟",
          promptIndonesian:
            "Siapa namamu? Dari mana asalmu? Di mana kamu tinggal? Apa hobimu? Mengapa kamu suka bahasa Arab? Dan apa cita-citamu?",
          sampleHints: [
            "اِسْمِي ... وَأَنَا مِنْ مَدِينَةِ ...",
            "أَسْكُنُ فِي ... مَعَ أُسْرَتِي.",
            "هِوَايَتِي قِرَاءَةُ الْكُتُبِ.",
            "أُحِبُّ اللُّغَةَ الْعَرَبِيَّةَ لِأَنَّهَا لُغَةُ الْقُرْآنِ الْكَرِيمِ.",
            "أَتَمَنَّى أَنْ أَكُونَ ... فِي الْمُسْتَقْبَلِ.",
          ],
          checklistItems: [
            "Menyebutkan nama, asal daerah, dan tempat tinggal dengan kalimat lengkap.",
            "Menyebutkan hobi, alasan menyukai bahasa Arab (لِأَنَّ), dan cita-cita.",
            "Melafalkan kosakata Arab dengan jelas dan percaya diri.",
          ],
        },
        {
          id: "d1-kalam-2",
          badgeLabel: "Latihan 2",
          titleIndonesian: "Mengungkapkan Pendapat Lisan (لِمَاذَا نَتَعَلَّمُ الْعَرَبِيَّةَ؟)",
          titleArabic: "التَّعْبِيرُ عَنِ الرَّأْيِ",
          instructionIndonesian:
            "Latih kefasihan berbicaramu dengan menjelaskan secara lisan pentingnya belajar bahasa Arab di Madrasah Tsanawiyah dalam 3–4 kalimat.",
          promptArabic:
            "لِمَاذَا نَتَعَلَّمُ اللُّغَةَ الْعَرَبِيَّةَ فِي الْمَدْرَسَةِ الْمُتَوَسِّطَةِ؟",
          promptIndonesian:
            "Mengapa kita mempelajari bahasa Arab di Madrasah Tsanawiyah?",
          sampleHints: [
            "نَتَعَلَّمُ اللُّغَةَ الْعَرَبِيَّةَ لِأَنَّهَا لُغَةُ الْقُرْآنِ الْكَرِيمِ.",
            "وَهِيَ تُسَاعِدُنَا عَلَى فَهْمِ الْعُلُومِ الْإِسْلَامِيَّةِ.",
            "أَتَكَلَّمُ بِهَا مَعَ أَصْدِقَائِي فِي الْفَصْلِ.",
          ],
          checklistItems: [
            "Menjawab dengan alasan yang runtut menggunakan kata penghubung.",
            "Menggunakan minimal 3 kalimat bahasa Arab secara lisan.",
          ],
        },
        {
          id: "d1-kalam-3",
          badgeLabel: "Latihan 3",
          titleIndonesian: "Menceritakan Gambar Siswa di Sekolah (Storytelling)",
          titleArabic: "سَرْدُ الْقِصَّةِ عَنِ الصُّورَةِ",
          instructionIndonesian:
            "Amati ilustrasi siswa di depan kelas, lalu ceritakan gambar tersebut secara lisan dalam bahasa Arab sebanyak 4–5 kalimat menggunakan perekam suara!",
          promptArabic:
            "تَأَمَّلْ هَذِهِ الصُّورَةَ جَيِّدًا، ثُمَّ صِفْ مَا يَفْعَلُهُ الطَّالِبُ فِي الْمَدْرَسَةِ بِأَرْبَعِ أَوْ خَمْسِ جُمَلٍ!",
          promptIndonesian:
            "Amati gambar ini baik-baik, lalu ceritakan apa yang dilakukan siswa di sekolah dalam 4 sampai 5 kalimat!",
          illustrationType: "school-intro",
          sampleHints: [
            "هَذَا طَالِبٌ مُجْتَهِدٌ فِي الصَّفِّ السَّابِعِ.",
            "هُوَ يَقِفُ أَمَامَ الْفَصْلِ وَيُعَرِّفُ نَفْسَهُ.",
            "أَصْدِقَاؤُهُ يَسْتَمِعُونَ إِلَيْهِ بِاهْتِمَامٍ.",
            "هُوَ يُحِبُّ دَرْسَ اللُّغَةِ الْعَرَبِيَّةِ كَثِيرًا.",
          ],
          checklistItems: [
            "Menceritakan tokoh dan aktivitas pada gambar dengan 4–5 kalimat.",
            "Memutar ulang rekaman suara sendiri untuk mengevaluasi kelancaran.",
          ],
        },
      ],
    },
    qiraah: {
      titleArabic: "حِوَارٌ عَنِ التَّعَارُفِ وَالْهَوَايَاتِ",
      titleIndonesian: "Dialog tentang Perkenalan dan Hobi",
      isDialog: true,
      illustrationType: "two-discussing",
      dialogLines: [
        {
          speakerArabic: "أَحْمَدُ",
          speakerSide: "right",
          textArabic: "السَّلَامُ عَلَيْكُمْ، مَا اسْمُكَ؟",
          textIndonesian: "Assalamu'alaikum, siapa namamu?",
        },
        {
          speakerArabic: "مُحَمَّدٌ",
          speakerSide: "left",
          textArabic: "وَعَلَيْكُمُ السَّلَامُ، اِسْمِي مُحَمَّدٌ. وَمَا اسْمُكَ؟",
          textIndonesian: "Wa'alaikumussalam, namaku Muhammad. Dan siapa namamu?",
        },
        {
          speakerArabic: "أَحْمَدُ",
          speakerSide: "right",
          textArabic: "اِسْمِي أَحْمَدُ. مِنْ أَيْنَ أَنْتَ؟",
          textIndonesian: "Namaku Ahmad. Dari mana asalmu?",
        },
        {
          speakerArabic: "مُحَمَّدٌ",
          speakerSide: "left",
          textArabic: "أَنَا مِنْ سُورَابَايَا، وَأَسْكُنُ مَعَ أُسْرَتِي فِي وَنُوكْرُومُو. وَأَنْتَ؟",
          textIndonesian: "Saya dari Surabaya, dan saya tinggal bersama keluargaku di Wonokromo. Dan kamu?",
        },
        {
          speakerArabic: "أَحْمَدُ",
          speakerSide: "right",
          textArabic: "أَنَا مِنْ سِيدُوَارْجُو. أَدْرُسُ فِي الْمَدْرَسَةِ الْمُتَوَسِّطَةِ فِي الصَّفِّ السَّابِعِ.",
          textIndonesian: "Saya dari Sidoarjo. Saya belajar di Madrasah Tsanawiyah di kelas tujuh.",
        },
        {
          speakerArabic: "مُحَمَّدٌ",
          speakerSide: "left",
          textArabic: "مَا هِوَايَتُكَ يَا أَحْمَدُ؟",
          textIndonesian: "Apa hobimu wahai Ahmad?",
        },
        {
          speakerArabic: "أَحْمَدُ",
          speakerSide: "right",
          textArabic: "هِوَايَتِي لَعِبُ كُرَةِ الْقَدَمِ وَقِرَاءَةُ الْكُتُبِ. وَمَاذَا عَنْكَ؟",
          textIndonesian: "Hobiku bermain sepak bola dan membaca buku. Bagaimana denganmu?",
        },
        {
          speakerArabic: "مُحَمَّدٌ",
          speakerSide: "left",
          textArabic: "أُحِبُّ كِتَابَةَ الْقِصَصِ الْقَصِيرَةِ وَتَعَلُّمَ اللُّغَاتِ الْأَجْنَبِيَّةِ.",
          textIndonesian: "Saya suka menulis cerita pendek dan belajar bahasa-bahasa asing.",
        },
        {
          speakerArabic: "أَحْمَدُ",
          speakerSide: "right",
          textArabic: "لِمَاذَا تُحِبُّ اللُّغَةَ الْعَرَبِيَّةَ؟",
          textIndonesian: "Mengapa kamu menyukai bahasa Arab?",
        },
        {
          speakerArabic: "مُحَمَّدٌ",
          speakerSide: "left",
          textArabic:
            "أُحِبُّهَا لِأَنَّهَا لُغَةُ الْقُرْآنِ الْكَرِيمِ، وَتُسَاعِدُنِي عَلَى فَهْمِ مَعَانِي الْآيَاتِ. كَمَا أَنَّهَا لُغَةٌ جَمِيلَةٌ وَمُهِمَّةٌ.",
          textIndonesian:
            "Saya menyukainya karena ia adalah bahasa Al-Qur'an Al-Karim, dan membantuku memahami makna ayat-ayat. Ia juga bahasa yang indah dan penting.",
        },
        {
          speakerArabic: "أَحْمَدُ",
          speakerSide: "right",
          textArabic: "مَا أُمْنِيَتُكَ بَعْدَ التَّخَرُّجِ؟",
          textIndonesian: "Apa cita-citamu setelah lulus?",
        },
        {
          speakerArabic: "مُحَمَّدٌ",
          speakerSide: "left",
          textArabic: "أَتَمَنَّى أَنْ أَكُونَ مُعَلِّمًا لِلُّغَةِ الْعَرَبِيَّةِ، وَأَنْ أُسَاعِدَ الْآخَرِينَ عَلَى تَعَلُّمِهَا.",
          textIndonesian: "Saya berharap menjadi guru bahasa Arab, dan membantu orang lain mempelajarinya.",
        },
        {
          speakerArabic: "أَحْمَدُ",
          speakerSide: "right",
          textArabic: "أَمْنِيَةٌ جَمِيلَةٌ، أَتَمَنَّى لَكَ النَّجَاحَ.",
          textIndonesian: "Cita-cita yang indah, saya doakan kamu sukses.",
        },
        {
          speakerArabic: "مُحَمَّدٌ",
          speakerSide: "left",
          textArabic: "شُكْرًا جَزِيلًا، وَأَتَمَنَّى لَكَ النَّجَاحَ أَيْضًا.",
          textIndonesian: "Terima kasih banyak, dan saya doakan kamu sukses juga.",
        },
      ],
      sentenceOrderQuestions: [
        {
          id: "d1-qir-ord-1",
          instructionIndonesian: "Susunlah kata-kata berikut sesuai informasi tempat tinggal Muhammad dalam hiwar!",
          scrambledWords: ["أُسْرَتِي", "فِي", "مَعَ", "أَسْكُنُ", "وَنُوكْرُومُو"],
          correctSentence: "أَسْكُنُ مَعَ أُسْرَتِي فِي وَنُوكْرُومُو",
          translationIndonesian: "Saya tinggal bersama keluargaku di Wonokromo.",
        },
        {
          id: "d1-qir-ord-2",
          instructionIndonesian: "Susunlah kalimat berikut sesuai informasi kelas dan sekolah Ahmad!",
          scrambledWords: ["السَّابِعِ", "أَدْرُسُ", "الصَّفِّ", "الْمُتَوَسِّطَةِ", "فِي", "الْمَدْرَسَةِ", "فِي"],
          correctSentence: "أَدْرُسُ فِي الْمَدْرَسَةِ الْمُتَوَسِّطَةِ فِي الصَّفِّ السَّابِعِ",
          translationIndonesian: "Saya belajar di Madrasah Tsanawiyah di kelas tujuh.",
        },
        {
          id: "d1-qir-ord-3",
          instructionIndonesian: "Susunlah kata-kata berikut menjadi kalimat tentang hobi Ahmad!",
          scrambledWords: ["الْكُتُبِ", "كُرَةِ", "هِوَايَتِي", "لَعِبُ", "وَقِرَاءَةُ", "الْقَدَمِ"],
          correctSentence: "هِوَايَتِي لَعِبُ كُرَةِ الْقَدَمِ وَقِرَاءَةُ الْكُتُبِ",
          translationIndonesian: "Hobiku bermain sepak bola dan membaca buku.",
        },
        {
          id: "d1-qir-ord-4",
          instructionIndonesian: "Susunlah kalimat tentang hobi Muhammad dalam dialog!",
          scrambledWords: ["الْقَصِيرَةِ", "كِتَابَةَ", "أُحِبُّ", "اللُّغَاتِ", "وَتَعَلُّمَ", "الْقِصَصِ", "الْأَجْنَبِيَّةِ"],
          correctSentence: "أُحِبُّ كِتَابَةَ الْقِصَصِ الْقَصِيرَةِ وَتَعَلُّمَ اللُّغَاتِ الْأَجْنَبِيَّةِ",
          translationIndonesian: "Saya suka menulis cerita pendek dan mempelajari bahasa-bahasa asing.",
        },
        {
          id: "d1-qir-ord-5",
          instructionIndonesian: "Susunlah kalimat yang menjelaskan alasan Muhammad menyukai bahasa Arab!",
          scrambledWords: ["الْآيَاتِ", "عَلَى", "تُسَاعِدُنِي", "مَعَانِي", "لِأَنَّهَا", "فَهْمِ", "أُحِبُّهَا"],
          correctSentence: "أُحِبُّهَا لِأَنَّهَا تُسَاعِدُنِي عَلَى فَهْمِ مَعَانِي الْآيَاتِ",
          translationIndonesian: "Saya menyukainya karena ia membantuku memahami makna ayat-ayat.",
        },
        {
          id: "d1-qir-ord-6",
          instructionIndonesian: "Susunlah kalimat tentang cita-cita Muhammad setelah lulus!",
          scrambledWords: ["أَكُونَ", "الْعَرَبِيَّةِ", "مُعَلِّمًا", "لِلُّغَةِ", "أَنْ", "أَتَمَنَّى"],
          correctSentence: "أَتَمَنَّى أَنْ أَكُونَ مُعَلِّمًا لِلُّغَةِ الْعَرَبِيَّةِ",
          translationIndonesian: "Saya berharap menjadi guru bahasa Arab.",
        },
      ],
    },
    kitabah: {
      pictureExercises: [
        {
          id: "d1-kit-pic-1",
          titleIndonesian: "Gambar 1: Memperkenalkan Diri di Depan Kelas",
          instructionArabic: "اُكْتُبْ جُمَلًا عَرَبِيَّةً مُتَرَابِطَةً عَنْ هَذِهِ الصُّورَةِ (٤–٦ جُمَلٍ)!",
          instructionIndonesian:
            "Perhatikan gambar seorang siswa yang berdiri memperkenalkan diri di depan kelas. Tulislah 4–6 kalimat bahasa Arab tentang identitas, asal daerah, kelas, dan hobinya.",
          minSentences: 4,
          illustrationType: "intro-class",
          requirements: [
            "Menyebutkan identitas siswa pada gambar (nama, kelas, sekolah).",
            "Menggunakan isim isyarah (هَذَا) atau dhamir (هُوَ).",
            "Menggunakan kata penghubung وَ atau لِأَنَّ.",
            "Minimal 4–6 kalimat bahasa Arab yang benar.",
          ],
          rubricCriteria: [
            "Kesesuaian kalimat dengan gambar",
            "Ketepatan kosakata perkenalan",
            "Struktur kalimat & kata penghubung",
            "Kelengkapan jumlah kalimat",
          ],
        },
        {
          id: "d1-kit-pic-2",
          titleIndonesian: "Gambar 2: Dua Siswa Berkenalan di Sekolah",
          instructionArabic: "اُكْتُبْ قِصَّةً قَصِيرَةً مِنَ الصُّورَةِ (٦–٨ جُمَلٍ)!",
          instructionIndonesian:
            "Amati gambar dua siswa yang sedang bersalaman dan berkenalan di sekolah. Tulislah 6–8 kalimat bahasa Arab yang menceritakan dialog dan perkenalan mereka.",
          minSentences: 6,
          illustrationType: "students-meeting",
          requirements: [
            "Menceritakan dua tokoh siswa pada gambar yang saling menyapa.",
            "Menyebutkan asal daerah, hobi, dan alasan menyukai bahasa Arab.",
            "Menggunakan kata penghubung وَ، ثُمَّ، لِأَنَّ.",
            "Panjang tulisan 6–8 kalimat yang saling berkaitan.",
          ],
          rubricCriteria: [
            "Kesesuaian cerita dengan gambar",
            "Ketepatan kosakata (min. 8 mufradat)",
            "Struktur kalimat & kata penghubung",
            "Kreativitas pengembangan ide",
          ],
        },
      ],
    },
    mahfuzhat: {
      arabic: "مَنْ جَدَّ وَجَدَ",
      translation: "Barang siapa bersungguh-sungguh, maka ia akan berhasil.",
      reflection:
        "Kesungguhan dalam berlatih menyimak, berbicara, membaca, dan menulis bahasa Arab hari ini adalah kunci keberhasilanmu memahami ilmu di masa depan.",
    },
  },

  // =========================================================================
  // DARS 2: الأَدَوَاتُ الْمَدْرَسِيَّةُ (PERALATAN SEKOLAH)
  // =========================================================================
  {
    id: "dars-2",
    number: 2,
    titleArabic: "الأَدَوَاتُ الْمَدْرَسِيَّةُ",
    titleIndonesian: "Peralatan Sekolah",
    subtitle: "Kosakata Peralatan, Sifat Warna, Ukuran, Jumlah & Fungsi Benda",
    description:
      "Mendeskripsikan peralatan sekolah secara akurat berdasarkan jenis (mudzakkar/muannats), warna, ukuran, jumlah, dan fungsinya dalam kalimat majemuk.",
    learningObjectives: [
      "Mengidentifikasi detail isi tas, warna, jumlah, dan fungsi benda dari pertanyaan audio (Istima').",
      "Mempraktikkan dialog peralatan sekolah dan mendeskripsikan benda secara lisan dengan perekam suara (Kalam).",
      "Memahami teks bacaan kelas dan menyusun kalimat deskriptif sesuai isi bacaan (Qira'ah).",
      "Menulis kalimat deskriptif berbahasa Arab berdasarkan gambar peralatan sekolah dan ruang kelas (Kitabah).",
    ],
    grammarPoints: [
      {
        title: "1. Kesesuaian Kata Sifat & Warna (النَّعْتُ وَالْمَنْعُوتُ)",
        explanation:
          "Kata sifat dan warna mengikuti jenis benda yang disifatinya! Benda mudzakkar memakai warna bentuk dasar (أَحْمَرُ، أَزْرَقُ، أَسْوَدُ), sedangkan benda muannats memakai bentuk muannats (حَمْرَاءُ، زَرْقَاءُ، سَوْدَاءُ).",
        examples: [
          { arabic: "هَذِهِ حَقِيبَةٌ زَرْقَاءُ وَكَبِيرَةٌ.", indonesian: "Ini tas berwarna biru dan besar. (muannats)" },
          { arabic: "هَذَا كِتَابٌ جَدِيدٌ وَلَوْنُهُ أَخْضَرُ.", indonesian: "Ini buku baru dan warnanya hijau. (mudzakkar)" },
        ],
      },
      {
        title: "2. Menyebutkan Jumlah & Jamak (الْعَدَدُ وَالْجَمْعُ)",
        explanation:
          "Gunakan bentuk jamak (كُتُبٌ، دَفَاتِرُ، أَقْلَامٌ) setelah angka 3–10 atau saat menyebut benda secara jamak di dalam tas.",
        examples: [
          { arabic: "فِي حَقِيبَتِي ثَلَاثَةُ كُتُبٍ وَأَرْبَعَةُ دَفَاتِرَ.", indonesian: "Di dalam tasku ada tiga buku dan empat buku tulis." },
          { arabic: "أَضَعُ فِي الْمِقْلَمَةِ قَلَمَيْنِ وَمِسْطَرَةً طَوِيلَةً.", indonesian: "Saya menaruh dua pena dan sebuah penggaris panjang di tempat pensil." },
        ],
      },
      {
        title: "3. Menjelaskan Fungsi Benda (لِـ + الْمَصْدَرُ)",
        explanation:
          "Untuk menyatakan kegunaan peralatan sekolah, gunakan kata kerja أَسْتَعْمِلُ (saya menggunakan) diikuti huruf لِـ (untuk).",
        examples: [
          { arabic: "أَسْتَعْمِلُ الْكِتَابَ لِلْقِرَاءَةِ وَالدَّفْتَرَ لِكِتَابَةِ الدُّرُوسِ.", indonesian: "Saya menggunakan buku untuk membaca dan buku tulis untuk mencatat pelajaran." },
          { arabic: "أَسْتَعْمِلُ الْمِسْطَرَةَ لِرَسْمِ الْخُطُوطِ الْمُسْتَقِيمَةِ.", indonesian: "Saya menggunakan penggaris untuk menggambar garis lurus." },
        ],
      },
    ],
    mufrodat: [
      {
        id: "d2-m1",
        arabic: "حَقِيبَةٌ",
        transliteration: "Ḥaqībah",
        indonesian: "Tas",
        category: "Dars 2",
        exampleArabic: "حَقِيبَتِي كَبِيرَةٌ وَلَوْنُهَا أَزْرَقُ.",
        exampleIndonesian: "Tasku besar dan warnanya biru.",
        darsId: "dars-2",
      },
      {
        id: "d2-m2",
        arabic: "كِتَابٌ",
        transliteration: "Kitāb",
        indonesian: "Buku (Cetak/Paket)",
        category: "Dars 2",
        exampleArabic: "هَذَا كِتَابٌ جَدِيدٌ لِتَعَلُّمِ اللُّغَةِ الْعَرَبِيَّةِ.",
        exampleIndonesian: "Ini adalah buku baru untuk belajar bahasa Arab.",
        darsId: "dars-2",
      },
      {
        id: "d2-m3",
        arabic: "دَفْتَرٌ",
        transliteration: "Daftar",
        indonesian: "Buku Tulis",
        category: "Dars 2",
        exampleArabic: "أَسْتَعْمِلُ الدَّفْتَرَ لِكِتَابَةِ الْمُلَاحَظَاتِ.",
        exampleIndonesian: "Saya menggunakan buku tulis untuk menulis catatan.",
        darsId: "dars-2",
      },
      {
        id: "d2-m4",
        arabic: "قَلَمٌ",
        transliteration: "Qalam",
        indonesian: "Pena / Pulpen",
        category: "Dars 2",
        exampleArabic: "أَكْتُبُ الْوَاجِبَاتِ بِالْقَلَمِ الْأَسْوَدِ.",
        exampleIndonesian: "Saya menulis tugas dengan pena hitam.",
        darsId: "dars-2",
      },
      {
        id: "d2-m5",
        arabic: "مِسْطَرَةٌ",
        transliteration: "Misṭarah",
        indonesian: "Penggaris",
        category: "Dars 2",
        exampleArabic: "الْمِسْطَرَةُ الطَّوِيلَةُ مُفِيدَةٌ لِرَسْمِ الْخُطُوطِ.",
        exampleIndonesian: "Penggaris panjang bermanfaat untuk menggambar garis.",
        darsId: "dars-2",
      },
      {
        id: "d2-m6",
        arabic: "مِمْحَاةٌ",
        transliteration: "Mimḥāh",
        indonesian: "Penghapus Karet",
        category: "Dars 2",
        exampleArabic: "أَسْتَعْمِلُ الْمِمْحَاةَ لِمَحْوِ الْأَخْطَاءِ فِي الدَّفْتَرِ.",
        exampleIndonesian: "Saya memakai penghapus untuk menghapus kesalahan di buku tulis.",
        darsId: "dars-2",
      },
      {
        id: "d2-m7",
        arabic: "مِبْرَاةٌ",
        transliteration: "Mibrāh",
        indonesian: "Rautan Pensil",
        category: "Dars 2",
        exampleArabic: "هَذِهِ مِبْرَاةٌ صَغِيرَةٌ لِبَرْيِ قَلَمِ الرَّصَاصِ.",
        exampleIndonesian: "Ini rautan kecil untuk meraut pensil.",
        darsId: "dars-2",
      },
      {
        id: "d2-m8",
        arabic: "سَبُّورَةٌ",
        transliteration: "Sabbūrah",
        indonesian: "Papan Tulis",
        category: "Dars 2",
        exampleArabic: "السَّبُّورَةُ نَظِيفَةٌ وَتُوجَدُ أَمَامَ الْفَصْلِ.",
        exampleIndonesian: "Papan tulis bersih dan berada di depan kelas.",
        darsId: "dars-2",
      },
      {
        id: "d2-m9",
        arabic: "مَكْتَبٌ",
        transliteration: "Maktab",
        indonesian: "Meja Belajar",
        category: "Dars 2",
        exampleArabic: "أُرَتِّبُ مَكْتَبِي قَبْلَ خُرُوجِي مِنَ الْفَصْلِ.",
        exampleIndonesian: "Saya merapikan mejaku sebelum keluar dari kelas.",
        darsId: "dars-2",
      },
      {
        id: "d2-m10",
        arabic: "كُرْسِيٌّ",
        transliteration: "Kursī",
        indonesian: "Kursi",
        category: "Dars 2",
        exampleArabic: "أَجْلِسُ عَلَى الْكُرْسِيِّ الْمُرِيحِ فِي الْفَصْلِ.",
        exampleIndonesian: "Saya duduk di atas kursi yang nyaman di kelas.",
        darsId: "dars-2",
      },
      {
        id: "d2-m11",
        arabic: "أَدَوَاتٌ",
        transliteration: "Adawāt",
        indonesian: "Peralatan / Alat-alat",
        category: "Dars 2",
        exampleArabic: "أُرَتِّبُ أَدَوَاتِي قَبْلَ الذَّهَابِ إِلَى الْمَدْرَسَةِ.",
        exampleIndonesian: "Saya merapikan peralatanku sebelum pergi ke sekolah.",
        darsId: "dars-2",
      },
      {
        id: "d2-m12",
        arabic: "مُسْتَلْزَمَاتٌ",
        transliteration: "Mustalzamāt",
        indonesian: "Perlengkapan / Kebutuhan",
        category: "Dars 2",
        exampleArabic: "نَحْتَاجُ إِلَى مُسْتَلْزَمَاتٍ جَيِّدَةٍ لِلدِّرَاسَةِ.",
        exampleIndonesian: "Kita membutuhkan perlengkapan yang baik untuk belajar.",
        darsId: "dars-2",
      },
      {
        id: "d2-m13",
        arabic: "أَدَوَاتٌ مَدْرَسِيَّةٌ",
        transliteration: "Adawāt Madrasiyyah",
        indonesian: "Peralatan Sekolah",
        category: "Dars 2",
        exampleArabic: "الْمُحَافَظَةُ عَلَى الْأَدَوَاتِ الْمَدْرَسِيَّةِ مِنْ عَادَاتِ الطَّالِبِ النَّشِيطِ.",
        exampleIndonesian: "Menjaga peralatan sekolah termasuk kebiasaan siswa yang aktif.",
        darsId: "dars-2",
      },
    ],
    extraColors: [
      { arabic: "أَحْمَرُ / حَمْرَاءُ", indonesian: "Merah", hex: "#DC2626" },
      { arabic: "أَزْرَقُ / زَرْقَاءُ", indonesian: "Biru", hex: "#1D4ED8" },
      { arabic: "أَخْضَرُ / خَضْرَاءُ", indonesian: "Hijau", hex: "#0F8B6D" },
      { arabic: "أَصْفَرُ / صَفْرَاءُ", indonesian: "Kuning", hex: "#D97706" },
      { arabic: "أَبْيَضُ / بَيْضَاءُ", indonesian: "Putih", hex: "#F8FAFC" },
      { arabic: "أَسْوَدُ / سَوْدَاءُ", indonesian: "Hitam", hex: "#0F172A" },
    ],
    ungkapan: [
      {
        arabic: "مَاذَا تُوجَدُ فِي حَقِيبَتِكَ؟",
        indonesian: "Apa saja yang ada di dalam tasmu?",
        responseArabic: "فِي حَقِيبَتِي كُتُبٌ وَدَفَاتِرُ وَأَقْلَامٌ وَمِسْطَرَةٌ.",
        responseIndonesian: "Di tasku ada buku-buku, buku tulis, pena, dan penggaris.",
      },
      {
        arabic: "مَا لَوْنُ حَقِيبَتِكَ؟",
        indonesian: "Apa warna tasmu?",
        responseArabic: "حَقِيبَتِي لَوْنُهَا أَزْرَقُ وَهِيَ كَبِيرَةٌ.",
        responseIndonesian: "Tasku berwarna biru dan ukurannya besar.",
      },
      {
        arabic: "مَا فَائِدَةُ الْمِسْطَرَةِ؟",
        indonesian: "Apa kegunaan penggaris?",
        responseArabic: "أَسْتَعْمِلُهَا لِرَسْمِ الْخُطُوطِ الْمُسْتَقِيمَةِ.",
        responseIndonesian: "Saya menggunakannya untuk menggambar garis lurus.",
      },
      {
        arabic: "كَيْفَ تُحَافِظُ عَلَى أَدَوَاتِكَ؟",
        indonesian: "Bagaimana kamu menjaga peralatanmu?",
        responseArabic: "أُرَتِّبُهَا بَعْدَ اسْتِعْمَالِهَا وَأَضَعُهَا فِي حَقِيبَتِي.",
        responseIndonesian: "Saya merapikannya setelah dipakai dan menaruhnya di dalam tasku.",
      },
    ],
    istima: {
      titleArabic: "وَصْفُ حَقِيبَةِ الطَّالِبِ",
      titleIndonesian: "Deskripsi Tas Sekolah Seorang Siswa",
      illustrationType: "school-bag",
      audioTextArabic:
        "اِسْمِي عُمَرُ، وَأَنَا طَالِبٌ فِي الصَّفِّ السَّابِعِ. أُحِبُّ أَنْ أُرَتِّبَ أَدَوَاتِي الْمَدْرَسِيَّةَ قَبْلَ الذَّهَابِ إِلَى الْمَدْرَسَةِ. حَقِيبَتِي كَبِيرَةٌ وَلَوْنُهَا أَزْرَقُ. أَضَعُ فِيهَا ثَلَاثَةَ كُتُبٍ وَأَرْبَعَةَ دَفَاتِرَ وَقَلَمَيْنِ وَمِسْطَرَةً طَوِيلَةً. أَسْتَعْمِلُ الْكِتَابَ لِلْقِرَاءَةِ، وَالدَّفْتَرَ لِكِتَابَةِ الدُّرُوسِ، وَالْمِسْطَرَةَ لِرَسْمِ الْخُطُوطِ. أُحَافِظُ عَلَى أَدَوَاتِي لِأَنَّهَا تُسَاعِدُنِي عَلَى التَّعَلُّمِ بِجِدٍّ.",
      questions: [
        {
          id: "d2-ist-1",
          questionArabic: "مَتَى يُرَتِّبُ عُمَرُ أَدَوَاتِهِ الْمَدْرَسِيَّةَ؟",
          options: [
            "بَعْدَ النَّوْمِ فِي اللَّيْلِ",
            "قَبْلَ الذَّهَابِ إِلَى الْمَدْرَسَةِ",
            "أَثْنَاءَ الرَّاحَةِ فِي الْفَصْلِ",
            "بَعْدَ تَنَاوُلِ الْغَدَاءِ",
          ],
          correctIndex: 1,
          explanationIndonesian: "Umar merapikan peralatan sekolahnya sebelum berangkat ke sekolah.",
          skillFocus: "Kebiasaan Tokoh",
        },
        {
          id: "d2-ist-2",
          questionArabic: "مَا صِفَةُ حَقِيبَةِ عُمَرَ وَلَوْنُهَا؟",
          options: [
            "صَغِيرَةٌ وَلَوْنُهَا أَحْمَرُ",
            "كَبِيرَةٌ وَلَوْنُهَا أَزْرَقُ",
            "قَدِيمَةٌ وَلَوْنُهَا أَسْوَدُ",
            "خَفِيفَةٌ وَلَوْنُهَا أَخْضَرُ",
          ],
          correctIndex: 1,
          explanationIndonesian: "Tas Umar berukuran besar dan berwarna biru.",
          skillFocus: "Warna & Ukuran Tas",
        },
        {
          id: "d2-ist-3",
          questionArabic: "كَمْ عَدَدُ الْكُتُبِ وَالدَّفَاتِرِ فِي حَقِيبَةِ عُمَرَ؟",
          options: [
            "أَرْبَعَةُ كُتُبٍ وَثَلَاثَةُ دَفَاتِرَ",
            "ثَلَاثَةُ كُتُبٍ وَأَرْبَعَةُ دَفَاتِرَ",
            "كِتَابَانِ وَقَلَمَانِ",
            "خَمْسَةُ كُتُبٍ وَدَفْتَرٌ وَاحِدٌ",
          ],
          correctIndex: 1,
          explanationIndonesian: "Isi tas Umar: 3 buku dan 4 buku tulis.",
          skillFocus: "Jumlah Perlengkapan",
        },
        {
          id: "d2-ist-4",
          questionArabic: "مَاذَا يَضَعُ عُمَرُ فِي حَقِيبَتِهِ بِالْإِضَافَةِ إِلَى الْكُتُبِ وَالدَّفَاتِرِ؟",
          options: [
            "مِمْحَاةً وَمِبْرَاةً وَكُرْسِيًّا",
            "قَلَمَيْنِ وَمِسْطَرَةً طَوِيلَةً",
            "سَبُّورَةً وَمَكْتَبًا صَغِيرًا",
            "طَعَامَ الْفَطُورِ وَالْغَدَاءِ",
          ],
          correctIndex: 1,
          explanationIndonesian: "Selain buku dan buku tulis, Umar menaruh dua pena dan sebuah penggaris panjang.",
          skillFocus: "Detail Isi Tas",
        },
        {
          id: "d2-ist-5",
          questionArabic: "فِيمَ يَسْتَعْمِلُ عُمَرُ الدَّفْتَرَ وَالْمِسْطَرَةَ؟",
          options: [
            "الدَّفْتَرُ لِلْقِرَاءَةِ، وَالْمِسْطَرَةُ لِلْكِتَابَةِ",
            "الدَّفْتَرُ لِكِتَابَةِ الدُّرُوسِ، وَالْمِسْطَرَةُ لِرَسْمِ الْخُطُوطِ",
            "الدَّفْتَرُ لِمَحْوِ الْأَخْطَاءِ، وَالْمِسْطَرَةُ لِلْقِرَاءَةِ",
            "كِلَاهُمَا لِتَرْتِيبِ الْمَكْتَبِ",
          ],
          correctIndex: 1,
          explanationIndonesian: "Buku tulis untuk mencatat pelajaran, dan penggaris untuk menggambar garis.",
          skillFocus: "Fungsi Benda",
        },
        {
          id: "d2-ist-6",
          questionArabic: "لِمَاذَا يُحَافِظُ عُمَرُ عَلَى أَدَوَاتِهِ الْمَدْرَسِيَّةِ؟",
          options: [
            "لِأَنَّهَا غَالِيَةٌ جِدًّا فَقَطْ",
            "لِأَنَّهَا تُسَاعِدُهُ عَلَى التَّعَلُّمِ بِجِدٍّ",
            "لِأَنَّهُ يُرِيدُ بَيْعَهَا فِي الْمَدْرَسَةِ",
            "لِأَنَّ الْفَصْلَ ضَيِّقٌ جِدًّا",
          ],
          correctIndex: 1,
          explanationIndonesian: "Peralatan tersebut membantu Umar belajar dengan sungguh-sungguh.",
          skillFocus: "Tujuan Menjaga Perlengkapan",
        },
        {
          id: "d2-ist-7",
          questionArabic: "مَا الْعَلَاقَةُ بَيْنَ حَجْمِ حَقِيبَةِ عُمَرَ وَمُحْتَوَيَاتِهَا؟",
          options: [
            "الْحَقِيبَةُ كَبِيرَةٌ حَتَّى تَتَّسِعَ لِثَلَاثَةِ كُتُبٍ وَأَرْبَعَةِ دَفَاتِرَ وَأَدَوَاتٍ أُخْرَى",
            "الْحَقِيبَةُ صَغِيرَةٌ فَلَا تَسَعُ الْمِسْطَرَةَ الطَّوِيلَةَ",
            "لَا تُوجَدُ عَلَاقَةٌ بَيْنَ الْحَقِيبَةِ وَالْأَدَوَاتِ",
            "عُمَرُ لَا يَحْمِلُ أَيَّ كُتُبٍ فِي حَقِيبَتِهِ",
          ],
          correctIndex: 0,
          explanationIndonesian: "Tasnya berukuran besar agar muat membawa buku, buku tulis, pena, dan penggaris panjang.",
          skillFocus: "Hubungan Informasi",
          isInference: true,
        },
        {
          id: "d2-ist-8",
          questionArabic: "مَا الْفِكْرَةُ الرَّئِيسِيَّةُ الَّتِي نَسْتَنْتِجُهَا مِنْ هَذَا النَّصِّ؟",
          options: [
            "شِرَاءُ الْحَقِيبَةِ الزَّرْقَاءِ أَهَمُّ مِنَ الدِّرَاسَةِ",
            "التَّنْظِيمُ وَالْمُحَافَظَةُ عَلَى الْأَدَوَاتِ يَدْعَمَانِ جِدِّيَّةَ الطَّالِبِ فِي التَّعَلُّمِ",
            "يَجِبُ تَرْكُ الْكُتُبِ فِي الْبَيْتِ دَائِمًا",
            "الْمِسْطَرَةُ هِيَ الْأَدَاةُ الْوَحِيدَةُ الْمُهِمَّةُ فِي الْفَصْلِ",
          ],
          correctIndex: 1,
          explanationIndonesian: "Kerapian dan kepedulian merawat perlengkapan mendukung kesungguhan belajar.",
          skillFocus: "Kesimpulan Cerita",
          isInference: true,
        },
      ],
    },
    kalam: {
      titleArabic: "حِوَارٌ عَنِ الْأَدَوَاتِ الْمَدْرَسِيَّةِ",
      titleIndonesian: "Dialog tentang Peralatan Sekolah",
      hiwar: [
        {
          speakerArabic: "الْمُعَلِّمُ",
          speakerSide: "right",
          textArabic: "مَاذَا تُوجَدُ فِي حَقِيبَتِكَ؟",
          textIndonesian: "Apa yang terdapat di dalam tasmu?",
        },
        {
          speakerArabic: "الطَّالِبُ",
          speakerSide: "left",
          textArabic: "فِي حَقِيبَتِي كُتُبٌ وَدَفَاتِرُ وَأَقْلَامٌ.",
          textIndonesian: "Di tasku ada buku-buku, buku tulis, dan pena.",
        },
        {
          speakerArabic: "الْمُعَلِّمُ",
          speakerSide: "right",
          textArabic: "مَا لَوْنُ حَقِيبَتِكَ؟",
          textIndonesian: "Apa warna tasmu?",
        },
        {
          speakerArabic: "الطَّالِبُ",
          speakerSide: "left",
          textArabic: "لَوْنُهَا أَزْرَقُ، وَهِيَ كَبِيرَةٌ.",
          textIndonesian: "Warnanya biru, dan ia besar.",
        },
        {
          speakerArabic: "الْمُعَلِّمُ",
          speakerSide: "right",
          textArabic: "مَا فَائِدَةُ الْمِسْطَرَةِ؟",
          textIndonesian: "Apa kegunaan penggaris?",
        },
        {
          speakerArabic: "الطَّالِبُ",
          speakerSide: "left",
          textArabic: "أَسْتَعْمِلُهَا لِرَسْمِ الْخُطُوطِ الْمُسْتَقِيمَةِ.",
          textIndonesian: "Saya menggunakannya untuk menggambar garis lurus.",
        },
        {
          speakerArabic: "الْمُعَلِّمُ",
          speakerSide: "right",
          textArabic: "كَيْفَ تُحَافِظُ عَلَى أَدَوَاتِكَ؟",
          textIndonesian: "Bagaimana kamu menjaga peralatanmu?",
        },
        {
          speakerArabic: "الطَّالِبُ",
          speakerSide: "left",
          textArabic: "أُرَتِّبُهَا بَعْدَ اسْتِعْمَالِهَا وَأَضَعُهَا فِي حَقِيبَتِي.",
          textIndonesian: "Saya merapikannya setelah menggunakannya dan memasukkannya ke tasku.",
        },
      ],
      challenges: [
        {
          id: "d2-kalam-1",
          badgeLabel: "Latihan 1",
          titleIndonesian: "Mendeskripsikan Benda Secara Lisan (وَصْفُ الْأَدَوَاتِ)",
          titleArabic: "وَصْفُ الْأَدَوَاتِ الْمَدْرَسِيَّةِ",
          instructionIndonesian:
            "Perhatikan gambar tas sekolah terbuka, lalu rekam suaramu saat mendeskripsikan nama benda, warna, ukuran, dan fungsinya secara lisan!",
          promptArabic:
            "انْظُرْ إِلَى الصُّورَةِ! صِفِ الْحَقِيبَةَ وَالْأَدَوَاتِ الْمَدْرَسِيَّةَ (الِاسْمُ، وَاللَّوْنُ، وَالْحَجْمُ، وَالْفَائِدَةُ)!",
          promptIndonesian:
            "Lihatlah gambar! Deskripsikan tas dan peralatan sekolah (nama, warna, ukuran, dan fungsinya)!",
          illustrationType: "school-bag",
          sampleHints: [
            "هَذِهِ حَقِيبَةٌ كَبِيرَةٌ وَلَوْنُهَا أَزْرَقُ.",
            "أَسْتَعْمِلُهَا لِحَمْلِ الْكُتُبِ وَالدَّفَاتِرِ.",
            "وَفِيهَا مِسْطَرَةٌ طَوِيلَةٌ لِرَسْمِ الْخُطُوطِ.",
          ],
          checklistItems: [
            "Menyebutkan nama benda dan warnanya (mudzakkar/muannats tepat).",
            "Menjelaskan ukuran dan fungsi benda menggunakan لِـ.",
          ],
        },
        {
          id: "d2-kalam-2",
          badgeLabel: "Latihan 2",
          titleIndonesian: "Bermain Peran Guru & Siswa (حِوَارٌ شَفَهِيٌّ)",
          titleArabic: "تَمْثِيلُ الدَّوْرِ مَعَ الْمُعَلِّمِ",
          instructionIndonesian:
            "Dengarkan pertanyaan guru berikut, lalu latih dirimu menjawab secara lisan dengan kalimat lengkap bersama teman atau menggunakan perekam suara!",
          promptArabic:
            "مَاذَا تُوجَدُ فِي حَقِيبَتِكَ الْيَوْمَ، وَفِيمَ تَسْتَعْمِلُ الْكِتَابَ وَالدَّفْتَرَ وَالْمِسْطَرَةَ؟",
          promptIndonesian:
            "Apa saja yang ada di tasmu hari ini, dan untuk apa kamu memakai buku, buku tulis, dan penggaris?",
          sampleHints: [
            "فِي حَقِيبَتِي كُتُبٌ وَدَفَاتِرُ وَأَقْلَامٌ.",
            "أَسْتَعْمِلُ الْكِتَابَ لِلْقِرَاءَةِ وَالدَّفْتَرَ لِلْكِتَابَةِ.",
            "وَأَسْتَعْمِلُ الْمِسْطَرَةَ لِرَسْمِ الْخُطُوطِ الْمُسْتَقِيمَةِ.",
          ],
          checklistItems: [
            "Menyebutkan minimal 3 benda di dalam tas.",
            "Menjelaskan fungsi setiap benda dengan lancar.",
          ],
        },
        {
          id: "d2-kalam-3",
          badgeLabel: "Latihan 3",
          titleIndonesian: "Menyampaikan Pendapat Lisan (إِبْدَاءُ الرَّأْيِ)",
          titleArabic: "إِبْدَاءُ الرَّأْيِ",
          instructionIndonesian:
            "Rekam pendapat lisanmu dalam bahasa Arab beserta alasan tentang mengapa siswa harus menjaga peralatan sekolah.",
          promptArabic:
            "لِمَاذَا يَجِبُ عَلَيْنَا الْمُحَافَظَةُ عَلَى أَدَوَاتِنَا الْمَدْرَسِيَّةِ؟",
          promptIndonesian:
            "Mengapa kita wajib menjaga peralatan sekolah kita?",
          sampleHints: [
            "أَعْتَقِدُ أَنَّ الْمُحَافَظَةَ عَلَى الْأَدَوَاتِ مُهِمَّةٌ جِدًّا.",
            "لِأَنَّهَا تُسَاعِدُنَا عَلَى التَّعَلُّمِ بِرَاحَةٍ وَلَا تَضِيعُ بِسُهُولَةٍ.",
          ],
          checklistItems: [
            "Menggunakan ungkapan pendapat (أَعْتَقِدُ أَنَّ / فِي رَأْيِي).",
            "Menyertakan alasan dengan kata لِأَنَّ.",
          ],
        },
      ],
    },
    qiraah: {
      titleArabic: "أَدَوَاتِي وَبِيئَتِي الْمَدْرَسِيَّةُ",
      titleIndonesian: "Peralatanku dan Lingkungan Sekolahku",
      isDialog: false,
      illustrationType: "classroom",
      paragraphs: [
        "أَنَا يُوسُفُ، طَالِبٌ فِي الصَّفِّ السَّابِعِ. أَهْتَمُّ دَائِمًا بِأَدَوَاتِي الْمَدْرَسِيَّةِ، لِأَنَّهَا تُسَاعِدُنِي عَلَى التَّعَلُّمِ بِشَكْلٍ جَيِّدٍ. أَحْمِلُ حَقِيبَةً كَبِيرَةً لَوْنُهَا أَسْوَدُ، وَأَضَعُ فِيهَا كُتُبِي وَدَفَاتِرِي وَأَقْلَامِي.",
        "فِي الْفَصْلِ، أَسْتَعْمِلُ الْكِتَابَ لِقِرَاءَةِ الدُّرُوسِ، وَالدَّفْتَرَ لِكِتَابَةِ الْمُلَاحَظَاتِ، وَالْمِسْطَرَةَ لِرَسْمِ الْخُطُوطِ. أَحْرِصُ عَلَى تَرْتِيبِ مَكْتَبِي وَكُرْسِيِّي بَعْدَ اسْتِعْمَالِهِمَا. كَمَا أُسَاعِدُ أَصْدِقَائِي إِذَا احْتَاجُوا إِلَى بَعْضِ الْأَدَوَاتِ.",
        "أَعْتَقِدُ أَنَّ الْمُحَافَظَةَ عَلَى الْأَدَوَاتِ الْمَدْرَسِيَّةِ وَنَظَافَةِ الْفَصْلِ مَسْؤُولِيَّةُ جَمِيعِ الطُّلَّابِ. فَالْفَصْلُ النَّظِيفُ وَالْمُرَتَّبُ يُسَاعِدُنَا عَلَى الدِّرَاسَةِ بِرَاحَةٍ وَنَشَاطٍ.",
      ],
      sentenceOrderQuestions: [
        {
          id: "d2-qir-ord-1",
          instructionIndonesian: "Susunlah kata-kata berikut sesuai paragraf 1 tentang perhatian Yusuf pada alat sekolahnya!",
          scrambledWords: ["الْمَدْرَسِيَّةِ", "دَائِمًا", "بِأَدَوَاتِي", "أَهْتَمُّ"],
          correctSentence: "أَهْتَمُّ دَائِمًا بِأَدَوَاتِي الْمَدْرَسِيَّةِ",
          translationIndonesian: "Saya selalu memperhatikan peralatan sekolahku.",
        },
        {
          id: "d2-qir-ord-2",
          instructionIndonesian: "Susunlah kalimat deskripsi tas Yusuf sesuai paragraf 1!",
          scrambledWords: ["أَسْوَدُ", "كَبِيرَةً", "حَقِيبَةً", "لَوْنُهَا", "أَحْمِلُ"],
          correctSentence: "أَحْمِلُ حَقِيبَةً كَبِيرَةً لَوْنُهَا أَسْوَدُ",
          translationIndonesian: "Saya membawa tas besar yang warnanya hitam.",
        },
        {
          id: "d2-qir-ord-3",
          instructionIndonesian: "Susunlah kalimat tentang kegunaan buku tulis sesuai paragraf 2!",
          scrambledWords: ["الْمُلَاحَظَاتِ", "أَسْتَعْمِلُ", "لِكِتَابَةِ", "الدَّفْتَرَ"],
          correctSentence: "أَسْتَعْمِلُ الدَّفْتَرَ لِكِتَابَةِ الْمُلَاحَظَاتِ",
          translationIndonesian: "Saya menggunakan buku tulis untuk menulis catatan.",
        },
        {
          id: "d2-qir-ord-4",
          instructionIndonesian: "Susunlah kalimat tentang kebiasaan Yusuf merapikan meja dan kursi!",
          scrambledWords: ["وَكُرْسِيِّي", "تَرْتِيبِ", "أَحْرِصُ", "مَكْتَبِي", "عَلَى"],
          correctSentence: "أَحْرِصُ عَلَى تَرْتِيبِ مَكْتَبِي وَكُرْسِيِّي",
          translationIndonesian: "Saya selalu menjaga kerapian meja dan kursiku.",
        },
        {
          id: "d2-qir-ord-5",
          instructionIndonesian: "Susunlah kalimat tentang sikap tolong-menolong Yusuf kepada teman-temannya!",
          scrambledWords: ["إِلَى", "احْتَاجُوا", "أَصْدِقَائِي", "الْأَدَوَاتِ", "إِذَا", "أُسَاعِدُ", "بَعْضِ"],
          correctSentence: "أُسَاعِدُ أَصْدِقَائِي إِذَا احْتَاجُوا إِلَى بَعْضِ الْأَدَوَاتِ",
          translationIndonesian: "Saya membantu teman-temanku jika mereka membutuhkan sebagian peralatan.",
        },
        {
          id: "d2-qir-ord-6",
          instructionIndonesian: "Susunlah kalimat kesimpulan paragraf 3 tentang manfaat kelas yang bersih!",
          scrambledWords: ["عَلَى", "النَّظِيفُ", "الدِّرَاسَةِ", "يُسَاعِدُنَا", "الْفَصْلُ", "بِرَاحَةٍ"],
          correctSentence: "الْفَصْلُ النَّظِيفُ يُسَاعِدُنَا عَلَى الدِّرَاسَةِ بِرَاحَةٍ",
          translationIndonesian: "Kelas yang bersih membantu kita belajar dengan nyaman.",
        },
      ],
    },
    kitabah: {
      pictureExercises: [
        {
          id: "d2-kit-pic-1",
          titleIndonesian: "Gambar 1: Tas Sekolah & Perlengkapan Belajar",
          instructionArabic: "صِفْ هَذِهِ الْأَدَوَاتِ الْمَدْرَسِيَّةَ فِي أَرْبَعِ جُمَلٍ مُفِيدَةٍ عَلَى الْأَقَلِّ!",
          instructionIndonesian:
            "Perhatikan gambar tas sekolah biru yang terbuka beserta buku, pena, penggaris, dan penghapus. Tulislah 4–6 kalimat bahasa Arab yang mendeskripsikan benda, warna, ukuran, dan fungsinya.",
          minSentences: 4,
          illustrationType: "school-bag",
          requirements: [
            "Menyebutkan minimal 4 peralatan sekolah yang tampak pada gambar.",
            "Menyebutkan sifat warna atau ukuran dengan tepat (mudzakkar/muannats).",
            "Menjelaskan fungsi minimal 2 benda menggunakan لِـ.",
            "Minimal 4 kalimat bahasa Arab yang utuh.",
          ],
          rubricCriteria: [
            "Kesesuaian deskripsi dengan gambar",
            "Ketepatan kosakata & sifat warna",
            "Kesesuaian mudzakkar/muannats",
            "Penjelasan fungsi benda",
          ],
        },
        {
          id: "d2-kit-pic-2",
          titleIndonesian: "Gambar 2: Ruang Kelas yang Bersih & Rapi",
          instructionArabic: "اُكْتُبْ جُمَلًا عَرَبِيَّةً عَنْ هَذَا الْفَصْلِ وَأَدَوَاتِهِ (٥–٧ جُمَلٍ)!",
          instructionIndonesian:
            "Amati gambar ruang kelas yang rapi dengan papan tulis, meja, kursi, dan buku. Tulislah 5–7 kalimat bahasa Arab mengenai benda-benda di kelas dan pentingnya menjaga kebersihannya.",
          minSentences: 5,
          illustrationType: "classroom",
          requirements: [
            "Menyebutkan benda-benda di dalam gambar kelas (سَبُّورَةٌ، مَكْتَبٌ، كُرْسِيٌّ، كِتَابٌ).",
            "Menggunakan kata sifat (نَظِيفٌ، مُرَتَّبٌ، جَمِيلٌ).",
            "Menyampaikan alasan menjaga kebersihan kelas dengan لِأَنَّ.",
            "Panjang tulisan 5–7 kalimat.",
          ],
          rubricCriteria: [
            "Kesesuaian isi dengan gambar kelas",
            "Ketepatan kosakata & kata sifat",
            "Struktur kalimat & alasan",
            "Kelengkapan & koherensi paragraf",
          ],
        },
      ],
    },
    mahfuzhat: {
      arabic: "الْعِلْمُ نُورٌ",
      translation: "Ilmu adalah cahaya.",
      reflection:
        "Peralatan sekolah yang bersih dan terawat bukan sekadar benda, melainkan sarana yang menuntun langkah kita menuju cahaya ilmu.",
    },
  },

  // =========================================================================
  // DARS 3: يَوْمِيَّاتُنَا (AKTIVITAS SEHARI-HARI)
  // =========================================================================
  {
    id: "dars-3",
    number: 3,
    titleArabic: "يَوْمِيَّاتُنَا",
    titleIndonesian: "Aktivitas Sehari-hari",
    subtitle: "Rutinitas Harian, Jam & Waktu, Urutan Aktivitas & Kata Penghubung",
    description:
      "Menceritakan kegiatan sehari-hari dari pagi hingga malam dengan urutan kronologis, keterangan jam, alasan, serta menyusun kalimat dan menulis berdasarkan gambar.",
    learningObjectives: [
      "Menyimak cerita rutinitas harian dan menjawab pertanyaan audio tingkat tinggi termasuk inferensi (Istima').",
      "Menceritakan jadwal harian dan pendapat tentang manajemen waktu secara lisan menggunakan perekam suara (Kalam).",
      "Memahami teks naratif panjang multi-paragraf dan menyusun kalimat kronologis sesuai isi bacaan (Qira'ah).",
      "Menulis cerita dan deskripsi aktivitas sehari-hari dari pagi hingga malam berdasarkan gambar (Kitabah).",
    ],
    grammarPoints: [
      {
        title: "1. Kata Kerja Aktivitas Harian (الْفِعْلُ الْمُضَارِعُ — Saya Melakukan)",
        explanation:
          "Kata kerja untuk menyatakan kebiasaan sehari-hari oleh diri sendiri diawali huruf أَ (a/u), misalnya أَسْتَيْقِظُ (saya bangun), أُصَلِّي (saya shalat), أُرَاجِعُ (saya mengulang pelajaran).",
        examples: [
          { arabic: "أَسْتَيْقِظُ فِي السَّاعَةِ الْخَامِسَةِ صَبَاحًا، ثُمَّ أُصَلِّي الصُّبْحَ.", indonesian: "Saya bangun pukul lima pagi, lalu saya shalat Subuh." },
          { arabic: "أُرَاجِعُ دُرُوسِي وَأُعِدُّ جَدْوَلَ أَعْمَالِي لِلْيَوْمِ التَّالِي.", indonesian: "Saya mengulang pelajaran dan menyiapkan jadwal kegiatanku untuk esok hari." },
        ],
      },
      {
        title: "2. Keterangan Jam & Waktu (السَّاعَةُ وَالْوَقْتُ)",
        explanation:
          "Gunakan pola فِي السَّاعَةِ + bilangan bertingkat muannats + keterangan waktu (صَبَاحًا pagi, نَهَارًا siang, مَسَاءً sore, لَيْلًا malam).",
        examples: [
          { arabic: "فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ صَبَاحًا أَذْهَبُ إِلَى الْمَدْرَسَةِ.", indonesian: "Pada pukul 06.30 pagi saya pergi ke sekolah." },
          { arabic: "فِي السَّاعَةِ التَّاسِعَةِ لَيْلًا أَنَامُ مُبَكِّرًا.", indonesian: "Pada pukul 09.00 malam saya tidur lebih awal." },
        ],
      },
    ],
    extraConnectors: [
      {
        arabic: "وَ",
        indonesian: "dan (menggabungkan aktivitas)",
        exampleArabic: "أَقْرَأُ الْكِتَابَ وَأَكْتُبُ الْمُلَاحَظَاتِ.",
      },
      {
        arabic: "ثُمَّ",
        indonesian: "kemudian / lalu (urutan berjeda)",
        exampleArabic: "أَتَنَاوَلُ الْفَطُورَ ثُمَّ أَذْهَبُ إِلَى الْمَدْرَسَةِ.",
      },
      {
        arabic: "بَعْدَ ذَلِكَ",
        indonesian: "setelah itu",
        exampleArabic: "أَسْتَرِيحُ قَلِيلًا، بَعْدَ ذَلِكَ أُسَاعِدُ وَالِدَيَّ.",
      },
      {
        arabic: "لِأَنَّ",
        indonesian: "karena (menyatakan alasan)",
        exampleArabic: "أُنَظِّمُ وَقْتِي لِأَنَّ النَّجَاحَ يَحْتَاجُ إِلَى الِانْضِبَاطِ.",
      },
      {
        arabic: "قَبْلَ",
        indonesian: "sebelum",
        exampleArabic: "أُعِدُّ أَدَوَاتِي قَبْلَ النَّوْمِ.",
      },
    ],
    dailyTimeline: [
      { timeArabic: "٠٥:٠٠ صَبَاحًا", activityArabic: "أَسْتَيْقِظُ وَأُصَلِّي الصُّبْحَ", activityIndonesian: "Bangun & shalat Subuh" },
      { timeArabic: "٠٦:٠٠ صَبَاحًا", activityArabic: "أَغْتَسِلُ وَأَتَنَاوَلُ الْفَطُورَ", activityIndonesian: "Mandi & sarapan bersama keluarga" },
      { timeArabic: "٠٧:٠٠ صَبَاحًا", activityArabic: "أَذْهَبُ إِلَى الْمَدْرَسَةِ وَأَدْرُسُ", activityIndonesian: "Berangkat ke sekolah & belajar" },
      { timeArabic: "٠٢:٠٠ ظُهْرًا", activityArabic: "أَسْتَرِيحُ ثُمَّ أُسَاعِدُ أُسْرَتِي", activityIndonesian: "Istirahat lalu membantu keluarga" },
      { timeArabic: "٠٧:٠٠ مَسَاءً", activityArabic: "أُرَاجِعُ دُرُوسِي وَأَقْرَأُ كِتَابًا", activityIndonesian: "Mengulang pelajaran & membaca buku" },
      { timeArabic: "٠٩:٠٠ لَيْلًا", activityArabic: "أُعِدُّ جَدْوَلِي ثُمَّ أَنَامُ", activityIndonesian: "Menyiapkan jadwal esok lalu tidur" },
    ],
    mufrodat: [
      {
        id: "d3-m1",
        arabic: "أَسْتَيْقِظُ",
        transliteration: "Astaiqiẓu",
        indonesian: "Saya bangun tidur",
        category: "Dars 3",
        exampleArabic: "أَسْتَيْقِظُ مِنَ النَّوْمِ فِي السَّاعَةِ الْخَامِسَةِ صَبَاحًا.",
        exampleIndonesian: "Saya bangun dari tidur pada pukul lima pagi.",
        darsId: "dars-3",
      },
      {
        id: "d3-m2",
        arabic: "أُصَلِّي",
        transliteration: "Uṣallī",
        indonesian: "Saya shalat",
        category: "Dars 3",
        exampleArabic: "أُصَلِّي الصُّبْحَ فِي وَقْتِهِ كُلَّ يَوْمٍ.",
        exampleIndonesian: "Saya shalat Subuh tepat waktu setiap hari.",
        darsId: "dars-3",
      },
      {
        id: "d3-m3",
        arabic: "أَغْتَسِلُ",
        transliteration: "Agtaṣilu",
        indonesian: "Saya mandi",
        category: "Dars 3",
        exampleArabic: "أَغْتَسِلُ ثُمَّ أَلْبَسُ الزِّيَّ الْمَدْرَسِيَّ.",
        exampleIndonesian: "Saya mandi lalu mengenakan seragam sekolah.",
        darsId: "dars-3",
      },
      {
        id: "d3-m4",
        arabic: "أَتَنَاوَلُ الْفَطُورَ",
        transliteration: "Atanāwalul-Faṭūr",
        indonesian: "Saya sarapan pagi",
        category: "Dars 3",
        exampleArabic: "أَتَنَاوَلُ الْفَطُورَ مَعَ أُسْرَتِي قَبْلَ الْخُرُوجِ.",
        exampleIndonesian: "Saya sarapan bersama keluargaku sebelum keluar rumah.",
        darsId: "dars-3",
      },
      {
        id: "d3-m5",
        arabic: "أَذْهَبُ إِلَى الْمَدْرَسَةِ",
        transliteration: "Adzhabu ilal-Madrasah",
        indonesian: "Saya pergi ke sekolah",
        category: "Dars 3",
        exampleArabic: "أَذْهَبُ إِلَى الْمَدْرَسَةِ فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ.",
        exampleIndonesian: "Saya pergi ke sekolah pada pukul setengah tujuh.",
        darsId: "dars-3",
      },
      {
        id: "d3-m6",
        arabic: "أَدْرُسُ",
        transliteration: "Adrusu",
        indonesian: "Saya belajar",
        category: "Dars 3",
        exampleArabic: "أَدْرُسُ اللُّغَةَ الْعَرَبِيَّةَ بِجِدٍّ وَنَشَاطٍ.",
        exampleIndonesian: "Saya belajar bahasa Arab dengan sungguh-sungguh dan bersemangat.",
        darsId: "dars-3",
      },
      {
        id: "d3-m7",
        arabic: "أُشَارِكُ",
        transliteration: "Usyāriku",
        indonesian: "Saya berpartisipasi / ikut serta",
        category: "Dars 3",
        exampleArabic: "أُشَارِكُ فِي الْأَنْشِطَةِ الْمَدْرَسِيَّةِ مَعَ أَصْدِقَائِي.",
        exampleIndonesian: "Saya berpartisipasi dalam kegiatan sekolah bersama teman-temanku.",
        darsId: "dars-3",
      },
      {
        id: "d3-m8",
        arabic: "أُسَاعِدُ",
        transliteration: "Usā'idu",
        indonesian: "Saya membantu",
        category: "Dars 3",
        exampleArabic: "أُسَاعِدُ وَالِدَيَّ فِي الْأَعْمَالِ الْمَنْزِلِيَّةِ.",
        exampleIndonesian: "Saya membantu kedua orang tuaku dalam pekerjaan rumah.",
        darsId: "dars-3",
      },
      {
        id: "d3-m9",
        arabic: "أُرَاجِعُ",
        transliteration: "Urāji'u",
        indonesian: "Saya mengulang / meninjau pelajaran",
        category: "Dars 3",
        exampleArabic: "أُرَاجِعُ دُرُوسِي بَعْدَ الرُّجُوعِ إِلَى الْبَيْتِ.",
        exampleIndonesian: "Saya mengulang pelajaranku setelah pulang ke rumah.",
        darsId: "dars-3",
      },
      {
        id: "d3-m10",
        arabic: "أَقْرَأُ",
        transliteration: "Aqra'u",
        indonesian: "Saya membaca",
        category: "Dars 3",
        exampleArabic: "فِي اللَّيْلِ أَقْرَأُ كِتَابًا مُفِيدًا قَبْلَ النَّوْمِ.",
        exampleIndonesian: "Pada malam hari saya membaca buku bermanfaat sebelum tidur.",
        darsId: "dars-3",
      },
      {
        id: "d3-m11",
        arabic: "أَكْتُبُ",
        transliteration: "Aktubu",
        indonesian: "Saya menulis",
        category: "Dars 3",
        exampleArabic: "أَكْتُبُ مُلَاحَظَاتٍ عَنْ مَا تَعَلَّمْتُهُ الْيَوْمَ.",
        exampleIndonesian: "Saya menulis catatan tentang apa yang telah saya pelajari hari ini.",
        darsId: "dars-3",
      },
      {
        id: "d3-m12",
        arabic: "أَسْتَرِيحُ",
        transliteration: "Astarīḥu",
        indonesian: "Saya beristirahat",
        category: "Dars 3",
        exampleArabic: "بَعْدَ الظُّهْرِ أَسْتَرِيحُ قَلِيلًا ثُمَّ أُكْمِلُ وَاجِبَاتِي.",
        exampleIndonesian: "Setelah Dzuhur saya beristirahat sebentar lalu menyelesaikan tugasku.",
        darsId: "dars-3",
      },
      {
        id: "d3-m13",
        arabic: "أَنَامُ",
        transliteration: "Anāmu",
        indonesian: "Saya tidur",
        category: "Dars 3",
        exampleArabic: "أَنَامُ فِي السَّاعَةِ التَّاسِعَةِ لِأَسْتَيْقِظَ نَشِيطًا.",
        exampleIndonesian: "Saya tidur pukul sembilan agar bangun dengan segar.",
        darsId: "dars-3",
      },
    ],
    ungkapan: [
      {
        arabic: "كَيْفَ تُنَظِّمُ وَقْتَكَ كُلَّ يَوْمٍ؟",
        indonesian: "Bagaimana kamu mengatur waktumu setiap hari?",
        responseArabic: "أُنَظِّمُ وَقْتِي بِوَضْعِ جَدْوَلٍ لِلْأَنْشِطَةِ.",
        responseIndonesian: "Saya mengatur waktuku dengan membuat jadwal kegiatan.",
      },
      {
        arabic: "مَاذَا تَفْعَلُ بَعْدَ الْعَوْدَةِ مِنَ الْمَدْرَسَةِ؟",
        indonesian: "Apa yang kamu lakukan setelah pulang dari sekolah?",
        responseArabic: "أَسْتَرِيحُ قَلِيلًا، ثُمَّ أُسَاعِدُ وَالِدَيَّ وَأُرَاجِعُ دُرُوسِي.",
        responseIndonesian: "Saya beristirahat sebentar, lalu membantu orang tua dan mengulang pelajaran.",
      },
      {
        arabic: "لِمَاذَا تُنَظِّمُ وَقْتَكَ؟",
        indonesian: "Mengapa kamu mengatur waktumu?",
        responseArabic: "لِأَنَّ تَنْظِيمَ الْوَقْتِ يُسَاعِدُنِي عَلَى إِنْجَازِ أَعْمَالِي بِانْضِبَاطٍ.",
        responseIndonesian: "Karena mengatur waktu membantuku menuntaskan tugas dengan disiplin.",
      },
    ],
    istima: {
      titleArabic: "يَوْمٌ مِنْ حَيَاةِ طَالِبٍ مُجْتَهِدٍ",
      titleIndonesian: "Sehari dalam Kehidupan Siswa yang Rajin",
      illustrationType: "daily-timeline",
      audioTextArabic:
        "اِسْمِي حَسَنٌ، وَأَنَا طَالِبٌ فِي الصَّفِّ السَّابِعِ. أَبْدَأُ يَوْمِي فِي السَّاعَةِ الْخَامِسَةِ صَبَاحًا. بَعْدَ الِاسْتِيقَاظِ أُصَلِّي الصُّبْحَ، ثُمَّ أُرَتِّبُ غُرْفَتِي وَأَسْتَعِدُّ لِلذَّهَابِ إِلَى الْمَدْرَسَةِ. أَتَنَاوَلُ الْفَطُورَ مَعَ أُسْرَتِي قَبْلَ الْخُرُوجِ. فِي الْمَدْرَسَةِ، أَتَعَلَّمُ مَوَادَّ مُخْتَلِفَةً وَأُشَارِكُ فِي الْأَنْشِطَةِ مَعَ أَصْدِقَائِي. أُحِبُّ دَرْسَ اللُّغَةِ الْعَرَبِيَّةِ لِأَنَّهُ يُسَاعِدُنِي عَلَى تَطْوِيرِ مَهَارَاتِي. بَعْدَ الرُّجُوعِ إِلَى الْبَيْتِ، أَسْتَرِيحُ قَلِيلًا، ثُمَّ أُسَاعِدُ وَالِدَيَّ وَأُرَاجِعُ دُرُوسِي. فِي اللَّيْلِ أَقْرَأُ كِتَابًا مُفِيدًا، وَأُعِدُّ جَدْوَلَ أَعْمَالِي لِلْيَوْمِ التَّالِي، ثُمَّ أَنَامُ فِي السَّاعَةِ التَّاسِعَةِ.",
      questions: [
        {
          id: "d3-ist-1",
          questionArabic: "فِي أَيِّ سَاعَةٍ يَبْدَأُ حَسَنٌ يَوْمَهُ؟",
          options: [
            "فِي السَّاعَةِ الرَّابِعَةِ صَبَاحًا",
            "فِي السَّاعَةِ الْخَامِسَةِ صَبَاحًا",
            "فِي السَّاعَةِ السَّادِسَةِ صَبَاحًا",
            "فِي السَّاعَةِ السَّابِعَةِ صَبَاحًا",
          ],
          correctIndex: 1,
          explanationIndonesian: "Hasan memulai harinya pukul lima pagi.",
          skillFocus: "Informasi Spesifik",
        },
        {
          id: "d3-ist-2",
          questionArabic: "مَا التَّرْتِيبُ الصَّحِيحُ لِأَنْشِطَةِ حَسَنٍ فِي الصَّبَاحِ؟",
          options: [
            "يَتَنَاوَلُ الْفَطُورَ ← يُصَلِّي الصُّبْحَ ← يَسْتَيْقِظُ",
            "يَسْتَيْقِظُ ← يُصَلِّي الصُّبْحَ ← يُرَتِّبُ غُرْفَتَهُ ← يَتَنَاوَلُ الْفَطُورَ",
            "يَذْهَبُ إِلَى الْمَدْرَسَةِ ← يُرَتِّبُ غُرْفَتَهُ ← يَتَنَاوَلُ الْفَطُورَ",
            "يُرَاجِعُ دُرُوسَهُ ← يُصَلِّي الصُّبْحَ ← يَنَامُ",
          ],
          correctIndex: 1,
          explanationIndonesian: "Urutan pagi: Bangun -> Shalat Subuh -> Merapikan kamar -> Sarapan.",
          skillFocus: "Urutan Aktivitas",
        },
        {
          id: "d3-ist-3",
          questionArabic: "مَتَى يَتَنَاوَلُ حَسَنٌ الْفَطُورَ؟",
          options: [
            "بَعْدَ الْوُصُولِ إِلَى الْمَدْرَسَةِ",
            "قَبْلَ الْخُرُوجِ إِلَى الْمَدْرَسَةِ مَعَ أُسْرَتِهِ",
            "بَعْدَ الرُّجُوعِ إِلَى الْبَيْتِ",
            "فِي السَّاعَةِ التَّاسِعَةِ لَيْلًا",
          ],
          correctIndex: 1,
          explanationIndonesian: "Hasan sarapan bersama keluarganya sebelum berangkat keluar rumah.",
          skillFocus: "Hubungan Waktu",
        },
        {
          id: "d3-ist-4",
          questionArabic: "لِمَاذَا يُحِبُّ حَسَنٌ دَرْسَ اللُّغَةِ الْعَرَبِيَّةِ؟",
          options: [
            "لِأَنَّهُ دَرْسٌ قَصِيرٌ جِدًّا",
            "لِأَنَّهُ يُسَاعِدُهُ عَلَى تَطْوِيرِ مَهَارَاتِهِ",
            "لِأَنَّهُ يَلْعَبُ فِيهِ مَعَ أَصْدِقَائِهِ",
            "لِأَنَّهُ بِلَا وَاجِبَاتٍ مَنْزِلِيَّةٍ",
          ],
          correctIndex: 1,
          explanationIndonesian: "Pelajaran bahasa Arab membantu mengembangkan keterampilannya.",
          skillFocus: "Alasan Menyukai Pelajaran",
        },
        {
          id: "d3-ist-5",
          questionArabic: "مَاذَا يَفْعَلُ حَسَنٌ فِي الْمَدْرَسَةِ؟",
          options: [
            "يَنَامُ فِي الْفَصْلِ وَيَقْرَأُ الْقِصَصَ فَقَطْ",
            "يَتَعَلَّمُ مَوَادَّ مُخْتَلِفَةً وَيُشَارِكُ فِي الْأَنْشِطَةِ مَعَ أَصْدِقَائِهِ",
            "يُسَاعِدُ وَالِدَيْهِ فِي أَعْمَالِ الْبَيْتِ",
            "يُرَتِّبُ غُرْفَتَهُ فِي الْمَدْرَسَةِ",
          ],
          correctIndex: 1,
          explanationIndonesian: "Di sekolah Hasan belajar berbagai mata pelajaran dan mengikuti kegiatan bersama teman-teman.",
          skillFocus: "Aktivitas di Sekolah",
        },
        {
          id: "d3-ist-6",
          questionArabic: "مَا مَسْؤُولِيَّةُ حَسَنٍ فِي الْبَيْتِ بَعْدَ الِاسْتِرَاحَةِ؟",
          options: [
            "يُشَاهِدُ التِّلْفَازَ حَتَّى اللَّيْلِ",
            "يُسَاعِدُ وَالِدَيْهِ وَيُرَاجِعُ دُرُوسَهُ",
            "يَخْرُجُ لِلَّعِبِ طَوَالَ النَّهَارِ",
            "لَا يَعْمَلُ شَيْئًا فِي الْبَيْتِ",
          ],
          correctIndex: 1,
          explanationIndonesian: "Setelah istirahat sebentar, Hasan membantu orang tuanya dan mengulang pelajarannya.",
          skillFocus: "Tanggung Jawab di Rumah",
        },
        {
          id: "d3-ist-7",
          questionArabic: "لِمَاذَا يُعِدُّ حَسَنٌ جَدْوَلَ أَعْمَالِهِ فِي اللَّيْلِ قَبْلَ النَّوْمِ؟",
          options: [
            "لِأَنَّهُ يُرِيدُ أَنْ يَسْهَرَ حَتَّى الصَّبَاحِ",
            "لِكَيْ يَكُونَ يَوْمُهُ التَّالِي مُنَظَّمًا وَمُسْتَعِدًّا لِلدِّرَاسَةِ",
            "لِأَنَّهُ نَسِيَ أَدَوَاتِهِ فِي الْمَدْرَسَةِ",
            "لِأَنَّهُ لَا يُحِبُّ النَّوْمَ فِي السَّاعَةِ التَّاسِعَةِ",
          ],
          correctIndex: 1,
          explanationIndonesian: "Menyiapkan jadwal malam hari agar keesokan harinya teratur dan siap belajar.",
          skillFocus: "Kebiasaan Malam & Inferensi",
          isInference: true,
        },
        {
          id: "d3-ist-8",
          questionArabic: "مَا الصِّفَاتُ الَّتِي تَصِفُ شَخْصِيَّةَ حَسَنٍ مِنْ خِلَالِ يَوْمِيَّاتِهِ؟",
          options: [
            "مُنَظَّمٌ، مُتَعَاوِنٌ مَعَ أُسْرَتِهِ، وَمُجْتَهِدٌ فِي تَطْوِيرِ نَفْسِهِ",
            "كَسُولٌ وَيُؤَجِّلُ أَعْمَالَهُ إِلَى الْمَسَاءِ",
            "أَنَانِيٌّ لَا يُشَارِكُ مَعَ أَصْدِقَائِهِ",
            "غَيْرُ مُهْتَمٍّ بِالصَّلَاةِ وَالدِّرَاسَةِ",
          ],
          correctIndex: 0,
          explanationIndonesian: "Hasan adalah siswa yang disiplin, peduli keluarga, dan tekun mengembangkan dirinya.",
          skillFocus: "Kesimpulan Karakter Tokoh",
          isInference: true,
        },
      ],
    },
    kalam: {
      titleArabic: "مُحَادَثَةٌ عَنِ الْأَنْشِطَةِ الْيَوْمِيَّةِ",
      titleIndonesian: "Percakapan tentang Aktivitas Harian",
      hiwar: [
        {
          speakerArabic: "الْمُعَلِّمُ",
          speakerSide: "right",
          textArabic: "كَيْفَ تُنَظِّمُ وَقْتَكَ كُلَّ يَوْمٍ؟",
          textIndonesian: "Bagaimana kamu mengatur waktumu setiap hari?",
        },
        {
          speakerArabic: "الطَّالِبُ",
          speakerSide: "left",
          textArabic: "أُنَظِّمُ وَقْتِي بِوَضْعِ جَدْوَلٍ لِلْأَنْشِطَةِ.",
          textIndonesian: "Saya mengatur waktuku dengan menyusun jadwal aktivitas.",
        },
        {
          speakerArabic: "الْمُعَلِّمُ",
          speakerSide: "right",
          textArabic: "مَاذَا تَفْعَلُ بَعْدَ الْعَوْدَةِ مِنَ الْمَدْرَسَةِ؟",
          textIndonesian: "Apa yang kamu lakukan setelah kembali dari sekolah?",
        },
        {
          speakerArabic: "الطَّالِبُ",
          speakerSide: "left",
          textArabic: "أَسْتَرِيحُ قَلِيلًا، ثُمَّ أُرَاجِعُ دُرُوسِي.",
          textIndonesian: "Saya beristirahat sebentar, kemudian mengulang pelajaran-pelajaranku.",
        },
        {
          speakerArabic: "الْمُعَلِّمُ",
          speakerSide: "right",
          textArabic: "لِمَاذَا تُنَظِّمُ وَقْتَكَ؟",
          textIndonesian: "Mengapa kamu mengatur waktumu?",
        },
        {
          speakerArabic: "الطَّالِبُ",
          speakerSide: "left",
          textArabic: "لِأَنَّ تَنْظِيمَ الْوَقْتِ يُسَاعِدُنِي عَلَى إِنْجَازِ أَعْمَالِي.",
          textIndonesian: "Karena mengatur waktu membantuku menyelesaikan tugas-tugasku.",
        },
      ],
      challenges: [
        {
          id: "d3-kalam-1",
          badgeLabel: "Latihan 1",
          titleIndonesian: "Wawancara Jadwal Harian (مُقَابَلَةٌ شَفَهِيَّةٌ)",
          titleArabic: "مُقَابَلَةٌ عَنِ الْجَدْوَلِ الْيَوْمِيِّ",
          instructionIndonesian:
            "Dengarkan pertanyaan berikut, lalu jawab secara lisan menggunakan perekam suara tentang jam bangun, persiapan ke sekolah, dan aktivitas sore/malam.",
          promptArabic:
            "مَتَى تَسْتَيْقِظُ كُلَّ يَوْمٍ؟ وَمَاذَا تَفْعَلُ قَبْلَ الذَّهَابِ إِلَى الْمَدْرَسَةِ وَبَعْدَ الرُّجُوعِ مِنْهَا؟",
          promptIndonesian:
            "Kapan kamu bangun setiap hari? Dan apa yang kamu lakukan sebelum pergi ke sekolah dan setelah pulang darinya?",
          sampleHints: [
            "أَسْتَيْقِظُ فِي السَّاعَةِ الْخَامِسَةِ صَبَاحًا، ثُمَّ أُصَلِّي الصُّبْحَ.",
            "بَعْدَ ذَلِكَ أَغْتَسِلُ وَأَتَنَاوَلُ الْفَطُورَ مَعَ أُسْرَتِي.",
            "بَعْدَ الرُّجُوعِ أَسْتَرِيحُ قَلِيلًا ثُمَّ أُرَاجِعُ دُرُوسِي.",
          ],
          checklistItems: [
            "Menyebutkan jam bangun dan aktivitas pagi dengan urutan jelas.",
            "Menyebutkan aktivitas setelah pulang sekolah.",
          ],
        },
        {
          id: "d3-kalam-2",
          badgeLabel: "Latihan 2",
          titleIndonesian: "Menceritakan Rutinitas Pagi ke Malam (5–6 Kalimat)",
          titleArabic: "شَرْحُ الْيَوْمِيَّاتِ مِنَ الصَّبَاحِ إِلَى اللَّيْلِ",
          instructionIndonesian:
            "Ceritakan kegiatanmu sehari-hari dari pagi sampai malam dalam bahasa Arab minimal 5–6 kalimat secara lisan dengan kata penghubung!",
          promptArabic:
            "صِفْ أَنْشِطَتَكَ الْيَوْمِيَّةَ مِنَ الصَّبَاحِ حَتَّى الْمَسَاءِ فِي خَمْسٍ إِلَى سِتِّ جُمَلٍ مُتَتَابِعَةٍ!",
          promptIndonesian:
            "Ceritakan aktivitas harianmu dari pagi hingga malam dalam 5 sampai 6 kalimat yang berurutan!",
          illustrationType: "daily-routine",
          sampleHints: [
            "أَسْتَيْقِظُ مُبَكِّرًا ثُمَّ أُصَلِّي الصُّبْحَ.",
            "أَذْهَبُ إِلَى الْمَدْرَسَةِ وَأَدْرُسُ مَعَ أَصْدِقَائِي.",
            "بَعْدَ الرُّجُوعِ أَسْتَرِيحُ ثُمَّ أُرَاجِعُ دُرُوسِي وَأَنَامُ فِي التَّاسِعَةِ.",
          ],
          checklistItems: [
            "Menceritakan kegiatan pagi, siang, sore, dan malam minimal 5 kalimat.",
            "Menggunakan kata penghubung (ثُمَّ، بَعْدَ ذَلِكَ، وَ).",
          ],
        },
        {
          id: "d3-kalam-3",
          badgeLabel: "Latihan 3",
          titleIndonesian: "Pendapat Lisan tentang Manajemen Waktu",
          titleArabic: "الرَّأْيُ فِي تَنْظِيمِ الْوَقْتِ",
          instructionIndonesian:
            "Sampaikan pendapatmu secara lisan menggunakan perekam suara tentang alasan pelajar perlu mengatur waktu dengan disiplin.",
          promptArabic: "لِمَاذَا يَجِبُ عَلَيْنَا تَنْظِيمُ الْوَقْتِ؟",
          promptIndonesian: "Mengapa kita wajib mengatur waktu?",
          sampleHints: [
            "يَجِبُ عَلَيْنَا تَنْظِيمُ الْوَقْتِ لِأَنَّ الْوَقْتَ ثَمِينٌ جِدًّا.",
            "وَتَنْظِيمُ الْوَقْتِ يُسَاعِدُنَا عَلَى النَّجَاحِ وَإِنْجَازِ الْوَاجِبَاتِ.",
          ],
          checklistItems: [
            "Menyampaikan pendapat beserta alasan dengan jelas.",
            "Memutar kembali rekaman suara untuk memastikan pelafalan tepat.",
          ],
        },
      ],
    },
    qiraah: {
      titleArabic: "يَوْمِيَّاتُ طَالِبٍ نَشِيطٍ",
      titleIndonesian: "Keseharian Seorang Siswa yang Aktif",
      isDialog: false,
      illustrationType: "umar-activities",
      paragraphs: [
        "أَنَا عُمَرُ، طَالِبٌ فِي الصَّفِّ السَّابِعِ. أَحْرِصُ عَلَى تَنْظِيمِ وَقْتِي لِأَنَّنِي أُرِيدُ أَنْ أَكُونَ طَالِبًا نَشِيطًا وَمُجْتَهِدًا. أَسْتَيْقِظُ كُلَّ يَوْمٍ فِي السَّاعَةِ الْخَامِسَةِ صَبَاحًا، ثُمَّ أُصَلِّي وَأُرَتِّبُ غُرْفَتِي. بَعْدَ ذَلِكَ أَتَنَاوَلُ الْفَطُورَ وَأَسْتَعِدُّ لِلذَّهَابِ إِلَى الْمَدْرَسَةِ.",
        "فِي الْمَدْرَسَةِ، أُشَارِكُ فِي الدُّرُوسِ وَالْأَنْشِطَةِ. أُحِبُّ تَعَلُّمَ اللُّغَةِ الْعَرَبِيَّةِ لِأَنَّهَا تُسَاعِدُنِي عَلَى فَهْمِ الْمُفْرَدَاتِ وَقِرَاءَةِ النُّصُوصِ. أَحَاوِلُ أَنْ أَسْتَعْمِلَ الْكَلِمَاتِ الْعَرَبِيَّةَ فِي الْمُحَادَثَةِ مَعَ أَصْدِقَائِي.",
        "بَعْدَ الرُّجُوعِ مِنَ الْمَدْرَسَةِ، أَتَنَاوَلُ الْغَدَاءَ وَأَسْتَرِيحُ قَلِيلًا. ثُمَّ أُسَاعِدُ أُسْرَتِي فِي بَعْضِ الْأَعْمَالِ الْمَنْزِلِيَّةِ، وَبَعْدَ ذَلِكَ أُرَاجِعُ دُرُوسِي وَأُكْمِلُ وَاجِبَاتِي.",
        "فِي الْمَسَاءِ، أَقْرَأُ كِتَابًا أَوْ أَكْتُبُ مُلَاحَظَاتٍ عَنْ مَا تَعَلَّمْتُهُ. أُؤْمِنُ أَنَّ النَّجَاحَ لَا يَأْتِي بِالْأُمْنِيَاتِ فَقَطْ، بَلْ يَحْتَاجُ إِلَى الْجِدِّ وَالِانْضِبَاطِ وَحُسْنِ اسْتِغْلَالِ الْوَقْتِ.",
      ],
      highlightedWords: [
        { arabic: "تَنْظِيمِ وَقْتِي", indonesian: "mengatur waktuku" },
        { arabic: "أُشَارِكُ", indonesian: "saya berpartisipasi" },
        { arabic: "الْأَعْمَالِ الْمَنْزِلِيَّةِ", indonesian: "pekerjaan rumah tangga" },
        { arabic: "أُرَاجِعُ دُرُوسِي", indonesian: "mengulang pelajaranku" },
        { arabic: "الِانْضِبَاطِ", indonesian: "kedisiplinan" },
        { arabic: "حُسْنِ اسْتِغْلَالِ الْوَقْتِ", indonesian: "pemanfaatan waktu dengan baik" },
      ],
      sentenceOrderQuestions: [
        {
          id: "d3-qir-ord-1",
          instructionIndonesian: "Susunlah kalimat berikut sesuai tujuan Umar mengatur waktu pada paragraf 1!",
          scrambledWords: ["أَكُونَ", "أُرِيدُ", "لِأَنَّنِي", "وَقتِي", "نَشِيطًا", "عَلَى", "طَالِبًا", "تَنْظِيمِ", "أَحْرِصُ", "أَنْ"],
          correctSentence: "أَحْرِصُ عَلَى تَنْظِيمِ وَقتِي لِأَنَّنِي أُرِيدُ أَنْ أَكُونَ طَالِبًا نَشِيطًا",
          translationIndonesian: "Saya menjaga keteraturan waktuku karena saya ingin menjadi siswa yang aktif.",
        },
        {
          id: "d3-qir-ord-2",
          instructionIndonesian: "Susunlah kalimat urutan kegiatan pagi Umar pada paragraf 1!",
          scrambledWords: ["الْفَطُورَ", "بَعْدَ ذَلِكَ", "لِلذَّهَابِ", "أَتَنَاوَلُ", "إِلَى الْمَدْرَسَةِ", "وَأَسْتَعِدُّ"],
          correctSentence: "بَعْدَ ذَلِكَ أَتَنَاوَلُ الْفَطُورَ وَأَسْتَعِدُّ لِلذَّهَابِ إِلَى الْمَدْرَسَةِ",
          translationIndonesian: "Setelah itu saya sarapan pagi dan bersiap pergi ke sekolah.",
        },
        {
          id: "d3-qir-ord-3",
          instructionIndonesian: "Susunlah kalimat tentang alasan Umar mencintai bahasa Arab pada paragraf 2!",
          scrambledWords: ["النُّصُوصِ", "فَهْمِ", "لِأَنَّهَا", "تُسَاعِدُنِي", "وَقِرَاءَةِ", "عَلَى", "الْمُفْرَدَاتِ"],
          correctSentence: "لِأَنَّهَا تُسَاعِدُنِي عَلَى فَهْمِ الْمُفْرَدَاتِ وَقِرَاءَةِ النُّصُوصِ",
          translationIndonesian: "Karena ia membantuku memahami kosakata dan membaca teks.",
        },
        {
          id: "d3-qir-ord-4",
          instructionIndonesian: "Susunlah kalimat tentang praktik berbahasa Arab Umar bersama temannya pada paragraf 2!",
          scrambledWords: ["أَصْدِقَائِي", "فِي الْمُحَادَثَةِ", "الْكَلِمَاتِ", "أَسْتَعْمِلَ", "أَحَاوِلُ", "مَعَ", "أَنْ", "الْعَرَبِيَّةَ"],
          correctSentence: "أَحَاوِلُ أَنْ أَسْتَعْمِلَ الْكَلِمَاتِ الْعَرَبِيَّةَ فِي الْمُحَادَثَةِ مَعَ أَصْدِقَائِي",
          translationIndonesian: "Saya berusaha memakai kosakata Arab dalam percakapan bersama teman-temanku.",
        },
        {
          id: "d3-qir-ord-5",
          instructionIndonesian: "Susunlah kalimat tentang bantuan Umar kepada keluarganya pada paragraf 3!",
          scrambledWords: ["الْمَنْزِلِيَّةِ", "بَعْضِ", "ثُمَّ", "فِي", "أُسْرَتِي", "الْأَعْمَالِ", "أُسَاعِدُ"],
          correctSentence: "ثُمَّ أُسَاعِدُ أُسْرَتِي فِي بَعْضِ الْأَعْمَالِ الْمَنْزِلِيَّةِ",
          translationIndonesian: "Kemudian saya membantu keluargaku dalam sebagian pekerjaan rumah.",
        },
        {
          id: "d3-qir-ord-6",
          instructionIndonesian: "Susunlah kalimat pesan utama tentang kunci kesuksesan pada paragraf 4!",
          scrambledWords: ["الْجِدِّ", "بَلْ", "يَحْتَاجُ", "وَالِانْضِبَاطِ", "إِلَى", "الْوَقْتِ", "وَحُسْنِ اسْتِغْلَالِ"],
          correctSentence: "بَلْ يَحْتَاجُ إِلَى الْجِدِّ وَالِانْضِبَاطِ وَحُسْنِ اسْتِغْلَالِ الْوَقْتِ",
          translationIndonesian: "Melainkan membutuhkan kesungguhan, kedisiplinan, dan pemanfaatan waktu yang baik.",
        },
      ],
    },
    kitabah: {
      pictureExercises: [
        {
          id: "d3-kit-pic-1",
          titleIndonesian: "Gambar 1: Rangkaian Aktivitas Pagi, Siang & Malam",
          instructionArabic: "اُكْتُبْ جُمَلًا عَرَبِيَّةً عَنْ أَنْشِطَةِ الصُّورَةِ مِنَ الصَّبَاحِ إِلَى اللَّيْلِ (٦–٨ جُمَلٍ)!",
          instructionIndonesian:
            "Amati gambar tiga waktu (pagi pukul 05.00, siang di sekolah, dan malam pukul 09.00). Tulislah 6–8 kalimat bahasa Arab yang menceritakan urutan aktivitas dari pagi sampai malam.",
          minSentences: 6,
          illustrationType: "daily-timeline",
          requirements: [
            "Menceritakan tiga bagian waktu pada gambar (صَبَاحًا، نَهَارًا، لَيْلًا).",
            "Menyebutkan keterangan jam (السَّاعَةِ الْخَامِسَةِ / التَّاسِعَةِ).",
            "Menggunakan kata penghubung urutan (ثُمَّ، بَعْدَ ذَلِكَ، وَ).",
            "Panjang tulisan 6–8 kalimat.",
          ],
          rubricCriteria: [
            "Kesesuaian dengan 3 bagian waktu gambar",
            "Ketepatan kosakata aktivitas & jam",
            "Penggunaan kata penghubung urutan",
            "Struktur kalimat & kelengkapan",
          ],
        },
        {
          id: "d3-kit-pic-2",
          titleIndonesian: "Gambar 2: Keseharian Pelajar yang Disiplin Mengatur Waktu",
          instructionArabic: "اُكْتُبْ فِقْرَةً عَنِ الصُّورَةِ وَكَيْفِيَّةِ تَنْظِيمِ الْوَقْتِ (٦–٨ جُمَلٍ)!",
          instructionIndonesian:
            "Perhatikan gambar ilustrasi jadwal harian siswa yang tekun. Tulislah 6–8 kalimat bahasa Arab tentang cara mengatur waktu belajar, membantu keluarga, dan alasan kedisiplinan itu penting.",
          minSentences: 6,
          illustrationType: "umar-activities",
          requirements: [
            "Menjelaskan kebiasaan belajar dan mengatur waktu sesuai gambar.",
            "Menyebutkan alasan pentingnya mengatur waktu dengan لِأَنَّ.",
            "Menggunakan minimal 6 mufradat Dars 3.",
            "Panjang tulisan 6–8 kalimat yang padu.",
          ],
          rubricCriteria: [
            "Kesesuaian tema dengan gambar",
            "Ketepatan kosakata Dars 3",
            "Koherensi paragraf & alasan",
            "Struktur kalimat yang benar",
          ],
        },
      ],
    },
    mahfuzhat: {
      arabic: "خَيْرُ الْعِلْمِ مَا نَفَعَ",
      translation: "Sebaik-baik ilmu adalah ilmu yang bermanfaat.",
      reflection:
        "Ilmu bahasa Arab yang kita pelajari dan amalkan setiap hari melalui kedisiplinan waktu akan membawa manfaat bagi diri sendiri, keluarga, dan masyarakat.",
    },
  },
];

// Combined dictionary items for Kamus Mini
export const ALL_DICTIONARY_ITEMS: MufrodatItem[] = [
  ...CURRICULUM[0].mufrodat,
  ...CURRICULUM[1].mufrodat,
  ...CURRICULUM[2].mufrodat,
  {
    id: "dict-c1",
    arabic: "أَحْمَرُ / حَمْرَاءُ",
    transliteration: "Aḥmar / Ḥamrā'",
    indonesian: "Merah (lk / pr)",
    category: "Warna & Penghubung",
    exampleArabic: "هَذَا قَلَمٌ أَحْمَرُ وَهَذِهِ حَقِيبَةٌ حَمْرَاءُ.",
    exampleIndonesian: "Ini pena merah dan ini tas merah.",
    darsId: "dars-2",
  },
  {
    id: "dict-c2",
    arabic: "أَزْرَقُ / زَرْقَاءُ",
    transliteration: "Azraq / Zarqā'",
    indonesian: "Biru (lk / pr)",
    category: "Warna & Penghubung",
    exampleArabic: "حَقِيبَتِي كَبِيرَةٌ وَلَوْنُهَا أَزْرَقُ.",
    exampleIndonesian: "Tasku besar dan warnanya biru.",
    darsId: "dars-2",
  },
  {
    id: "dict-c3",
    arabic: "ثُمَّ",
    transliteration: "Tsumma",
    indonesian: "Kemudian / Lalu",
    category: "Warna & Penghubung",
    exampleArabic: "أُصَلِّي الصُّبْحَ ثُمَّ أُرَتِّبُ غُرْفَتِي.",
    exampleIndonesian: "Saya shalat Subuh kemudian merapikan kamarku.",
    darsId: "dars-3",
  },
  {
    id: "dict-c4",
    arabic: "لِأَنَّ",
    transliteration: "Li'anna",
    indonesian: "Karena",
    category: "Warna & Penghubung",
    exampleArabic: "أُحِبُّ الْعَرَبِيَّةَ لِأَنَّهَا لُغَةُ الْقُرْآنِ.",
    exampleIndonesian: "Saya mencintai bahasa Arab karena ia bahasa Al-Qur'an.",
    darsId: "dars-1",
  },
  {
    id: "dict-c5",
    arabic: "بَعْدَ ذَلِكَ",
    transliteration: "Ba'da Dzālika",
    indonesian: "Setelah itu",
    category: "Warna & Penghubung",
    exampleArabic: "بَعْدَ ذَلِكَ أَتَنَاوَلُ الْفَطُورَ مَعَ أُسْرَتِي.",
    exampleIndonesian: "Setelah itu saya sarapan bersama keluargaku.",
    darsId: "dars-3",
  },
  {
    id: "dict-c6",
    arabic: "قَبْلَ",
    transliteration: "Qabla",
    indonesian: "Sebelum",
    category: "Warna & Penghubung",
    exampleArabic: "أُرَتِّبُ أَدَوَاتِي قَبْلَ الذَّهَابِ إِلَى الْمَدْرَسَةِ.",
    exampleIndonesian: "Saya merapikan peralatanku sebelum pergi ke sekolah.",
    darsId: "dars-2",
  },
];

export interface BadgeDef {
  id: string;
  titleArabic: string;
  titleIndonesian: string;
  description: string;
  requirementLabel: string;
  checkUnlocked: (stats: {
    totalCoins: number;
    completedCount: number;
    accuracy: number;
    completedDarsCount: number;
  }) => boolean;
}

export const BADGES: BadgeDef[] = [
  {
    id: "badge-najm",
    titleArabic: "نَجْمُ التَّعَلُّمِ",
    titleIndonesian: "Bintang Pembelajar",
    description: "Memulai langkah aktif menyelesaikan latihan pertama.",
    requirementLabel: "Capai ≥ 30 koin",
    checkUnlocked: (s) => s.totalCoins >= 30,
  },
  {
    id: "badge-mujtahid",
    titleArabic: "مُجْتَهِدٌ",
    titleIndonesian: "Siswa Tekun",
    description: "Konsisten berlatih menyimak, berbicara, membaca, dan menulis.",
    requirementLabel: "Selesaikan ≥ 15 aktivitas",
    checkUnlocked: (s) => s.completedCount >= 15,
  },
  {
    id: "badge-mumtaz",
    titleArabic: "مُمْتَازٌ",
    titleIndonesian: "Istimewa & Akurat",
    description: "Menunjukkan ketelitian analisis tingkat tinggi.",
    requirementLabel: "Akurasi ≥ 75% & ≥ 100 koin",
    checkUnlocked: (s) => s.accuracy >= 75 && s.totalCoins >= 100,
  },
  {
    id: "badge-batal",
    titleArabic: "بَطَلُ اللُّغَةِ الْعَرَبِيَّةِ",
    titleIndonesian: "Juara Bahasa Arab",
    description: "Menuntaskan minimal dua dars secara menyeluruh.",
    requirementLabel: "Selesaikan ≥ 2 Dars",
    checkUnlocked: (s) => s.completedDarsCount >= 2,
  },
  {
    id: "badge-mutamayyiz",
    titleArabic: "الْبَطَلُ الْمُتَمَيِّزُ",
    titleIndonesian: "Sang Juara Paripurna",
    description: "Menaklukkan seluruh tantangan Level High di ketiga dars!",
    requirementLabel: "Selesaikan semua 3 Dars",
    checkUnlocked: (s) => s.completedDarsCount >= 3,
  },
];

// Helper to get total trackable items for a given Dars
export function getDarsTrackableIds(dars: DarsData): {
  istimaIds: string[];
  kalamIds: string[];
  qiraahIds: string[];
  kitabahIds: string[];
  allIds: string[];
} {
  const istimaIds = dars.istima.questions.map((q) => q.id);
  const kalamIds = dars.kalam.challenges.map((c) => c.id);
  const qiraahIds = dars.qiraah.sentenceOrderQuestions.map((q) => q.id);
  const kitabahIds = dars.kitabah.pictureExercises.map((p) => p.id);
  return {
    istimaIds,
    kalamIds,
    qiraahIds,
    kitabahIds,
    allIds: [...istimaIds, ...kalamIds, ...qiraahIds, ...kitabahIds],
  };
}
