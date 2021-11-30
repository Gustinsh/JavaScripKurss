# Timeout
```let timeoutID  = setTimeout(cb [,delay], arg1, arg2,...); ```
* cb - funkcija kuru izpilda, kad laiks ir pagājis 
* delay- mēra milisekundēs, pēc cik ilga laika sāks darboties cb (call back) funkcija
* arg1, arg2 ... argumenti pēc kuru
 ```clearTimeout() ``` - atceļ timeout
 ```var timeoutID;```

```function showAlert() {```
   ``` timeoutID = setTimeout(alert, 3000, 'setTimeout Demo!');```
```}```

```function clearAlert() {```
   ``` clearTimeout(timeoutID);```
``` } ```
* set setTimeout === funkcija

# setInterval
```setInterval()```
* pasauc funkciju, pēc noteikta intervāla
* clearInterval() atsauc set interval funkciju
* starpība starp ```setInterval ()``` un ```setTimeout ()``` intervāls atkārtojas pēc noteikta laika, timeouts vienreiz nostrādā pēc nosacījuma(pasaukšanas)
