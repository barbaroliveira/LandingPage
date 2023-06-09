import React from "react";
import PicMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
<link rel="stylesheet" href="Work.css"/>

const Work = () => {
        const workInfoData = [
            {
                image: PicMeals,
                title: "Pick Meals",
                text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum."
            },
            {
                image: ChooseMeals,
                title: "Choose How Often",
                text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum."
            },
            {
                image: DeliveryMeals,
                title: "Fast Deliveries",
                text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum."
            },
        ]
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading" style={{color: '#233772'}}>Work</p>
                <h1 className="primary-heading">Hook to scroll</h1>
                <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur. Non tincidunt 
                magna non et elit. Dolor  turpis molestie dui
                magnis facilisis at fringilla quam.
                </p>
            </div>
            <div className="work-section-bottom" >
                {
                    workInfoData.map((data) => (
                        <div className="work-section-info">
                            <div className="info-boxes-img-container" >
                                <img src= {data.image} alt="" />
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Work