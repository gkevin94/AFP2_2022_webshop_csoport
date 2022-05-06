# Rendszerspecifikáció

A követelmény specifikációban megfogalmazott feladatok elkészítés több ütemben készül el.

## A rendszerrel szemben támasztott általános követelmények

- A rendszer egyes funkcióit csak bejelentkezett felhasználó használhatja.
- Frontend HTML/JS/CSS.
- Backend Java nyelven írodjon, SprinBoot használatával.
- Adattárolás MySQL adatbáziban.

## Az alkalmazásokkal szemben támasztott funkcionális követelmények

- Felhasználókezelés
  - Admin
   - User

## Funkcionális követelmények

### Admin által elérhető funkciók

- webes felületen keresztül elérhető funkciók:
    - termékek feltöltése, módosítása, törlése
    - kategóriák kezelése (hozzáadás, módosítás, törlés)
    - kimutatások megtekintése
    - rendelések kezelése
    - userek kezelése (törlés, módosítás)

### User által elérhető funkciók

- webes felületen keresztül elérhető funkciók:
    - rendelések megtekintése
    - satát profil megtekintése illetve módosítása (name, username, password)
    - kategóriák szerinti termék szűrés
    - kosár

## Adatbázis terv
Karakterkódolás UTF8. Tábla és mezőneveknél snake_case konvenciót alkalmazunk. 
- PK - alapból auto increment, ha más nincs megadva. 
- mezők - ahol nincs megadva, ott az alapparaméterek: null 
- FK - kapcsoló mezők konvenciója: fk_X_Y, ahol X az alaptábla és Y a kapcsolt tábla
- zárójelben az alapértelmezett érték

#### Táblák:

- Termék tábla
	- táblanév: products
	- mező nevek: 
		- id, PK
		- code, UQ
		- name, UQ
		- address, UQ
		- manufacturer
		- price, not null
		- product_status, (ACTIVE)
		- category_id, (1), fk_products_categories

- Ügyfél tábla
	- táblanév: users
	- mezők neve:
		- id, PK
		- name
		- user_name, UQ
		- password
		- role
		- enabled
		- user_status

- Kosár tábla
	- táblanév: basket
	- mezők neve:
		- id, PK
		- user_id, UQ, fk_basket_users
		- product_id, fk_product_basket
		- pieces

- Megrendelés tábla:
	- táblanév: orders
	- mezők neve: 
		- id, PK
		- purchase_time
		- user_id, fk_orders_user_id
		- order_status
		- delivery_id, fk_orders_delivery

- Megrendelt termékek tábla
	- táblanév: ordered_products
	- mezők neve:
	    - id, PK
		- product_id, fk_ordered_items_products
		- order_id, fk_ordered_items_baskets
		- order_price
		- ordering_name
		- pieces

- Kategóriák tábla
	- táblanév: category
	- mezők neve:
		- id, PK
		- name
		- ordinal

- Értékelés tábla
	- táblanév: feedback
	- mezők neve:
		- id, PK
		- user_id, fk_feedback_users
		- product_id, fk_feedback_product
		- rating
		- feedback
		- feedback_date
	
- Szállítási tábla
	- táblanév: delivery
	- mezők neve:
		- id, PK
		- user_id, fk_feedback_users
		- address

- Képek tábla
	- táblanév: images
	- mezők neve:
		- id, PK
		- image_file
		- file_type
		- file_name
		- product_id, fk_feedback_product
