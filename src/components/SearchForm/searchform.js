import React from "react";

function SearchForm(props) {
	return (
		<>
			<h4>Search:</h4>
			<div>
				<form onSubmit={props.handleSubmit}>
					<input
						type='text'
						placeholder='Last name'
						onChange={props.handleInputChange}
						value={props.search}
					/>
					<button
						type='submit'
						placeholder=''
						onClick={props.handleSearch}
						className='btn btn-dark '>
						<i className='fas fa-search'></i>
					</button>
					<button onClick={props.handleClear} className='btn btn-danger'>
						Clear
					</button>
				</form>
			</div>
		</>
	);
}
export default SearchForm;
