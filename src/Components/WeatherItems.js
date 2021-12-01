import React from "react";

const WeatherItems = () => {
    return(
        <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top" src="https://imagescdn.wciu.com/jpVzD-1617991388-719-blog-FS%20WEATHER%207DAY%204.8.png" alt="..." />
                    <div className="card-body p-4">
                        <div className="text-center">
                                <h5 className="fw-bolder">Cuaca Hari ini</h5>
                        </div>
                    </div>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#!">View options</a></div>
                        </div>
                    </div>
        </div>
    );
}

export default WeatherItems;