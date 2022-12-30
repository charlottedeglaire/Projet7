import React from "react";
import Carousel from "../components/Slideshow";
import Collapse from "../components/Collapse";
import Logements from "../data/logements.json";
import { useParams, Navigate } from "react-router-dom";
import Tag from "../components/Tag";
import Rating from "../components/Rating";

export default function Logement() {
    document.title = "Kasa - Logement";
    let selectedId = useParams();
    let logementTitle;
    let logementPictures;
    let logementDesc;
    let logementHost;
    let logementRating;
    let logementLocation;
    let logementEquipments;
    let logementTags;

    Logements.forEach((logement) => {
        if (logement.id === selectedId.id) {
            logementTitle = logement.title;
            logementPictures = logement.pictures;
            logementDesc = logement.description;
            logementHost = logement.host;
            logementRating = logement.rating;
            logementLocation = logement.location;
            logementEquipments = logement.equipments;
            logementTags = logement.tags;
        }
    });

    if (!logementTitle) {
        return <Navigate to="/404"/>;
    }

    return (
        <main className="logement_display">
            <div className="display_carousel">
                <Carousel images={logementPictures} />
            </div>
            <div className="logement_display_details">
                <div className="logement_description_left">
                    <div className="logement_titles">
                        <h1>{logementTitle}</h1>
                        <h2>{logementLocation}</h2>
                    </div>
                    <div className="logement_tags">
                        <Tag tags={logementTags} />
                    </div>
                </div>
                <div className="logement_description_right">
                    <div className="logement_owner_container">
                        <div className="logement_rating">
                            <Rating rating={logementRating} />
                        </div>
                        <div className="logement_owner">
                            <span>{logementHost.name}</span>
                            <img
                                src={`${logementHost.picture}`}
                                alt={`${logementHost.name}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="logement_collapses">
                <div className="logement_description">
                    <Collapse props={logementDesc} title={"Description"} />
                </div>
                <div className="logement_equipements">
                    <Collapse
                        props={logementEquipments}
                        title={"Equipements"}
                    />
                </div>
            </div>
        </main>
    );
}
