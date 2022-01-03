import React from "react";
import { newContextComponents } from "@drizzle/react-components";

const { AccountData, ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  return (
    <div className="App">
      <div>
        <h1>Earthlings Token (ELGS)</h1>
        <p>
          Earthlings token is governance and utility token. Utility features
          include voting for products to springboard off our launchpad, features
          to fund in the electronic health record system, and research to fund.
        </p>
      </div>

      <div className="section">
        <h2>Active Account</h2>
        <AccountData
          drizzle={drizzle}
          drizzleState={drizzleState}
          accountIndex={0}
          units="ether"
          precision={3}
        />
      </div>

      <div className="section">
        <h2>Earthlings</h2>
        <p>
          Here we have a form with custom, friendly labels. Also note the token
          symbol will not display a loading indicator. We've suppressed it with
          the <code>hideIndicator</code> prop because we know this variable is
          constant.
        </p>
        <p>
          <strong>Total Supply: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Earthlings"
            method="totalSupply"
            methodArgs={[{ from: drizzleState.accounts[0] }]}
          />{" "}
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Earthlings"
            method="symbol"
            hideIndicator
          />
        </p>
        <p>
          <strong>My Balance: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Earthlings"
            method="balanceOf"
            methodArgs={[drizzleState.accounts[0]]}
          />
        </p>
        <h3>Send Tokens</h3>
        <ContractForm
          drizzle={drizzle}
          contract="Earthlings"
          method="transfer"
          labels={["To Address", "Amount to Send"]}
        />
      </div>
    </div>
  );
};
