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

From top to bottom:

1. recipe name
    - show in heading 1 format
2. Ingredients section
    - create a card row that can be expanded to contain the ingrendient
    - on the right side, render `mainDisplay` image
    - on the left side, build 2 column to contain all ingredient. the ingredients stored inside `ingredientGroups`. Each ingredient object contains `groupName` and the actual ingredients. Igrendient has `name`, `unit` and `amount`. if `amount` is > 1 element, render it with dropdown of the `level`. groupName is highlighted in the UI.
3. Step section
    - each step section has stage, title, duration in minutes, and description.
    - group the step based on its stage. Each stage is displayed inside collapsable element
    - each title is rendered as heading and have duration on the end right side
    - below the title is description that rendered in markdown format

##### Task 1.4 - Create not found page [Done ✅]

define not found page into route `/404`. On this page, show `./public/not_found.png` image at the center of the screen. Above the image, print text "Whoops, food not found". Below the image, let user to back to `/` route which is index.astro page. Ensure the content of the page has center alignment both horizontally and vertically.

### Task 2 - Build homepage as landing page for the users

Concept: The page consist of header with logo and title on the left and menu in the right. Below the header, render items according to the type. By default, it render all items with pagination in the bottom. Menu consist of "cake", "bread", when user click menu, it shows only items according to the type. Currently type is only bread and cake. When user click the item, show a dialog where user can select the size, quantity, and click "Ask about it" button. "Ask about it" button currently is do nothing.

#### Task 2.1 - Create locale support [Done ✅]

On the router, add locale path as the first path. Currently the locale is only `id-ID` or `en`. Currently the path has nothing to do with the content, default to `id-ID`. Remember to also adapt `/recipes` and `recipes/<id>` routing. Impact of the locale feature is, now when calling Strapi API such as in `pages/recipes.astro`, add header locale equal to the locale value in the path.

#### Task 2.2 - Create header component [Done ✅]

Create header with logo and title on the left. Logo is using `public/butteria.png` and title is `Butteria`. On the right, put Menu according to `GET /api/global` with query param: `populate[0]=menu`, `populate[1]=logo`, `populate[2]=favicon`, and locale. Locale is the first path of the page, At the most right, have language selector dropdown, the selector is English and Indonesia. Have country flag icon on it.

GET `api/global` return payload with structure:

```json
{"data":{"id":1,"documentId":"az3d3m4czw2brvt5nah82dzj","siteName":"Butteria","siteDescription":"Felix and Wanti bakery house","createdAt":"2025-10-02T10:44:37.438Z","updatedAt":"2025-10-11T08:49:14.855Z","publishedAt":"2025-10-11T08:49:14.585Z","locale":"en","menu":[{"id":1,"name":"Home","path":"home"},{"id":2,"name":"Cake","path":"cake"},{"id":3,"name":"Bread","path":"bread"},{"id":4,"name":"About","path":"about"}],"logo":{"id":14,"documentId":"gxhdifwwx7vco3zqkzhzowuh","name":"Butteria.png","alternativeText":null,"caption":null,"width":512,"height":512,"formats":{"small":{"ext":".png","url":"https://skilled-boot-bde5c2b63a.media.strapiapp.com/small_Butteria_66c2f5850e.png","hash":"small_Butteria_66c2f5850e","mime":"image/png","name":"small_Butteria.png","path":null,"size":89.74,"width":500,"height":500,"sizeInBytes":89742},"thumbnail":{"ext":".png","url":"https://skilled-boot-bde5c2b63a.media.strapiapp.com/thumbnail_Butteria_66c2f5850e.png","hash":"thumbnail_Butteria_66c2f5850e","mime":"image/png","name":"thumbnail_Butteria.png","path":null,"size":18.29,"width":156,"height":156,"sizeInBytes":18287}},"hash":"Butteria_66c2f5850e","ext":".png","mime":"image/png","size":16.3,"url":"https://skilled-boot-bde5c2b63a.media.strapiapp.com/Butteria_66c2f5850e.png","previewUrl":null,"provider":"strapi-provider-upload-strapi-cloud","provider_metadata":null,"createdAt":"2025-10-11T08:44:59.778Z","updatedAt":"2025-10-11T08:44:59.778Z","publishedAt":"2025-10-11T08:44:59.778Z"},"favicon":{"id":7,"documentId":"eu873kezwhixfs0nkkl52bqz","name":"logo.jpg","alternativeText":null,"caption":null,"width":640,"height":640,"formats":{"small":{"ext":".jpg","url":"https://skilled-boot-bde5c2b63a.media.strapiapp.com/small_logo_c60384587e.jpg","hash":"small_logo_c60384587e","mime":"image/jpeg","name":"small_logo.jpg","path":null,"size":17.11,"width":500,"height":500,"sizeInBytes":17111},"thumbnail":{"ext":".jpg","url":"https://skilled-boot-bde5c2b63a.media.strapiapp.com/thumbnail_logo_c60384587e.jpg","hash":"thumbnail_logo_c60384587e","mime":"image/jpeg","name":"thumbnail_logo.jpg","path":null,"size":3.38,"width":156,"height":156,"sizeInBytes":3382}},"hash":"logo_c60384587e","ext":".jpg","mime":"image/jpeg","size":23.79,"url":"https://skilled-boot-bde5c2b63a.media.strapiapp.com/logo_c60384587e.jpg","previewUrl":null,"provider":"strapi-provider-upload-strapi-cloud","provider_metadata":null,"createdAt":"2025-10-02T10:52:36.236Z","updatedAt":"2025-10-02T10:52:36.236Z","publishedAt":"2025-10-02T10:52:36.236Z"}},"meta":{}}
```

From that response:

- Use siteName as the Title
- Use siteDescription as sub title of the header
- Use `menu` object to render the menu in the header, use `menu.name` as the text, and `menu.path` as the value that we will use as URL path to open new page.
- Use `logo.formats.small.url` as image source as Logo in the header.
- Use `favicon.formats.small.url` as image source for website favicon.

This header to be shown in every page! Highlight the active menu as well.

#### Task 2.3 - Change locale on language button selected [Done ✅]

On the first load, read the locale from the path and determine the right language in the header dropdown. Also, when user change the language, reload the page and change the locale in the path accordingly.

#### Task 2.4 - Load the content of items in the home page [Done ✅]

Make /home as landing page if user doesn't select any route when open the page. Use static route for this page, show content of GET `api/display-windows/`. Include query param:

```json
{
    "populate[0]": "prices",
    "populate[1]": "displayMain",
    "populate[1]": "physicalInformations",
    "locale": "en" //depends on the locale in the path, can be "en" or "id-ID"
}
```

response payload is:

```json
{"data":[{"id":4,"documentId":"ac7volykz4ee84dady1oiw8l","name":"Shrimp Gratin Bread","description":"A steaming, savory delicacy emerges from the heat: the **Shrimp Gratin Bread**. It begins with a robust, crusty loaf, its edge perfectly toasted and darkened, forming a strong cradle for the decadent toppings. A rich, molten cheese sauce blankets the bread, spilling down the sides in thick, irresistible drips. Nestled into this creamy expanse are succulent, pink shrimp, perfectly cooked and glistening. A final dusting of **golden breadcrumbs** creates a delicious, caramelized crust, promising a satisfying crunch. The air above the dish shimmers with rising steam, a powerful visual cue that this appetizer is piping hot, fresh, and ready to be devoured.","isAvailable":true,"createdAt":"2025-10-04T10:46:33.881Z","updatedAt":"2025-10-10T14:32:10.420Z","publishedAt":"2025-10-10T14:32:10.695Z","prices":[{"id":10,"name":"6 pcs","value":100000},{"id":11,"name":"9 pcs","value":120000},{"id":12,"name":"12 pcs","value":150000}],"displayMain":{"id":10,"documentId":"zbk0hngqizdhofwgut59njpd","name":"shrimp-gratin-bread_main.png","alternativeText":null,"caption":null,"width":1024,"height":1024,"formats":{"large":{"ext":".png","url":"https://skilled-boot-bde5c2b63a.media.strapiapp.com/large_shrimp_gratin_bread_main_6cd406b5ee.png","hash":"large_shrimp_gratin_bread_main_6cd406b5ee","mime":"image/png","name":"large_shrimp-gratin-bread_main.png","path":null,"size":2053.39,"width":1000,"height":1000,"sizeInBytes":2053394},"small":{"ext":".png","url":"https://skilled-boot-bde5c2b63a.media.strapiapp.com/small_shrimp_gratin_bread_main_6cd406b5ee.png","hash":"small_shrimp_gratin_bread_main_6cd406b5ee","mime":"image/png","name":"small_shrimp-gratin-bread_main.png","path":null,"size":573.08,"width":500,"height":500,"sizeInBytes":573081},"medium":{"ext":".png","url":"https://skilled-boot-bde5c2b63a.media.strapiapp.com/medium_shrimp_gratin_bread_main_6cd406b5ee.png","hash":"medium_shrimp_gratin_bread_main_6cd406b5ee","mime":"image/png","name":"medium_shrimp-gratin-bread_main.png","path":null,"size":1243.08,"width":750,"height":750,"sizeInBytes":1243082},"thumbnail":{"ext":".png","url":"https://skilled-boot-bde5c2b63a.media.strapiapp.com/thumbnail_shrimp_gratin_bread_main_6cd406b5ee.png","hash":"thumbnail_shrimp_gratin_bread_main_6cd406b5ee","mime":"image/png","name":"thumbnail_shrimp-gratin-bread_main.png","path":null,"size":63.88,"width":156,"height":156,"sizeInBytes":63875}},"hash":"shrimp_gratin_bread_main_6cd406b5ee","ext":".png","mime":"image/png","size":455.89,"url":"https://skilled-boot-bde5c2b63a.media.strapiapp.com/shrimp_gratin_bread_main_6cd406b5ee.png","previewUrl":null,"provider":"strapi-provider-upload-strapi-cloud","provider_metadata":null,"createdAt":"2025-10-04T08:46:39.503Z","updatedAt":"2025-10-04T08:46:39.503Z","publishedAt":"2025-10-04T08:46:39.503Z"},"physicalInformations":[{"id":11,"name":"6 Pcs","ratio":1,"weight":null,"width":null,"length":null,"height":null,"diameter":6},{"id":12,"name":"9 Pcs","ratio":1.5,"weight":null,"width":null,"length":null,"height":null,"diameter":6},{"id":13,"name":"12 Pcs","ratio":2,"weight":null,"width":null,"length":null,"height":null,"diameter":null}]}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":1}}}
```