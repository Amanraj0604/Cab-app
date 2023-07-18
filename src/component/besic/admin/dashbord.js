import React from 'react'
import './dashbord.css'



const Dashbord = () => {
    return (
        <div>
            <div class="grid-container">


                {/* <header class="header">
                    <div class="menu-icon" onclick="openSidebar()">
                        <span class="material-icons-outlined">menu</span>
                    </div>
                    <div class="header-left">
                        <span class="material-icons-outlined">search</span>
                    </div>
                    <div class="header-right">
                        <span class="material-icons-outlined">notifications</span>
                        <span class="material-icons-outlined">email</span>
                        <span class="material-icons-outlined">account_circle</span>
                    </div>
                </header> */}
                <aside id="sidebar">
                    {/* <div class="sidebar-title">
                        <div class="sidebar-brand">
                            STORE
                        </div>
                        <span class="material-icons-outlined" onclick="closeSidebar()">close</span>
                    </div> */}

                    <ul class="sidebar-list">
                        <li class="sidebar-list-item">
                            <a href="#" >
                                 Dashboard
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="#" >
                                Total Vehicle
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="#" >
                                Employee
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="#" >
                                Customers
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="#" >
                                 Reports
                            </a>
                        </li>
                       
                    </ul>
                </aside>
                <main class="main-container">
                    <div class="main-title">
                        <h2>DASHBOARD</h2>
                    </div>

                    <div class="main-cards">

                        <div class="card-1">
                            <div class="card-inner">
                                <h3>Total Vehicle</h3>
                                
                            </div>
                            <h1>0</h1>
                        </div>

                        <div class="card-1">
                            <div class="card-inner">
                                <h3>Employee</h3>
                                
                            </div>
                            <h1>0</h1>
                        </div>

                        <div class="card-1">
                            <div class="card-inner">
                                <h3>User</h3>
                               
                            </div>
                            <h1>0</h1>
                        </div>

                        <div class="card-1">
                            <div class="card-inner">
                                <h3>Feedback</h3>
                                
                            </div>
                            <h1>0</h1>
                        </div>

                    </div>

                    
                </main>
            </div>

        </div>
    )
}

export default Dashbord
