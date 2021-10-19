import React from 'react'

const TopNav = () => {
    return (
        <>
            <nav class="navbar navbar-default" style={{ backgroundColor: 'white', borderColor: 'white' }}>
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">WebBooks</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li ><a href="#"><i className="fas fa-phone-alt"></i> 8376963243</a></li>
                        <li ><a href="#"><i className="fas fa-book"></i> Sell Book</a></li>
                        <li ><a href="#"><i className="fas fa-donate"></i> Donate Book</a></li>

                    </ul>
                    <form className="navbar-form navbar-left" role="search">
                        <div className="input-group">
                            <div className="input-group-btn search-panel">
                                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                    <span id="search_concept">All</span> <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu scrollable-dropdown" role="menu">
                                    <li><a href="#">Automotive Accesories</a></li>
                                </ul>
                            </div>
                            <input type="text" className="form-control" id="search" placeholder="Books/Authors/ISBN" />
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button">
                                    <span className="glyphicon glyphicon-search"></span>
                                </button>
                            </span>
                        </div>
                    </form>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default TopNav
