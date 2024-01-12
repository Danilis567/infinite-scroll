# infinite-scroll
virtua ile sonsuz scroll örnegi 

virtua, React uygulamalarında sanal liste (virtualized list) oluşturmak için kullanılan bir kütüphanedir. Sanal liste, büyük veri setlerini daha etkili bir şekilde işlemek ve performansı artırmak için ekranda görünen öğeleri yalnızca ihtiyaç duyulduğunda render etmek anlamına gelir. 


bu projede jsonplaceholder in apisini kullandım

```
https://jsonplaceholder.typicode.com/photos
```

yaklaşık 5000 tane item var... virtua paketi de bu gibi durumlarda kullanılır yukarıda açıkladığım gibi ekranda sadece 10 tane item oluyor 5000 yerine ve biz kaydırdıkça içerik değişiyor ama sayı hala 10 bu bizde performans açısından avantaj kazandırıyor (5000 itemi yazdırmak eski cihazlarda büyük sorun yaratır 🤧)

```
import { WindowVirtualizer as WVList } from "virtua";
```
import ettikten sonra 
```
<WVList>
  {post.map((item, index) => (
    <Posts img={item.url} title={item.title} key={index} />
   ))}
 </WVList>
```

bu kadar basit bir kulkanımı var ve ben tek bunu yapmadım yoksa dökümasyonu kopyalamak olurdu bu sonsuz bir scroll efekti vermeye çalıştım önce 
```
const slicePosts = posts.slice(0, 10);
```

5000 olan item sayısını 10 a düşürdüm yoksa bunu denemek saatler sürerdi...

WindowVirtualizer in onRangeChange() diye bir propsu var bize start ve end i veriyor onları kullanarak çeşitli şeyler yapabiliriz ben sonsuz bir scroll efekti vermeyi seçtim
```
onRangeChange={(start, end) => {
      if (end + 1 === post.length) {
            setPost((prev) => [...prev, ...post]);
      }
}}
```

video da da göründügü gibi sonsuz  bir scroll

https://github.com/Danilis567/infinite-scroll/assets/134603964/c0dd2bc4-a0bc-47e6-b3da-3332e1910dae



