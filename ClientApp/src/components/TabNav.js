import React from "react";


const TabNav = (props) => {
    return (
        <div>
            <div class="text-center mx-auto">
                <div>
                    <ul class="nav border border-top-0 border-left-0 border-right-0 border-bottom-dark">
                        {props.tabs.map((tab) => {
                            const active = tab === props.selected ? " active" : "";

                            return (
                                <li class="nav-item  mb-1" key={tab}>
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
