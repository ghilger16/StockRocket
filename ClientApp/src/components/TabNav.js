import React from "react";


const TabNav = (props) => {
    return (
        <div>
            <div class="text-center mx-auto">
                <div>
                    <ul className="nav">
                        {props.tabs.map((tab) => {
                            const active = tab === props.selected ? " active" : "";

                            return (
                                <li className="nav-item" key={tab}>
                                    <a
                                        
                                        className={"nav-link" + active}
                                        onClick={() => props.setSelected(tab)}
                                    >
                                        {tab}
                                    </a>
                                    </li>
                            );
                        })}
                    </ul>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default TabNav;
