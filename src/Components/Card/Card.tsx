import React, { SyntheticEvent } from "react";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

interface Props {
id:string;
searchResults:CompanySearch;
onPortfolioCreate:(e:SyntheticEvent)=>void;
}

const Card:React.FC<Props> = ({id,searchResults,onPortfolioCreate
}: Props):JSX.Element => {
  return (
    <div className="card">
      <img alt="company logo" />

      <div className="details">
        <h2>{searchResults.name} ({searchResults.symbol})</h2>
        <p>{searchResults.currency}</p>
      </div>
      <p className="info">
    {searchResults.exchangeShortName}-{searchResults.stockExchange}
      </p>
      <AddPortfolio onPortFolioCreate={onPortfolioCreate} symbol={searchResults.symbol}/>
    </div>
  );
};

export default Card;
