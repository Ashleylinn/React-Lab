import styles from './Search.module.css';
import '../../App.css';
import { Autocomplete, Button } from '@mantine/core';
import { useState, useEffect } from 'react';
import { ApiService } from '../../services/api';
import { DogCard } from '../../components/DogCard/DogCard';
import generateUniqueId from "generate-unique-id";

export function Search() {
  const [breeds, setBreeds] = useState([]);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [favourites, setFavourites] = useState([]);
 
  useEffect(() => {
    ApiService.getAllBreeds().then(data => {
      const par = parBreed(data);
      setBreeds(par);
    });
  }, []);

  const parBreed = (data) => {
    const breedList = [];
    for (const breed in data.message){
      if(data.message[breed].length == 0) {
        breedList.push(breed);
      } else {
        data.message[breed].forEach(sub => {
          breedList.push(`${breed}/${sub}`);
        });
      };
    }
    return breedList;
  };

  const searchResult = () => {
    if(!query){
      return;
    }
    ApiService.getDogsByBreed(query).then(data => setResults(data.message));
  };

  const clickFavourite = (url) => {
    if(favourites.includes(url)) {
      setFavourites(prev => prev.filter(item => item !== url));
    } else {
      setFavourites(prev => [...prev, url]);
    }
  };

  return (
    <div className='page'>
      <div className={`container container-background container-shadow`}>
        <h1 id={styles.searchHeading}>Search by Breed</h1>
        <div className={`row search-container`}>
          <div className='col-11'>
            <Autocomplete
              placeholder="Enter a breed to look for images of dogs..."
              data={breeds}
              value={query}
              onChange={setQuery}
            />
          </div>
          <div className='col-1'>
            <Button
              variant="filled" onClick={searchResult}>
              Search
            </Button>
          </div>
        </div>
      </div>
      <div className='search-results' style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop:'20px' }}>
        {results.map((url) => (
          <DogCard key={url} src={url} isFavourite={favourites.includes(url)} onFavourites={() => clickFavourite(url)} />
        ))}
      </div>
    </div>
    
  );
}
