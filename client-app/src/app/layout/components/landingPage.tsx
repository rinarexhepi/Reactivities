import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import background from '../banner.jpg';
import './styles/landingpage.css'

export default function LandingPage(){
    return (
        <div className="container banner"style={{ backgroundImage: `url(${background})` }}>
            <div className="row align-items-center ">
                <div className="col-md-6 offset-md-3 align-self-center info" >
                    <h1 className="text-center ">Welcome</h1>
                    <p className="text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Incidunt, delectus enim et quam ipsa mollitia suscipit fugit 
                        hic eveniet officia veniam sed corporis aliquam fugiat nesciunt
                         ducimus libero laudantium tempora?
                    </p>
                    <div className="col-md-12 text-center">
                        <Link to={"/"}>
                            <Button className="btn-dark btn p-50 butoni"> Books</Button>
                        </Link>
                            
                    </div>
                    
                </div>
            </div>
        </div>
    )
}