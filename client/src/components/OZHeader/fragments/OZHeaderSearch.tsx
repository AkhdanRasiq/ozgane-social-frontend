import React, { ChangeEvent, useRef, useState } from "react"
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'


function OZHeaderSearch() {
  const [searchValue, setSearchValue] = useState("")
  const tbSearch                      = useRef<HTMLInputElement>(null)


  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const onKeyPress = (event: React.KeyboardEvent) => {
    if ((event as React.KeyboardEvent).key === 'Enter') {
      console.log(searchValue)
    }
  }

  const handleClearSearch = () => {
    setSearchValue("")
  }

  const onSearchClick = () => {
    console.log(tbSearch)
    if(tbSearch.current) {
      tbSearch.current.focus()
    }
  }


  return(
    <div className="headerSearchContainer">
      <SearchIcon fontSize="medium" className="headerIcon" htmlColor="#878C93" onClick={onSearchClick} />
      <input id="tbHeaderSearch" ref={tbSearch} type="text" onChange={onSearchChange} value={searchValue} onKeyDown={onKeyPress} />
      { searchValue !== ""
        ?
          <CloseIcon id="btnClearSearch" fontSize="small" className="headerIcon" htmlColor="#878C93" onClick={handleClearSearch} />
        :
          <></>
      }
    </div>
  )
}

export default OZHeaderSearch
