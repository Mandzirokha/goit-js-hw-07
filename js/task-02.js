const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListEl = document.querySelector('#ingredients')

const makeIngredientsListEl = ingredientList => {
  return ingredientList.map(ingredient => {

    const ingredientEl = document.createElement('li')
    ingredientEl.textContent = ingredient
    return ingredientEl
  }
  )
}

const elements = makeIngredientsListEl(ingredients)
ingredientsListEl.append(...elements)