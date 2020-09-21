import React from 'react';
import './Stage1.css'

export default function Stage1() {
    return (
        <div className="stage1">
            <div>
                <button class="collapsible"> {'>'} MongoDB Database</button>
                <div className="content">
                    <input type="text" id="dbURL" />
                    <br />
                    <button>Connect</button>
                </div>
            </div>
            <label />
            <div>
                <button class="collapsible"> {'>'} CSV File</button>
                <div className="content">
                    <input type="text" id="dbURL" />
                    <br />
                    <button>Upload</button>
                </div>
            </div>

        </div>
    );
}
