import { useParams } from "react-router";

const CategoryNews = () => {
    const { id } = useParams()
    return (
        <div>
            Category - {id} News
        </div>
    );
};

export default CategoryNews;