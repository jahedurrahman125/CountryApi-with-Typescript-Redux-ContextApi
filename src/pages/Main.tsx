import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState, mainType, languages } from '../types';
import { fetchGetRequest } from "../redux/actions/getActions";
import NavBar from '../components/layout/NavBar';
import TableContent from "../components/Table/TableContent/TableContent";
import ThemeContext from '../context/Context';

const createData = (flag: string, name: string, population: number, languages: languages[], region: string) => {
  return { flag, name, population, languages, region };
};

const HomePage = () => {

  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>("");
  const {
    data,
    loading,
    error
  } = useSelector(
    (state: RootState) => state.data
  );
  const rows = (data.map((res) => (
    createData((res.flag), (res.name), (res.population), (res.languages.map(res => (res))), (res.region))
  )))

  const serachValueHandler = (searchValue) => {
    setSearchValue(searchValue);
  }
  const search = (rows: mainType[]) => {
    return rows.filter((item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
  }
  useEffect(() => {
    dispatch(fetchGetRequest());
  }, []);

  return (
    <ThemeContext>
      <NavBar onSearchValue={serachValueHandler} />
      {loading ? (<div>Loading...</div>)
        : error ? (<div>Error</div>) :
          <TableContent data={search(rows)} />
      }
    </ThemeContext>
  )
}

export default HomePage;