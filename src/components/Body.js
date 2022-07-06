import "../style/Body.css"
import exppro from '../images/exppro.jpg'
import formation from '../images/formation.jpg'
import loisir from '../images/loisir.jpg'
import Carroussel from "./Carroussel";
import tsp from "../images/tsp.png"
import beija from "../images/beija.png"
import synetis from "../images/synetis.png"
import grtgaz from "../images/grtgaz.png"
import imt from "../images/imt.png"
import cpge from "../images/cpge.png"
import guitare from "../images/guitare.jpg"
import escalade from "../images/escalade.jpg"
import prog from "../images/react.png"
import tri from "../images/tri.jpg"

function Body() {
    const menu = [
        {
            "name": "Expèriences professionnelles",
            "cover": exppro,
            "id": 0,
            "angle": 0,
            "core": [{
                "alt": "GRTgaz",
                "image": grtgaz
            }, {
                "alt": "Synetis",
                "image": synetis
            }, {
                "alt": "Beijaflore",
                "image": beija
            }, {
                "alt": "TSP",
                "image": tsp
            }]
        },
        {
            "name": "Formations",
            "cover": formation,
            "id": 1,
            "angle": 0,
            "core": [{
                "alt": "TSP",
                "image": tsp
            }, {
                "alt": "IMT",
                "image": imt
            }, {
                "alt": "CPGE",
                "image": cpge
            }]
        },
        {
            "name": "Loisir",
            "cover": loisir,
            "id": 2,
            "angle": 0,
            "core": [{
                "alt": "react",
                "image": prog
            }, {
                "alt": "escalade",
                "image": escalade
            }, {
                "alt": "tri",
                "image": tri
            }, {
                "alt": "musique",
                "image": guitare
            }]
        },
    ]
    return (
        <div className="cv_body">
            <Carroussel face={menu} />

        </div >
    );
}

export default Body