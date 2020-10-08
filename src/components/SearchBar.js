import React from 'react';

class SearchBar extends React.Component {



    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    render() {



        return  (
            <div>
            <h1>Search Bar</h1>
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5">
                    <div className="col-12">
                        <input 
                            onChange={this.props.searchMovieProp}
                            type="text" className="form-control" 
                            placeholder="Seach a movie" 
                        />
                    </div>
                </div>
            </form>
            </div>
        )

    }
}


export default SearchBar; 