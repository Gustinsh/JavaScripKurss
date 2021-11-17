# TicTacToe(desas) spēles 
## Noteikumi
1. **3x3 lauciņi**
    1.1 sākumā lauciņi ir tukši (nav aizpildīti ar simboliem)
2. **x** un **o** simboli
3. sākt var jebkurš
4. pirms gājiena notiek labākā gājiena izvēle
5. pēc katra gājiena notiek analīze:
    5.1 vai nav vinnesta kombinācija
    (visa augšējā rinda, visa vidējā rinda, ....
    kollonna,...
    ... diogonāle)
    5.2 vai ir vēl kur iet

## Ieteikumi
- pārdomāt algoritmu
- Pārdomāt pārskatāmu kontroli

## Realizācija ar HTML CSS un JS (R)
0. spēlēs cilvēks un dators.
1. Atbilstoši N.1. -  tabula bez ārējām robežām
katram lauciņam savs idenfikators, bet veinots idenfikatoru nosaukuma sākums
    1.1 Atbilstoši N.1.1 katra šūna ir aizpildīta ar tukšu rindu ```""```
    1.1.2 Katrai šūnai "nospiešanas detaktors" - ```listener``` + ```click```
2. cilvēks izmantos **x** simbolu
3. cilvēks sāk pirmai, datora gājiens vienmēr notiek automātiski pēc, protams ja cilvēks vēl nav uzvarējis un ir kur iet
4. cilvēks domā pats, datoram palīdz algoritms (tiek ievēlēta nākamā šūna gājienam =>šūnām jābūt kaut kādām veidā indeksētām)
5. ...

    5.1 Atbilstoši simbolu (pēc cilvēku gājiena - **x**, pēc datora gājiena - **o** atrašānās vietas un šo atrašānās vietu salīdzina ar vinnesta kombinācijām)
    5.2 Ja ir kur iet, ja tikko ir bijis cilvēka gājiens, tad tiek izpildīts R.4. datoram un, attiecīgi, ja bijis datora gājiens, tad tiek gaidīts notikums - cilvēka izvēle

## Paņēmieni turpmākai izmantošanai
### HTML un CSS
- Tabulas robežu zīmēšana/ nezīmēšana

### JS
- Kontrole katram lauciņam (unificēti, izmantojot vienu un to pašu klasi, bet dažādus id)
- interesējošā lieluma meklēšana masīvā un to indeksu atlase atsevišķā masīvā
```
array_to_look_througth.reduce,e,i) =>(e===value_to_find ? arry_search_result_index_to_store : [])
```
- Masīva (masīva rindas vai kolonnas) visu vērtību meklēšana citā masīvā
```for (let [index, value_list_to_check] of arrey_value_to_find.entries()) {
		if (value_list_to_check.every(elem => arrey_in_which_value_to_find.indexOf(elem) > -1)) {
			.../// what to do if all values in list are found pārbaudāmā masīvā
			break;}}```
- masīvu elemntu atlase atsevišķa masīvā uz kaut kādas nosacījumu bāzes
```
array_to_check.filter(array_current_element => typeof array_current_element == 'number');
```