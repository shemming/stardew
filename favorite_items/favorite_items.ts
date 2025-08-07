import villagers_json from './villagers.json';
import recipes_json from './recipe_ingredients.json';

// script variables to change outputted list
let desiredGifts = 50;
let allowDoubles = true;
let townOnly = true;

// An object with the key being the villager's name
type Villagers = Record<string, Villager>;

// An object detailing a villager (currently only includes loved gifts)
type Villager = {
  lovedGifts: Array<string>;
};

// tracks the amount of each item needed to gift
type ItemsNeeded = { [item: string]: number };

// represents a recipe and its ingredients
type Recipes = { [recipe: string]: Array<string> };

// extract data from json files
let villagers: Villagers = {};
let recipes: Recipes = {};
Object.assign(villagers, villagers_json);
Object.assign(recipes, recipes_json);

// create a dictionary of items with a list of which villagers love it
let favorites: Record<string, Array<string>> = {};

for (let villager in villagers) {
  villagers[villager].lovedGifts.forEach((item) => {
    favorites[item]
      ? favorites[item].push(villager)
      : (favorites[item] = [villager]);
  });
}

// filter out any entries that have just one villager who loves the item
let filteredFavorites = Object.entries(favorites).filter(([_, villagers]) => {
  return villagers.length > 1;
});

// sort the items so that items with the most villagers are at the top of the list
let sortedFavorites = filteredFavorites.sort(
  (a, b) => b[1].length - a[1].length
);

// track how many gifts have been "given" by algorithm
let givenGifts = 0;

// tracks which gifts are given to which villager
let giftList: { [villager: string]: Array<string> } = {};

// tracks how many of each gift are needed
let itemsNeeded: ItemsNeeded = {};

// index to step through sorted favorites
let i = 0;

// collect gifts until the desired amount of gifts is reached or the list ends
while (givenGifts < desiredGifts && i < sortedFavorites.length) {
  let gift: string = sortedFavorites[i][0];
  let villagers: string[] = sortedFavorites[i][1];

  // give gift to each villager that loves it
  for (let villager of villagers) {
    // skip villagers out of town if requested
    if (townOnly && (villager == 'leo' || villager == 'sandy')) {
      continue;
    }

    if (!giftList[villager]) {
      // if the villager hasn't gotten any gifts, give 1 or 2 depending on if duplicates are allowed
      if (allowDoubles) {
        giftList[villager] = [gift, gift];
        givenGifts = givenGifts + 2;
        addItemToList(itemsNeeded, gift, 2);
      } else {
        giftList[villager] = [gift];
        givenGifts++;
        addItemToList(itemsNeeded, gift);
      }
    } else if (giftList[villager].length < 2) {
      // if the villager already got 1 gift, only give one
      giftList[villager].push(gift);
      givenGifts++;
      addItemToList(itemsNeeded, gift);
    }

    // stop cycling through villagers if we have given enough gifts
    if (givenGifts == desiredGifts) break;
  }

  // move to next gift
  i++;
}

// if gifts are recipes, collect their ingredients list
let ingredientsNeeded: Recipes = {};
for (let item in itemsNeeded) {
  if (item in recipes) {
    ingredientsNeeded[item] = recipes[item];
  }
}

console.log('Number of gifts required: ', desiredGifts);
console.log('Only include villagers in town: ', townOnly);
console.log('Allow repeat gifts: ', allowDoubles);

console.log('Gifts Per Villager:');
console.table(giftList);

console.log('Item Totals Needed:');
console.table(itemsNeeded);

console.log('Ingredients for Recipes Needed: ');
for (let recipe in ingredientsNeeded) {
  console.group(recipe);
  ingredientsNeeded[recipe].forEach((ingredient) =>
    console.log('- ', ingredient)
  );
  console.groupEnd();
}

function addItemToList(
  itemsNeeded: ItemsNeeded,
  item: string,
  numberToAdd: number = 1
) {
  !itemsNeeded[item]
    ? (itemsNeeded[item] = numberToAdd)
    : (itemsNeeded[item] = itemsNeeded[item] + numberToAdd);
}
