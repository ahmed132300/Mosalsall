import Cards from "./cards";
import Header from "./Header";

import './Watch.css'
function Watch(props) {
    return (
        <div>
            <Header />
            <div className="video">
                <iframe src={props.link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="codo">
                <h2 className="download">Download</h2>
            </div>
            <h1 className="title">{props.head}</h1>
            <div className="container">
                <div className="cards">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
export default Watch;