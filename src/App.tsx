import "./App.css";
import React, {
  ChangeEvent,
  useState,
  SyntheticEvent,
  useSyncExternalStore,
} from "react";

import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import { CompanySearch } from "./company";
import { searchCompanies } from "./api";
import Card from "./Components/Card/Card";
import { on } from "events";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onPortFolioCreate = (e: SyntheticEvent) => {
    console.log(e);
  };

  const onClick = async (e: SyntheticEvent) => {
    const result = await searchCompanies(search);
    //type narrowing
    if (typeof result == "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
    console.log(searchResult);
  };
  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange} />
      <CardList searchResults={searchResult} onPortfolioCreate={onPortFolioCreate} />
      {serverError && <div>Unable to connect to APi</div>}
    </div>
  );
}

export default App;
