import React from 'react'

const Review_2 = () => {
    return (
       
       <>
       <div class="offcanvas offcanvas-start w-25" tabindex="-1" id="offcanvas" data-bs-keyboard="false" data-bs-backdrop="false">
    
    <div class="offcanvas-body px-0">
        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
            <li class="nav-item">
                <a href="" class="nav-link text-truncate">
                    <i class="fs-5 bi-house"></i><span class="ms-1 d-none d-sm-inline">Review-1</span>
                </a>
            </li>
            {/* <li>
                <a href="#submenu1" data-bs-toggle="collapse" class="nav-link text-truncate">
                    <i class="fs-5 bi-speedometer2"></i><span class="ms-1 d-none d-sm-inline">Review-2</span> </a>
            </li> */}
              <a href="/Review_2" class="nav-link dropdown-toggle  text-truncate" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fs-5 bi-bootstrap"></i><span class="ms-1 d-none d-sm-inline">Review-2</span>
                </a>
                <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdown">
                    {/* <li><a class="dropdown-item" href="">review-2-1</a></li> */}
                    <a href="" class="nav-link dropdown-toggle  text-truncate" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fs-5 bi-bootstrap"></i><span class="ms-1 d-none d-sm-inline">Review-2-1</span>
                </a>
                <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdown">
                    <li><a class="dropdown-item" href="">r1</a></li>
                    <li><a class="dropdown-item" href="">r2</a></li>
                    <li><a class="dropdown-item" href="">r3</a></li>
                   
                    
                </ul>
                    <li><a class="dropdown-item" href="">Review-2-2</a></li>
                    <li><a class="dropdown-item" href="">Review-2-3</a></li>
                   
                    
                </ul>
            <li>
                <a href="" class="nav-link text-truncate">
                    <i class="fs-5 bi-table"></i><span class="ms-1 d-none d-sm-inline">Review-3</span></a>
            </li>
            <li class="dropdown">
                <a href="" class="nav-link dropdown-toggle  text-truncate" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fs-5 bi-bootstrap"></i><span class="ms-1 d-none d-sm-inline">Review-4</span>
                </a>
                <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdown">
                    <li><a class="dropdown-item" href="">review-4-1</a></li>
                    <li><a class="dropdown-item" href="">review-4-2</a></li>
                    <li><a class="dropdown-item" href="">review-4-3</a></li>
                   
                    
                </ul>
            </li>
            
           
        </ul>
    </div>
</div>
<div class="container-fluid">
    <div class="row">
        <div class="col min-vh-100 py-3">
            {/* <!-- toggler --> */}
            <button class="btn float-end" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" role="button">
                <i class="bi bi-arrow-right-square-fill fs-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"></i>
            </button>
           
        </div>
    </div>
</div>
       </>
    )
}

export default Review_2
