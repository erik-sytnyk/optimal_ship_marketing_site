import * as styled from './styled';

interface Props {
  value: string;
  onChange: (val: string) => void;
  onSearch: () => void;
}

function SearchInput({value, onChange, onSearch}: Props) {
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      onSearch();
    }
  }

  return (
    <styled.searchInput
      type="text"
      name="search"
      value={value}
      placeholder="Search for questions and answers"
      onChange={e => onChange(e.target.value)}
      onKeyPress={handleKeyPress}
    />
  );
}

export default SearchInput;
