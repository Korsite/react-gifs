import {useState} from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])
    const addCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }


    return (
        <>

            <h1>Hello world</h1>

            <AddCategory
                onNewCategory={newCategory => addCategory(newCategory)}
            />
            {
                categories.map(category =>
                    <GifGrid
                        key={category}
                        category={category}
                    />
                )
            }
        </>
    )
}