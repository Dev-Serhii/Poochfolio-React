import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthLayout } from '../auth-layout';
import { Layout } from '../layout';
import { HTTPS, HTTPS_GRAPH } from '../../api/https';
import { useSelector } from 'react-redux';
import { BarLoader } from 'react-spinners';
import { COLOR } from '../../../assets/colors';
import ScrollToTop from '../../../scrollToTop';
import { Page404 } from '../../screens/@core/404';

import { ProtectedRoute } from './ProtectedRoute';
import { IndexLayout } from '../index-layout';

const Landing = React.lazy(() => import('../../screens/landing'))
const Faq = React.lazy(() => import('../../screens/faq'))
const GetDemo = React.lazy(() => import('../../screens/get_demo'))
const Signin = React.lazy(() => import('../../screens/signin'))
const Signup = React.lazy(() => import('../../screens/signup'))
const Reservations = React.lazy(() => import('../../screens/reservations'))
const Payment = React.lazy(() => import('../../screens/payment'))
const ComingPage = React.lazy(() => import('../../screens/@core/Coming'))

export const App = () => {
    const token = useSelector((state: any) => state.auth.token);

    useEffect(() => {
        if (token) {
            HTTPS.defaults.headers.common['token'] = token;
            HTTPS_GRAPH.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        }
    }, [token])

    return (
        <Suspense fallback={<BarLoader color={COLOR.primary0} width={'100%'} height={6} />}>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path='/' element={<IndexLayout />}>
                        <Route path='/' element={<Landing />} />
                        <Route path='/faq' element={<Faq />} />
                        <Route path='/demo' element={<GetDemo />} />
                    </Route>
                    <Route path='/' element={<AuthLayout />}>
                        <Route path='/signin' element={<Signin />} />
                        <Route path='/signup' element={<Signup />} />
                    </Route>
                    <Route path='/' element={<Layout />}>
                        <Route path='/reservations' element={
                            <ProtectedRoute>
                                <Reservations />
                            </ProtectedRoute>
                        } />
                        <Route path='/calendar' element={
                            <ProtectedRoute>
                                <ComingPage />
                            </ProtectedRoute>
                        } />
                        <Route path='/marketplace' element={
                            <ProtectedRoute>
                                <ComingPage />
                            </ProtectedRoute>
                        } />
                        <Route path='/payments' element={
                            <ProtectedRoute>
                                <Payment />
                            </ProtectedRoute>
                        } />
                        <Route path='/invoice' element={
                            <ProtectedRoute>
                                <ComingPage />
                            </ProtectedRoute>
                        } />
                        <Route path='/employees' element={
                            <ProtectedRoute>
                                <ComingPage />
                            </ProtectedRoute>
                        } />
                        <Route path='/quickbooks' element={
                            <ProtectedRoute>
                                <ComingPage />
                            </ProtectedRoute>
                        } />
                        <Route path='/analytics' element={
                            <ProtectedRoute>
                                <ComingPage />
                            </ProtectedRoute>
                        } />
                        <Route path='/capital' element={
                            <ProtectedRoute>
                                <ComingPage />
                            </ProtectedRoute>
                        } />
                    </Route>
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}