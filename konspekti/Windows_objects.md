# [Windows Global objects](https://www.javascripttutorial.net/javascript-bom/javascript-window/)
* Windows objekti ir globāli objekti
```innerWidth``` un ```innerHeight  ``` atgriež  lapas izmēru 
```outerWidth ``` un ```outerHeight ``` atgriež pārlūkprogrammas izmēru korģēšanai (piem., lai atvērtu mazāku pārlūkprogrammas lapu)
* lai atvērtu jaunu tabu vai pālūkprogrammu (ir 3 argumenti, trešais argumens izmēri) izmanto ```window.open();```

``` let features = 'height=600,width=800', ```
``` let url = 'http://localhost/js/about.html';```
``` let jsWindow = window.open(url, 'about', features); ```
Ja tiek pievienoti izmēri, atvērsies jauna pārlūkprogramma ar saturu, ja nav izmēri, tad atvērsies jauns tabs
```window.moveTo(x, y)`` izmanto lai pārvietotu windows logu noteiktās koordinātēs x = horizontāli y = vertikāli
```let jsWindow = window.open( 'http://localhost/js/about.html','about','height=600,width=600');```

```setTimeout(() => {```
   ``` jsWindow.moveTo(500, 500);}, 3000);``
   ```jsWindow.close()``` izmanto lai aizvērtu logu

   ```window.opener ``` izmanto lai izmantotu datus un apmainītos no vecā widnows/taba loga