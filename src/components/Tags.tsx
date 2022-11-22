import React, {useState} from 'react';

interface ITagsProps{
    curTag:string,
    setCurTag:(curTag:string)=>void,
    tags:string[],
    setTags:(tags:string[])=>void

}

const Tags: React.FC<any> = ({curTag, setCurTag, tags, setTags}) => {

    const [val, setVal] = useState<string>('')

    const switchTag = (e: React.MouseEvent<HTMLButtonElement>): void => {
        let target = e.target as Element
        setCurTag(target.innerHTML.substring(1))
    }

    const removeTag = (e: React.MouseEvent<HTMLButtonElement>): void => {
        let target = e.target as Element
        setTags(tags.filter((tag: string) => tag !== target.innerHTML))
    }

    const isChosen = (tag: string): boolean => {
        if (curTag === tag) {
            return true
        }
        return false
    }

    const addTag = (e: React.ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (val.trim()) {
            setTags(tags.concat(("#" + val)))
            setVal('')
        }
    }

    return (
        <div>
            <form onSubmit={addTag}>
                <input type="text" value={val} onChange={e => setVal(e.target.value)}/>
                <button type='submit'>+</button>
            </form>

            <h1>{curTag}</h1>
            {tags.map((tag: string) => {
                return <button className={isChosen(tag) ? ('taged') : ('')} onClick={switchTag}
                               onContextMenu={removeTag}>{tag}</button>
            })}
        </div>
    );
};

export default Tags;
