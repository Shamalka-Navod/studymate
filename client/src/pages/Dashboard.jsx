import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


function Dashboard(){

    return(

        <div className="layout">


            <Sidebar/>


            <main className="main">

                <Navbar/>


                <section className="cards">


                    <div className="stat-card">
                        <h2>24</h2>
                        <p>Total Notes</p>
                    </div>


                    <div className="stat-card">
                        <h2>12</h2>
                        <p>AI Summaries</p>
                    </div>


                    <div className="stat-card">
                        <h2>5</h2>
                        <p>Subjects</p>
                    </div>


                </section>


                <h2>
                    Recent Notes
                </h2>


            </main>


        </div>

    )
}


export default Dashboard;