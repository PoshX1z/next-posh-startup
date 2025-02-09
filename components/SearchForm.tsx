import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

//Use React <Form> to implement searching form.
const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query" //value is sent as { query: 'user input'}
        defaultValue=""
        className="search-input"
        placeholder="Search Startups"
      />
      {/* Reset and Search in form */}
      <div className="flex gap-2">
        {query && <SearchFormReset />}

        <button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
