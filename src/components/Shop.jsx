import React from "react"
import '../styles/Shop.css';


export default function Shop() {
    return(
        <div className="shop">
            
        <div className="cap">
            <img className="cap_img" alt="cap" src="./images/20210730173747_005638942_50.jpg"></img>
            <p className="cap_title">cap</p>
            <p className="cap_pries">pries : 9999$</p>
            <button className="basket_btn">in basket</button>
        </div>
        <div className="sweater">
        <img className="sweater_img" alt="cap" src="./images/Sweaterno18full_7a1246c6-86fd-4856-954c-b51827a5a167_720x@2x.jpg"></img>
            <p className="sweater_title">sweater</p>
            <p className="sweater_pries">pries : 9999$</p>
            <button className="basket_btn">in basket</button>
        </div>
        <div className="pants">
        <img className="pants_img" alt="cap" src="./images/Gear-Cargo-Pants-are-Back-1302952122.webp"></img>
            <p className="pants_title">pants</p>
            <p className="pants_pries">pries : 9999$</p>
            <button className="basket_btn">in basket</button>
        </div>
    </div>
    )
}