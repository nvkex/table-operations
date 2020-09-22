import React from 'react';
import './Stage1.css';

const collapseHandler = (e) => {
    const content = e.nativeEvent.target.nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }

}

export default function Stage1() {
    return (
        <div className="stage1">
            <div>
                <button className="collapsible" onClick={(e) => collapseHandler(e)}> {'>'} MongoDB Database</button>
                <div className="content">
                    <input type="text" id="dbURL" />
                    <br />
                    <button>Connect</button>
                </div>
            </div>
            <label />
            <div>
                <button className="collapsible" onClick={(e) => collapseHandler(e)}> {'>'} CSV File</button>
                <div className="content">
                    <input type="text" id="csvURL" />
                    <br />
                    <button>Upload</button>
                </div>
            </div>

        </div>
    );
}
