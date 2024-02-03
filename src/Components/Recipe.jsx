import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
    const data = {
        description: "This glorious rhubarb and custard layer cake is so pretty: its jaw-dropping decoration makes it perfect for special occasions such as Easter Sunday or Mother’s Day. If you want to make the cake less fancy, it tastes just as good unadorned.",
        difficulty: "Easy",
        id: "9",
        image: "https://apipics.s3.amazonaws.com/cakes_api/9.jpg",
        ingredients: [
            '250g unsalted butter, softened, plus extra to grease',
            '250g caster sugar',
            '1 tsp vanilla extract',
            '4 large free-range eggs',
            '250g self-raising flour',
            '3-4 tbsp whole milk',
            '9-12 tbsp (about 200g) shop-bought rhubarb jam – or see tips',
            '300ml whole milk',
            '½ tsp vanilla bean paste',
            '3 large free-range egg yolks (see Tip)',
            '60g caster sugar',
            '45g cornflour',
            '200ml double cream',
            '400g forced rhubarb, cut into 5cm pieces',
            '1 unwaxed orange',
            '125g caster sugar',
            '125g unsalted butter, softened',
            '80g icing sugar',
            '100g full-fat cream cheese (we used Philadelphia) at room temperature',
            'Squeeze of lemon/orange juice',
            '100g Lindt white chocolate, chopped',
            '200g Lindt Lindor white chocolate truffles, chopped',
            'Candied rhubarb (see Tip)',
            'Electric mixer',
            '2 x 20cm cake tins, greased and lined with compostable baking paper',
            'Extra compostable baking paper',
            'Deep baking dish',
            'Foil',
            'Piping bag fitted with 0.5cm nozzle'
        ],
        method: [
            { Step1: 'Heat the oven to 180°C/160°C fan/gas 4. Beat the b…-4 tbsp milk, as needed, to form a smooth batter.' },
            { Step2: 'Divide the batter between the cake tins and bake i…ean. Turn out onto a wire rack and leave to cool.' },
            { Step3: 'For the filling, put a small pan over a low heat a…osen further, then fold in the rest of the cream.' },
            { Step4: 'For the roasted rhubarb, heat the oven to 110°C/90…y reduced. Cool, then pour back over the rhubarb.' },
            { Step5: 'For the buttercream, whisk the butter and icing su…re. Add a squeeze of lemon/orange juice to taste.' },
            { Step6: 'To assemble the cake, put 1 tbsp buttercream in th…hill until ready to serve or decorate (optional).' },
            { Step7: 'For the decoration, put the chopped chocolate in a…e for 10-15 minutes to cool slightly and thicken.' },
            { Step8: 'Drizzle some melted truffles over the top of the c…and syrup on the side, if you like (or see tips).' }
        ],
        time: "Hands-on time 60-70 min, oven time 70-85 min, plus cooling and setting",
        title: "Rhubarb and custard layer cake"
    };
    
    const [FullRecipe, SetFullRecipe] = useState(data);
    const {id} = useParams();

    useEffect(() => {
        fetchRecipe();
    }, []);

    const fetchRecipe = async () => {
        const recipe = await fetch('https://the-birthday-cake-db.p.rapidapi.com/'+id, options);
        const json = await recipe.json();
        console.log(json);
        SetFullRecipe(json);
    }
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '70fdf97b16mshba642d2ac25d5f0p16b8f5jsnd2db8e00e206',
            'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
          }
    };
    
    return(    
        <div className="pt-[17vh]"> 
            <div className="w-full h-auto">
                <h1 className="font-bold text-3xl pt-5 pb-10 text-center capitalize">{FullRecipe.title}</h1>

                <div className="body w-full h-screen flex">
                    <div className="body_left w-[50%] flex flex-col items-center">

                        <img className="w-[75%] h-[70%] object-cover object-center"  src={`https://apipics.s3.amazonaws.com/cakes_api/${FullRecipe.id}.jpg`}/>
                        <p className="px-6 pt-7 text-center text-lg font-semibold leading-tight">{FullRecipe.description}</p>
                    </div>

                    <div className="body_right w-[50%] px-10 bg-pink-200 overflow-y-scroll">
                        <h2 className="font-bold text-xl py-4 px-1 text-center">INGREDIENTS</h2>
                        <ul className="list-disc">
                            {FullRecipe.ingredients.map((ingredient, index) => (
                            <li className="text-lg" key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mathod w-full h-auto mt-5 px-8 py-7 flex flex-col items-center bg-purple-100">

                    <h2 className="font-bold text-xl py-4 text-center">METHOD</h2>
                    <ol className="list-decimal font-semibold text-lg">
                        {FullRecipe.method.map((step, index) => (
                        <li key={index}>{Object.values(step)[0]}</li>
                        ))}
                    </ol>
                </div>
            </div>
            
        </div>
    )
   
}
export default Recipe;