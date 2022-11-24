import './App.css';
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiSettings } from 'react-icons/fi';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components'
import { Ecommerce, Orders, Calendar, Employees, Stacked, Line, PyramidChart, Customers, Kanban, AreaChart, BarChart, Pie, FinancialChart, ColorPicker, ColorMapping, Editor } from './pages'
import { useStateContext } from './contexts/ContextProvider'


function App() {
    const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();
    return (
        <div className={currentMode === 'Dark' ? 'dark' : ""}>
            <div className='flex relative dark:bg-main-dark-bg' >
                <div className='fixed right-4 bottom-4' style={{ zIndex: "1000" }}>
                    <TooltipComponent content='Settings' position="Top">
                        <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{ background: currentColor, borderRadius: "50%" }} onClick={() => setThemeSettings(true)}>
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0 dark:bg-secondary-dark-bg">
                        <Sidebar />
                    </div>
                )}

                <div
                    className={
                        activeMenu
                            ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                            : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
                    }
                >
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                        <Navbar />
                    </div>


                    <div>
                        {themeSettings && <ThemeSettings />}
                        <Routes>
                            {/* Dashboard */}
                            <Route path="/admin-dashboard" element={<Ecommerce />} />
                            <Route path="/admin-dashboard/ecommerce" element={<Ecommerce />} />

                            {/* Pages */}
                            <Route path='/admin-dashboard/orders' element={<Orders />} />
                            <Route path='/admin-dashboard/employees' element={<Employees />} />
                            <Route path='/admin-dashboard/customers' element={<Customers />} />

                            {/* App */}
                            <Route path='/admin-dashboard/calendar' element={<Calendar />} />
                            <Route path='/admin-dashboard/kanban' element={<Kanban />} />
                            <Route path='/admin-dashboard/editor' element={<Editor />} />
                            <Route path='/admin-dashboard/color-picker' element={<ColorPicker />} />

                            {/* Charts */}
                            <Route path='/admin-dashboard/line' element={<Line />} />
                            <Route path='/admin-dashboard/area' element={<AreaChart />} />
                            <Route path='/admin-dashboard/bar' element={<BarChart />} />
                            <Route path='/admin-dashboard/pie' element={<Pie />} />
                            <Route path='/admin-dashboard/financial' element={<FinancialChart />} />
                            <Route path='/admin-dashboard/color-mapping' element={<ColorMapping />} />
                            <Route path='/admin-dashboard/pyramid' element={<PyramidChart />} />
                            <Route path='/admin-dashboard/stacked' element={<Stacked />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default App;
