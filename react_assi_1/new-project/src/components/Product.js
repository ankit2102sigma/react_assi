import React from 'react';
import "./Product.css";

function ProductList() {
    return (
        <div>
            <div className="product">
                <a href="/hp-pavillion.html">
                    <div className="container">
                        <div className="items">
                            <div className="img img1">
                                <img src="Images/hp-pavillion.jpg" alt="" />
                            </div>
                            <div className="name">HP Pavilion Laptop 14-dv2016TU</div>
                            <div className="price">70000 rs</div>
                            <div className="info">
                                12th Generation Intel® Core™ i5 processor
                            </div>
                        </div>
                    </div>
                </a>

                <a href="/mac.html">
                    <div className="container">
                        <div className="items">
                            <div className="img img1">
                                <img src="Images/mac-screen.jpg" alt="" />
                            </div>
                            <div className="name">13‑inch MacBook Pro - Space Grey</div>
                            <div className="price">90000 rs</div>
                            <div className="info">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
                                aspernatur.
                            </div>
                        </div>
                    </div>
                </a>

                <a href="/hp-lap.html">
                    <div className="container">
                        <div className="items">
                            <div className="img img1">
                                <img src="Images/hp-pavillion._updatejpg.jpg" alt="" />
                            </div>
                            <div className="name">HP Laptop 15s-fq2717TU</div>
                            <div className="price">40000 rs</div>
                            <div className="info">
                                11th Generation Intel® Core™ i3 processor
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div className="product">
                <a href="elitebook.html">
                    <div className="container">
                        <div className="items">
                            <div className="img img1">
                                <img
                                    src="Images/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="name">HP Elitebook x360 1030 G3 Laptop </div>
                            <div className="price">50000 rs</div>
                            <div className="info">
                                Core i7 8th Gen/ 8GB/256 SSD/Windows 10
                            </div>
                        </div>
                    </div>
                </a>

                <a href="samsung.html">
                    <div className="container">
                        <div className="items">
                            <div className="img img1">
                                <img src="Images/galaxybook.jpg" alt="" />
                            </div>
                            <div className="name">Samsung Galaxy Book2</div>
                            <div className="price">64000 rs</div>
                            <div className="info">
                                12th Gen core i5 39.6cm (15.6") FHD.
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ProductList;
