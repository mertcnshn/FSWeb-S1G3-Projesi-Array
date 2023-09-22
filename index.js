/* BU DERSDEKİ TÜM DEĞERLERİN DÖNMESİNİ (RETURN) UNUTMAYIN, AKSİ TAKDİRDE TEST KONTROLÜ ÇALIŞMAZ */

/* İşte veriniz bu */
const orijinalTatlar = [
  "Muz",
  "Vişne",
  "Ceviz",
  "Kestane",
  "Kiraz",
  "Çikolata",
  "Fındık Çikolata",
  "Fıstık Çikolata",
  "Badem Çikolata",
  "Franbuaz",
  "Yaban Mersini",
  "Tarçın",
  "Badem",
  "Kahve",
  "Fındık",
  "Anten Fıstık",
  "Limon",
  "Misket Limon",
  "Akçaağaç Şurubu",
  "Şeftali",
  "Nane",
  "Ananas",
  "Ahududu",
  "Çilek",
  "Vanilya",
];

/* Görev 1: Diziyi kopyalama!
Orijinal tatların bulunduğu toplam 25 aromanın olduğu bir dizimiz var (yukarıya bakın). Bu görevde, bu dizi'ye veri yazma ve bu diziden veri okuma işlemleri yapacağız.
Tüm bu değişiklikleri yaparken, gerçek, orijinal 25 lezzetin listesini kaybetmek istemiyoruz. Bu yüzden orijinal diziyi kopyalamamız gerekmektedir!

/*
Aşağıdakileri yapmak için aşağıdaki kopyalama işlevini kullanın:
   1. parametre olarak bir dizi alın - işlev çağrıldığında orijinalTatlar'i argüman olarak ileteceksiniz.
   2. Alınan dizinin bir kopyasını döndür
*/

function kopyala(itemArr) {
  const newItemArr = []; //RAMde yeni bir alan açar
  for (let i = 0; i < itemArr.length; i++) {
    newItemArr.push(itemArr[i]);
  }
  //spread operator ile de yapılabilir.
  return newItemArr;
}

/* Görev 2:
Bir dizinin tam olarak 25 çeşit olduğunu onaylayın. İşleviniz şunları kabul etmelidir:
   1. parametre olarak bir dizi
   2. Verilen dizinin 25 çeşit olup olmadığını kontrol edin
   3. İşleviniz, dizinin uzunluğu 25 ise DOĞRU(true) ve dizinin uzunluğu 25 DEĞİLSE YANLIŞ(false) bir boolean döndürmelidir.


Örneğin: dizi25Cesit(orijinalTatlar) kodunuz düzgün çalışıyorsa true değerini döndürür.
*/

/* function dizi25Cesitmi(tatlar){
  if(tatlar.length === 25){
    return true;
  }
  else{
    return false;
  }
}
*/

function dizi25Cesitmi(d) {
  return d.length === 25 ? true : false;
}

dizi25Cesitmi(orijinalTatlar);
console.log(dizi25Cesitmi(orijinalTatlar));

//single line if su sekilde yazılır
//return tatlar.length === 25 ? true:false;

//dizi25Cesitmi(orjinalTatlar); BU TESTTEN KALIR ama aslında T/F veriyor.

/* Görev 3:
Pastane sahibi size yeni bir lezzet fikriyle geldi: Kakule! Bunun da çok tutacağından çok emin. Bu lezzeti eklemek için diziyi değiştirmeniz gerekir.

Aşağıdakileri yapmak için cesitEkle işlevini kullanın:
   1. İlk parametrede tatlar dizisini argüman olarak alan bir dizi alın
   2. İkinci parametrede yeni tadı 'string' argümanı olarak alın
   3. İşlev, argüman olarak verilen yeni tadı, verilen dizinin başına ekler.
   4. İşlev, yeni oluşan diziyi döndürmelidir

  Örneğin: cesitEkle(orijinalTatlar, "Kakule") işlevi doğru çalıştığında ["Kakule", "Muz",..."Vanilya"] şeklinde dönmelidir
*/

function cesitEkle(tatlar, yeniCesit) {
  tatlar.unshift(yeniCesit);
  return tatlar;
}
console.log("Kakule eklendi mi?", cesitEkle(orijinalTatlar, "Kakule"));

/* Cörev 4:

Hoooppppalaa! orijinalTatlar dizisinde artık 26 aroma var! Göreviniz, dizinin sonundan bir öğeyi kaldırmaktır.

Aşağıdakileri yapmak için sonCesitiKaldir işlevini kullanın:
   1. Bir dizi alın
   2. Alınan diziden son öğeyi kaldırın
   3. Ortaya çıkan diziyi döndürün

   Örneğin: sonCesitiKaldir(orijinalTatlar) çalıştırıldığında ["Kakule", "Muz",..."Çilek"] döndürülür.
*/

function sonCesitiKaldir(tatlar) {
  tatlar.pop();
  return tatlar;
}
console.log("Son aroma kaldırıldı mı?", sonCesitiKaldir(orijinalTatlar));

/* Görev 5:
Dizideki belirli bir indeksteki çeşniyi döndüren bir işlev yazın.

Aşağıdakileri yapmak için aşağıdaki indekstekiCesitiGetir işlevini kullanın:
   1. İlk parametrede tatlar dizisini argüman olarak alacak bir dizi alın
   2. İkinci parametrede argüman olarak istenen dizini alacak bir sayı alın
   3. Verilen indekste bulunan çeşiti döndürün

   Örneğin: indekstekiCesitiGetir(orijinalTatlar, 2) çalıştırılmasıyla, Kakule'in başarıyla eklendiği varsayarsak sonuç "Ceviz" olucaktır.
*/

function indekstekiCesitiGetir(tatlar, ind) {
  return tatlar[ind];
}
console.log("Indeksteki cesit", indekstekiCesitiGetir(orijinalTatlar, 2));

/* Görev 6:

Firma, ürün yelpazesine daha fazla lezzet eklemek istediğinden, sadece ilk veya son aromayı keyfi olarak çıkarmak yerine, aroma adına göre aromaları kaldırmaları gerektiğini fark ederler. Göreviniz, verilen bir dizinde, ada göre bu tadı diziden çıkarmak.

Aşağıdakileri yapmak için ismeGoreCesitCikar işlevini kullanın:
   1. İlk parametrede tatlar dizisini argüman olarak alın
   2. İkinci parametrede, lezzet adını argüman olarak alın
   3. Alınan diziden alınan aromayı kaldırın
   4. Artık bir tane daha az lezzet içeren sonuçtaki diziyi döndürün

  Örneğin:  ismeGoreCesitCikar(orijinalTatlar, "Tarçın") çalıştırılmasıyla,  "Tarçın" aroması kaldırılacağından uzunluğu 24 olan bir dizi döndürülür.

  İPUCU: Bunun için .splice() kullanabilirsiniz.
*/

function ismeGoreCesitCikar(dizi, alerjen) {
  for (let i = 0; i < dizi.length; i++) {
    //eger dizinin i'inci elemanı lezzete eşitse diziden çıkar.
    if (dizi[i] === alerjen) {
      console.log(dizi[i]);
      dizi.splice(i, 1);
      return dizi;
    }
  }
  /*indexOf ile de yapılabilir > for yerine kullanılacak.
const tabaktakiIndex = tabak.indexOf(lezzet);
tabak.splice(tabaktakiIndex, 1); */
  //return buraya yazılsa da doğru ama döngü sayısı artar.
}

console.log(
  "Tarcın cıkarıldı mı?",
  ismeGoreCesitCikar(orijinalTatlar, "Tarçın")
);

/* Görev 7:

14 Şubat Sevgililer Günü'nde Firma, tüm çikolata lezzetlerini öne çıkaran bir promosyon malzemeleri oluşturmak istiyor.
Göreviniz, dizideki her bir öğeyi kontrol eden ve yalnızca verilen isimin geçtiği lezzetleri bulup orataya çıkan yeni diziyi döndüren, ismeGoreFiltrele adlı bir işlev yazmaktır.
Bu, farklı tatil ve kutlamalarda "Fındık", "Fıstık", "Çikolata" vb. lezzetler için filtreleme yapabilmenizi sağlar.

Aşağıdakileri yapmak için ismeGoreFiltrele işlevini kullanın:
   1. İlk parametrede tatlar dizisini argüman olarak alacak bir dizi alın
   2. İkinci parametrede filtre değerini argüman olarak alın (örnek: "Çikolata")
   3. Dizideki tatlardan herhangi birinin filtre değerini içerip içermediğini kontrol edin.
   4. Varsa, onları yeni bir diziye ekleyin
   5. Filtrelenmiş tatları içeren yeni diziyi döndürün

  Örneğin: ismeGoreFiltrele(orijinalTatlar, "Çikolata") çalıştırıldığında ["Çikolata", "Fındık Çikolata", "Fıstık Çikolata", "Badem Çikolata"]

  İPUCU - bunu çözmenize yardımcı olması için .includes yöntemini kullanabilirsiniz.

  Bu sorunu çözmek için GELİŞMİŞ DİZİ YÖNTEMLERİNİ (yani .filter) KULLANMAYIN.
*/

function ismeGoreFiltrele(tatlarDizisi, filtreDegeri) {
  const filtrelenmisSepeti = [];

  for (let i = 0; i < tatlarDizisi.length; i++) {
    const elimdekiTat = tatlarDizisi[i];
    //if(tatlarDizisi[i].includes(filtreDegeri) === true)
    if (tatlarDizisi[i].includes(filtreDegeri)) {
      filtrelenmisSepeti.push(elimdekiTat);
    }
  }
  return filtrelenmisSepeti;
}

console.log("isme göre filtrele", ismeGoreFiltrele(orijinalTatlar, "Çikolata"));

/* ALIŞTIRMA */

/* ALIŞTIRMA 1: Bir dizideki ortalama kelime sayısını döndüren bir fonksiyon yazın. Bu işlevi orijinalTatlar dizisinde test etmelisiniz, ancak bunu herhangi bir dizi için de kullanabilmelisiniz.

Aşağıdakileri yapmak için ortalamaKelimeSayisi işlevini kullanın:
   1. orijinalTatlar dizisini alın
   2. Dizideki öğe başına kaç kelime sayın
   3. Dizideki öğe başına ortalama kelime sayısını döndürün

   Örneğin: ortalamaKelimeSayisi(orijinalTatlar) 0 ile 2 arasında bir sayı döndürmelidir.
*/

function ortalamaKelimeSayisi(/*kod buraya*/) {
  /*kod buraya*/
}

/* ALIŞTIRMA 2:
Firma mevcut tatların yanında artık mevsimlik lezzetler ve hatta bölgesel lezzetler de sunmaktadır. Toplam 25 lezzet aromasını
orijinalTatlar, yeniTatlar, mevsimlikTatlar ve bolgeselTatlar'dan rastgele seçecek ve bunu rastgeleTatlar adlı bir dizide saklayan bir fonksiyon yazın.

Aşağıdakileri yapmak için rastgeleTatlar işlevini ve yeni dizileri kullanın:
   1. Tüm farklı tatlara sahip dört diziyi alın (orijinalTatlar yukarıda, diğerleri aşağıda)
   2. Dört diziden rastgele tatlar seçin
   3. Uzunluğu 25 olan rastgeleTatlar adlı yeni bir dizi döndürün

  Örneğin: rastgeleTatlar(orijinalTatlar, yeniTatlar, mevsimlikTatlar, bolgeselTatlar) çalıştırıldığında ["Kestane", "Ballı Badem,"..."Hindistan Cevizi", "Kuru üzüm"].
*/

function rastgeleTatlar(tatDizi1, tatDizi2, tatDizi3, tatDizi4) {
  const butunTatlar = [];

  for (let i = 0; i < tatDizi1.length; i++) {
    butunTatlar.push(tatDizi1[i]);
  }
  for (let i = 0; i < tatDizi2.length; i++) {
    butunTatlar.push(tatDizi2[i]);
  }
  for (let i = 0; i < tatDizi3.length; i++) {
    butunTatlar.push(tatDizi3[i]);
  }
  for (let i = 0; i < tatDizi4.length; i++) {
    butunTatlar.push(tatDizi4[i]);
  }
  //spread operator ile yapılabilir.
  // const butunTatlar =[...tatDizi1, ...tatDizi2, ...tatDizi3, ...tatDizi4]

  const rastgeleTatlar = [];
  for (let i = 0; i < 25; i++) {
    const rastgeleSayi = Math.floor(Math.random() * butunTatlar.length);
    rastgeleTatlar.push(butunTatlar[rastgeleSayi]);
  }
  return rastgeleTatlar;
}

// NEW DATA ARRAYS FOR STRETCH 2 ⬇️
const yeniTatlar = [
  "Badem",
  "Ballı Badem",
  "Fıstık Ezmesi",
  "Profiterol",
  "Madlen Çikolata",
];

const mevsimlikTatlar = [
  "Pekan",
  "Kaju",
  "Çikolatalı Mousse",
  "Fransız Vanilyası",
  "Yumurta",
  "Alman çikolatası",
  "Kek üzerine krema",
  "Hindistan Cevizi",
  "Kaymaklı Biskuvi",
  "Beyaz Çikolata",
  "Mango",
];

const bolgeselTatlar = [
  "Kaymak",
  "Karpuz",
  "Karadut",
  "Turunç",
  "Portakal",
  "Yogurt",
  "Krem Peynir",
  "Kakao",
  "Karamel macchiato",
  "Kuru üzüm",
  "Peynir",
  "Karamel",
];

console.log(
  "Rastgele tatlar",
  rastgeleTatlar(orijinalTatlar, yeniTatlar, mevsimlikTatlar, bolgeselTatlar)
);

/* Lütfen bu satırın altındaki hiçbir şeyi değiştirmeyin */
function sa() {
  console.log("Calışıyor");
  return "as";
}
sa();
module.exports = {
  sa,
  dizi25Cesitmi,
  cesitEkle,
  sonCesitiKaldir,
  indekstekiCesitiGetir,
  ismeGoreCesitCikar,
  kopyala,
  ismeGoreFiltrele,
  ortalamaKelimeSayisi,
  rastgeleTatlar,
};
