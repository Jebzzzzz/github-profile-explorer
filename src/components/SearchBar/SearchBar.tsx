import { useState } from "react";
import styles from './SearchBar.module.css';

interface Props {
    onSearch: (username: string) => void;
    intialValue?: string; 
}

export default function SearchBar({onSearch,  intialValue = ''}: Props) {
    const [value, setValue] = useState(intialValue);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const trimmed = value.trim();

        if(trimmed) onSearch(trimmed);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input 
                className={styles.input}
                type="text" 
                onChange={e => setValue(e.target.value)}
                placeholder="Search GitHub username..."
                aria-label="GitHub username"    
            />

            <button className={styles.button} type="submit">
                Search
            </button>
        </form>
    )
}