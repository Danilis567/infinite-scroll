# Sonsuz Scroll Örneği - Virtua ile

`virtua`, React uygulamalarında büyük veri setleriyle daha etkili bir şekilde çalışmak ve performansı artırmak için kullanılan bir sanal liste (virtualized list) kütüphanesidir. Sanal liste, ekranda görünen öğeleri yalnızca ihtiyaç duyulduğunda render ederek büyük veri setlerini daha etkili bir şekilde işler.

Bu örnekte, JSONPlaceholder API'sini kullanarak bir örnek uygulama geliştirdim. API adresi şu şekildedir:

```
https://jsonplaceholder.typicode.com/photos
```

API'den alınan verilerle yaklaşık 5000 öğe bulunmaktadır. `virtua` paketi, bu gibi durumlarda kullanılarak ekranda sadece görünen 10 öğe ile çalışabilir. Bu, 5000 öğeyi ekrana yazdırmak yerine, sadece görünen öğeleri render ederek performans avantajı sağlar (5000 öğeyi yazdırmak eski cihazlarda büyük sorunlara neden olabilir 🤧).


```
import { WindowVirtualizer as WVList } from "virtua";
```
Yukarıdaki kütüphaneyi projeye ekledikten sonra, aşağıdaki gibi kullanabilirsiniz:

```
<WVList>
  {post.map((item, index) => (
    <Posts img={item.url} title={item.title} key={index} />
   ))}
 </WVList>
```
Bu basit kullanım, projenize virtua paketini entegre ederek ve API'den alınan verileri efektif bir şekilde işleyerek sonsuz bir scroll efekti elde etmenizi sağlar.

```
const slicePosts = posts.slice(0, 10);
```


5000 olan itemlerden 0 ila 10 arasındakileri aldım; yoksa bunu denemek saatler sürerdi.

WindowVirtualizer'ın onRangeChange() diye bir prop'u var. Bize start ve end'i veriyor. Onları kullanarak çeşitli şeyler yapabiliriz. Ben, sonsuz bir scroll efekti vermeyi seçtim.


```
onRangeChange={(start, end) => {
      if (end + 1 === post.length) {
            setPost((prev) => [...prev, ...post]);
      }
}}
```
Video'da da göründüğü gibi, sonsuz bir scroll...

https://github.com/Danilis567/infinite-scroll/assets/134603964/c0dd2bc4-a0bc-47e6-b3da-3332e1910dae



