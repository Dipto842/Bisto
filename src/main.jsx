import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import Router from './Routes/Router.jsx';
import AthoProvadar from './Provadar/AthoProvadar.jsx';

import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'

const queryClient = new QueryClient()









ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <React.StrictMode>
<AthoProvadar>

<QueryClientProvider client={queryClient}>
<div className='w-[1520px] mx-auto' >
   <RouterProvider router={Router} />
   </div>
    </QueryClientProvider>



</AthoProvadar>
  </React.StrictMode>
  </React.StrictMode>,
)
