import querySearch from "query-string";

export default function getQueryParams(string) {
    return querySearch.parse(string);
}