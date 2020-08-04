import React from 'react';

class Hidden extends React.Component {
    render() {
        return (
            <div className ="hidden">
                '
            </div>);
    }
}



class RecipeContainer extends React.Component {
    render() {
        return (
            <section className ="recipe-container">
                <div className ="title">
                    <div>
                        <h1>Chocolate Pizza</h1>
                            <p className ="date">
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
             
                <div className ="recipe">
                    <div className="ingredients-1">
                        <ul>
                            <li>
                                <input type="checkbox"/>
                                <label> 1 1/2 cups milk</label>
                            </li>
                            <li>
                                <input type="checkbox"/>
                                <label> 1/2 cup mascarpone</label>
                            </li>
                            <li>
                                <input type="checkbox"/>
                                <label> 1/2 tsp pink salt</label>
                            </li>
                            <li>
                                <input type="checkbox"/>
                                <label> 1 lb Black Hission Figs</label>
                            </li>
                            <li>
                                <input type="checkbox"/>
                                <label> 1/2 cup brown sugar</label>
                            </li>
                            <li>
                                <input type="checkbox"/>
                                <label> 2-4 tbsp of water</label>
                            </li>
                        </ul>
                    </div>
                    <div className="ingredients-2">
                        <ul>
                            <li>
                                <input type="checkbox"/>
                                <label> 1 1/2 cups heavy cream</label>
                            </li>
                            <li>
                                <input type="checkbox"/>
                                <label> 1/3 cup granulated sugar</label>
                            </li>
                            <li>
                                <input type="checkbox"/>
                                <label> 2 egg yolks</label>
                            </li>
                            <li>
                                <input type="checkbox"/>
                                <label> 1 lemon, juiced</label>
                            </li>
                            <li>
                                <input type="checkbox"/>
                                <label> 2 tbsp butter</label>
                            </li>
                            <li>
                                <input type="checkbox"/>
                                <label> 1 cup honey roasted pecans, roughly chopped</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className ="hidden-2">
                    Hidden
                </div>
                <div className ="author">
                    <img src="images/van-pic.png" alt ="vanessa"/>
                    <div className ="about-me">
                        <h4>Vanessa Stevenson</h4>
                        <p>
                            Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.
                        </p>
                    </div>
                    <button id="share-button">SHARE RECIPE</button>
                </div>
            </section>);
    }
}

class Main extends React.Component {
    render() {
        return (
            <main>
                <Hidden />
                <RecipeContainer />
            </main>
        )
    }

}

export default Main;