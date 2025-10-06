# Astro Butteria

Astro butteria is a simple website built with Astro and Tailwind CSS to showcase recipes and food products. It uses the Strapi API to fetch the data.

## Features

### Food products

Food products are the products for the user to select. They can see the list of the product and see the details of it. List of features:

- Show all food products, classified based on type
- See the details of the food product

#### Technical

food products available under resources: /api/display-windows

### Recipes

Recipes are section of the web app that can be accessed by user who have access. User need to enter the password on entering this page.

- Show all recipes, grouped alphabetically
- On click, display the detailed of the recipes
- User can download the recipes into PDF

#### Technical

food products available under resources: /api/recipes

## Build plan

### Initial build

#### Task 1 - Build a working Astro project with working API call to fetch data from /api/recipes endpoint

##### Task 1.1 - Define model of GET /api/recipes responses [Done ✅]

Generate interface under `./src/interfaces` directory. The response are as in code section below

```json
[{"id":11,"documentId":"rsvuik7bgyw2z9pzpvp1edgr","name":"Shrimp Gratin Bread","description":"The bread is generously covered with a creamy, molten cheese sauce (likely a gratin or béchamel base), which is bubbling and has beautifully dripped down the sides. Layered on top are several plump, pink shrimp, perfectly cooked and nestled into the sauce.","createdAt":"2025-10-04T08:52:43.448Z","updatedAt":"2025-10-04T10:44:04.991Z","publishedAt":"2025-10-04T10:44:05.517Z","locale":"en","ingredientGroups":[{"id":9,"groupName":"Main bread","ingredients":[{"id":46,"name":"High protein flour","unit":"gram","amount":[{"id":51,"value":100,"level":"normal"}]},{"id":47,"name":"Dry yeast","unit":"tsp","amount":[{"id":52,"value":1.3,"level":"normal"}]},{"id":48,"name":"Sugar","unit":"tbsp","amount":[{"id":53,"value":1.3,"level":"normal"}]},{"id":49,"name":"Egg","unit":"pcs","amount":[{"id":54,"value":0.5,"level":"normal"}]},{"id":50,"name":"Water","unit":"ml","amount":[{"id":55,"value":100,"level":"normal"}]}]},{"id":10,"groupName":"Bread 2","ingredients":[{"id":51,"name":"High protein flour","unit":"gram","amount":[{"id":56,"value":100,"level":"normal"}]},{"id":52,"name":"Salt","unit":"tsp","amount":[{"id":57,"value":0.5,"level":null}]},{"id":53,"name":"Unsalted butter (Anchor, Lurpark)","unit":"gram","amount":[{"id":58,"value":20,"level":"normal"}]}]},{"id":11,"groupName":"Shaping","ingredients":[{"id":54,"name":"Fried onion","unit":"gram","amount":[{"id":59,"value":10,"level":"normal"}]}]},{"id":12,"groupName":"Shrimp Gratin Filling","ingredients":[{"id":55,"name":"White sauce","unit":"gram","amount":[{"id":60,"value":100,"level":"normal"}]},{"id":56,"name":"Peeled shrimp","unit":"gram","amount":[{"id":61,"value":70,"level":"normal"}]},{"id":57,"name":"White pepper","unit":"tsp","amount":[{"id":62,"value":1,"level":"normal"}]},{"id":58,"name":"Beaten egg","unit":"tbsp","amount":[{"id":63,"value":1,"level":"normal"}]},{"id":59,"name":"Mozzarella cheese","unit":"gram","amount":[{"id":64,"value":40,"level":"normal"}]}]},{"id":13,"groupName":"Finishing","ingredients":[{"id":60,"name":"Dried parsley","unit":"tsp","amount":[{"id":65,"value":1,"level":"normal"}]}]}],"steps":[{"id":26,"title":"-","stage":"Preparation","description":"- Bring beaten egg and unsalted butter to room temperature\n- Warm water to 42 C\n- Devein the shrimp, clean and rise it with water, then dry it using kitchen towel","duration":null},{"id":27,"title":"Measuring & Kneeding","stage":"Instructions","description":"- Weigh the ingredients in Main Bread [1] in big bowl and Other Bread [2] in another bowl.\n- Pour water onto the yeast in bowl [1] and mix well using wooden spatula\n- Add in the ingredients [2] and mix gently so that the flour does not scatter.\n- Kneed the dough on the table until smooth. Shape it into a ball and place it into the bowl with its seam side down, then cover with plastic wrap.\n","duration":null},{"id":28,"title":"First Fermentation","stage":"Instructions","description":"- Ferment at 40 C for 25 - 35 minutes","duration":35},{"id":29,"title":"Shrimp Gratin Filling","stage":"Instructions","description":"Mix white sauce, shrimp, and white pepper in a bowl.","duration":null},{"id":30,"title":"Finger Test, Degas, Divide, and Bench Time","stage":"Instructions","description":"- Do finger test on the dough and degas.\n- Divide it into 6 parts\n- Place them under a plastic wrap or wet towel with the seam side down for 10 minutes (bench time)","duration":10},{"id":31,"title":"Shaping","stage":"Instructions","description":"- With the seam side facing up, spread the dough into 10 cm diameter round size.\n- Spread fried onion, then roll the dough from the side closest to you.]\n- Seal the end of roll and put both sides a little inside.\n- With the seam side facing down, place the dough on the prepared baking tray lined with baking paper. \n- Repeat the whole process for the remaining dough.","duration":null},{"id":32,"title":"Second Fermentation","stage":"Instructions","description":"Cover with wet cloth or plastic wrap and ferment at 40 C for 15 - 20 minutes","duration":20},{"id":33,"title":"Baking","stage":"Instructions","description":"- Brush the surface of the dough with beaten egg.\n- Cut the middle of the dough (depth about 1.5 cm and length around 80% of the dough) using scissor.\n- Place shrimp gratin filling in the middle of the dough.\n- Top with mozzarella cheese and bake in the oven (180 C, 15 - 20 mins)","duration":20},{"id":34,"title":"Finishing","stage":"Instructions","description":"- Once baked, garnish the bread with dried parsley","duration":null}],"author":{"id":2,"documentId":"wjpuzwoygu6k76v4h92vldvn","name":"Wanti","email":"suwanti024@gmail.com","createdAt":"2025-10-04T10:10:19.807Z","updatedAt":"2025-10-04T10:10:19.807Z","publishedAt":"2025-10-04T10:10:19.791Z"},"servingSize":{"id":5,"value":6,"unit":"pcs"},"main_display":{"id":10,"documentId":"zbk0hngqizdhofwgut59njpd","name":"shrimp-gratin-bread_main.png","alternativeText":null,"caption":null,"width":1024,"height":1024,"formats":{"large":{"ext":".png","url":"https://skilled-boot-bde5c2b63a.media.strapiapp.com/large_shrimp_gratin_bread_main_6cd406b5ee.png","hash":"large_shrimp_gratin_bread_main_6cd406b5ee","mime":"image/png","name":"large_shrimp-gratin-bread_main.png","path":null,"size":2053.39,"width":1000,"height":1000,"sizeInBytes":2053394},"small":{"ext":".png","url":"https://skilled-boot-bde5c2b63a.media.strapiapp.com/small_shrimp_gratin_bread_main_6cd406b5ee.png","hash":"small_shrimp_gratin_bread_main_6cd406b5ee","mime":"image/png","name":"small_shrimp-gratin-bread_main.png","path":null,"size":573.08,"width":500,"height":500,"sizeInBytes":573081},"medium":{"ext":".png","url":"https://skilled-boot-bde5c2b63a.media.strapiapp.com/medium_shrimp_gratin_bread_main_6cd406b5ee.png","hash":"medium_shrimp_gratin_bread_main_6cd406b5ee","mime":"image/png","name":"medium_shrimp-gratin-bread_main.png","path":null,"size":1243.08,"width":750,"height":750,"sizeInBytes":1243082},"thumbnail":{"ext":".png","url":"https://skilled-boot-bde5c2b63a.media.strapiapp.com/thumbnail_shrimp_gratin_bread_main_6cd406b5ee.png","hash":"thumbnail_shrimp_gratin_bread_main_6cd406b5ee","mime":"image/png","name":"thumbnail_shrimp-gratin-bread_main.png","path":null,"size":63.88,"width":156,"height":156,"sizeInBytes":63875}},"hash":"shrimp_gratin_bread_main_6cd406b5ee","ext":".png","mime":"image/png","size":455.89,"url":"https://skilled-boot-bde5c2b63a.media.strapiapp.com/shrimp_gratin_bread_main_6cd406b5ee.png","previewUrl":null,"provider":"strapi-provider-upload-strapi-cloud","provider_metadata":null,"createdAt":"2025-10-04T08:46:39.503Z","updatedAt":"2025-10-04T08:46:39.503Z","publishedAt":"2025-10-04T08:46:39.503Z"}}]
```

##### Task 1.2 - Build recipes page and call get all recipes endpoint [Done ✅]

get all recipes endpoint: `api/recipes`

on call success, render it in **grid** style. each grid element to contain information:
1. mainDisplay
2. name
3. servingSize

##### Task 1.3 - Build recipe detail page and call recipe endpiont [Done ✅]

Recipe endpoint: `/api/recipe/:documentId`

On grid recipe element click from /recipes page, get it's `documentId` and go to URL `/recipes/:documentId`. Make documentId as slug, and render the html in this format:

From top to bottom
1. recipe name
    * show in heading 1 format
2. Ingredients section
    * create a card row that can be expanded to contain the ingrendient
    * on the right side, render `mainDisplay` image
    * on the left side, build 2 column to contain all ingredient. the ingredients stored inside `ingredientGroups`. Each ingredient object contains `groupName` and the actual ingredients. Igrendient has `name`, `unit` and `amount`. if `amount` is > 1 element, render it with dropdown of the `level`. groupName is highlighted in the UI.
3. Step section
    * each step section has stage, title, duration in minutes, and description.
    * group the step based on its stage. Each stage is displayed inside collapsable element
    * each title is rendered as heading and have duration on the end right side
    * below the title is description that rendered in markdown format

##### Task 1.4 - Create not found page

define not found page into route `/404`. On this page, show `./public/not_found.png` image at the center of the screen. Above the image, print text "Whoops, food not found". Below the image, let user to back to `/` route which is index.astro page. Ensure the content of the page has center alignment both horizontally and vertically.


