import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './router/routes';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					{
						routes.map(r => (
							<Route path={r.path} key={r.id}>
								{<r.component />}
							</Route>
						))
					}
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App;
