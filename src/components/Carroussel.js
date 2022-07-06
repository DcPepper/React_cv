import React from "react"
import "../style/Carroussel.css"

class Carroussel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeFace: "Expèriences professionnelles",
            showingAlert: false,
            slideAlert: false,
            mainFace: 0
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleLeft = this.handleLeft.bind(this)
        this.handleRight = this.handleRight.bind(this)
    }

    handleRight() {
        const faces = this.props.face;
        const m = faces.filter(e => e.name === this.state.activeFace)[0]
        const activities = m.core;
        let mainFace_ = this.state.mainFace;
        this.state.mainFace + 1 === activities.length ? mainFace_ = 0 : mainFace_++;
        this.setState({
            slideAlert: true

        })
        setTimeout(() => {
            this.setState({
                mainFace: mainFace_,
                slideAlert: false
            });
        }, 1000)
    }

    handleLeft() {
        const faces = this.props.face;
        const m = faces.filter(e => e.name === this.state.activeFace)[0]
        const activities = m.core;
        let mainFace_ = this.state.mainFace;
        this.state.mainFace - 1 === -1 ? mainFace_ = activities.length - 1 : mainFace_--;
        this.setState({
            slideAlert: true
        })
        setTimeout(() => {
            this.setState({
                mainFace: mainFace_,
                slideAlert: false
            });
        }, 1000)
    }

    handleChange(e) {

        this.setState({
            activeFace: e.target.innerHTML,
            showingAlert: true,
            mainFace: 0
        })
        setTimeout(() => {
            this.setState({
                showingAlert: false
            });
        }, 500);
    }


    render() {
        const faces = this.props.face;
        const m = faces.filter(e => e.name === this.state.activeFace)[0]
        const activities = m.core;

        return <React.Fragment>
            <div className="navigation">
                <button className={`${this.state.activeFace === "Expèriences professionnelles" ? 'activeButton' : 'buttonDiv'}`} onClick={this.handleChange}>Expèriences professionnelles</button>
                <button className={`${this.state.activeFace === "Formations" ? 'activeButton' : 'buttonDiv'}`} onClick={this.handleChange}>Formations</button>
                <button className={`${this.state.activeFace === "Loisir" ? 'activeButton' : 'buttonDiv'}`} onClick={this.handleChange}>Loisir</button>
            </div>
            <div className={`menu ${this.state.showingAlert ? 'changeop' : 'nochangeop'} `}>

                <div className="section" key={m.id}>
                    <div style={{ fontWeight: "bold", fontSize: "2em" }}>
                        {m.name}
                    </div>
                    <div className={`${this.state.slideAlert ? 'slide' : 'noslide'}`}>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%"
                        }}>
                            <div className="divp"><p><i className="arrow left" onClick={this.handleLeft}></i></p></div>
                            <img src={activities[this.state.mainFace].image} alt={activities[this.state.mainFace].alt} />
                            <div className="divp"><p><i className="arrow right" onClick={this.handleRight}></i></p></div>
                        </div>

                    </div>
                    {activities[this.state.mainFace].alt}
                </div>



            </div>


        </React.Fragment >
    }
}

export default Carroussel