import React, {Component} from "react";
import ReactDOM from "react-dom";
import drugData from '../../src/data/drugData';
import './DrugForm.scss';
import Alert from './Alert';

class DrugForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: "Wybierz lek",
            resultSingleDosage: 0,
            resultDailyDosage: 0,
            placeholder1: "wpisz masę dziecka w kg",
            placeholder2: "wpisz wiek dziecka w miesiącach",
            showAlert: false,
            description: drugData[0].description,
            sideEffects: false,
            sideEffectsDescription: '',
        };
    };

    handleChange = e => {
        this.setState({
            selectedValue: e.target.value,
            resultSingleDosage: 0,
            resultDailyDosage: 0,
            placeholder1: "wpisz masę dziecka w kg",
            placeholder2: "wpisz wiek dziecka w miesiącach",
            showAlert: false,
            description: drugData[0].description,
            sideEffects: false,
            sideEffectsDescription: '',
            inputValue: '',
            inputValue2: '',

        }, () => {
            drugData.map(val => {
                if (val.name === this.state.selectedValue) {
                    this.setState({
                        description: val.description,
                        sideEffectsDescription: val.sideEffects,
                        sideEffectAspirinDesc: val.sideEffectsAspirinChildren
                    })
                }
            })
        });
    };

    handleInput = e => {
        this.setState({
            inputValue: e.target.value
        });
    };
    handleInput2 = e => {
        this.setState({
            inputValue2: e.target.value
        });
    };

    showSideEffects = e => {
        if (this.state.sideEffects) {
            this.setState({
                sideEffects: false,
            })
        } else {
            this.setState({
                sideEffects: true,
            })
        }
    };


    makeCalculation = () => {
        console.log(this.state.inputValue);
        console.log(this.state.inputValue2);
        let finalResultSingle;
        drugData.map(val => {
            if (val.name === this.state.selectedValue && !!this.state.inputValue) {
                finalResultSingle = ((this.state.inputValue * val.singleDosageAdult) / 70).toFixed(1);
            } else if (val.name === this.state.selectedValue && !!this.state.inputValue2) {
                console.log('tutaj');
                finalResultSingle = ((this.state.inputValue2 * val.singleDosageAdult) / 150).toFixed(1);
            }
            if (this.state.selectedValue === 'Kwas acetylosalicylowy - aspiryna') {
                console.log("alert się wyświetla");
                this.setState({
                    showAlert: true,
                })
            } else {
                this.setState({
                    showAlert: false,
                })
            }
        });

        let finalResultDaily;
        drugData.map(val => {
            if (val.name === this.state.selectedValue && !!this.state.inputValue) {
                finalResultDaily = ((this.state.inputValue * val.dailyDosageAdult) / 70).toFixed(1);
            } else if (val.name === this.state.selectedValue && !!this.state.inputValue2) {
                finalResultDaily = ((this.state.inputValue2 * val.dailyDosageAdult) / 150).toFixed(1);
            }
        });

        this.setState({
            resultSingleDosage: finalResultSingle,
            resultDailyDosage: finalResultDaily
        });
    };

    render() {
        return (
            <>
                <div className='mainContainer'>
                    <div className="pils"/>
                    <h1>Ile leku podać? </h1>
                    <div className='chooseSubstance'>
                        <p> Wybierz substancję leczniczą</p>
                        <select value={this.state.selectedValue} onChange={this.handleChange}>
                            {drugData.map(val => {
                                return <option>{val.name}</option>;
                            })}
                        </select>
                    </div>
                    <div className='dosages'>
                        <div className="kids"/>
                        <p>Oblicz dawki jakie możesz podać dziecku</p>
                        <input value={this.state.inputValue} onChange={this.handleInput}
                               placeholder={this.state.placeholder1}/>
                        <span> lub </span>
                        <input value={this.state.inputValue2} onChange={this.handleInput2}
                               placeholder={this.state.placeholder2}/>
                        <div className="btn1">
                            <button className='button1' onClick={this.makeCalculation}>Oblicz</button>
                        </div>
                        <div className='dosagesResult'>
                            <h2> Ile wynosi dawkowanie?</h2>
                            <h3>Dawka jednorazowa dla dziecka: {this.state.resultSingleDosage} mg </h3>
                            <h3>Dawka dobowa dla dziecka: {this.state.resultDailyDosage} mg </h3>
                            {this.state.showAlert && <Alert />}
                        </div>
                    </div>
                    <div className='moreInfoContainer'>
                        <p className='drugEffect'> Działanie leku: {this.state.description}</p>
                        <div className='sideEffectsContainer'>
                            <button className='button2' onClick={this.showSideEffects}>Jakie mogą być skutki uboczne?
                            </button>
                        </div>
                    </div>
                    <p className="sideEffectsDesc"> {this.state.sideEffects &&
                    <div>{this.state.sideEffectsDescription}</div>} </p>
                </div>

                </>
                );
                }
                }


                export default DrugForm;

