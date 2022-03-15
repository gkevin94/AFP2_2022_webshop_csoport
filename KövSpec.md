# Webshop követelmény specifikáció


### 1. Jelenlegi helyzet

A CafeBabes vállalkozásunk szörfdeszkákat árusít. Fontos számunkra, hogy a lehető legkisebb környezeti lábnyomot hagyjuk magunk után, ezért a nálunk kapható összes deszka vagy újrahasznosított alapanyagból, vagy biológiailag lebomló anyagból készül.
Különösen figyelünk a termékek csomagolására is, nem használunk semmilyen műanyag csomagolóanyagot sem. Jelenleg csak vásárokban, illetve az online piactereken (Marketplace, Jófogás, Ebay) áruljuk termékeinket.
Minden megrendelés telefonon vagy e-mailen keresztül történik, ezeket pedig egy egyszerű Excel táblázatban vezetjük. Ebben a táblázatban vezetve van, hogy ki mit vásárolt, a termékekből hány darabot kért, illetve, hogy hova kell küldenünk a csomagot.
Minden vásárlás utánvétes csomagküldéssel kerül feladásra, kérhető csomagautomatába, illetve házhozszállítással is. Sajnos az Excel táblázatban való nyilvántartás sokszor problémát okozott, nem került bele egy rendelés, rosszul lett felvéve/beírva és a végén előfordult, hogy az ügyfél rossz terméket kapott, illetve olyan is, hogy egyáltalán nem kapott terméket.


### 2. Megrendelői vízió (Vágyálom)

Vállalkozásunk bővítése érdekében szeretnénk üzletünknek honlapot és egyúttal az adminisztrációnkat támogató rendszert. Szeretnénk, hogy ügyfeleink minden termékünket könnyedén megtalálhassák egy igényes és szép weboldalon.
Szeretnénk nyilvántartásunkat online kezelni, hogy az ügyvezetők bárhonnan rá tudjanak nézni az aktuális információkra. A weboldal könnyen üzemeltethető legyen, különböző szintű belépési rendszerrel (admin, user). Termékeket fel lehessen tölteni, módosítani, különböző kategóriákba besorolni. 
A kategóriákat ugyanúgy lehessen bővíteni, szerkeszteni, törölni. Kimutatásokat szeretnénk elérni az oldalon keresztül, illetve egy áttekinthető oldalt, ahol azonnal látjuk hány regisztrált ügyfelünk van, hány megrendelés és azok milyen státuszban vannak, valamint hány termék van aktív, illetve törölt állapotban.
Szeretnénk ha az ügyfelek a vásárolt termékekről véleményt is írhatnának(szöveges illetve csillagos értékelést egyaránt), de csak a megrendelt temékek kiszállítása után. Természetesen az ügyfelek regisztrációt követően vissza tudják nézni a korábbi rendelésüket, valamint azok állapotát.


### 3. Jelenlegi üzleti folyamatok

3.1 Személyes értékesítés:
Hagyományos módszerrel történik: A vásárló személyesen kiválasztja az üzletben kiállított terméket, majd az eladó munkatársunknál kifizeti azt.

3.2 Online értéksesítés:
Egy munkatársunk a termékeket egyesével feltölti különböző online értékesítési platformokra. (Ebay, Amazon stb.)
    >> A feltöltött termékekről egy táblázatban nyilvántartást vezet.
        >> Fogadja a bejövő hívásokat, üzeneteket, a megrendeléseket rögzíti a táblázatban.
            >> A megrendelést leadja az üzletben dolgozó munkatársaknak, akik összekészítik és becsomagolják a megrendelt termékeket.
                >> A kész csomagot átadja a futárnak.
                    >> Frissíti az Excel táblázatot, újabb termékeket tölt fel online piacterekre.

### 4. Igényelt üzleti folyamatok


### 5. A rendszerre vonatkozó szabályok

A webes felület szabványos eszközökkel készüljön, HTML/CSS/JavaScript. A backend Java nyelven írodjon és MySQL adatbázishoz csatlakozzon. Responsive megjelenés nem kell.  
**Webáruházakra vonatkozó jogszabályok:**
- A Polgári Törvénykönyvről szóló 2013. évi V. törvény (Ptk.);
- Az elektronikus kereskedelmi szolgáltatások, valamint az információs társadalommal összefüggő szolgáltatások egyes kérdéseiről szóló 2001. évi CVIII. törvény (Ektv.);
- A fogyasztóvédelemről szóló 1997. évi CLV. törvény (Fgytv.);
- A fogyasztó és a vállalkozás közötti szerződések részletes szabályairól szóló 45/2014. (II. 26.) Korm. rendelet;
- A fogyasztókkal szembeni tisztességtelen kereskedelmi gyakorlat tilalmáról szóló 2008. évi XLVII. törvény (Fttv.)
- Az egyes tartós fogyasztási cikkekre vonatkozó kötelező jótállásról szóló 151/2003. (IX. 22.) Korm. rendelet
- A termékek eladási ára és egységára, továbbá a szolgáltatások díja feltüntetésének részletes szabályairól szóló 4/2009. (I. 30.) NFGM–SZMM együttes rendelet.
- A fogyasztói jogviták online rendezéséről, valamint a 2006/2004/EK rendelet és a 2009/22/EK irányelv módosításáról szóló 524/2013/EU rendelet

### 6. Követelménylista

ID|Verzió|Név|Kifejtés
--|------|---|--------
K01|V1.0|Termékek adminisztrációja|Termékek regisztrálása, törlése az igényelt üzleti folyamatokban leírtak szerint.
K02|V1.0|Vásárlás adminisztrációja|Vásárlások folyamatának kezelése az igényelt üzleti folyamatokban leírtak szerint.
K03|V1.0|Felhasználói fiókok kezelése|Bejelentkezés, felhasználói adatok módosítása, adminok és felhasználók rögzítése az adatbázisban, listák és kimutatások készítése az igényelt üzleti folyamatokban leírtak szerint.
K04|V1.0|Egyszerűen használható kezelőfelület|Az ismertebb böngészőkből használható felhasználói felület megvalósítása, amely mindenki számára a lehető legegyszerűbb átállást eredményezi.
K05|V1.0|Platformfüggetlen működés|Régóta használatos, operációs rendszertől független technológiák használata: Java, HTML/CSS/JavaScript, MySQL.
K06|V1.0|Költséghatékony üzemeltetés|A szabványos és elterjedt technológiák használata biztosítja.
K07|V1.0|Bővíthetőség|A termékek, valamint a felhasználók számának bővíthetősége, illetve új funkciók utólagos hozzáadásának biztosítása.

### 7. Fogalomszótár

- **Adminisztrátor**: Az a személy, aki a rendszert felügyeli, üzemelteti, valamint minden lehetséges jogosultsággal rendelkezik. Mivel a rendszer jelszó és felhasználói név alapján azonosít, így az minősül adminisztrátornak, akit a rendszer ezek alapján annak azonosít.
- **Felhasználó**: Az a személy, akit a rendszer a felhasználói nevének és jelszavának azonosításával annak azonosít. A felhasználó képes a kosarába helyezni termékeket, azokat módosítani, megrendelést és értékelést leadni.
- **Külső felhasználó**: A felhasználók azon csoportja, melynek hozzáférési jogai jelentősen korlátozottak. A rendszert jelszó nélkül vehetik igénybe, természetesen az őket meg nem illető jogokat, és az ezzel járó korlátozásokat a rendszer biztosítja. Ennek ellenére tájékozódhatnak számukra hasznos információkról, böngészhetik a termékeket, láthatják ezek értékeléseit.
- **Regisztráció**: Az a folyamat, amikor egy külső felhasználó nevének, felhasználói nevének és jelszavának megadása után felhasználói jogokat szerez a rendszerben.
- **Utánvétes csomagküldés**: Az utánvétes csomagküldés főleg a vevőnek hasznos, mert a csomag ellenértékét csak akkor kell kifizetnie, amikor ténylegesen átveszi a csomagot.
- **Csillagos értékelés**: A vásárlók 1-től 5-ig értékelhetik a termékeket, ami az adott számú csillag kijelölésével történik. A többi látogató minden terméknél az összesített értékelést látja.
- **Online értékesítési platform**: Olyan internetes piactér, ahol a vásárlók ugyanúgy válogathatnak a termékekből, mintha a valóságban tennék ugyanezt.
