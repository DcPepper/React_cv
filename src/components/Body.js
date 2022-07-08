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
                "image": grtgaz,
                "date": "Depuis Février 2021",
                "titre": "Responsable du maintien en condition opérationnelle de la PKI",
                "missions": [
                    {
                        "name": "Mise en place d'un Hardware Security Module",
                        "contenu": "Les Hardware Security Module (HSM) sont des ordinateurs spécialisés dans la génration et la protection des clées privées de haute importance."
                    },
                    {
                        "name": "Responsable MCO / MCS",
                        "contenu": "Les Public Key Infrastructure (PKI, IGC en français) sont  des infrastructures qui permettent, notamment, de gérer les certificats internes d'une entreprise."
                    }
                ]
            }, {
                "alt": "Synetis",
                "image": synetis,
                "date": "Depuis Septembre 2020",
                "titre": "Consultant Sécurité opérationnelle confirmé",
                "missions": [
                    {
                        "name": "Responsable MCO / MCS",
                        "contenu": "Les Public Key Infrastructure (PKI, IGC en français) sont  des infrastructures qui permettent, notamment, de gérer les certificats internes d'une entreprise."
                    },
                    {
                        "name": "Mise en place d'un Hardware Security Module",
                        "contenu": "Les Hardware Security Module (HSM) sont des ordinateurs spécialisés dans la génration et la protection des clées privées de haute importance."
                    },

                ]
            }, {
                "alt": "Beijaflore",
                "image": beija,
                "date": "De Février 2020 à Août 2020",
                "titre": "Stage de fin d'études"
            }, {
                "alt": "TSP",
                "image": tsp,
                "date": "De Octobre 2019 à Janvier 2020",
                "titre": "Projet de fin d'études"
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