import classes from "./Pagination.module.css";
import {getPagesArray} from "../../Utilities/pages";

const Pagination = ({totalPages, currentPage, changePage}) => {

    const numberOfPages = getPagesArray(totalPages);

    const onClick= (e, el) => {
        e.preventDefault();
        changePage(el);
    }

    return (
        <div className={classes.center}>
            <div className={classes.pagination}>
                <button
                    onClick={e => {
                        let res = currentPage > 1 ?
                        onClick(e, currentPage - 1)
                        :
                        0;
                    }}
                >{'<<'}</button>
                {numberOfPages.map(el =>
                    <button
                        key={el}
                        className={el === currentPage ? classes.page_current : ''}
                        onClick={(event) => {
                            event.preventDefault();
                            onClick(event, el)
                        }}
                    >{el}</button>
                )}
                <button
                    onClick={e => {
                        let res = currentPage < totalPages ?
                            onClick(e, currentPage + 1)
                            :
                            0;
                    }}
                >{'>>'}</button>
            </div>
        </div>
    );
};

export default Pagination;