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
        if (curTag===target.innerHTML.substring(1)){
            setCurTag('')
        }else {
            setCurTag(target.innerHTML.substring(1))
        }

    }

    const removeTag = (tag:string): void => {
        if (curTag===tag.substring(1)){
            setCurTag('')
        }
        setTags(tags.filter((cTag: string) => cTag !== tag))
    }

    const isChosen = (tag: string): boolean => {
        if (curTag === tag.substring(1)) {
            return true
        }
        return false
    }

    const addTag = (e: React.ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (val.trim()) {
            if (tags.includes("#"+val)){
                alert('already exist')
            } else{
                setTags(tags.concat(("#" + val)))
                setVal('')
            }
        }
    }

    return (
        <div>
            <h2>Tags:</h2>
            <form onSubmit={addTag}>
                <input type="text" value={val} onChange={e => setVal(e.target.value)}/>
                <button type='submit'>+</button>
            </form>
            <div className='tags'>
                {tags.map((tag: string) => {
                    return <div className={isChosen(tag) ? ('taged') : ('')+'tag'}>
                        <button onClick={switchTag}>{tag}</button>
                        <button onClick={()=>removeTag(tag)}>x</button>
                    </div>
                })}
            </div>

        </div>
    );
};

export default Tags;
