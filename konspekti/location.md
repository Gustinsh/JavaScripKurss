* ``` location.assign('https://www.javascripttutorial.net') ```
 Varēs tikt ar atpakaļ pogu uz iepriekšējo lapu

* ```location.replace ('https://www.javascripttutorial.net')```
```setTimeout(() => {```
    ``` location.replace('https://www.javascripttutorial.net');```
```}, 3000); ```
pēc 3 sekundēm aizmetīs us lapu: https://www.javascripttutorial.net, bet nevarēs tikt ar back atpakaļ uz lapu.
NB! ar Chrome vajag darboties ar lapu, lai tas strādātu, ar Mozzilla- nevajag darboties, atgriež
```reload()```
* tiks atjaunota esošā lapa
* ```reload()``` izmanto kā pēdējo rindu kodā, jo kods pēc reload var vairs nestrādāt.

# Query string
* pieņemot ka lokācija ir ```'?type=list&page=20'```
ar zemāk minēto metodi var izmantot objektus:
```const urlParams = new URLSearchParams(location.search);```

```for (const [key, value] of urlParams) {```
    ```console.log(`${key}:${value}`);```
```}```
output:
type:list
page:20

* ar metodēm:Keys(); Values() un entries() var dabūt jau konkrētu objektu

# redirection 
```location.href = 'new_url';```
* tāda paša funkcionalitāte kā assign()
