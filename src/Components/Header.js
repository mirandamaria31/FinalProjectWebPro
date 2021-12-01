import React from "react";

const Header = () => {
    return (
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Weather App</h1>
                    <p class="lead fw-normal text-white-50 mb-0">-----------------------</p>
                </div>
            </div>

            <div className="container mt-3">
                <div className="">
                    <div className="form-group">
                        <input type="text" placeholder="Search ..." className="form-control" />
                    </div>
                    
                </div>

            </div>
            <script>

            </script>
        </header>
      );
}

export default Header;