import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, adminRoutes } from './routes';
import { DefaultLayout } from './Layout';
import { Fragment } from 'react';
import LayoutAdmin from './Layout/LayoutAdmin';

function App() {
    const authAdmin = false;
    return (
        <Router>
            <div className="App">
                <Routes>
                    {authAdmin ? (
                        <>
                            {publicRoutes.map((route, index) => {
                                const Page = route.component;

                                let Layout = DefaultLayout;

                                if (route.layout) {
                                    Layout = route.layout;
                                } else if (route.layout === null) {
                                    Layout = Fragment;
                                }
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                        </>
                    ) : (
                        <>
                            {adminRoutes.map((route, index) => {
                                const Page = route.component;

                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <LayoutAdmin>
                                                <Page />
                                            </LayoutAdmin>
                                        }
                                    />
                                );
                            })}
                        </>
                    )}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
