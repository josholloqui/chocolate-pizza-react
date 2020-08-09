import React from 'react';
import { ingredients1, ingredients2 } from './data.js';

class Hidden extends React.Component {
    render() {
        return (
            <div className="hidden">
                '
            </div>);
    }
}

const paragraph1 = 
  'For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.'

const paragraph2 = 
  'Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm. Whisk in the egg yolks. Set mixture in the fridge and wait until the fig mixture is cooled.'

const paragraph3 = 
  'Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer instructions, i.e., let spin and thicken for 20 minutes before adding mascarpone, fig jam mixture, and the nuts. Continue to process for+/-10 minutes. Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least two hours before serving.'

class RecipeContainer extends React.Component {
    render() {
        return (
            <section className="recipe-container">
                <div className="title">
                    <div>
                        <h1>Chocolate Pizza</h1>
                            <p className="date">
                                POSTED ON 15 DEC. 2013 /DESSERTS
                            </p>
                    </div>
                    <div className="print">
                        <p>
                            <img src="images/print-icon.png" alt="print"/>
                            Print
                        </p>
                    </div>
                </div>
                <img src="images/choco-pizza.png" alt="pizza"/>
                <p className="main-font">
                    {this.props.paragraph1}
                    <br/>
                    <br/>
                    {this.props.paragraph2}
                    <br/>
                    <br/>
                    {this.props.paragraph3}

                </p>
             
                <div className="recipe">
                    <RecipeItems />
                </div>
                <div className="hidden-2">
                    Hidden
                </div>
                <div className="author">
                    <img src="images/van-pic.png" alt="vanessa"/>
                    <div className="about-me">
                        <h4>Vanessa Stevenson</h4>
                        <p>
                            {this.props.bio}
                        </p>
                    </div>
                    <button id="share-button">SHARE RECIPE</button>
                </div>
            </section>);
    }
}

class RecipeItems extends React.Component {
    render() {
        return (
            <>
                <div className="ingredients1">
                    <ul>
                        {ingredients1.map(ingredient1 => <li>{ingredient1}</li>)}
                    </ul>
                </div>
                <div className="ingredients2">
                    <ul>
                    {ingredients2.map(ingredient2 => <li>{ingredient2}</li>)}
                    </ul>
                </div>
            </>
        )
    }
}

class Main extends React.Component {
    render() {
        return (
            <main>
                <Hidden />
                <RecipeContainer paragraph1={paragraph1} paragraph2={paragraph2} paragraph3={paragraph3} bio={this.props.bio}/>
            </main>
        )
    }

}

export default Main;