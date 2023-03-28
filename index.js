// 1.concat(array-i array ilə birləşdirir)
// const animals = ['pigs', 'goats', 'sheep', 'bear']
// const a = animals.concat('lala')
// console.log(a);
// 2.copyWithin(2 rəqəm verilsə hər bir söz bir birinin yerinə keçəcək, 3 parametr neçə dəfə təkrarlatmaq lazım olduğunu deyir)
// const array = ['ruslan', 'ali', 'baba, resad', 'cemil', 'seyid']
// console.log(array.copyWithin(0, 1));
// console.log(array.copyWithin(0, 1, 2));
// 3. every(functionlarda istifade olunur, true ve ya false donderir)
// const isBelowThreshold = (currentValue) => currentValue < 40;
// const array1 = [1, 30, 39, 29, 10, 13];
// console.log(array1.every(isBelowThreshold));
// 4. filter()
// const array1 = [1, 30, 39, 29, 10, 13];
// const filtr = array1.filter(arr=>arr==1);
// console.log(filtr);
// console.log(array1);
// 5. flat(daxili arraylari silir. eger ici bos olsa 1 array silir, 2 yazilsa 2 array );
// const array1 = [1, 30, 39, 29,[[[ 10, 13]]]];
// console.log(array1.flat());
// console.log(array1.flat(2));
// 6. flatMap(icindeki array-leri function ile silir)
// const arr1 = [1, 2, [3], [4, 5], 6, [], [[1,2]]];
// const flattened = arr1.flatMap(num => num);
// console.log(flattened);
// 7. forEach(bunu bir deyiskene beraber etmek olmaz);
// const array1 = [1, 30, 39, 29, 10, 13];
// array1.forEach(val=>console.log(`<li>${val}<li/>`))
// 8. indexOf(indeksini gosterir. bütöv yazmaq şərti ilə)
// const array = ['ruslan', 'ali', 'baba', 'resad', 'cemil', 'seyid']
// console.log(array.indexOf('ali'));
// 9. lastIndexOf(sonuncu indeksi)
// const array = ['ruslan', 'ali', 'baba', 'resad', 'cemil',  'cemil', 'seyid'];
// console.log(array.lastIndexOf('cemil'));
// 10. map(deyiskene yazib array qaytarir)
// const array = ['ruslan', 'ali', 'baba', 'resad', 'cemil', 'seyid']
// const val = array.map(text=>text+" salam");
// console.log(val);
// 11. reverse(tersine cevirir)
// const array = ['ruslan', 'ali', 'baba', 'resad', 'cemil', 'seyid']
// console.log(array.reverse());
// 12. slice(başladığı indexdən davam edərək sonuncu index-i almamaqla dilimliyib geriye array döndürür)
// const array = ['ruslan', 'ali', 'baba', 'resad', 'cemil', 'seyid'];
// console.log(array.slice(1, 5));
// 13. some(en az bir ifade dogrudursa true dondurecek)
// const array = [1, 2, 3, 4, 5];
// const even = (element) => element % 2 === 0;
// console.log(array.some(even));
// 14. sort(herfleri elifba sirasiyla duzur, reqemleri ise siraynan duzur)
// splice(1ci indexdə bitir daha sonra həmin indexdən 6 index sayıb dilimliyir ve geriyə array döndərir)
// const array = [1, 2, 3, 4, 5,6,7,8,9];
// console.log(array.splice(1,6));
// 15.entries(sadə array-dirsə onu .next() ilə bir array yaradıb içinə index və valuesi yazılır)
// const array1 = ['a', 'b', 'c'];
// const iterator1 = array1.entries();
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// const array = ["a", "b", "c"];
// const arrayEntries = array.entries();
// for (const element of arrayEntries) {
//   console.log(element);
// }
// const arrayLike = {
//    length: 3,
//    0: "a",
//    1: "b",
//    2: "c",
//  };
//  for (const entry of Array.prototype.entries.call(arrayLike)) {
//    console.log(entry);
//  }
// 16. find(arraydə olan sözü axtarıb tapır və string göndərir)
// const array1 = ['a', 'b', 'c'];
// const a = array1.find(arr=>arr == 'b');
// console.log(a);
// const inventory = [
//    { name: "apples", quantity: 2 },
//    { name: "bananas", quantity: 0 },
//    { name: "cherries", quantity: 5 },
//  ];
//  const a = inventory.find(arr =>arr.name === "apples");
//  console.log(a);
// 17. findIndex(herfin hansi indexde oldugunu gosterir. eger arr-i hec neye = etmesek 0 vercek)
// const array1 = ['a', 'b', 'c'];
// const a = array1.findIndex(arr=>arr == 'c');
// console.log(a);
// 18. toLocaleString()
// const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
// const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });
// console.log(localeString);
// const arrayLike = {
//    length: 3,
//    0: 1,
//    1: 2,
//    2: 3,
//  };
//  console.log(Array.prototype.toLocaleString.call(arrayLike));
// 19. join()
// const array1 = ['www', 'google', 'com'];
// console.log("/"+array1.join('/'));
// 20. Array.of(string, array, obje ve s. özünün array-nin içinə atır)
// let arr = 'ruslan'
// console.log(Array.of(arr));
// console.log(Array.of('ruslan', 'eli'));
// console.log(Array.of(['ruslan', 'eli']));
// console.log(Array.of({a:'ruslan',b:'eli'}));
// 21. 
// 21. Array.from()
// console.log(Array.from('foo'));
// console.log(Array.from(['ruslan', 'eli']));
// 22. fill(1.dəyər nə ilə başladığını, 2.dəyər neçənci index-dən başlayıb təkrar etməsini deyir. ancaq 3.dəyər həmin arrayin neçədən sonra davam etdiyini deyir)
// const array1 = [1, 2, 3, 4,5,6,7,8,9];
// console.log(array1.fill(5,2,5));
// 23.push()
// const animals = ['pigs', 'goats', 'sheep'];
// const count = animals.push('cows');
// console.log(count);
// console.log(animals);
// 24. includes(true false)
// const animals = ['pigs', 'goats', 'sheep'];
// console.log(animals.includes('pigs'));
// 25. push(sondan silir)
// const animals = ['pigs', 'goats', 'sheep'];
// const a = animals.pop();
// console.log(animals);
//  . reduce(anlamlı olduğuna görə prototürk əla izah edir)