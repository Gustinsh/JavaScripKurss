# Arrays
## Javaskript masīvi masīvu un to lietošana
tiks zimantoti [piemēri](https://www.w3schools.com/js/js_arrays.asp)
-masīviem labāk izmantot const cars ="["Saab", "Volvo", "BMW" "] lai nepazaudētu pāveidojot datu tipu.
-var tikt izveidots tukšs masīvs []
-masīvu var papildināt, izmantojot masīva vārdu (identifakatoru), indeksu ([n]), piešķiršanu (=), bet jāuzmanās ar indeksiem, jo var palikt undefined vērtības, ja ineksu vētības neies secīgi
-vērtība "," - tā masīvus attēlo atdalot ar kommatu, bet tas ir noklusētais
-pie masīvu elementiem vērtībām tiek izmantojot masīva vārdu un indeksu
-masīvs ir objekts
- ar XXX.length var noskaidrot elementu skaitu masīvā
Lai atrastu pēdējo vērtību jāizmanto masīva garaums piem: 
cars [ cars.length-1]
-masīva pirmā elementa veŗtību iegūst ar [0] indeksu
-masīva pēdējo elementu iegūst ar [.length-1]
## [Masīvu  metodes](https://www.w3schools.com/js/js_array_methods.asp) noderīgas darbam ar masīviem
-Simbolu rinda arī ir masīvs
-masīvu palielināšana no beigām, push metode cars.push("Audi")
-cars.pop() tiek nogriezta (dzēsta) pēdējā vērtība. 
-cars.splice (2,0, [value]); kur 2 kurā elementā ielikt; 0- cik izgriezt
- masīvu papildināšana un apvienošana- .concat() netiek mainīts sākuma masīvs
cars.slice (2,5)  2 nokopē vērtības no norādītās vērtības (ieskaitot) no otrās līdz 5(neieskaitot)(netiek izmantots sākuma vērtība)
## [Masīvu  kārtošana](https://www.w3schools.com/js/js_array_sort.asp) noderīgas darbam ar masīviem
-masīvu vērtību kārtošana - .sort() (tiek izmainīts pats masīvs ASCII koda secībā)
-.reverse() pārkārtot otrādi
-masīvu ar skaitļiem kārtošanai ir jāpievieno papildus konstrukcija (function(a, b){return a - b})
min vērtības iegūšanai var izmantot sort() un [0] indeksu (vajadzības gadījumā izmantot masīva kopiju)
max vērtības iegūšanai var izmantotsort() un [n-1] indeksu kur n ir masīva garums(vajadzības gadījumā izmantot masīva kopiju)
### Javascript objekti.
[izmēģināts un tulkots no](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
#### Objektu izveidošana
-declaring an object literal ("tiešā" piešķiršana)  
```
const object_name = {}; //pazīme - {} iekavās
```
-Using constructor function (izmantojot konstruktora funkciju);
-"gari"(ar iekšējo tukšu objektu)
```
function createNewObject ( ... ){ ... }
const object name = createNewObject( ... );
```
-"īsi" (bez iekšējā tukšā objekta, bet izmantojot atslēgas vārdu)

```new```; **NB!** ir izmainīta - papildināta standarta
``` constructor``` funkcija)

function NewObject( ... ){ ... }
const object_name = new NewObject( ... );

- standarta objekta konstruktors
``` const object_name = new object()```
-using the create() method (kā prototipu izmantojot kādu jau esošo objektu)
```
let new_object_name = Object.create(object_name)
```

