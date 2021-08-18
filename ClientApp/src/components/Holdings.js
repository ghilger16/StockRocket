import React, { useContext } from "react";
import { Context } from "../contexts/Context";

const Holdings = () => {
    const { userHoldings } = useContext(Context);
    const renderTableData = () => {
        return userHoldings.map((holding) => {
                  return (
                <tr>
                    <td>{holding.symbol}</td>
                    <td>{holding.companyName}</td>
                </tr>

            );
        });
    };
                    return (
        <table class="table table-hover table-lg">
            <thead>
                <tr>
                    <th>Ticker</th>
                    <th> Fund / Investment </th>
                    <th> Amount </th>
                </tr>
            </thead>
            <tbody>{renderTableData()}</tbody>
        </table>
    );
};

export default Holdings