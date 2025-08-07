# Stardew Data

One of Mr. Qi's quests asks you to gift 50 loved items in a week. I created a script
that determines the smallest variety of items needed to complete this quest and who
to give the items to.

I also output the variables that can be changed when running the script

To run the script:

```
npx ts-node favorite_items/favorite_items.ts
```

Output:

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
