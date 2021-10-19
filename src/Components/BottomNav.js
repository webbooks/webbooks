import React from 'react'

const BottomNav = () => {
    return (
        <>
            <nav class="navbar navbar-inverse" style={{ backgroundColor: 'red', borderColor: 'white' }}>
                <div class="container-fluid">
                    <ul class="nav navbar-nav">
                        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Shop By Category<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Page 1-1</a></li>
                                <li><a href="#">Page 1-2</a></li>
                                <li><a href="#">Page 1-3</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Request A Book</a></li>
                        <li><a href="#">EBook</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#">BLOG</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default BottomNav
