// JavaScript Document
//this js file contains the recipes and the function to populate the content area

var hideIngredients = false;
var hideInstructions = false;
function toggleIngredients(){
	if(hideIngredients == false){
		document.querySelector("#ingredientsToggle").innerHTML = "<p>Toggle Ingredients &#91;+&#93</p>";//"<p>test</p>"
		hideIngredients = true;
		$( "#ingredients-box" ).toggle();
	}
	else {
		document.querySelector("#ingredientsToggle").innerHTML = "<p>Toggle Ingredients &#91;-&#93</p>";
		hideIngredients = false;
		$( "#ingredients-box" ).toggle();
	}
}
	

function toggleInstructions(){
	if(hideInstructions == false){
		document.querySelector("#instructionsToggle").innerHTML = "<p>Toggle Instructions &#91;+&#93</p>";//"<p>test</p>"
		hideInstructions = true;
		$( "#instructions" ).toggle();
	}
	else {
		document.querySelector("#instructionsToggle").innerHTML = "<p>Toggle Instructions &#91;-&#93</p>";
		hideInstructions = false;
		$( "#instructions" ).toggle();
	}
}


function recipeSelection(){
			
			if (recipeSelect[0].text == "Select a Recipe"){
				var x = document.getElementById("recipeSelect"); //this if statement will remove the default selection on 1st use
				x.remove(0);
				firstSelection = false;
				
			}
			var i = recipeSelect.selectedIndex; //grabbing the index of the dropdown and choosing what to display
			if (recipeSelect[i].text == "Crockpot Chili"){
				
				document.querySelector("#picture").innerHTML =
					"<img src = 'images/chili.jpg' alt = 'Delicious Chili' height = '150' width = '150'>";
				
				document.querySelector("#recipeInfo").innerHTML =
					"<h1>Crockpot Chili</h1>" + 
					"<p>Serves: " + (quantity*6) + "</p>" + 
					"<p>Preparation: 25 minutes</p>" + 
					"<p>Cooking: 6 hours</p>" +
					"<p>Dificulty: Moderate</p>";
				
				document.querySelector("#ingredients-list ul").innerHTML =
				"<input type = 'checkbox'>" + (quantity * 2) + " tbsp. cooking oil<br>" + 
				"<input type = 'checkbox'>" + (quantity * 1) + " cup onion<br>" + 
				"<input type = 'checkbox'>" + (quantity * 1) + " cup chopped peppers<br>" + 
				"<input type = 'checkbox'>" + (quantity * 4) + " tbsp. Chili powder<br>" + 
				"<input type = 'checkbox'>" + (quantity * 1) + " tsp. Hot chili powder (optional)<br>" + 
				"<input type = 'checkbox'>" + (quantity * 1) + " lb ground beef or chicken<br>" + 
				"<input type = 'checkbox'>" + (quantity * 2) + " cans Red Beans<br>" +
				"<input type = 'checkbox'>" + (quantity * 2) + " cans Kidney Beans<br>" +
				"<input type = 'checkbox'>" + (quantity * 2) + " cans Tomato Puree<br>" +
				"<input type = 'checkbox'>" + (quantity * 2) + " cans Tomato Sauce<br>" +
				"<input type = 'checkbox'>" + (quantity * 1) + " cup shredded cheese (optional)<br>" +
				"<input type = 'checkbox'>" + (quantity * .5) + " cup sour cream (optional)";

				document.querySelector("#instructions").innerHTML =
					"<h3>Instructions:</h3>" +
					"<p><input type = 'checkbox'>Heat cooking oil in 2 quart skillet.</p>" +
					"<p><input type = 'checkbox'>Saute onions and peppers for 5 minutes.</p>" +
					"<p><input type = 'checkbox'>Add spices and stir for 30 seconds.</p>" +
					"<p><input type = 'checkbox'>Add meat and cook until browned. Approximately 15 minutes.</p>" +
					"<p><input type = 'checkbox'>Pour contents of the skillet into 3 quart crock pot.</p>" +
					"<p><input type = 'checkbox'>Rinse beans and place them in a crockpot.</p>" +
					"<p><input type = 'checkbox'>Open and pour Tomato puree and sauce into the crock pot.</p>" +
					"<p><input type = 'checkbox'>Cover the crockpot and cook on low for 6 hours.</p>" +
					"<p><input type = 'checkbox'>Serve into individual bowls and top with sour cream and cheese.</p>";	
				//	alert("chili");
				}
			else if (recipeSelect[i].text == "Oreo Cookie Balls"){
				
				document.querySelector("#picture").innerHTML =
					"<img src = 'images/oreo.jpg' alt = 'Oreo Cookie Balls' height = '150' width = '150'>";
				
				document.querySelector("#recipeInfo").innerHTML = 
					"<h1>Oreo Cookie Balls</h1>" + 
					"<p>By: <a href = 'https://www.delish.com/cooking/recipe-ideas/a25622407/best-oreo-cookie-balls-recipe/'>Lena Abraham</a></p>" + 
					"<p>Yields: " + (quantity*24) + "</p>" + 
					"<p>Preparation: 5 minutes</p>" + 
					"<p>Cooking: 2 hours 10 Minutes</p>" + 
					"<p>Dificulty: Easy</p>";
				
				document.querySelector("#ingredients-list ul").innerHTML =
					"<input type = 'checkbox'>" + (quantity*14) + "-oz. Oreos<br>" +
					"<input type = 'checkbox'>" + (quantity*8) + "-oz. package cream cheese, softened<br>" +
					"<input type = 'checkbox'>" + (quantity*1) + " Pinch kosher salt<br>" +
					"<input type = 'checkbox'>" + (quantity*12) + "-oz. chocolate chips, melted";
				
				document.querySelector("#instructions").innerHTML =
					"<h3>Instruction:</h3>" + 
					"<p><input type = 'checkbox'>Use a food processor to crush cookies into fine crumbs. (Alternatively, a zip-lock and rolling pin will also work.)</p>" +
				
					"<p><input type = 'checkbox'>Add all but 2 tablespoons crushed cookies to a medium bowl. Add cream cheese and and salt and stir until evenly combined.</p>" +

					"<p><input type = 'checkbox'>Line a baking sheet with parchment paper. Using a small cookie scoop, form mixture into small balls and transfer to prepared baking sheet.</p>" +

					"<p><input type = 'checkbox'>Freeze until slightly hardened, about 30 minutes.</p>" +
		
					"<p><input type = 'checkbox'>Dip frozen balls in melted chocolate until coated and return to the baking sheet. Sprinkle with remaining cookie crumbs. Freeze until chocolate hardens, about 15 minutes.</p>";
				//alert("balls");
			}
			else if (recipeSelect[i].text == "World's Best Lasagna"){
				document.querySelector("#picture").innerHTML =
					"<img src = 'images/lasagna.jpg' alt = 'World's Best Lasagna' height = '150' width = '150'>";
				
				document.querySelector("#recipeInfo").innerHTML = 
					"<h1>World's Best Lasagna</h1>" + 
					"<p>By: <a href = 'https://www.allrecipes.com/recipe/23600/worlds-best-lasagna/?printview'>John Chandler</a></p>" + 
					"<p>Serves: " + (quantity*12) + "</p>" + 
					"<p>Preparation: 30 minutes</p>" + 
					"<p>Cooking: 2 hours 30 Minutes</p>" +
					"<p>Dificulty: Hard</p>";
				
				document.querySelector("#ingredients-list ul").innerHTML =
								"<input type = 'checkbox'>" + (quantity*1) + " pound sweet Italian sausage<br>"+
								"<input type = 'checkbox'>" + (quantity*.75) +  " pound lean ground beef<br>"+
								"<input type = 'checkbox'>" + (quantity*.5) + " cup minced onion<br>"+
								"<input type = 'checkbox'>" + (quantity*2) + " cloves garlic, crushed <br>"+
								"<input type = 'checkbox'>" + (quantity*1) + " (28 ounce) can crushed tomatoes <br>"+
								"<input type = 'checkbox'>" + (quantity*2) + " (6 ounce) cans tomato paste <br>"+
								"<input type = 'checkbox'>" + (quantity*2) +  " (6.5 ounce) cans canned tomato sauce<br>"+
								"<input type = 'checkbox'>" + (quantity*.5) + " cup water<br>"+
								"<input type = 'checkbox'>" + (quantity*2) + " tablespoons white sugar<br>"+
								"<input type = 'checkbox'>" + (quantity*1.5) + " teaspoons dried basil leaves<br>" +
								"<input type = 'checkbox'>" + (quantity*.5) + " teaspoon fennel seeds<br>"+
								"<input type = 'checkbox'>" + (quantity*1) +  " teaspoon Italian seasoning<br>"+
								"<input type = 'checkbox'>" + (quantity*1.5) + " teaspoons salt, divided, or to taste<br>" + 
								"<input type = 'checkbox'>" + (quantity*.25) + " teaspoon ground black pepper<br>"+
								"<input type = 'checkbox'>" + (quantity*4) + " tablespoons chopped fresh parsley<br>"+
								"<input type = 'checkbox'>" + (quantity*12) + " lasagna noodles<br>"+
								"<input type = 'checkbox'>" + (quantity*16) + " ounces ricotta cheese<br>"+
								"<input type = 'checkbox'>" + (quantity*1) + " egg<br>"+
								"<input type = 'checkbox'>" + (quantity*.75) + " pound mozzarella cheese, sliced<br>"+
								"<input type = 'checkbox'>" + (quantity*.75) + " cup grated Parmesan cheese";
														  
				document.querySelector("#instructions").innerHTML =
					"<h3>Instructions:</h3>" +
					"<p><input type = 'checkbox'><strong>Step 1</strong></p>" +
					"<p>In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce, and water. Season with sugar, basil, fennel seeds, Italian seasoning, " + (quantity*1) + " teaspoon salt, pepper, and " + (quantity*2) + " tablespoons parsley. Simmer, covered, for about 1 1/2 hours, stirring occasionally.</p>" +
					
					"<p><input type = 'checkbox'><strong>Step 2</strong></p>" +
					"<p>Bring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. Drain noodles, and rinse with cold water. In a mixing bowl, combine ricotta cheese with egg, remaining parsley, and "+(quantity*.5)+" teaspoon salt.</p>" +
						
					"<p><input type = 'checkbox'><strong>Step 3</strong></p>" +
					"<p>Preheat oven to 375 degrees F (190 degrees C).</p>" + 
					
					"<p><input type = 'checkbox'><strong>Step 4</strong></p>" +
					"<p>To assemble, spread "+(quantity*1.5)+" cups of meat sauce in the bottom of a 9x13 inch baking dish. Arrange 6 noodles lengthwise over meat sauce. Spread with one half of the ricotta cheese mixture. Top with a third of the mozzarella cheese slices. Spoon "+(quantity*1.5)+" cups meat sauce over mozzarella, and sprinkle with "+(quantity*.25)+" cup Parmesan cheese. Repeat layers, and top with remaining mozzarella and Parmesan cheese. Cover with foil: to prevent sticking, either spray foil with cooking spray, or make sure the foil does not touch the cheese.</p>" +
					
					"<p><input type = 'checkbox'><strong>Step 5</strong></p>" +
					"<p>Bake in preheated oven for 25 minutes. Remove foil, and bake an additional 25 minutes. Cool for 15 minutes before serving.</p>";
				
				//alert("lasaga");
			}}
