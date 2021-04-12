import React, { useState } from 'react'
import { Form, FormControl } from 'react-bootstrap'

const SearchBar = ({ search }) => {
	const [searchValue, setSearchValue] = useState('')

	const handleSearchInput = (e) => {
		setSearchValue(e.target.value)
	}

	return (
		<div>
			<Form inline>
				<FormControl
					type="text"
					placeholder="Search"
					className="mr-sm-2"
					value={searchValue}
					onChange={handleSearchInput}
					// onChange={(e) => dispatch(contentAction.setSearchResult(e.target.value))}
					// as={Link}
					// to="/search-result?query=abcd"
				/>
			</Form>
		</div>
	)
}

export default SearchBar
