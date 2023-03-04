import './search-box.styles.css';

// const func: (a:string,b:number,c:boolean) => boolean = (a,b,c) => { return true} 

// interface ISearchBoxProps extends IChangeHandlerProps {
//   className: string,
//   placeholder?: string | null,
// }

// interface IChangeHandlerProps {
//   onChangeHandler: (a: string) => void
// }

import {FormEvent} from 'react'

type SearchBoxProps = {
  className: string,
  placeholder?: string | undefined
  onChangeHandler: (event: FormEvent<HTMLInputElement>) => void
}


const SearchBox = ({className, placeholder, onChangeHandler} :SearchBoxProps) => {
  return (  
      <input
        className={className}
        type="search"
        placeholder={placeholder}
        onChange={(e) => onChangeHandler(e)}
      />
    );
  
}

export default SearchBox;
