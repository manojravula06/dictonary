import React, { useState } from "react";
import logo from '../Assets/logo.png';
import axios from "axios";

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);


  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchTerm}`
    );
    try {
      if(response.status===200){
        console.log(response.data)
        setSearchResults(response.data);
        setError(null);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="d-flex flex-column justify-content-start align-items-streach">
        <div className="d-flex justify-content-center">
        <img src={logo} alt="" className="logo"/>
        </div>

      <h1 className="mb-5 text-center">Dictionary App</h1>
      <form className="form-inline mb-5" onSubmit={handleSearch}>
        <div className="d-flex form-group mr-2 m-2">
          <input
            type="text"
            className="form-control m-2"
            placeholder="Search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
           <button type="submit" className="btn btn-primary m-2">
          Search
        </button>
        </div>
      </form>
      <div className="d-flex flex-column justify-content-start">
        {error && <p className="text-danger">error</p>}
        {searchResults.map((result, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-capitalize">{result.word}</h2>
            {result.meanings.map((meaning, index) => (
              <div key={index}>
                <span className="badge text-bg-primary">{meaning.partOfSpeech}</span>
                {meaning.definitions.map((definition, index) => (
                  <div key={index}>
                    <div className="d-flex">
                    <p className="text-sm-justify fw-semibold">{definition.definition}</p>
                    </div>
                    {definition.example && (
                        <li>
                        <i>Ex:</i> {definition.example}
                        </li>
                      )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dictionary;
