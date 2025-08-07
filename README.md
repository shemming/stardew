# Stardew Data

One of Mr. Qi's quests asks you to gift 50 loved items in a week. I created a script
that determines the smallest variety of items needed to complete this quest and who
to give the items to.

I also output the variables that can be changed when running the script

To run the script:

```
npx ts-node favorite_items/favorite_items.ts
```

Outputs:

```
Number of gifts required:  50
Only include villagers in town:  true
Allow repeat gifts:  true
Gifts Per Villager:
┌───────────┬────────────────────┬────────────────────┐
│ (index)   │ 0                  │ 1                  │
├───────────┼────────────────────┼────────────────────┤
│ maru      │ 'Diamond'          │ 'Diamond'          │
│ penny     │ 'Diamond'          │ 'Diamond'          │
│ evelyn    │ 'Diamond'          │ 'Diamond'          │
│ gus       │ 'Diamond'          │ 'Diamond'          │
│ jodi      │ 'Diamond'          │ 'Diamond'          │
│ krobus    │ 'Diamond'          │ 'Diamond'          │
│ marnie    │ 'Diamond'          │ 'Diamond'          │
│ willy     │ 'Diamond'          │ 'Diamond'          │
│ abigail   │ 'Amethyst'         │ 'Amethyst'         │
│ emily     │ 'Amethyst'         │ 'Amethyst'         │
│ clint     │ 'Amethyst'         │ 'Amethyst'         │
│ dwarf     │ 'Amethyst'         │ 'Amethyst'         │
│ haley     │ 'Pink Cake'        │ 'Pink Cake'        │
│ jas       │ 'Pink Cake'        │ 'Pink Cake'        │
│ vincent   │ 'Pink Cake'        │ 'Pink Cake'        │
│ sam       │ 'Cactus Fruit'     │ 'Cactus Fruit'     │
│ linus     │ 'Cactus Fruit'     │ 'Cactus Fruit'     │
│ pam       │ 'Cactus Fruit'     │ 'Cactus Fruit'     │
│ leah      │ 'Vegetable Medley' │ 'Vegetable Medley' │
│ lewis     │ 'Vegetable Medley' │ 'Vegetable Medley' │
│ elliot    │ 'Duck Feather'     │ 'Duck Feather'     │
│ harvey    │ 'Wine'             │ 'Wine'             │
│ shane     │ 'Pizza'            │ 'Pizza'            │
│ sebastian │ 'Frog Egg'         │ 'Frog Egg'         │
│ robin     │ 'Goat Cheese'      │ 'Goat Cheese'      │
└───────────┴────────────────────┴────────────────────┘
Item Totals Needed:
┌──────────────────┬────────┐
│ (index)          │ Values │
├──────────────────┼────────┤
│ Diamond          │ 16     │
│ Amethyst         │ 8      │
│ Pink Cake        │ 6      │
│ Cactus Fruit     │ 6      │
│ Vegetable Medley │ 4      │
│ Duck Feather     │ 2      │
│ Wine             │ 2      │
│ Pizza            │ 2      │
│ Frog Egg         │ 2      │
│ Goat Cheese      │ 2      │
└──────────────────┴────────┘
Ingredients for Recipes Needed:
Pink Cake
  -  Melon
  -  Wheat Flour
  -  Sugar
  -  Egg
Vegetable Medley
  -  Tomato
  -  Beet
Pizza
  -  Wheat Flour
  -  Tomato
  -  Cheese
```

```
Number of gifts required:  50
Only include villagers in town:  false
Allow repeat gifts:  true
Gifts Per Villager:
┌───────────┬────────────────────┬────────────────────┐
│ (index)   │ 0                  │ 1                  │
├───────────┼────────────────────┼────────────────────┤
│ maru      │ 'Diamond'          │ 'Diamond'          │
│ penny     │ 'Diamond'          │ 'Diamond'          │
│ evelyn    │ 'Diamond'          │ 'Diamond'          │
│ gus       │ 'Diamond'          │ 'Diamond'          │
│ jodi      │ 'Diamond'          │ 'Diamond'          │
│ krobus    │ 'Diamond'          │ 'Diamond'          │
│ marnie    │ 'Diamond'          │ 'Diamond'          │
│ willy     │ 'Diamond'          │ 'Diamond'          │
│ abigail   │ 'Amethyst'         │ 'Amethyst'         │
│ emily     │ 'Amethyst'         │ 'Amethyst'         │
│ clint     │ 'Amethyst'         │ 'Amethyst'         │
│ dwarf     │ 'Amethyst'         │ 'Amethyst'         │
│ haley     │ 'Pink Cake'        │ 'Pink Cake'        │
│ jas       │ 'Pink Cake'        │ 'Pink Cake'        │
│ vincent   │ 'Pink Cake'        │ 'Pink Cake'        │
│ sam       │ 'Cactus Fruit'     │ 'Cactus Fruit'     │
│ linus     │ 'Cactus Fruit'     │ 'Cactus Fruit'     │
│ pam       │ 'Cactus Fruit'     │ 'Cactus Fruit'     │
│ leah      │ 'Vegetable Medley' │ 'Vegetable Medley' │
│ lewis     │ 'Vegetable Medley' │ 'Vegetable Medley' │
│ elliot    │ 'Duck Feather'     │ 'Duck Feather'     │
│ leo       │ 'Duck Feather'     │ 'Duck Feather'     │
│ harvey    │ 'Wine'             │ 'Wine'             │
│ shane     │ 'Pizza'            │ 'Pizza'            │
│ sebastian │ 'Frog Egg'         │ 'Frog Egg'         │
└───────────┴────────────────────┴────────────────────┘
Item Totals Needed:
┌──────────────────┬────────┐
│ (index)          │ Values │
├──────────────────┼────────┤
│ Diamond          │ 16     │
│ Amethyst         │ 8      │
│ Pink Cake        │ 6      │
│ Cactus Fruit     │ 6      │
│ Vegetable Medley │ 4      │
│ Duck Feather     │ 4      │
│ Wine             │ 2      │
│ Pizza            │ 2      │
│ Frog Egg         │ 2      │
└──────────────────┴────────┘
Ingredients for Recipes Needed:
Pink Cake
  -  Melon
  -  Wheat Flour
  -  Sugar
  -  Egg
Vegetable Medley
  -  Tomato
  -  Beet
Pizza
  -  Wheat Flour
  -  Tomato
  -  Cheese
```

```
Number of gifts required:  50
Only include villagers in town:  true
Allow repeat gifts:  false
Gifts Per Villager:
┌───────────┬────────────────────┬──────────────────┐
│ (index)   │ 0                  │ 1                │
├───────────┼────────────────────┼──────────────────┤
│ maru      │ 'Diamond'          │ 'Iridium Bar'    │
│ penny     │ 'Diamond'          │ 'Emerald'        │
│ evelyn    │ 'Diamond'          │ 'Chocolate Cake' │
│ gus       │ 'Diamond'          │ 'Fish Taco'      │
│ jodi      │ 'Diamond'          │ 'Chocolate Cake' │
│ krobus    │ 'Diamond'          │ 'Iridium Bar'    │
│ marnie    │ 'Diamond'          │ 'Pink Cake'      │
│ willy     │ 'Diamond'          │ 'Iridium Bar'    │
│ abigail   │ 'Amethyst'         │ 'Chocolate Cake' │
│ emily     │ 'Amethyst'         │ 'Emerald'        │
│ clint     │ 'Amethyst'         │ 'Emerald'        │
│ dwarf     │ 'Amethyst'         │ 'Emerald'        │
│ haley     │ 'Pink Cake'        │ 'Coconut'        │
│ jas       │ 'Pink Cake'        │                  │
│ vincent   │ 'Pink Cake'        │ 'Frog Egg'       │
│ sam       │ 'Cactus Fruit'     │ 'Pizza'          │
│ linus     │ 'Cactus Fruit'     │ 'Coconut'        │
│ pam       │ 'Cactus Fruit'     │ 'Beer'           │
│ leah      │ 'Vegetable Medley' │ 'Wine'           │
│ lewis     │ 'Vegetable Medley' │ 'Hot Pepper'     │
│ elliot    │ 'Duck Feather'     │ 'Tom Kha Soup'   │
│ harvey    │ 'Wine'             │                  │
│ shane     │ 'Pizza'            │ 'Beer'           │
│ sebastian │ 'Frog Egg'         │ 'Void Egg'       │
│ robin     │ 'Goat Cheese'      │                  │
│ demetrius │ 'Strawberry'       │                  │
│ caroline  │ 'Fish Taco'        │ 'Green Tea'      │
└───────────┴────────────────────┴──────────────────┘
Item Totals Needed:
┌──────────────────┬────────┐
│ (index)          │ Values │
├──────────────────┼────────┤
│ Diamond          │ 8      │
│ Amethyst         │ 4      │
│ Emerald          │ 4      │
│ Pink Cake        │ 4      │
│ Iridium Bar      │ 3      │
│ Cactus Fruit     │ 3      │
│ Chocolate Cake   │ 3      │
│ Vegetable Medley │ 2      │
│ Duck Feather     │ 1      │
│ Tom Kha Soup     │ 1      │
│ Wine             │ 2      │
│ Pizza            │ 2      │
│ Frog Egg         │ 2      │
│ Void Egg         │ 1      │
│ Beer             │ 2      │
│ Hot Pepper       │ 1      │
│ Coconut          │ 2      │
│ Goat Cheese      │ 1      │
│ Strawberry       │ 1      │
│ Fish Taco        │ 2      │
│ Green Tea        │ 1      │
└──────────────────┴────────┘
Ingredients for Recipes Needed:
Pink Cake
  -  Melon
  -  Wheat Flour
  -  Sugar
  -  Egg
Chocolate Cake
  -  Wheat Flour
  -  Sugar
  -  Egg
Vegetable Medley
  -  Tomato
  -  Beet
Tom Kha Soup
  -  Coconut
  -  Shrimp
  -  Common Mushroom
Pizza
  -  Wheat Flour
  -  Tomato
  -  Cheese
Fish Taco
  -  Tuna
  -  Tortilla
  -  Red Cabbage
  -  Mayonnaise
```

```
Number of gifts required:  50
Only include villagers in town:  false
Allow repeat gifts:  false
Gifts Per Villager:
┌───────────┬────────────────────┬──────────────────┐
│ (index)   │ 0                  │ 1                │
├───────────┼────────────────────┼──────────────────┤
│ maru      │ 'Diamond'          │ 'Iridium Bar'    │
│ penny     │ 'Diamond'          │ 'Emerald'        │
│ evelyn    │ 'Diamond'          │ 'Chocolate Cake' │
│ gus       │ 'Diamond'          │                  │
│ jodi      │ 'Diamond'          │ 'Chocolate Cake' │
│ krobus    │ 'Diamond'          │ 'Iridium Bar'    │
│ marnie    │ 'Diamond'          │ 'Pink Cake'      │
│ willy     │ 'Diamond'          │ 'Iridium Bar'    │
│ abigail   │ 'Amethyst'         │ 'Chocolate Cake' │
│ emily     │ 'Amethyst'         │ 'Emerald'        │
│ clint     │ 'Amethyst'         │ 'Emerald'        │
│ dwarf     │ 'Amethyst'         │ 'Emerald'        │
│ haley     │ 'Pink Cake'        │ 'Coconut'        │
│ jas       │ 'Pink Cake'        │                  │
│ vincent   │ 'Pink Cake'        │ 'Frog Egg'       │
│ sam       │ 'Cactus Fruit'     │ 'Pizza'          │
│ linus     │ 'Cactus Fruit'     │ 'Coconut'        │
│ pam       │ 'Cactus Fruit'     │ 'Beer'           │
│ leah      │ 'Vegetable Medley' │ 'Wine'           │
│ lewis     │ 'Vegetable Medley' │ 'Hot Pepper'     │
│ elliot    │ 'Duck Feather'     │ 'Tom Kha Soup'   │
│ leo       │ 'Duck Feather'     │ 'Parrot Egg'     │
│ harvey    │ 'Wine'             │                  │
│ shane     │ 'Pizza'            │ 'Beer'           │
│ sebastian │ 'Frog Egg'         │ 'Void Egg'       │
│ robin     │ 'Goat Cheese'      │                  │
│ demetrius │ 'Strawberry'       │                  │
│ caroline  │ 'Fish Taco'        │                  │
└───────────┴────────────────────┴──────────────────┘
Item Totals Needed:
┌──────────────────┬────────┐
│ (index)          │ Values │
├──────────────────┼────────┤
│ Diamond          │ 8      │
│ Amethyst         │ 4      │
│ Emerald          │ 4      │
│ Pink Cake        │ 4      │
│ Iridium Bar      │ 3      │
│ Cactus Fruit     │ 3      │
│ Chocolate Cake   │ 3      │
│ Vegetable Medley │ 2      │
│ Duck Feather     │ 2      │
│ Tom Kha Soup     │ 1      │
│ Wine             │ 2      │
│ Pizza            │ 2      │
│ Frog Egg         │ 2      │
│ Void Egg         │ 1      │
│ Beer             │ 2      │
│ Hot Pepper       │ 1      │
│ Parrot Egg       │ 1      │
│ Coconut          │ 2      │
│ Goat Cheese      │ 1      │
│ Strawberry       │ 1      │
│ Fish Taco        │ 1      │
└──────────────────┴────────┘
Ingredients for Recipes Needed:
Pink Cake
  -  Melon
  -  Wheat Flour
  -  Sugar
  -  Egg
Chocolate Cake
  -  Wheat Flour
  -  Sugar
  -  Egg
Vegetable Medley
  -  Tomato
  -  Beet
Tom Kha Soup
  -  Coconut
  -  Shrimp
  -  Common Mushroom
Pizza
  -  Wheat Flour
  -  Tomato
  -  Cheese
Fish Taco
  -  Tuna
  -  Tortilla
  -  Red Cabbage
  -  Mayonnaise
```
