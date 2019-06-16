import React, { Component, Fragment } from 'react';
import ProductAPI from '../../service/product';

import axios from 'axios';

import NumberFormat from 'react-number-format';



class Produto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            data: {},
            loading: true,
            description: {},
        };

    }

    componentDidMount() {
        var self = this
        const { id } = this.state
        var product = new ProductAPI()

        product.get(id, function (dados) {
            self.setState({
                data: {
                    ...dados
                },
                loading: false
            });
        });

    }

    renderContent() {
        const { id, data } = this.state;

        return (
            <Fragment className="white">
                <div className="mdl-grid  mdl-shadow--2dp white">

                    <div className="mdl-cell mdl-cell--6-col demo-card-wide mdl-card mdl-shadow--2dp">
                        <img className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone" src={data.pictures[0].url} />
                    </div>
                    <div className="mdl-cell mdl-cell--6-col">
                        <div className="mdl-cell mdl-cell--12-col white">
                            <div className="mdl-card__title">
                                <h2 className="mdl-card__title-text " id="fonts">{data.title}</h2>
                            </div>
                            <div className="mdl-card__supporting-text">
                                <p>Quantidade: {data.sold_quantity}</p>
                            </div>
                            <div className="mdl-card__title">
                                <h2 className="mdl-card__title-text">
                                    <NumberFormat value={data.price} displayType={'text'}
                                        thousandSeparator={true} prefix={'R$ '}
                                        renderText={value => <div>{value}</div>} />

                                </h2>
                            </div>
                            <div className="mdl-card__actions mdl-card--border ">
                                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                                    COMPRAR
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mdl-cell mdl-cell--12-col">
                        <div className="mdl-card__supporting-text mdl-card--border">
                            <p id="just">{data.description}</p>
                        </div>
                    </div>

                    <div className="mdl-card__menu">
                    </div>
                </div>
            </Fragment>
        );
    }

    render() {
        const { loading } = this.state;
        return loading ?
            <div id="p2" key="p2" className="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div> : this.renderContent()
    }
}

export default Produto 