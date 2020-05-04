import React, {useState, useCallback} from "react";
import axios from 'axios';
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

const App = () => {
    const [Category, setCategory] = useState('all');
    const onSelect = useCallback(category => setCategory(category), []);
    return (
        <div>
            <div>
                <Categories category={Category} onSelect={onSelect}/>
            </div>
            <div>
                <NewsList category={Category}/>
            </div>
        </div>
    )
};

export default App;