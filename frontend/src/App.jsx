import React from 'react';
import Home from './Home/Home';
import Event from './components/Event/Event';
import Event2 from './components/Event2/Event2';
import Event3 from './components/Event3/Event3';
import Registration from './components/Registration/Registration'; // Import Registration component
import ProductDetails from './components/ProductDetails/ProductDetails'; // Import ProductDetails component
import KitRegistration from './components/KitRegistration/KitRegistration'; // Import KitRegistration component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event2" element={<Event2 />} />
        <Route path="/event3" element={<Event3 />} />
        <Route path="/register" element={<Registration />} /> {/* Registration route */}
        <Route path="/product-details/:zone" element={<ProductDetails />} /> {/* ProductDetails route */}
        <Route path="/kit-registration" element={<KitRegistration />} /> {/* Add KitRegistration route */}
      </Routes>
    </Router>
  );
};

export default App;
